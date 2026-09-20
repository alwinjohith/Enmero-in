import puppeteer from 'puppeteer-core';
import { execSync } from 'node:child_process';

const CHROME = '/usr/bin/google-chrome-stable';
const BASE = 'http://localhost:3000';
const pages = ['/', '/company', '/domains', '/solutions', '/research', '/publications', '/eoai', '/trust', '/careers', '/investors', '/contact', '/privacy', '/terms', '/cookies'];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
});

const findings = [];
const add = (sev, page, issue) => findings.push({ sev, page, issue });

async function auditPage(path, viewport, label) {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(async () => {
    for (let y = 0; y <= document.body.scrollHeight; y += 700) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 50));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 600));

  const res = await page.evaluate(() => {
    const out = { brokenImgs: [], noAlt: [], headingIssue: [], overlaps: [], zero: [], wideButtons: [], clipped: [], fonts: new Set(), contrastIssues: [], scrollable: false, canvasCount: 0, animationTokens: [], fluidText: [], h1: null };

    // Real horizontal scroll check
    const bx = window.scrollX;
    window.scrollTo(99999, window.scrollY);
    if (window.scrollX > 0) out.scrollable = true;
    window.scrollTo(bx, window.scrollY);

    // Images
    document.querySelectorAll('img').forEach((img) => {
      if (!img.complete && img.naturalWidth === undefined) return;
      if (img.naturalWidth === 0) out.brokenImgs.push(img.src);
      if (!img.alt && img.closest('.no-alt-ok') === null) out.noAlt.push(img.src || img.className);
    });

    // Heading structure
    const h1s = document.querySelectorAll('h1');
    out.h1 = h1s.length ? h1s[0].textContent.trim().slice(0, 60) : null;
    if (h1s.length !== 1) out.headingIssue.push(`h1 count=${h1s.length}`);
    let prev = 1;
    document.querySelectorAll('h1,h2,h3,h4').forEach((h) => {
      const lv = +h.tagName[1];
      if (lv > prev + 1) out.headingIssue.push(`skipped: h${prev} → h${lv} ("${h.textContent.trim().slice(0, 30)}")`);
      prev = lv;
    });

    // Zero-width invisible elements that still have text or are sections
    document.querySelectorAll('section, header, footer, div, figure, li').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0 && el.textContent.trim().length > 1 && el.offsetParent !== null) {
        out.zero.push(`${el.tagName}.${String(el.className).slice(0, 30)}`);
      }
    });

    // Buttons wrapped
    document.querySelectorAll('.btn, .nav-chip, .footer-cta, .card-cta, a[class*="btn"]').forEach((b) => {
      const r = b.getBoundingClientRect();
      const vw = document.documentElement.clientWidth;
      if (b === document.activeElement) return;
      const text = b.innerText.trim().split(' ').length;
      if (b.offsetWidth < 40) out.wideButtons.push(`${text}w ${String(b.className).slice(0, 24)}`);
      void r; void vw;
    });

    // Overlapping fixed elements over main content
    const nav = document.querySelector('[data-nav]');
    if (nav) {
      const nr = nav.getBoundingClientRect();
      if (nr.top !== 0) out.overlaps.push(`nav not pinned (top=${nr.top})`);
    }

    // Fonts actually used
    document.querySelectorAll('body, h1, h2, h3, .nav-link, .btn, .footer, p').forEach((el) => {
      const f = getComputedStyle(el).fontFamily;
      out.fonts.add(f.split(',')[0].replace(/["']/g, ''));
    });

    // Contrast: sample key text on its background (rough luminance check)
    const lum = (c) => {
      const m = c.match(/rgba?\(([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);
      if (!m) return null;
      const [r, g, b] = [+m[1], +m[2], +m[3]];
      const lin = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
      return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    };
    const ratio = (a, b) => {
      const la = lum(a), lb = lum(b);
      if (la === null || lb === null) return null;
      const [hi, lo] = la > lb ? [la, lb] : [lb, la];
      return (hi + 0.05) / (lo + 0.05);
    };
    document.querySelectorAll('p, li, a, label, .eyebrow, h1, h2, h3, .footer-copy').forEach((el) => {
      if (el.children.length) return; // only leaf-ish
      const cs = getComputedStyle(el);
      const txt = el.textContent.trim();
      if (!txt || txt.length < 2) return;
      const bg = getComputedStyle(el.parentElement?.parentElement || el.parentElement).backgroundColor;
      const r = ratio(cs.color, bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent' ? bg : 'rgb(6, 7, 11)');
      if (r !== null && r < 3.0) out.contrastIssues.push(`${txt.slice(0, 30)} (${cs.color} on ${bg}) ${r.toFixed(1)}`);
    });

    // find CSS animations / keyframes presence
    out.animationTokens = [];

    // Canvas
    out.canvasCount = document.querySelectorAll('[data-hero-canvas]').length;

    // Fluid text overflow — any element whose content overflows its box (scrollWidth>clientWidth+2 visible)
    document.querySelectorAll('h1, h2, h3, h4, .eyebrow, button, .mobile-link').forEach((el) => {
      if (el.scrollWidth > el.clientWidth + 2 && !['A', 'BUTTON'].includes(el.tagName) || (el.tagName === 'BUTTON' && el.scrollWidth > el.clientWidth + 2 && el.textContent.length > 2)) {
        out.fluidText.push(`${el.tagName}.${String(el.className).slice(0, 20)} "${el.textContent.trim().slice(0, 30)}" ${el.scrollWidth}/${el.clientWidth}`);
      }
    });

    return out;
  });

  (res.brokenImgs.length ? res.brokenImgs : []).forEach((s) => add('error', path, `[${label}] broken image: ${s}`));
  (res.noAlt.length ? res.noAlt.slice(0, 4) : []).forEach((s) => add('warn', path, `[${label}] img missing alt: ${s}`));
  (res.headingIssue.length ? res.headingIssue : []).forEach((s) => add('error', path, `[${label}] heading: ${s}`));
  (res.overlaps.length ? res.overlaps : []).forEach((s) => add('error', path, `[${label}] ${s}`));
  (res.zero.length ? res.zero.slice(0, 5) : []).forEach((s) => add('warn', path, `[${label}] zero-size with content: ${s}`));
  (res.wideButtons.length ? res.wideButtons : []).forEach((s) => add('warn', path, `[${label}] narrow button: ${s}`));
  (res.contrastIssues.length ? res.contrastIssues : []).forEach((s) => add('warn', path, `[${label}] low contrast: ${s}`));
  (res.fluidText.length ? res.fluidText.slice(0, 5) : []).forEach((s) => add('warn', path, `[${label}] text overflow: ${s}`));
  if (res.h1 && (path === '/' || path === '/404')) {}
  if (res.canvasCount === 0 && path === '/') add('error', path, '[home] missing hero canvas');

  await page.close();
}

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

for (const vp of viewports) {
  for (const p of pages) await auditPage(p, vp, vp.name);
}

// 404 page
const p404 = await browser.newPage();
await p404.setViewport(viewports[0]);
await p404.goto(`${BASE}/this-does-not-exist`, { waitUntil: 'networkidle0' });
const status = await p404.evaluate(() => ({ h1: document.querySelector('h1')?.textContent.trim().slice(0, 50), nav: !!document.querySelector('[data-nav]') }));
add(status.h1 ? 'info' : 'error', '/404', status.h1 ? `404 page renders h1="${status.h1}"` : '404 page FAILED');
await p404.close();

await browser.close();

const order = { error: 0, warn: 1, info: 2 };
findings.sort((a, b) => order[a.sev] - order[b.sev]);
console.log('==== DESIGN AUDIT ====');
findings.filter((f) => f.sev !== 'info').forEach((f) => console.log(`${f.sev.toUpperCase().padEnd(5)}  ${f.page.padEnd(14)} ${f.issue}`));
console.log('\n==== INFO ====');
findings.filter((f) => f.sev === 'info').forEach((f) => console.log(`INFO  ${f.page.padEnd(14)} ${f.issue}`));
const errs = findings.filter((f) => f.sev === 'error').length;
const warns = findings.filter((f) => f.sev === 'warn').length;
console.log(`\n${errs} errors, ${warns} warnings`);
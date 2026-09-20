import puppeteer from 'puppeteer-core';

const CHROME = '/usr/bin/google-chrome-stable';
const BASE = 'http://localhost:3000';
const pages = [
  ['/', 'home'],
  ['/company', 'company'],
  ['/domains', 'domains'],
  ['/solutions', 'solutions'],
  ['/research', 'research'],
  ['/publications', 'publications'],
  ['/eoai', 'eoai'],
  ['/trust', 'trust'],
  ['/careers', 'careers'],
  ['/investors', 'investors'],
  ['/contact', 'contact'],
  ['/privacy', 'privacy'],
  ['/terms', 'terms'],
  ['/cookies', 'cookies'],
];
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'laptop', width: 1280, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tiny', width: 375, height: 667 },
];

const results = [];
let failures = 0;
let shots = 0;

function log(ok, msg) {
  results.push({ ok, msg });
  if (!ok) failures++;
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--window-size=1500,1000'],
});

const fs = await import('node:fs');
const dir = '/tmp/opencode/enmero-shots';
fs.mkdirSync(dir, { recursive: true });

for (const [path, name] of pages) {
  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport(vp);
    const errors = [];
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(`console: ${m.text()}`);
    });
    page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
    page.on('requestfailed', (r) => {
      const url = r.url();
      if (!url.startsWith('http://fonts') && !url.includes('gstatic')) {
        errors.push(`requestfailed: ${r.method()} ${url} ${r.failure()?.errorText ?? ''}`);
      }
    });

    try {
      await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.evaluate(async () => {
        const step = 600;
        for (let y = 0; y <= document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
      });
      await new Promise((r) => setTimeout(r, 800));
      const overflows = await page.evaluate(() => {
        const bad = [];
        // Real test: can the user actually scroll horizontally?
        const beforeX = window.scrollX;
        window.scrollTo(99999, window.scrollY);
        const afterX = window.scrollX;
        window.scrollTo(beforeX, window.scrollY);
        const hvw = document.documentElement.clientWidth;
        const scw = document.documentElement.scrollWidth;
        if (afterX > 0) bad.push(`REAL horizontal scroll possible (scrollX=${afterX})`);
        else if (scw > hvw + 2) bad.push(`content ${scw}px vs viewport ${hvw}px (clipped, not scrollable)`);
        // Report the widest element that is NOT inside a clipped/overflow-hidden ancestor
        let widest = null;
        const clipped = (start) => {
          let el = start.parentElement;
          while (el) {
            const o = getComputedStyle(el).overflowX;
            if (o === 'hidden' || o === 'clip' || o === 'auto' || o === 'scroll') return true;
            if (getComputedStyle(el).position === 'fixed') return true;
            el = el.parentElement;
          }
          return false;
        };
        for (const el of document.querySelectorAll('body *')) {
          if (clipped(el)) continue;
          const r = el.getBoundingClientRect();
          if (r.right > hvw + 2 && r.width > 0) {
            const cls = (el.className || el.tagName).toString().slice(0, 40);
            widest = widest || { r: Math.round(r.right), cls };
            if (widest.r < r.right) widest = { r: Math.round(r.right), cls };
          }
        }
        if (widest && widest.r > hvw + 12) bad.push(`widest uncapped: r=${widest.r} ${widest.cls}`);
        return bad;
      });
      const title = await page.title();
      if (overflows.length) {
        log(false, `[${name} @${vp.name}] OVERFLOW: ${overflows.join(' | ')}`);
      } else {
        log(true, `[${name} @${vp.name}] layout ok · title: ${title.slice(0, 50)}`);
      }
      if (errors.length) {
        log(false, `[${name} @${vp.name}] ERRORS: ${errors.slice(0, 5).join(' | ')}`);
      } else {
        log(true, `[${name} @${vp.name}] no console/page errors`);
      }
      if (vp.name === 'desktop' || vp.name === 'mobile') {
        await page.screenshot({ path: `${dir}/${name}-${vp.name}.png`, fullPage: true });
        shots++;
      }
    } catch (e) {
      log(false, `[${name} @${vp.name}] LOAD FAILED: ${e.message.slice(0, 120)}`);
    }
    await page.close();
  }
}

// Nav + mobile menu interaction smoke test
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844 });
await page.goto(`${BASE}/`, { waitUntil: 'networkidle0' });
await page.click('[data-menu-toggle]');
await new Promise((r) => setTimeout(r, 700));
const menuOpen = await page.evaluate(() => document.querySelector('[data-menu]').classList.contains('is-open'));
log(menuOpen, menuOpen ? 'mobile menu opens' : 'mobile menu FAILED to open');
await page.click('[data-menu-toggle]');
await new Promise((r) => setTimeout(r, 500));
const menuClosed = await page.evaluate(() => !document.querySelector('[data-menu]').classList.contains('is-open'));
log(menuClosed, menuClosed ? 'mobile menu closes' : 'mobile menu FAILED to close');

// Desktop dropdown smoke test
await page.setViewport({ width: 1440, height: 900 });
await page.goto(`${BASE}/company`, { waitUntil: 'networkidle0' });
await page.hover('.nav-item[data-dropdown]');
await new Promise((r) => setTimeout(r, 600));
const dropOpen = await page.evaluate(() => getComputedStyle(document.querySelector('.dropdown')).visibility === 'visible');
log(dropOpen, dropOpen ? 'desktop dropdown appears on hover' : 'desktop dropdown FAILED');

// Hero canvas active check
await page.setViewport({ width: 1440, height: 900 });
await page.goto(`${BASE}/`, { waitUntil: 'networkidle0' });
const canvasActive = await page.evaluate(() => {
  const c = document.querySelector('[data-hero-canvas]');
  return c && c.width > 0 && c.height > 0;
});
log(canvasActive, canvasActive ? 'hero canvas rendered' : 'hero canvas NOT rendering');

await browser.close();

console.log('\n==== QA SUMMARY ====');
results.forEach((r) => console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.msg}`));
console.log(`\n${results.length - failures}/${results.length} checks passed. ${shots} screenshots → ${dir}`);
process.exit(failures ? 1 : 0);
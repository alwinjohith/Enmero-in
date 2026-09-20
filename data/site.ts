export const SITE = {
  name: 'Enmero',
  tagline: 'Engineering future standards.',
  url: 'https://www.enmero.in',
  domain: 'enmero.in',
  description:
    'Enmero is a global technology and engineering corporation developing advanced artificial intelligence systems, next-generation software platforms, and autonomous infrastructure.',
  keywords:
    'Enmero, Enmero Intelligence, Enmero Technologies, technology corporation, enterprise AI, autonomous systems, software engineering, global technology',
  founded: 2025,
  founder: 'Ashwanth Megas',
  headquarters: 'India',
  linkedin: 'https://www.linkedin.com/company/enmero',
  email: 'support@eoai.enmero.in',
  eoaiUrl: 'https://eoai.enmero.in',
} as const;

export interface NavItem {
  label: string;
  href: string;
  items?: { label: string; href: string }[];
}

export interface NavConfig {
  primary: NavItem[];
  cta: { label: string; href: string };
}

export const NAV: NavConfig = {
  primary: [
    {
      label: 'Company',
      href: '/company',
      items: [
        { label: 'About Enmero', href: '/company' },
        { label: 'Domains', href: '/domains' },
        { label: 'Careers', href: '/careers' },
        { label: 'Investors', href: '/investors' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      label: 'Solutions',
      href: '/solutions',
      items: [
        { label: 'Solutions', href: '/solutions' },
        { label: 'Leaf Singularity', href: '/solutions#leaf-singularity' },
        { label: 'eoAI Division', href: '/eoai' },
      ],
    },
    {
      label: 'Research',
      href: '/research',
      items: [
        { label: 'Research', href: '/research' },
        { label: 'Publications', href: '/publications' },
        { label: 'Trust Center', href: '/trust' },
      ],
    },
    { label: 'Domains', href: '/domains' },
  ],
  cta: { label: 'Contact', href: '/contact' },
};

export interface Domain {
  id: string;
  index: string;
  name: string;
  short: string;
  tags: string[];
}

export const DOMAINS: Domain[] = [
  {
    id: 'ai-systems',
    index: '01',
    name: 'Artificial Intelligence Systems',
    short:
      'Advanced artificial intelligence systems engineered through the eoAI research division — reasoning systems, autonomous architectures, multimodal intelligence, and next-generation AI infrastructure.',
    tags: ['Reasoning', 'Autonomous architectures', 'Multimodal intelligence'],
  },
  {
    id: 'software-platforms',
    index: '02',
    name: 'Next-generation Software Platforms',
    short:
      'Adaptive, context-aware software platforms that redefine how people and machines work together — built on modern foundations for ultra-low latency, fluid experiences.',
    tags: ['Adaptive computing', 'Context-aware UX', 'Rust & Tauri'],
  },
  {
    id: 'autonomous-infrastructure',
    index: '03',
    name: 'Autonomous Infrastructure',
    short:
      'Autonomous infrastructure and advanced computing environments engineered to support models, workloads, and systems that must scale with intelligence.',
    tags: ['Neural training clusters', 'High-performance compute', 'Scale'],
  },
];

export interface Division {
  name: string;
  role: string;
  href: string;
}

export const DIVISIONS: Division[] = [
  {
    name: 'eoAI',
    role: 'Artificial Intelligence Research Division',
    href: '/eoai',
  },
];

export interface ResearchArea {
  title: string;
  body: string;
}

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    title: 'Alignment & Safety',
    body: 'Developing techniques to ensure AI systems act in accordance with human values, a core pillar of our current development phase.',
  },
  {
    title: 'Interpretability',
    body: 'Building tools to understand the internal workings of neural networks as we architect our foundation models.',
  },
  {
    title: 'Scalable Oversight',
    body: 'Creating frameworks for effectively supervising AI systems that may exceed human-level performance.',
  },
  {
    title: 'Cognitive Synthesis',
    body: 'Architecting neural systems that bridge the gap between logical processing and nuanced human understanding.',
  },
];

export interface TrustPillar {
  title: string;
  body: string;
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    title: 'Data Sovereignty',
    body: 'We believe users should own their data. Our systems are being built with privacy-first architectures that minimize data retention and maximize user control.',
  },
  {
    title: 'Safety Alignment',
    body: 'Every model we develop undergoes rigorous safety testing and alignment research to ensure it remains beneficial and under human control.',
  },
  {
    title: 'Security by Design',
    body: 'From the hardware layer to our neural architectures, we implement enterprise-grade security to protect against adversarial attacks and unauthorized access.',
  },
];

export interface Publication {
  date: string;
  tag: string;
  title: string;
  body: string;
  media?: string;
  video?: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    date: 'May 2, 2026',
    tag: 'Milestone',
    title: 'Leaf Singularity Core Systems Reach Alpha Stage',
    body: 'The core architecture of Leaf Singularity has successfully passed its first internal alpha milestone. The workspace now demonstrates fluid morphological adaptation, dynamically restructuring its UI based on contextual user data inputs.',
    media: '/img/prototype_leaf.jpeg',
    video: '/video/alpha_stage.mp4',
  },
  {
    date: 'March 14, 2026',
    tag: 'Development',
    title: 'Leaf Singularity Prototype Development Commences',
    body: 'Following its initial announcement, the engineering team at eoAI has officially begun prototype development for Leaf Singularity. Initial focus is placed on establishing the core Rust and Tauri foundations for ultra-low latency contextual rendering.',
    media: '/img/prototype_leaf.jpeg',
    video: '/video/leaf_singularity_project.mp4',
  },
  {
    date: 'February 21, 2026',
    tag: 'Announcement',
    title: 'Leaf Singularity Project Announced',
    body: 'Enmero\u2019s eoAI division announces Leaf Singularity, a bold new initiative to rethink traditional desktop environments. Designed as an adaptive computing platform, it seeks to merge AI, fluid interfaces, and contextual workflows into a single cohesive workspace.',
    media: '/img/prototype_leaf.jpeg',
    video: '/video/leaf_singularity_project.mp4',
  },
  {
    date: 'February 4, 2026',
    tag: 'Development',
    title: 'eoAI Expands Compute Infrastructure Ecosystem',
    body: 'To support the scaling computational demands of its advanced reasoning models, eoAI has significantly expanded its dedicated neural training clusters and high-performance server infrastructure.',
    media: '/img/eoai_expands_compute.jpeg',
  },
  {
    date: 'January 12, 2026',
    tag: 'Company',
    title: 'eoAI Research Division Established',
    body: 'eoAI is formally established as the artificial intelligence research and development division of Enmero. The division will focus on developing advanced AI systems, intelligent computing platforms, and research-driven technologies.',
    media: '/img/enmero_establishes_eoai.jpeg',
  },
];

export interface TrustDoc {
  tag: string;
  title: string;
  body: string;
}

export const TRUST_DOCS: TrustDoc[] = [
  {
    tag: 'Report',
    title: 'Safety Governance Framework',
    body: 'Outlining our internal procedures for model evaluation and deployment gating.',
  },
  {
    tag: 'Policy',
    title: 'Responsible Disclosure',
    body: 'Our program for security researchers to safely report vulnerabilities in our systems.',
  },
];

export interface Platform {
  name: string;
  status: string;
  body: string;
  href: string;
}

export const PLATFORMS: Platform[] = [
  {
    name: 'Leaf Singularity',
    status: 'In development',
    body: 'A unified adaptive workspace that replaces traditional applications. It silently reconfigures itself in response to context, surfacing the right environment as work evolves.',
    href: '/solutions#leaf-singularity',
  },
];

export interface RoadmapPlatform {
  name: string;
  note: string;
}

export const ROADMAP_PLATFORMS: RoadmapPlatform[] = [
  { name: 'BarnAI', note: 'Named in eoAI services and research platforms' },
  { name: 'Bottlepin', note: 'Part of eoAI product portfolio' },
  { name: 'BeyondOS', note: 'Research stream within eoAI systems work' },
];
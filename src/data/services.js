// The canonical service list. Every service here has its own page under
// /services. UI/UX design is part of Web Development rather than a separate
// service, so it is not listed separately here or in the navigation.
export const SERVICES = [
  {
    id: 'web-development',
    name: 'Web Development',
    headline: 'Web applications, from single pages to platforms',
    summary:
      'Responsive, performant web applications built with modern frameworks. From single-page applications to complex platforms. UI/UX design is part of this service, so design and engineering stay with the same team.',
    includes: [
      {
        title: 'UI/UX design',
        desc: 'Interface and experience design handled as part of the build. Layouts and interaction flows are agreed with you before development begins.'
      },
      {
        title: 'Front-end development',
        desc: 'Responsive interfaces built with modern frameworks, designed to stay fast and usable across devices.'
      },
      {
        title: 'Back-end development',
        desc: 'Application logic, data handling, and integrations, written to be read and maintained later.'
      },
      {
        title: 'Deployment and handoff',
        desc: 'Deployment and documentation are handled as part of the engagement, not left to you.'
      }
    ],
    details: [
      'Clean code, performance, and maintainability are the priorities throughout the build.',
      'Development happens in focused sprints, with progress you can review and feedback you can give.',
      'Deployment and handoff are handled as part of the engagement, not left to you.'
    ]
  },
  {
    id: 'app-development',
    name: 'App Development',
    headline: 'iOS and Android, native or cross-platform',
    summary:
      'Mobile and cross-platform applications for iOS and Android. Whether you need a native app or a cross-platform solution, we build products that work reliably across devices.',
    includes: [
      {
        title: 'Native and cross-platform',
        desc: 'The approach is chosen around what the product actually needs, not around a default stack.'
      },
      {
        title: 'Verified at every stage',
        desc: 'Quality is verified throughout the build, so issues are caught and resolved early.'
      },
      {
        title: 'Documentation',
        desc: 'Documentation is provided so your team can work with and maintain the app after launch.'
      }
    ],
    details: [
      'The approach is chosen around what the product actually needs, not around a default stack.',
      'Quality is verified at every stage, so issues are caught and resolved early.',
      'Documentation is provided so your team can work with and maintain the app after launch.'
    ]
  },
  {
    id: 'software-testing',
    name: 'Software Testing & Quality Assurance',
    headline: 'Reliable releases, verified throughout',
    summary:
      'Quality assurance and testing to ensure reliable releases. Verification happens continuously rather than only at the end.',
    includes: [
      {
        title: 'Test planning',
        desc: 'Test scope is agreed against the requirements, so testing covers what the product actually needs to do.'
      },
      {
        title: 'Verification throughout the build',
        desc: 'Quality is checked at every stage of the build, not just before launch.'
      },
      {
        title: 'Issue reporting',
        desc: 'Issues are found and documented early, while they are still cheap to fix.'
      },
      {
        title: 'Release readiness',
        desc: 'Release readiness is confirmed before anything reaches your users.'
      }
    ],
    details: [
      'Quality is checked at every stage of the build, not just before launch.',
      'Issues are found and resolved early, while they are still cheap to fix.',
      'Release readiness is confirmed before anything reaches your users.'
    ]
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    headline: 'Setup, deployment, and management',
    summary:
      'Server setup, deployment, and infrastructure management. We put the infrastructure in place and keep it maintainable as your product grows.',
    includes: [
      {
        title: 'Setup',
        desc: 'Server setup and configuration are handled by the team building the product.'
      },
      {
        title: 'Deployment',
        desc: 'Deployment is planned, so launches are predictable rather than improvised.'
      },
      {
        title: 'Management',
        desc: 'Infrastructure is managed and kept maintainable as your product grows.'
      }
    ],
    details: [
      'Server setup, deployment, and configuration are handled by the team building the product.',
      'Infrastructure is designed to stay scalable and maintainable over time.',
      'Deployment is planned, so launches are predictable rather than improvised.'
    ]
  },
  {
    id: 'product-development',
    name: 'Product Development',
    headline: 'Concept to launch',
    summary:
      'End-to-end product builds from concept to launch. We design, build, and test iteratively, keeping you involved throughout the process.',
    includes: [
      {
        title: 'Concept and planning',
        desc: 'The technical approach, timeline, and milestones are agreed before design or code begins.'
      },
      {
        title: 'Design and build',
        desc: 'The product is designed, built, and tested iteratively, with your feedback throughout.'
      },
      {
        title: 'Launch and handoff',
        desc: 'Launch, documentation, and handoff are covered as part of the engagement.'
      }
    ],
    details: [
      'The technical approach, timeline, and milestones are agreed before design or code begins.',
      'You see progress regularly and can provide feedback throughout the build.',
      'Launch, documentation, and handoff are covered as part of the engagement.'
    ]
  },
  {
    id: 'system-architecture',
    name: 'System Architecture',
    headline: 'Scalable and maintainable by design',
    summary:
      'Scalable, maintainable technical architecture design. The structure is decided before code is written, not patched together afterwards.',
    includes: [
      {
        title: 'Architecture planning',
        desc: 'Architecture is planned with the technical approach, timeline, and milestones, up front.'
      },
      {
        title: 'Technology decisions',
        desc: 'Decisions are made around your constraints, not around a preferred technology.'
      },
      {
        title: 'A maintainable structure',
        desc: 'The goal is code that another developer can read, maintain, and extend.'
      }
    ],
    details: [
      'Architecture is planned with the technical approach, timeline, and milestones, up front.',
      'The goal is code that another developer can read, maintain, and extend.',
      'Decisions are made around your constraints, not around a preferred technology.'
    ]
  },
  {
    id: 'startup-support',
    name: 'Startup Support',
    headline: 'A technology partnership for early-stage teams',
    summary:
      'A technology partnership for early-stage companies. We work as an extension of your team while the product and the company are still taking shape.',
    includes: [
      {
        title: 'Direct access to the team',
        desc: 'You work directly with the people building your product. No account managers in between.'
      },
      {
        title: 'Clarity before work starts',
        desc: 'Scope, success criteria, and constraints are clarified with you before work starts.'
      },
      {
        title: 'Design and engineering together',
        desc: 'Engineering and design sit in the same team, so there is less to coordinate.'
      }
    ],
    details: [
      'You work directly with the people building your product. No account managers in between.',
      'Scope, success criteria, and constraints are clarified with you before work starts.',
      'Engineering and design sit in the same team, so there is less to coordinate.'
    ]
  },
  {
    id: 'maintenance',
    name: 'Ongoing Maintenance & Optimisation',
    headline: 'Long-term support after launch',
    summary:
      'Long-term support, updates, and performance optimisation. The team that built your product stays involved, so nothing gets lost in the handoff.',
    includes: [
      {
        title: 'Maintenance and updates',
        desc: 'Ongoing updates and maintenance keep the product dependable after launch.'
      },
      {
        title: 'Performance optimisation',
        desc: 'Performance work keeps the product fast as usage grows.'
      },
      {
        title: 'Support',
        desc: 'The team that built your product stays involved, so context is not lost.'
      }
    ],
    details: [
      'Maintenance, updates, and optimisation keep the product dependable after launch.',
      'The team that built your product stays involved, so context is not lost.',
      'For products that need ongoing ownership, Watchtower is our long-term management service.'
    ]
  },
  {
    id: 'custom-software-development',
    name: 'Custom Software Development',
    headline: 'Purpose-built for your requirements',
    summary:
      'Purpose-built applications designed around your business requirements. We start by understanding your business and the problem you are trying to solve.',
    includes: [
      {
        title: 'Requirements first',
        desc: 'Requirements, scope, and constraints are understood before anything is built.'
      },
      {
        title: 'Written scope',
        desc: 'Every engagement has a written scope, with deliverables, timelines, and fees agreed.'
      },
      {
        title: 'Maintainable code',
        desc: 'Clean, maintainable code is the standard, not an upgrade applied later.'
      }
    ],
    details: [
      'Requirements, scope, and constraints are understood before anything is built.',
      'Every engagement has a written scope, with deliverables, timelines, and fees agreed.',
      'Clean, maintainable code is the standard, not an upgrade applied later.'
    ]
  }
];

export const WATCHTOWER_SERVICE = {
  id: 'watchtower',
  name: 'Watchtower',
  headline: 'Long-term product management',
  summary:
    "Watchtower is Enmero's long-term management service. It keeps your product maintained, updated, and supported by the same team over a 15-month engagement with a simple monthly rate.",
  details: [
    'A fixed monthly rate across a 15-month engagement, so the cost stays predictable.',
    'Onboarding starts by reviewing your product and agreeing what will be managed.',
    'Country-specific pricing is published for your region.'
  ]
};

export const ALL_SERVICES = [...SERVICES, WATCHTOWER_SERVICE];

export const SERVICE_OPTIONS = ALL_SERVICES.map((service) => service.name);

// Every service in the list above owns a page at this path. Both the navigation
// and the routes table read it from here so the two cannot drift apart.
export function servicePath(id) {
  return `/services/${id}`;
}

export function findServiceById(id) {
  return ALL_SERVICES.find((service) => service.id === id) || null;
}

export function findServiceByName(name) {
  return ALL_SERVICES.find((service) => service.name === name) || null;
}

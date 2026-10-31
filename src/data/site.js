// All portfolio content lives here (sourced from the résumé). Edit text here only.
export const profile = {
  name: 'Shubham Kumar',
  role: 'Salesforce Developer',
  location: 'Mathura, Uttar Pradesh, India',
  pitch: 'I build Apex and Lightning solutions, configure CPQ, and automate real estate and sales processes on Salesforce.',
  about: [
    'I am a Salesforce Developer at Fexle Services Private Limited, with 4+ years on Salesforce (since May 2022). I have contributed to design, development and testing across real estate projects built on the Salesforce platform.',
    'I work with Apex, triggers, batch classes, Aura components, LWC, Visualforce and Experience Cloud, and I automate with Flows, Approval Processes and workflow rules. I also configure Salesforce CPQ, and I handle production support and bug fixes.',
    'I deploy with the Ant migration tool and Change Sets, and I hold 5 Salesforce certifications.',
  ],
  facts: [
    ['Experience', '4+ years on Salesforce'],
    ['Company', 'Fexle Services Private Limited'],
    ['Domain', 'Real estate'],
    ['Certified', 'Agentforce Specialist, AI Associate, Data 360 Consultant, Platform Developer, Platform Foundations'],
    ['Based in', 'Mathura, India'],
    ['Superbadges', 'Apex Specialist, Approval Process Troubleshooting'],
  ],
};

export const links = {
  email: 'shubham281202@gmail.com',
  phone: '7310730891',
  linkedin: 'https://www.linkedin.com/in/shubham-prajas/',
  trailhead: 'https://www.salesforce.com/trailblazer/shubhamkumar2001',
  github: 'https://github.com/shubhamprajas2001',
};

// The 12 skill tiles. They stay in the sidebar and light up for whatever is in view.
export const skills = [
  'Apex', 'Apex Triggers', 'Batch Apex', 'SOQL/SOSL',
  'LWC', 'Aura', 'Visualforce', 'Experience Cloud',
  'Flows', 'Approval Process', 'CPQ', 'CI/CD',
];

export const roles = [
  {
    company: 'Fexle Services Private Limited',
    title: 'Salesforce Developer',
    when: 'May 2022 – Present',
    stack: ['Apex', 'LWC', 'Aura', 'Visualforce', 'CPQ'],
    points: [
      'Contributed to the design, development and testing phases of Salesforce projects.',
      'Worked with Lightning components, Lightning Web Components and the Lightning Design System.',
      'Handled Salesforce administration: configuration, security model, customization and maintenance of instances.',
      'Automated processes with Approval Processes, Flows and workflow rules.',
      'Designed, built, tested and deployed enhancements to custom objects, page layouts and alerts.',
      'Built with Apex, triggers, test classes, Visualforce pages and Aura components.',
      'Deployed with the Ant migration tool and Change Sets.',
      'Configured Salesforce CPQ: products, price books, price rules, quote templates and guided selling. Created custom product rules (selection, validation, alert), product bundles, features, options and constraint rules, and price rules with lookup queries and discount schedules.',
      'Provided production support and bug fixes, and worked well in teams, communicating effectively and learning quickly.',
    ],
  },
];

export const projects = [
  {
    kicker: 'Real estate · Team of 5',
    title: 'VTP',
    headline: 'Real estate sales and property management on Salesforce',
    short:
      'A Salesforce platform for a real estate company that buys, sells, rents and manages residential, commercial, industrial and land properties, from lead generation to closing deals.',
    stack: ['Apex', 'Apex Triggers', 'Batch Apex', 'Aura', 'Visualforce', 'Flows'],
    points: [
      'Worked as a Salesforce Developer, gathering requirements and discussing approaches with clients.',
      'Created user-friendly UI and applications with Aura and Lightning components, and Visualforce pages.',
      'Set up automation with Workflow Rules, Process Builders, Flows and Approval Processes.',
      'Wrote batches, Visualforce pages, Apex classes and Apex triggers, and set up a Connected App.',
      'Worked with UAT on testing, deployed to production and gave Go-Live support.',
    ],
  },
  {
    kicker: 'Real estate · Team of 10',
    title: 'Aurobindo',
    headline: 'Residential and commercial real estate development',
    short:
      'Salesforce solutions for Aurobindo Realty, a real estate developer with residential and commercial projects across several cities in India.',
    stack: ['Apex', 'Apex Triggers', 'Batch Apex', 'Aura', 'Flows'],
    points: [
      'Discussed solutions for sprint tasks and built both front-end and back-end components.',
      'Built Lightning components, Apex classes, triggers, batch classes and schedulers, with testing.',
      'Provided ongoing support and maintenance, and debugged issues to keep defects low.',
      'Reviewed peer code for quality and deployed to the packaging org.',
    ],
  },
  {
    kicker: 'Real estate · Team of 12',
    title: 'TVS',
    headline: 'Commercial property development with Experience Cloud',
    short:
      'Salesforce solutions for TVS, which develops and manages commercial properties such as office spaces, business parks and IT campuses.',
    stack: ['Apex', 'Apex Triggers', 'Batch Apex', 'Aura', 'Experience Cloud'],
    points: [
      'Discussed solutions for sprint tasks and built front-end and back-end components.',
      'Built Lightning components, Apex classes, triggers, batch classes, schedulers and Experience Cloud sites, with testing.',
      'Provided ongoing support and maintenance.',
      'Reviewed peer code for quality and deployed to the packaging org.',
    ],
  },
  {
    kicker: 'Real estate · Team of 8',
    title: 'Casagrand',
    headline: 'Commercial property development',
    short:
      'Salesforce solutions for Casagrand, which develops and manages commercial properties such as office spaces, business parks and IT campuses.',
    stack: ['Apex', 'Apex Triggers', 'Batch Apex', 'Aura', 'Experience Cloud'],
    points: [
      'Built front-end and back-end components with Lightning components, Apex classes, triggers, batch classes, schedulers and Experience Cloud, with testing.',
      'Provided ongoing support and maintenance.',
      'Reviewed peer code for quality and deployed to the packaging org.',
    ],
  },
];

export const skillGroups = [
  ['Backend', 'Apex, Apex Triggers, Batch Apex, SOQL/SOSL, Test Classes'],
  ['Frontend', 'Lightning Web Components (LWC), Aura, Visualforce, Lightning Design System, JavaScript, HTML, CSS'],
  ['CPQ', 'Products, price books, price rules, quote templates, bundles, discount schedules'],
  ['Automation', 'Lightning Flow Builder, Approval Processes, Workflow Rules'],
  ['Administration', 'Configuration, security model, customization, Experience Cloud'],
  ['DevOps and tools', 'CI/CD, Git/GitHub, Ant migration tool, Change Sets, Workbench, Data Loader'],
];

export const certifications = [
  { img: 'ai-specialist.png', name: 'Agentforce Specialist', sub: 'Issued Jan 2025' },
  { img: 'ai-associate.png', name: 'AI Associate', sub: 'Oct 2024 – Feb 2026' },
  { img: 'data-360.svg', name: 'Data 360 Consultant', sub: 'Issued Dec 2024' },
  { img: 'Platform-Developer-I.png', name: 'Platform Developer', sub: 'Issued May 2024' },
  { img: 'Associate.png', name: 'Platform Foundations', sub: 'Certification' },
];

export const superbadges = [
  { img: 'apex-specialist.png', name: 'Apex Specialist', sub: 'Superbadge' },
  { name: 'Approval Process Troubleshooting', sub: 'Superbadge unit' },
];

export const education = [
  { degree: 'MCA, Master of Computer Applications', school: 'Vivekananda Global University, Jaipur', when: 'May 2024 – May 2026' },
  { degree: 'BCA, Bachelor of Computer Applications', school: 'Bon Maharaj Institute of Management & Technology, Mathura', when: 'Aug 2019 – Jul 2022' },
];

// Reusable solutions built independently of any client.
export const solutions = [];

// Colour code: every skill belongs to one category, and the category owns one hue site-wide.
export const categories = {
  apex: { label: 'Apex & async', hue: 262 },
  lwc: { label: 'UI · LWC / Aura', hue: 190 },
  integ: { label: 'Integration', hue: 155 },
  auto: { label: 'Automation', hue: 42 },
  cloud: { label: 'Clouds', hue: 215 },
};
export const skillCat = {
  'Apex': 'apex', 'Apex Triggers': 'apex', 'Batch Apex': 'apex', 'SOQL/SOSL': 'apex',
  'LWC': 'lwc', 'Aura': 'lwc', 'Visualforce': 'lwc',
  'Flows': 'auto', 'Approval Process': 'auto',
  'CPQ': 'cloud', 'Experience Cloud': 'cloud',
  'CI/CD': 'integ',
};

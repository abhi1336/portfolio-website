export const profile = {
  name: "Abhishek Kumar",
  title: "Lead Software Engineer",
  company: "Addverb Technologies",
  location: "Noida, India",
  email: "abhishekkr123singh@gmail.com",
  phone: "+91-8936018873",
  linkedin: "https://linkedin.com/in/abhishek-kumar-6b27691b4",
  // Put your GitHub username here to switch on the GitHub statistics section.
  github: "",
  resumeFile: "/Abhishek_Kumar_Resume.pdf",
  openToWork: true,
};

export const roles = ["Full Stack Engineer", "Frontend Architect", "Team Lead", "System Designer"];

export const stats = [
  { to: 4.5, decimals: 1, suffix: "+", label: "Years building enterprise software" },
  { to: 8, suffix: "+", label: "WMS modules shipped end to end" },
  { to: 95, suffix: "%", label: "On-time sprint delivery" },
  { to: 90, suffix: "%", label: "Less document-generation effort" },
];

export const about = {
  story: [
    "I joined Addverb Technologies as an intern in 2022, turning wireframes into components. Today I lead a 6-person team and own warehouse software from the handheld screen to the message queue behind it.",
    "I work across the stack: Angular and Web Components on the front, Spring Boot, RabbitMQ and SQL on the back. I write the high-level designs and API contracts, then ship the code, so decisions made on paper survive production.",
  ],
  highlights: [
    { title: "Lead across the stack", text: "Own modules from requirement analysis and design to development and production support." },
    { title: "Design system architect", text: "Standardised UI across 4 production frontend applications with reusable Web Components." },
    { title: "Event-driven backends", text: "RabbitMQ workflows that decouple cycle count, inventory and HU scan services." },
    { title: "AI-accelerated delivery", text: "Introduced Claude and Windsurf to the team, lifting engineering productivity by 70%." },
  ],
};

export const capabilities = [
  { title: "Frontend architecture", text: "Scalable Angular apps and a shared Web Components design system.", tags: ["Angular", "TypeScript", "RxJS", "Web Components", "Tailwind CSS", "Angular Material", "PrimeNG"] },
  { title: "Backend and APIs", text: "Spring Boot services with clean REST contracts and tuned persistence.", tags: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "REST APIs", "Microservices"] },
  { title: "Messaging and data", text: "Event-driven workflows that keep services decoupled and reliable.", tags: ["RabbitMQ", "SQL", "Optimised queries"] },
  { title: "Quality and delivery", text: "Automated tests, linting and pipelines that keep releases boring.", tags: ["Cypress", "Playwright", "JUnit", "SonarQube", "ESLint", "CI/CD", "Kubernetes"] },
  { title: "Leadership", text: "Sprint planning, code reviews and mentoring for a 6-member team.", tags: ["Agile", "Scrum", "Code reviews", "Mentoring", "HLD", "API design"] },
  { title: "AI-assisted development", text: "Faster features, faster debugging and quicker onboarding to unfamiliar code.", tags: ["Claude", "Windsurf"] },
];

export const techStack = [
  ["Angular", "TypeScript", "JavaScript", "RxJS", "React", "Web Components", "Tailwind CSS", "SCSS", "HTML5", "Bootstrap", "Angular Material", "PrimeNG"],
  ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "Node.js", "RabbitMQ", "SQL", "Maven", "Playwright", "Kubernetes", "GitLab", "GitHub", "Cypress", "JUnit", "SonarQube"],
];

export const experience = [
  {
    role: "Lead Software Engineer",
    period: "Aug 2025 - Present",
    tags: ["Angular", "Spring Boot", "RabbitMQ", "Node.js", "Playwright"],
    points: [
      "Owned the manual and automated Cycle Count module across frontend, backend, APIs and database, from requirement analysis to production support.",
      "Engineered a reusable PDF microservice with Node.js and Playwright, reused across 4 business workflows and cutting document-generation effort by 90%.",
      "Authored HLDs and REST API contracts for HU scan, HU count and inventory audit workflows.",
      "Integrated RabbitMQ to connect cycle count, inventory update and HU scan services, improving decoupling, reliability and responsiveness.",
      "Delivered Spring Boot enhancements with Spring Data JPA, Hibernate and optimised SQL for warehouse and inventory data.",
      "Led sprint planning, daily scrums and code reviews for 4 developers and 2 testers, reaching 95% on-time sprint delivery.",
      "Introduced Claude and Windsurf, improving engineering productivity by 70%.",
      "Built responsive, reusable UI for Handheld Terminal (HHT) and desktop WMS apps, improving task completion time by 80%.",
    ],
  },
  {
    role: "Software Development Engineer",
    period: "Aug 2022 - Aug 2025",
    tags: ["Angular", "React", "TypeScript", "Design System"],
    points: [
      "Led a 4-member Frontend/UI team delivering enterprise WMS applications for large-scale automation environments.",
      "Architected the Addverb Design System, standardising components across 4 production frontend applications.",
      "Built and maintained 7+ WMS applications (desktop and HHT) using Angular, React, TypeScript and REST APIs.",
      "Improved development efficiency and UI consistency by 70% with reusable components and shared submodules.",
      "Delivered Midbound, Outbound, Cycle Count, Ad Hoc Bin-to-Bin, Production Order, Inventory UOM Master and UOM Conversion Master modules.",
      "Partnered with process teams and warehouse operators to turn operational needs into frontend solutions.",
      "Resolved production issues through log analysis and API troubleshooting.",
      "Enforced ESLint and coding standards across 10+ projects.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    period: "Jan 2022 - Jul 2022",
    tags: ["Angular", "React", "Cypress"],
    points: [
      "Converted UI wireframes into responsive, reusable Angular and React components.",
      "Wrote Cypress tests that improved reliability and regression coverage.",
      "Refactored legacy frontend code and fixed defects, reducing bugs by 70%.",
    ],
  },
];

export const projects = [
  {
    title: "Cycle Count module",
    metric: "End-to-end ownership",
    text: "Manual and automated cycle counting across UI, APIs and database. I owned it from requirement analysis and technical design to production support, and guided 2 engineers to release.",
    tags: ["Angular", "Spring Boot", "RabbitMQ", "SQL"],
    wide: true,
  },
  {
    title: "PDF generation microservice",
    metric: "90% less effort",
    text: "A reusable Node.js and Playwright service that turns HTML/CSS templates into standard PDFs, shared by 4 business workflows.",
    tags: ["Node.js", "Playwright", "Microservice"],
  },
  {
    title: "Addverb Design System",
    metric: "4 apps standardised",
    text: "A Web Components design system and shared submodules that raised UI consistency and development efficiency by 70%.",
    tags: ["Web Components", "Angular", "Tailwind CSS"],
  },
  {
    title: "Event-driven WMS services",
    metric: "3 core workflows",
    text: "HLDs and REST contracts for HU scan, HU count and inventory audit, with RabbitMQ events decoupling the services.",
    tags: ["HLD", "REST APIs", "RabbitMQ", "Java"],
  },
  {
    title: "Handheld Terminal and desktop UI",
    metric: "80% faster tasks",
    text: "Responsive, reusable workflows for warehouse operators on HHT devices and desktop, built with the people who use them.",
    tags: ["Angular", "TypeScript", "UX"],
  },
];

export const education = {
  degree: "B.Tech in Information Technology",
  school: "Birla Institute of Technology, Mesra, Ranchi",
  year: "July 2022",
};

export const certifications = [
  { title: "Namaste React", issuer: "Course certificate" },
  { title: "Namaste JavaScript", issuer: "Course certificate" },
  { title: "Node.js", issuer: "Course certificate" },
  { title: "Agile Development", issuer: "5-day course" },
];

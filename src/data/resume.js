export const profile = {
  name: "Abhishek Kumar",
  title: "Lead Software Engineer",
  company: "Addverb Technologies",
  location: "Noida, India",
  email: "abhishekkr123singh@gmail.com",
  phone: "+91-8936018873",
  linkedin: "https://linkedin.com/in/abhishek-kumar-6b27691b4",
  // Put your GitHub username here to switch on the GitHub statistics section.
  github: "abhi1336",
  resumeFile: "/Abhishek_Kumar_Resume.pdf",
  openToWork: true,
};

export const targetRoles = ["Frontend Developer", "Full Stack Developer", "Lead Software Engineer"];

export const stats = [
  { to: 4.5, decimals: 1, suffix: "+", label: "Years building enterprise software" },
  { to: 8, suffix: "+", label: "WMS modules shipped end to end" },
  { to: 95, suffix: "%", label: "On-time sprint delivery" },
  { to: 90, suffix: "%", label: "Less document-generation effort" },
];

export const about = {
  story: [
    "I’m a frontend-focused full stack developer and team lead with 4.5+ years of experience building enterprise web applications. I’ve grown at Addverb Technologies from Software Development Engineer Intern to Lead Software Engineer.",
    "My work spans Angular and Web Components, Java and Spring Boot, REST APIs, RabbitMQ and SQL. I’ve led delivery of warehouse management software across user interfaces, services and data layers.",
  ],
  highlights: [
    { title: "Full stack delivery", text: "Built WMS features across frontend, backend, APIs and databases." },
    { title: "Frontend architecture", text: "Created a shared design system used across 4 production applications." },
    { title: "Team leadership", text: "Led planning, prioritisation and reviews for a 6-member team." },
    { title: "Measurable outcomes", text: "Improved sprint delivery to 95% and reduced PDF generation effort by 90%." },
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

export const experience = [
  {
    role: "Lead Software Engineer",
    period: "Aug 2025 - Present",
    tags: ["Angular", "Spring Boot", "RabbitMQ", "Node.js", "Playwright"],
    points: [
      "Owned manual and automated Cycle Count delivery across frontend, backend, APIs and database, from requirements and design through production support; guided 2 team members.",
      "Built a reusable Node.js and Playwright PDF service with HTML/CSS templates for 4 business workflows, cutting document-generation effort by 90%.",
      "Designed HLDs and REST API contracts for Handling Unit (HU) scan, HU count and inventory audit workflows.",
      "Integrated RabbitMQ events across cycle count, inventory updates and HU scan services to improve service decoupling and responsiveness.",
      "Implemented Java and Spring Boot backend features and built persistence layers with Spring Data JPA, Hibernate and SQL.",
      "Led sprint planning, daily scrums, prioritisation and code reviews for 4 developers and 2 testers; achieved 95% on-time sprint delivery.",
      "Introduced Claude and Windsurf to accelerate feature development, debugging and codebase exploration; improved engineering productivity by 70%.",
      "Built reusable HHT and desktop WMS workflows that improved task completion time by 80%.",
    ],
  },
  {
    role: "Software Development Engineer",
    period: "Aug 2022 - Aug 2025",
    tags: ["Angular", "React", "TypeScript", "Design System"],
    points: [
      "Led a 4-member frontend/UI team delivering enterprise WMS applications for large-scale automation environments.",
      "Architected the Addverb Design System, standardising reusable components across 4 production frontend applications.",
      "Developed and maintained 7+ desktop and HHT WMS applications using Angular, React, TypeScript and REST APIs.",
      "Built shared components and submodules that improved development efficiency and UI consistency by 70%.",
      "Delivered Midbound, Outbound, Cycle Count, Ad Hoc Bin-to-Bin, Production Order, Inventory UOM Master and UOM Conversion Master modules.",
      "Worked with process teams and warehouse operators to turn operational requirements into frontend solutions.",
      "Investigated production issues through log analysis and API troubleshooting; enforced ESLint and coding standards across 10+ projects.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    period: "Jan 2022 - Jul 2022",
    tags: ["Angular", "React", "Cypress"],
    points: [
      "Converted UI wireframes into responsive, reusable Angular and React components.",
      "Implemented Cypress frontend tests to improve reliability and regression coverage.",
      "Refactored legacy frontend code and fixed defects, reducing bugs by 70%.",
    ],
  },
];

export const selectedWork = [
  {
    title: "Cycle Count module",
    metric: "Frontend · backend · database",
    text: "Manual and automated cycle counting across the application stack. Owned requirements, technical design, development, integration and production support, and guided 2 team members.",
    tags: ["Angular", "Spring Boot", "RabbitMQ", "SQL"],
    wide: true,
  },
  {
    title: "PDF generation microservice",
    metric: "90% less document effort",
    text: "A reusable Node.js and Playwright service that generates standardised PDFs from HTML/CSS templates for 4 business workflows.",
    tags: ["Node.js", "Playwright", "Microservice"],
  },
  {
    title: "Addverb Design System",
    metric: "4 production apps",
    text: "A shared Web Components design system and reusable submodules that improved UI consistency and development efficiency by 70%.",
    tags: ["Web Components", "Angular", "Tailwind CSS"],
  },
  {
    title: "WMS modules and workflows",
    metric: "Desktop and HHT workflows",
    text: "Delivered warehouse workflows including Midbound, Outbound, Cycle Count, Ad Hoc Bin-to-Bin, Production Order and inventory unit-of-measure modules across desktop and handheld applications.",
    tags: ["Angular", "React", "TypeScript", "REST APIs"],
  },
  {
    title: "Handheld Terminal and desktop UI",
    metric: "80% faster task completion",
    text: "Responsive, reusable interfaces for warehouse operators on handheld terminals and desktop WMS applications.",
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

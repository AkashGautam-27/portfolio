export const SITE_CONFIG = {
  name: "Akash Gautam",
  title: "Frontend Developer | Backend Developer | Java Developer | Problem Solver",
  description:
    "Computer Science Engineering student passionate about Full Stack Web Development, Software Engineering, and Data Structures & Algorithms.",
  url: "https://akashgautam.dev",
  email: "akashgautam5411@example.com",
  phone: "+91 6263331073",
  location: "Bhopal, Madhya Pradesh, India",
};

export const NAVIGATION = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/AkashGautam-27",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/akash-gautam-18933a3a3",
    icon: "Linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/akash_g63",
    icon: "Code",
  },
  {
    name: "Email",
    url: "mailto:akashgautam5411@gmail.com",
    icon: "Mail",
  },
];

export const SKILLS = {
  frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 72 },
    { name: "TypeScript", level: 48 },
    { name: "React.js", level: 70 },
    { name: "Next.js", level: 38 },
    { name: "Tailwind CSS", level: 92 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 75 },
    { name: "REST APIs", level: 87 },
    { name: "JWT Authentication", level: 82 },
  ],
  database: [
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 60 },
  ],
  languages: [
    { name: "Java", level: 72 },
    { name: "JavaScript", level: 72 },
    { name: "C++", level: 78 },
  ],
  tools: [
    { name: "Git", level: 50 },
    { name: "GitHub", level: 75 },
    { name: "VS Code", level: 75 },
    { name: "Postman", level: 85 },
    { name: "Figma", level: 75 },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Expense Tracker",
    description:
      "A full-stack expense management application where users can securely manage personal finances with advanced analytics.",
    shortDescription: "Expense management with charts & analytics",
    image: "/expense_tracker.png",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Chart.js",
    ],
    features: [
      "Authentication and Authorization",
      "Add, Edit, Delete Expenses",
      "Expense Dashboard with filters",
      "Charts and Analytics",
      "Responsive UI",
      "Export to PDF",
    ],
    links: {
      live: "https://expense-tracker-awv8.onrender.com",
      github: "https://github.com/AkashGautam-27/expense-tracker",
    },
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "SnapCart - Grocery Delivery Platform",
    description:
      "A multi-role grocery delivery system built with modern web technologies supporting User, Admin, and Delivery roles.",
    shortDescription: "Multi-role grocery delivery system",
    image: "/snapcart.png",
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
    ],
    features: [
      "User role with product browsing & ordering",
      "Admin dashboard for product & order management",
      "Delivery role with order assignment & tracking",
      "OTP-based delivery verification",
      "Real-time notifications",
      "Payment integration",
    ],
    links: {
      live: "https://snapcart-orcin.vercel.app",
      github: "https://github.com/AkashGautam-27/1.snapcartFolder",
    },
    color: "from-purple-500 to-pink-500",
  },
];

export const ACHIEVEMENTS = [
  {
    icon: "Code",
    title: "Active LeetCode Solver",
    description: "150+ problems solved on LeetCode | 4-star rating",
    stat: "150+",
  },
  {
    icon: "Zap",
    title: "Full Stack Projects",
    description: "Built 10+ production-ready full-stack applications",
    stat: "10+",
  },
  {
    icon: "BookOpen",
    title: "Continuous Learning",
    description: "Always exploring new technologies and frameworks",
    stat: "Never Stop",
  },
  {
    icon: "Trophy",
    title: "Coding Excellence",
    description: "Maintained 6.94 CGPA in Computer Science Engineering",
    stat: "6.94",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Technology",
  field: "Computer Science Engineering",
  university: "RGPV University",
  location: "Bhopal, Madhya Pradesh",
  cgpa: "6.94",
  startYear: 2023,
  endYear: 2027,
  currentYear: 3,
  highlights: [
    "Focus on Full Stack Web Development",
    "Proficient in Data Structures & Algorithms",
    "Active participant in coding competitions",
    "Leadership in technical clubs and events",
  ],
};

export const ABOUT_ME = `Computer Science Engineering student passionate about Full Stack Web Development, Software Engineering, and Data Structures & Algorithms. 

Experienced in building modern web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and Java. I have a strong foundation in problem-solving and algorithm design, with consistent practice on competitive programming platforms.

Currently pursuing Bachelor of Technology in Computer Science Engineering from RGPV University (2023-2027) with a CGPA of 6.94. Always eager to learn new technologies, contribute to open-source projects, and solve real-world problems through software development.

I believe in writing clean, maintainable code and following best practices in software development. My goal is to become a skilled full-stack developer and contribute meaningfully to the tech community.`;

export const CONTACT_CONFIG = {
  title: "Let's Work Together",
  description:
    "I'm always interested in hearing about new projects and opportunities. Feel free to reach out via email or fill out the form below.",
  email: "akashgautam5411@example.com",
  formFields: [
    { name: "name", label: "Your Name", type: "text", required: true },
    { name: "email", label: "Your Email", type: "email", required: true },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      required: true,
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
      rows: 5,
    },
  ],
};

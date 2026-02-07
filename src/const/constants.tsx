import polygonContourV1  from '../assets/images/polygonContourV1.png';
import polygonContourProject  from '../assets/images/polygonContourProject.gif';
import leagueOfLegendsMLGif  from '../assets/images/leagueOfLegendsMLGif.gif';
import simordiaFrontEnd  from '../assets/images/simordiaFrontEnd.gif';
import simiWordPNG  from '../assets/images/simiWord.png';
import portfolio from '../assets/images/portfolio.png';
import parkeris from '../assets/images/parkeris.png';
import storyBook from '../assets/images/storyBook.gif';
import simiWordBackEnd from '../assets/images/simiWordBackEnd.gif';
import bleepStream from '../assets/images/bleep_stream.png';
import portfolio3d from '../assets/images/portfolio-3d.png';
import oauthGraphic from '../assets/images/oauth.svg';
import stripeGraphic from '../assets/images/stripe.svg';

export type ProjectType = "Application" | "Algorithm" | "Machine Learning";

export interface Project {
    title: string;
    description: string;
    skills: string[];
    image: string;
    link: string;
    type: ProjectType;
    isPrivate: boolean;
    featured?: boolean;
    year?: number;
    impact?: string;
    role?: string;
    architectureTags?: string[];
    walkthroughAvailable?: boolean;
}

export interface WorkExperienceEntry {
    title: string;
    company: string;
    date: string;
    location: string;
    description: string;
    icon: "work" | "school";
    skills: string[];
    highlights?: string[];
    stack?: string[];
}

export type DemoLifecycleStatus = "live" | "private" | "planned";

export interface DemoStatus {
    title: string;
    status: DemoLifecycleStatus;
    ctaLabel: string;
    ctaCommand?: string;
    note: string;
}

export const whatIDeliver = [
    "Design and ship secure backend services for high-trust environments.",
    "Build platform tooling and automation that improves team velocity.",
    "Translate architecture goals into reliable production systems.",
];

export const projects: Project[] = [
    {
        title: "Bleep Stream Chrome Extension",
        description: "Chrome extension that detects and blurs profanity and sexual content in real time. Filters text and images with ML-based moderation (CLIP), supports sensitivity settings and custom word filters, and allows hover-to-reveal. Auth and user state managed with Supabase.",
        skills: ["TypeScript", "React", "Plasmo", "Chrome Extensions", "ML", "Content Moderation", "Supabase"],
        image: bleepStream,
        link: "",
        type: "Application",
        isPrivate: true,
        featured: true,
        role: "Lead full-stack builder",
        impact: "Delivered a production-ready moderation extension with account sync and configurable sensitivity controls.",
        architectureTags: ["Browser Extension", "ML Moderation", "Supabase Auth"],
        walkthroughAvailable: true
    },
    {
        title: "Bleep OAuth Server",
        description: "Minimal FastAPI service that powers the Chrome extension OAuth popup flow. Extension-specific auth routes integrate Supabase OAuth providers for secure sign-in within Chrome extension constraints.",
        skills: ["Python", "FastAPI", "Supabase", "OAuth", "Docker"],
        image: oauthGraphic,
        link: "",
        type: "Application",
        isPrivate: true,
        role: "Backend engineer",
        impact: "Enabled reliable provider auth inside Chrome extension constraints through a dedicated OAuth flow service.",
        architectureTags: ["FastAPI", "OAuth", "Extension Auth"],
        walkthroughAvailable: true
    },
    {
        title: "Bleep Stripe Listener",
        description: "Node/Express service that handles Stripe Checkout, Customer Portal, and webhook events to sync subscription status with Supabase for the extension.",
        skills: ["Node.js", "Express", "Stripe", "Webhooks", "Supabase"],
        image: stripeGraphic,
        link: "",
        type: "Application",
        isPrivate: true,
        role: "Billing integration engineer",
        impact: "Automated subscription state sync with Stripe webhooks and reduced manual billing operations.",
        architectureTags: ["Express", "Stripe Webhooks", "Supabase"],
        walkthroughAvailable: true
    },
    {
        title: "Simordia Backend",
        description: "Backend for the Simordia application. It uses the SimiWord ML model and exposes a RESTful API for the Simordia game.",
        skills: ["Python", "Flask", "REST", "PostgreSQL", "OAuth", "WebSockets", "SQLAlchemy" ,"AWS"],
        image: simiWordBackEnd,
        link: "https://github.com/EuBeans/simi-word-back-end",
        type: "Application",
        isPrivate: false,
        year: 2022,
        role: "Backend engineer",
        impact: "Provided the core API and real-time features used by the Simordia gameplay experience.",
        architectureTags: ["Flask API", "WebSockets", "PostgreSQL"]
    },
    {
        title: "Polygon Contour V1",
        description: "A web application that allows users to draw polygons on a map and get the contour of the polygon.",
        image: polygonContourV1,
        skills: ["Python", "Algebra"],
        link: "https://github.com/EuBeans/PolygonContour",
        type: "Algorithm",
        isPrivate: false
    },
    {
        title: "League of Legends ML",
        description: "A Machine Learning project that predicts the outcome of a League of Legends game.",
        skills: ["Python", "Jupyter Notebook"],
        image: leagueOfLegendsMLGif,
        link: "https://github.com/EuBeans/LeagueOfLegendsMLWinRate",
        type: "Machine Learning",
        isPrivate: false
    },
    {
        title: "SimiWord ML Project",
        description: "Algorithms and natural language processing techniques to analyze the relationships between words and calculate the semantic distance between them",
        skills: ["Python", "Jupyter Notebook"],
        image: simiWordPNG,
        link: "https://github.com/EuBeans/SimiWordML",
        type: "Machine Learning",
        isPrivate: false
    },
    {
        title: "Parkeris React Native App",
        description: "A React Native app that allows users to find parking spots in the city of Ottawa.",
        image: parkeris,
        skills: ["React Native", "SpringBoot", "GraphQL", "GGS", "Microservice"],
        link: "",
        type: "Application",
        isPrivate: true,
        role: "Mobile + service contributor",
        impact: "Built parking search workflows with mobile UI and service integrations for city-scale use cases.",
        architectureTags: ["React Native", "GraphQL", "Microservices"],
        walkthroughAvailable: true
    },
    {
        title: "Portfolio Website",
        description: "This repository is my portfolio website source code: a terminal-themed React + TypeScript app showcasing my projects, experience, skills, and contact workflow.",
        skills: ["React", "Material UI", "TypeScript", "React Router"],
        image: portfolio,
        link: "https://github.com/EuBeans/portfolio",
        type: "Application",
        isPrivate: false,
        featured: true,
        role: "Designer + frontend engineer",
        impact: "Built a recruiter-focused portfolio with command-driven UX and accessible terminal navigation.",
        architectureTags: ["React", "TypeScript", "Terminal UX"]
    },
    {
        title: "3D Portfolio",
        description: "Interactive 3D portfolio built with Three.js, custom shaders, and animated scenes.",
        skills: ["Three.js", "WebGL", "GLSL", "GSAP", "TypeScript", "Webpack"],
        image: portfolio3d,
        link: "https://jean3dportfolio.web.app/",
        type: "Application",
        isPrivate: false,
        featured: true,
        role: "Creative frontend engineer",
        impact: "Designed an immersive interactive experience to showcase advanced graphics and motion skills.",
        architectureTags: ["Three.js", "WebGL", "Shaders"]
    },

    {
        title: "Obelix StoryBook",
        description: "A StoryBook that showcases the components used in the Parkeris React Native app.",
        image: storyBook,
        skills: ["React Native", "StoryBook", "TypeScript"],
        link: "",
        type: "Application",
        isPrivate: true,
        role: "Component library contributor",
        impact: "Improved design consistency and handoff speed through documented reusable components.",
        architectureTags: ["Storybook", "React Native", "Component System"],
        walkthroughAvailable: true
    },
    {
        title: "Polygon Contour V2",
        description: "An improved version of Polygon Contour V1. This version can handle better angles and more complex polygons.",
        image: polygonContourProject,
        skills: ["TypeScript", "Algebra"],
        link: "https://github.com/EuBeans/polygonContourV2",
        type: "Algorithm",
        isPrivate: false

    },
    {
        title: "Simordia Application",
        description: "The Simordia web game built in React and powered by the Simordia API.",
        image: simordiaFrontEnd,
        skills: ["TypeScript", "React", "Material UI", "Simordia API"],
        link: "https://github.com/EuBeans/simordia-front-end",
        type: "Application",
        isPrivate: false,
        featured: true,
        role: "Frontend engineer",
        impact: "Shipped the player-facing Simordia game interface powered by ML-backed API endpoints.",
        architectureTags: ["React SPA", "Game UI", "REST Integration"]

    }

]

export const WorkExperience: WorkExperienceEntry[] = [
    {
        title: "Software Engineer (Cybersecurity)",
        company: "Government of Canada",
        date: "August 2024 - Present",
        location: "Ottawa, Ontario",
        description: "Develop secure services and internal platforms in a high-trust environment. Design architectures for large programs and collaborate across engineering, operations, and support. \\nBuild Java and Go microservices deployed on Kubernetes, connected through RabbitMQ and S3-compatible storage. Manage infrastructure with Terraform and Helm, and ship hardened Docker images via Jenkins pipelines using minimal, secure build agents. \\nAuthor multiple Go-based Terraform providers, build internal tooling including a CLI with Picocli and GraalVM native binaries, and automate workflows with Bash and Python. \\nImplement unit and integration testing for services and tooling, and support observability with Grafana and Splunk. \\nMentor multiple co-op students.",
        icon:"work",
        skills: ["Java", "Spring Boot", "Go", "Kubernetes", "Docker", "Helm", "Terraform", "Jenkins", "Bitbucket", "RabbitMQ", "S3", "Bash", "Python", "CI/CD", "Microservices", "Testing", "Grafana", "Splunk", "Architecture"],
        highlights: [
            "Designed and shipped secure microservices used across large government programs.",
            "Built multiple internal Terraform providers and delivery tooling to improve platform velocity.",
            "Mentored co-op engineers while improving reliability through testing and observability."
        ],
        stack: ["Java", "Go", "Kubernetes", "Terraform", "Helm", "Jenkins", "RabbitMQ", "Grafana", "Splunk"]
    },
    {
        title: "Master's in Interdisciplinary AI (In Progress)",
        company: "University of Ottawa",
        date: "September 2024 - Present",
        location: "Ottawa, Ontario",
        description: "Graduate studies focused on applied, interdisciplinary AI, with coursework in cybersecurity, AI, and UI/UX.",
        icon:"school",
        skills: ["Machine Learning", "AI", "Research"],
        highlights: [
            "Building cross-domain AI expertise with practical focus on secure applications."
        ],
        stack: ["AI", "Machine Learning", "Cybersecurity", "UI/UX"]
    },
    {
        title: "B.A.Sc. Software Engineering",
        company: "University of Ottawa",
        date: "September 2018 - December 2023",
        location: "Ottawa, Ontario",
        description: "Completed a Bachelor's degree in Software Engineering.",
        icon:"school",
        skills: []
    },
    {
        title: "Software Engineer Intern",
        company: "IBwave Solutions",
        date: "May 2022 - August 2022",
        location: "Montreal, Quebec",
        description: "Worked on a team of 8 to develop new features and tools to customize fibre optic cables. \\nBuilt UI in React and backend services in C#, with REST-based communication. \\nCollaborated with project managers, improved system performance, and reviewed project specifications.",
        icon: "work",
        skills: ["React", "C#", "REST", "Typescript", "HTML", "CSS", "Git","PostgreSQL", "PostMan", "Jira", "Confluence"],
        highlights: [
            "Delivered cable customization features in a multi-disciplinary team of 8 engineers.",
            "Improved application performance while implementing new REST-driven workflows."
        ],
        stack: ["React", "C#", "REST", "PostgreSQL", "Jira"]
    },
    {
        title: "Software Developer Intern",
        company: "NetFore Systems",
        date: "May 2021 - August 2021",
        location: "Ottawa, Ontario",
        description: "Implemented RESTful API calls using React, improving UI performance. \\nDesigned and developed user interfaces using ReactJS, contributing to higher user satisfaction. \\nContributed to team meetings and provided regular updates on project progress, resulting in on-time delivery of projects.",
        icon: "work",
        skills: ["React", "Groovy", "REST", "Jira", "Confluence", "Git", "PostgreSQL"],
        highlights: [
            "Improved UI responsiveness while integrating RESTful data flows.",
            "Contributed to on-time feature delivery through active team planning and updates."
        ],
        stack: ["React", "REST", "PostgreSQL", "Jira"]
    },
    {
        title: "PROGRAMMER ANALYST",
        company: "University Of Ottawa",
        date: "September 2020 - December 2020",
        location: "Ottawa, Ontario",
        description: "Led development of multiple websites using HTML, JavaScript, AJAX, and JSON to transform mockups into functional web presences. \\nBuilt back-end components to integrate web services such as Google Analytics, improving traffic analysis. \\nMaintained websites with HTML, CSS, JavaScript, and jQuery to deliver a smooth user experience.",
        icon: "work",
        skills: [".NET", "C#", "HTML", "CSS", "JavaScript", "jQuery", "Git", "SQL"],
        highlights: [
            "Led implementation of multiple web properties from design mockups to production.",
            "Integrated analytics tooling to improve visibility into user traffic patterns."
        ],
        stack: [".NET", "C#", "JavaScript", "SQL"]

    },
    {
        title: "JUNIOR SOFTWARE DEVELOPER",
        company: "SSC Telecom Group",
        date: "January 2020 - May 2020",
        location: "Ottawa, Ontario",
        description: "Developed a Python script to benchmark HTTP servers and improve website performance. \\nConverted mockups into functional web experiences using HTML, JavaScript, AJAX, and JSON. \\nWorked with MySQL and backend frameworks such as Symfony to build efficient data layers. \\nIntegrated APIs including Apache HTTP Server and Google Analytics to expand site capabilities.",
        icon: "work",
        skills: ["Python", "HTML", "CSS", "JavaScript", "jQuery", "Git", "MySQL", "Apache HTTP Server", "AJAX"],
        highlights: [
            "Improved web performance by building HTTP benchmarking tooling in Python.",
            "Expanded site capabilities through backend integrations and analytics APIs."
        ],
        stack: ["Python", "MySQL", "JavaScript", "Apache HTTP Server"]
    },
    {
        title: "LEVEL ONE ANALYST",
        company: "Royal Canadian Mounted Police",
        date: "June 2019 to September 2019",
        location: "Ottawa, Ontario",
        description: "Developed troubleshooting and problem-solving skills through technical support for RCMP employees.\\nEffectively diagnosed and resolved issues through testing, expertise, and questioning. \\nProvided professional support to guide users through basic troubleshooting tasks",
        icon: "work",
        skills: ["PowerShell", "HTML","Troubleshooting", "Windows 10"],
        highlights: [
            "Resolved frontline technical incidents through structured troubleshooting workflows."
        ],
        stack: ["PowerShell", "Windows 10", "Troubleshooting"]
    }   
]

export const skillTableData = [
    {
        tableName: "Frameworks",
        tableData: ["SpringBoot", "React", "Angular", "NodeJs", "Express", "Flask", "Bootstrap", "Material UI", "JQuery"],   
    },
    {
    tableName: "Languages",
    tableData: ["Java", "Go", "Python", "C++", "C", "C#", "JavaScript", "TypeScript", "Kotlin"],
    },
    {
        tableName: "Tools",
        tableData: ["Git", "GitHub", "Docker", "Kubernetes", "Helm", "Terraform", "Jenkins", "Bitbucket", "RabbitMQ", "Vector", "Grafana", "Splunk", "Gradle", "Jira", "Confluence", "Picocli", "AWS", "Azure", "GCP", "Heroku", "Linux", "Windows", "MacOS", "Bash"],
    },
    {
    tableName: "Databases",
    tableData: ["MySQL", "PostgreSQL", "SQLite", "Firebase"],
    },
    {
    tableName: "Other",
    tableData: ["Agile", "Scrum", "Kanban", "REST", "GraphQL", "IaC", "DevOps", "OOP", "Functional Programming", "Data Structures", "Algorithms", "Design Patterns", "Clean Code"]
    }
]
export const codingLanguages = ["code in", 1000,"code in Java", 3000, "code in Go", 3000, "code in Python", 3000, "code in C++", 3000, "code in C", 3000,"code in C#", 3000, "code in JavaScript", 3000, "code in TypeScript", 3000, "code in Kotlin" ]

export const aboutMeDescription = "Hello and welcome to my portfolio! My name is Jean Pierre and I am a software engineer focused on cybersecurity and reliable backend systems. I currently work at the Government of Canada, where I build secure services and internal platforms and design architectures for large programs. \\nI work primarily with Java and Spring Boot on Kubernetes, with infrastructure and deployments managed through Terraform, Helm, Jenkins, and Bitbucket. I also build automation with Bash and Python, and have delivered Go-based services and a custom Terraform provider. I built internal tooling such as a CLI with Picocli and GraalVM for native binaries. \\nI am currently completing a Master's in Interdisciplinary AI at the University of Ottawa, exploring practical applications of AI across domains. \\nOutside of work, I build keyboards, go to the gym, run, play video games, and stay active with volleyball, soccer, basketball, and skiing. I am always looking for a new hobby to improve myself."

export const demoStatuses: DemoStatus[] = [
    {
        title: "polygon-contour",
        status: "planned",
        ctaLabel: "Check source + writeup",
        ctaCommand: "/projects",
        note: "Interactive walkthrough is being refreshed with clearer geometry controls."
    },
    {
        title: "simordia-word-game",
        status: "private",
        ctaLabel: "Request walkthrough",
        ctaCommand: "/contact",
        note: "Private demo available on request with architecture and implementation overview."
    }
];

export const contactLinks = {
    github: "https://github.com/EuBeans",
    email: "mailto:jeansfeir@hotmail.ca",
};

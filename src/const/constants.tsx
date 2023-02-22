import polygonContourV1  from '../assets/images/polygonContourV1.png';
import polygonContourProject  from '../assets/images/polygonContourProject.png';
import leagueOfLegendsMLGif  from '../assets/images/leagueOfLegendsMLGif.gif';
import portfolio from '../assets/images/portfolio.png';
import parkeris from '../assets/images/parkeris.png';
import storyBook from '../assets/images/storyBook.gif';

export const projects = [
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
        description: "A Machine Learning project that predict the outcome of a League of Legends game.",
        skills: ["Python", "Jupyter Notebook"],
        image: leagueOfLegendsMLGif,
        link: "https://github.com/EuBeans/LeagueOfLegendsMLWinRate",
        type: "Machine Learning",
        isPrivate: false
    },
    {
        title: "Parkeris React Native App",
        description: "A React Native app that allows users to find parking spots in the city of Ottawa.",
        image: parkeris,
        skills: ["React Native", "SpringBoot", "Graphql", "GGS", "Microservice"],
        link: "",
        type: "Application",
        isPrivate: true
    },
    {
        title: "Portfolio Website",
        description: "A website that showcases my skills, experiences, projects and more.",
        skills: ["React", "Material UI", "Typescript", "React Router"],
        image: portfolio,
        link: "https://github.com/EuBeans/portfolio",
        type: "Application",
        isPrivate: false
    },

    {
        title: "Obelix StoryBook",
        description: "A StoryBook that showcases the components used in the Parkeris React Native app.",
        image: storyBook,
        skills: ["React Native", "StoryBook", "Typescript"],
        link: "",
        type: "Application",
        isPrivate: true
    },
    {
        title: "Polygon Contour V2",
        description: "An improved version of Polygon Contour V1. This version can handle better angles and more complex polygons.",
        image: polygonContourProject,
        skills: ["Typescript", "Algebra"],
        link: "",
        type: "Algorithm",
        isPrivate: true

    }

]

export const WorkExperience = [
    {
        title: "Software Engineer Bachelor Degree",
        company: "University of Ottawa",
        date: "September 2018 - December 2023",
        location: "Ottawa, Ontario",
        description: "Recently finished my last semester, and graduating this spring.",
        icon:"school",
        skills: []
    },
    {
        title: "Software Engineer Intern",
        company: "IBwave Solutions",
        date: "May 2022 - August 2022",
        location: "Montreal, Quebec",
        description: "Worked on a team of 8 to develop a new feature and tools in order to customize Fibre Obtic cables. \\nReact was used for frontend and C# for backend programming, and have designed user interfaces and utilized REST for communication. \\nCollaborated with project managers, improved system performance, and reviewed project specifications",
        icon: "work",
        skills: ["React", "C#", "REST", "Typescript", "HTML", "CSS", "Git","PostgreSQL", "PostMan", "Jira", "Confluence"]
    },
    {
        title: "Software Developper Intern",
        company: "NetFore Systems",
        date: "May 2021 - August 2021",
        location: "Ottawa, Ontario",
        description: "Implemented RESTful API calls using React, resulting in a 15% increase in user interface performance. \\nDesigned and developed user interfaces using ReactJS, which led to a 20% increase in user satisfaction based on surveys. \\nIn addition, contributed to team meetings and provided regular updates on project progress, resulting in on-time delivery of projects with a 95% success rate.",
        icon: "work",
        skills: ["React", "Groovy", "REST", "Jira", "Confluence", "Git", "PostgreSQL"]
    },
    {
        title: "PROGRAMMER ANALYST",
        company: "University Of Ottawa",
        date: "September 2020 - December 2020",
        location: "Ottawa, Ontario",
        description: "Led the development of multiple websites utilizing HTML, JavaScript, AJAX, and JSON to transform mockups into fully functional web presences. \\nDeveloped back-end components to integrate websites with web services such as Google Analytics, resulting in a 20% increase in website traffic analysis. \\nUtilized proficiency in HTML, CSS, JavaScript, and jQuery to code and maintain websites, resulting in a smooth and intuitive user experience.",
        icon: "work",
        skills: [".NET", "C#", "HTML", "CSS", "JavaScript", "jQuery", "Git", "SQL"]

    },
    {
        title: "JUNIOR SOFTWARE DEVELOPER",
        company: "SSC Telecom Group",
        date: "January 2020 - May 2020",
        location: "Ottawa, Ontario",
        description: "Developed a Python script to benchmark HTTP servers, resulting in a 10% increase in website performance. \\nLed website development, converting mockups into functional web presence using HTML, JavaScript, AJAX, and JSON. \\nAcquired experience in using MySQL and backend frameworks such as Symphony to develop efficient databases. \\nSuccessfully integrated various APIs such as Apache HTTP server and Google Analytics into the framework, resulting in a 20% increase in website functionality.",
        icon: "work",
        skills: ["Python", "HTML", "CSS", "JavaScript", "jQuery", "Git", "MySQL", "Apache HTTP Server", "AJAX"]
    },
    {
        title: "LEVEL ONE ANALYST",
        company: "Royal Canadian Mounted Police",
        date: "June 2019 to September 2019",
        location: "Ottawa, Ontario",
        description: "Developed troubleshooting and problem-solving skills through technical support for RCMP employees.\\nEffectively diagnosed and resolved issues through testing, expertise, and questioning. \\nProvided professional support to guide users through basic troubleshooting tasks",
        icon: "work",
        skills: ["PowerShell", "HTML","Troubleshooting", "Windows 10"]
    }   
]

export const skillTableData = [
    {
        tableName: "Frameworks",
        tableData: ["SpringBoot", "React", "Angular", "NodeJs", "Express", "Flask", "Bootstrap", "Material UI", "JQuery"],   
    },
    {
    tableName: "Languages",
    tableData: ["Java", "Python", "C++", "C", "C#", "JavaScript", "TypeScript", "Kotlin"],
    },
    {
        tableName: "Tools",
        tableData: ["Git", "GitHub","Docker", "Gradle", "Jira", "Confluence", "AWS", "Azure", "GCP", "Heroku","Windows", "MacOS"],
    },
    {
    tableName: "Databases",
    tableData: ["MySQL", "PostgreSQL", "SQLite", "Firebase"],
    },
    {
    tableName: "Other",
    tableData: ["Agile", "Scrum", "Kanban", "REST", "GraphQL", "OOP", "Functional Programming", "Data Structures", "Algorithms", "Design Patterns", "Clean Code"]
    }
]
export const codingLanguages = ["code in", 1000,"code in Java", 3000, "code in Python", 3000, "code in C++", 3000, "code in C", 3000,"code in C#", 3000, "code in JavaScript", 3000, "code in TypeScript", 3000, "code in Kotlin" ]

export const aboutMeDescription = "Hello and welcome to my portfolio website! My name is Jean Pierre and I am a recent graduate from the University of Ottawa with a Bachelor's degree in Engineering for Software Engineering. \\nAs a passionate and driven individual, I aspire to become a Full Stack Developer and am constantly working towards this goal. I am always striving to learn new technologies and to keep up with the latest trends and developments in the industry, so that I can provide innovative solutions and create efficient and effective software. \\nAside from my passion for technology, I am also a very creative individual. I love to think outside the box and approach problems from unique angles, which allows me to find creative solutions that are both functional and visually appealing. \\nWhen I am not working on software projects, you can often find me playing sports. I am an avid volleyball, soccer, basketball, and ski enthusiast, and I love to challenge myself both mentally and physically. I believe that staying active and healthy is important for both personal and professional growth, and I always make time for physical activity in my busy schedule. \\nThank you for taking the time to learn a little bit more about me. Please feel free to explore my portfolio and reach out to me if you have any questions or would like to discuss potential opportunities."

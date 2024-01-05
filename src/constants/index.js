import { barclays, solar } from "../assets/images";
import {
    bitbucket,
    car,
    contact,
    cpp,
    css,
    estate,
    express,
    git,
    github,
    html,
    java,
    javascript,
    linkedin,
    mongodb,
    mysql,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cpp,
        name: "cpp",
        type: "Language",
    },
    {
        imageUrl: bitbucket,
        name: "Bitbucket",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "Barclays",
        icon: barclays,
        iconBg: "#accbe1",
        date: "June 2023 - August 2023",
        points: [
            "Developed a utility to create Java Pojo classes from a Json string using Spring Boot and React js and Customized the utility to meet the specific needs of 2 distinct teams.",
            "Integrated Resilience4j in Mobile Service get APIs to restrict the number of calls to 20 with a limit-refresh-period of 10ms and integrated Retry mechanism which returns a cached output after 3 failed API calls.",
            "Successfully increased the code coverage of Identity Verification Files from 67% to an impressive 91% by applying Agile principles.",
            "Identified and rectified 88 code smells and vulnerabilities within the Mobile Service Code Base, significantly improving code quality.",
        ],
    },
    {

        title: "Full Stack Web Developer Intern",
        company_name: "Solar Secure Solutions",
        icon: solar,
        iconBg: "#fbc3bc",
        date: "September 2021 - November 2022",
        points: [
            "Designed a Covid Info Web page which showed information about different stats such as new cases, recovered cases,etc country wise.",
            "Crafted a quiz website and a Food Availability page, employing vanilla JavaScript, HTML, and CSS. Integrated REST APIs for real-time data, showcasing versatility in front-end development and content retrieval.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ritikraj018',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ritik-raj18/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'MovieJar',
        description: 'Developed a web application that shows movie information such as ratings, actors and other information including official videos which can be directly accessed on the web app.',
        link: 'https://movie-jar.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Blog Website',
        description: 'Created a full-stack website using Ejs and Node.js, that allows users to create blog posts and allowe them to do CRUD operations.',
        link: 'https://github.com/ritikraj018/Blog-Website',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Automatic Number Plate Detection',
        description: 'Developed a deep learning model for automatic number plate detection of a vehicle which then extracts the vehicle number using NLP.',
        link: 'https://github.com/ritikraj018/Automatic-Number-Plate-Detection',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Information Visualization',
        description: 'Visualization of crypto currency data using Tableau Desktop and visualization of migration data using D3.',
        link: 'https://ritikraj018.github.io/18CSE301J_RA2011003010334/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Global Terrorism Index',
        description: 'Visualization of Global Terrorism Data using Tableau Desktop. It contains different graphs and charts including a map which shows the terrorism data according to the time and loaction.',
        link: 'https://ritikraj018.github.io/Global-Terrorism-Index/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Keeper',
        description: 'This project is a Keeper app built using ReactJS. The app can be useful to keep a track of your day-to-day works to do. Notes can be created and deleted.',
        link: 'https://github.com/ritikraj018/Keeper',
    }
];
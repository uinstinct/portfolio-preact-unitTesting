import { GoMarkGithub } from 'react-icons/go';
import { BiLink } from 'react-icons/bi';
import { FaPenNib } from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';
import { SiReact, SiNextDotJs, SiPostgresql, SiMongodb } from 'react-icons/si';
import { GrTechnology } from 'react-icons/gr';
import { DiDjango, DiJavascript1 } from "react-icons/di";

export const glossIcon = {
    // links
    "github": GoMarkGithub,
    "app": BiLink,
    "blog": FaPenNib,

    // stacks
    "nodejs": GrNode,
    "reactjs": SiReact,
    "nextjs": SiNextDotJs,

    "expressjs": DiJavascript1,
    "mongodb": SiMongodb,
    "postgresql": SiPostgresql,
    "django": DiDjango,

    "other": GrTechnology,
}

export const glossColour = {
    // links
    "github": "#C4F1F9",
    "app": "#9ae6b4",
    "blog": "#feb2b2",

    // stacks
    "nodejs": "red.400",
    "reactjs": "blue.400",
    "nextjs": "gray.400",

    "expressjs": "teal.200",
    "mongodb": "green.400",
    "postgresql": "blue.600",
    "django": "gray.500",

    "other": "black",
}

export default [
    {
        heading: "Frontend",
        topics: [
            {
                name: "NextJS",
                progress: 80,
            },
            {
                name: "ReactJS",
                progress: 90,
            },
        ]
    },
    {
        heading: "Backend",
        topics: [
            {
                name: "ExpressJS",
                progress: 90,
            },
            {
                name: "Django Rest Framework",
                progress: 65,
                icon: "django"
            },
        ]
    }
];
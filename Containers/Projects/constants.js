import { GoMarkGithub } from 'react-icons/go';
import { BiLink } from 'react-icons/bi';
import { FaPenNib } from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';
import { SiReact, SiNextDotJs, SiPostgresql, SiMongodb, SiRedux, SiReactrouter,SiMarkdown } from 'react-icons/si';
import { GrTechnology } from 'react-icons/gr';
import {CgWebsite} from 'react-icons/cg';
import {DiDjango} from 'react-icons/di';


export const glossIcon = {
    // links
    "github": GoMarkGithub,
    "app": BiLink,
    "blog": FaPenNib,

    // stacks
    "nodejs": GrNode,
    "expressjs": GrNode,
    "reactjs": SiReact,
    "redux": SiRedux,
    "nextjs": SiNextDotJs,
    "react router": SiReactrouter,

    "django": DiDjango,
    "postgresql": SiPostgresql,
    "mongodb": SiMongodb,

    "website": CgWebsite,
    "markdown": SiMarkdown,

    "other": GrTechnology,
}

export const glossColour = {
    // links
    "github": "#C4F1F9",
    "app": "#9ae6b4",
    "blog": "#feb2b2",

    // stacks
    "nodejs": "orange",
    "expressjs": "orange",
    "reactjs": "red",
    "redux": "cyan",
    "nextjs": "cyan",
    "react router": "purple",

    "django": "purple",
    "postgresql": "blue",
    "mongodb": "teal",

    "website": "yellow",
    "markdown": "pink",
}

export default [
    {
        items: [
            {
                title: "Code Rush",
                description: "Code Rush is a competitive coding platform. It is open source coding platform supporting 6 coding languages.",
                imgSrc: "https://res.cloudinary.com/gamersinstinct7/image/upload/v1604304531/portfolio/Code%20Rush/cr-1_pd3aak.jpg"
            },
            {
                title: "Code and solve questions",
                description: "It is built on the latest standard of the web - the JAM Stack. It has an awesome ACE editor integrated into it. Live feedbacks on submissions are provided. Competitors can check their score on the leaderboard.",
                imgSrc: "https://res.cloudinary.com/gamersinstinct7/image/upload/v1604304530/portfolio/Code%20Rush/cr-2_ttkmqx.jpg"
            },
            {
                title: "Beat your competitors",
                description: "There a lot of questions of all categories - easy, stacks, trickster, etc. An admin panel is also integrated in the backend of code rush. Live user count and comments for discussions are also enabled.",
                imgSrc: "https://res.cloudinary.com/gamersinstinct7/image/upload/v1604304531/portfolio/Code%20Rush/cr-3_mct9ev.jpg"
            },
        ],
        links: [
            {
                provider: "github",
                link: "https://github.com/aditya-mitra/code-rush",
            },
            {
                provider: "app",
                link: "https://code-rush.vercel.app/"
            }
        ],
        stacks: ["nextjs", "nodejs", "mongodb", "markdown",],
    },
    {
        items: [
            {
                title: "Character Card Builder",
                description: "Character Card Builder is a web app that lets you make awesome looking cards on the site.",
                imgSrc: "https://res.cloudinary.com/gamersinstinct7/image/upload/v1604062891/portfolio/Character%20Card%20Builder/CCB_create_1_hzcd34.png",
            },
            {
                title: "Character Card Builder",
                description: "It has a ton of features such as an awesome SEARCH feature and a fabulous DARK mode built and integrated into it.",
                imgSrc: "https://res.cloudinary.com/gamersinstinct7/image/upload/v1604261385/portfolio/Character%20Card%20Builder/CCB_Search_3_wgxikr.jpg",
            },
            {
                title: "Character Card Builder",
                description: "It also has a LIVE card creator that lets you see the card you as soon as you type. It was my first project that utilized postgresql and redux.",
                imgSrc: "https://res.cloudinary.com/gamersinstinct7/image/upload/v1604062660/portfolio/Character%20Card%20Builder/CCB_chars_2_w32zn9.png",
            },
            
        ],
        links: [
            {
                provider: "github",
                link: "https://github.com/aditya-mitra/card_builder"
            },
            {
                provider: "app",
                link: "https://github.com/aditya-mitra/card_builder"
            }
        ],
        stacks: ["nodejs", "reactjs", "postgresql", "redux",],
    },
    {
        items: [
            {
                title: "Whatster",
                description: "WhatsTer is a Chat bot created using Twilio's Messaging API for Whatsapp. If you would like to store messages from your chats in whatsapp itself, this bot can come very handy.",
                imgSrc: "https://res.cloudinary.com/gamersinstinct7/image/upload/v1604068045/portfolio/Whatster/Whatster_chats_1_dy9iv5.png",
            },
            {
                title: "Whatster",
                description: "It has a lot of features integrated into it. It has chat based mail service, image recognition, content saving feature all built to a single app, yet this bot is very simple to use.",
                imgSrc: "https://res.cloudinary.com/gamersinstinct7/image/upload/v1604067858/portfolio/Whatster/Whatster_login_lskciw.png",
            },
            {
                title: "Whatster",
                description: "Whatster will save your messages on its database and let you secure them with your account. It will send you an OTP for you to login into its webapp.",
                imgSrc: "https://res.cloudinary.com/gamersinstinct7/image/upload/v1604067858/portfolio/Whatster/Whatster_website_og7dmd.png",
            },
            
        ],
        links: [
            {
                provider: "github",
                link: "https://github.com/aditya-mitra/whatster",
            },
            {
                provider: "app",
                link: "https://whatster.web.app/",
            },
            {
                provider: "blog",
                link: "https://dev.to/adityamitra/whatster-the-chatbot-i-built-for-twilio-9ok",
            }
        ],
        stacks: ["expressjs", "reactjs", "twilio", "mongodb",  "react router"],
    },
    {
        items: [
            {
                title: "Socio Students",
                description: "A web application created for students to get social and know each other better.",
                imgSrc: "https://res.cloudinary.com/gamersinstinct7/image/upload/v1604307197/portfolio/Socio%20Students/ssw-1-min_hfolhp.png",
            },
            {
                title: "Socio Students",
                description: "Students can view others profile and edit or delete their profiles. It is a website built with django",
                imgSrc: "https://res.cloudinary.com/gamersinstinct7/image/upload/v1604306984/portfolio/Socio%20Students/ssw-2_iwys6k.png",
            },
        ],
        links: [
            {
                provider: "github",
                link: "https://github.com/uinstinct/socioStudentWin",
            },
            {
                provider: "app",
                link: "https://djangoaditya.pythonanywhere.com/",
            },
        ],
        stacks: ["django","website"],
    },

];
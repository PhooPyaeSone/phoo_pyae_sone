import {defineStore} from "pinia";
import type {ProjectStore} from "../types/typings";

// @ts-ignore
const images: Record<string, string> = import.meta.glob("../assets/featured/*.{png,jpg}", {as: 'url', eager: true});

export const useProjectStore = defineStore<string, ProjectStore>("projectStore", () => {
    const projects = [
        {
            id: 2,
            name: "Find a Coach",
            image: images["../assets/featured/coaches.png"],
            description:
                "This is an apps where we can find and contact software developers",
            tech: ["Vue.js", "TailwindCSS"],
            link: "https://coach-apps.web.app/coaches",
        },
        {
            id: 6,
            name: "MSJOB",
            image: images["../assets/featured/hanako1.png"],
            description: `A job search project designed for job seekers in China and Myanmar.`,
            tech: ["Laravel", "Angularjs", "Bootstrap"],
            link: "https://drive.google.com/drive/folders/1pwBGBAZuWj8EUCwUxvoX5twfNF_z6aoC?usp=sharing",
            featured: true,
        },
        {
            id: 3,
            name: "iZayCho",
            image: images["../assets/featured/izaycho.png"],
            description:
                "iZayCho is a marketplace application that host many online shop on a single place. ",
            tech: ["Laravel", "Angularjs", "Bootstrap"],
            link: "https://drive.google.com/drive/folders/1Z7Ha5KixPJEtxNwFRJqQ3UDzBEq7FLWx?usp=sharing",
            featured: true,
        },
        {
            id: 4,
            name: "Soteria VLearn Apps",
            image: images["../assets/featured/vLearn.jpg"],
            description:
                "Soteria vLearn apps is the E-learning apps for security officer at TwinRock Company.The courses are mainly related to the security firm",
            tech: ["JS", "Node.js", "MongoDB", "Heroku"],
            link: "https://steprimo.com/android/en/app/com.asgardianlabs.elearning/",
        },
        {
            id: 1,
            name: "Thors Apps",
            image: images["../assets/featured/thor.jpg"],
            description:"THOR is an all-in-one Security Operations Management Portal built for the Singaporean Security Agency from tracking patrols to visitor registration,creating incident reports to managing employee leave - manage your operations and deployment from a single integrated portal,available on both iOS and Android.",
            tech: ["Vue.js", "Pinia", "TailwindCSS"],
            link: "https://play.google.com/store/apps/details?id=com.asgardianlabs.thor&hl=en&gl=US",
            featured: false,
        },
        
        // {
        //     id: 5,
        //     name: "Advice Generator",
        //     image: images["../assets/featured/advice-gen.png"],
        //     description:
        //         "A very simple Advice Generator, which gives advice with a click!",
        //     tech: ["HTML", "CSS", "JS", "REST APIs"],
        //     link: "https://advice-generator-ap.vercel.app/",
        // },
    ];

    const grave = [
        {
            id: 1,
            name: "Music Player",
            image: images["../assets/featured/case_changer.jpg"],
            description:
                "A simple music player with Javascript",
            tech: ["Javascript"],
            link: "https://github.com/PhooPyaeSone/MusicPlayer",
        },
        {
            id: 2,
            name: "Stop Watch",
            image: images["../assets/featured/tic_tac_toe.jpg"],
            description:
                "A Stop Watch Project developed with JS",
            tech: ["Javascript"],
            link: "https://github.com/PhooPyaeSone/Stopwatch",
        },
        {
            id: 3,
            name: "Task Management",
            image: images["../assets/featured/calc.jpg"],
            description:
                "A task management apps with flutter",
            tech: ["Flutter", "Provider"],
            link: "https://github.com/PhooPyaeSone/TaskManagement",
        },
    ]

    return {
        getAllProjects: projects.slice(),
        getFeaturedProjects: projects.filter((project) => project.featured),
        getGraveProjects: grave.slice(),
    };
})


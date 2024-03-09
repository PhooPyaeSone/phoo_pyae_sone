import {defineStore} from "pinia";
import type {WorkStore} from "~/types/typings";

export const useWorkStore = defineStore<string, WorkStore>("workStore", () => {
    const works = [
        {
            id: 1,
            name: "TwinRock Pte Ltd,Singapore",
            position: "Remote Flutter Developer",
            from: "2021",
            to: "2022",
            link: "https://asgardianlabs.com/",
        },
        {
            id: 2,
            name: "MS Management Consulting",
            position: "Full Stack Laravel Developer",
            from: "2019",
            to: "2021",
            link: "https://web.facebook.com/MSmanagementconsultingmdy",
        },
        {
            id: 3,
            name: "Bits Manager",
            position: "Full Stack Laravel Developer",
            from: "2017",
            to: "2019",
            link: "https://www.bits-manager.com/",
        }
    ]

    return {
        getAllWorks: works.slice()
    }
})
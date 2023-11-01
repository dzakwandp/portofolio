import { defineStore } from "pinia";
import kpmain from "@/assets/image/kapitalprint/kpmain.png";
import siotmain from "@/assets/image/simoniot/siot_main.png";
import vislapmain from "@/assets/image/vislap/vislap_main.png"

export const useProjectStore = defineStore("project", {
  state: () => ({
    project: [
      {
        id: 0,
        name: "Kapital Printing Website",
        image: kpmain,
        year: "2023",
        client: "Kapital Printing",
        link: "/works/kapital_printing",
        stack: "Vue, Express, Tailwind"
      },
      {
        id: 1,
        name: "Simon IoT Web",
        image: siotmain,
        year: "2022",
        client: "Universitas Diponegoro",
        link: "/works/simon_iot",
        stack: "Vue, Vuetify"
      },
      {
        id: 2,
        name: "Vislap Web",
        image: vislapmain,
        year: "2023",
        client: "Vislap",
        link: "/works/vislap",
        stack: "Vue, Vuetify"
      },
      {
        id: 3,
        name: "Simon IoT Web",
        image: siotmain,
        year: "2022",
        client: "Universitas Diponegoro",
        stack: "Vue, Express, Tailwind"
      },
    ],
  }),
});

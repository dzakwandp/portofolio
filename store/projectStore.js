import { defineStore } from "pinia";
import kpmain from "@/assets/image/kapitalprint/kpmain.png";
import siotmain from "@/assets/image/simoniot/siot_main.png";
import vislapmain from "@/assets/image/vislap/vislap_main.png";
import sicampingmain from "@/assets/image/sicamping/sicampingmain.png";
import simpatisanmain from "@/assets/image/simpatisanys/simpatisanys_main.png";
import beasiswamain from "@/assets/image/beasisways/beasisways_main.png";
import kasirguelandmain from "@/assets/image/kasirgueland/kasirgueland_main.png";
import kasirgueappmain from "@/assets/image/kasirgueapp/kasirgueapp_main.png";

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
        stack: "Vue, Express, Tailwind",
      },
      {
        id: 1,
        name: "Simon IoT Web",
        image: siotmain,
        year: "2022",
        client: "Universitas Diponegoro",
        link: "/works/simon_iot",
        stack: "Vue, Vuetify",
      },
      {
        id: 2,
        name: "Vislap Web",
        image: vislapmain,
        year: "2023",
        client: "Vislap",
        link: "/works/vislap",
        stack: "Vue, Vuetify",
      },
      {
        id: 3,
        name: "Sicamping",
        image: sicampingmain,
        year: "2023",
        client: "RS PKU Muhammadiyah Gamping",
        link: "/works/sicamping",
        stack: "Vue, Vuetify",
      },
      {
        id: 4,
        name: "Simpatisan YS",
        image: simpatisanmain,
        year: "2024",
        client: "PT. Mahesa Jenar Semarang",
        link: "/works/simpatisanys",
        stack: "Vue, Tailwind",
      },
      {
        id: 5,
        name: "Beasiswa YS",
        image: beasiswamain,
        year: "2024",
        client: "PT. Mahesa Jenar Semarang",
        link: "/works/beasisways",
        stack: "Vue, Tailwind",
      },
      {
        id: 6,
        name: "Kasirgue App",
        image: kasirgueappmain,
        year: "2024",
        client: "Kasirgue",
        link: "/works/kasirgueapp",
        stack: "Nuxt, Tailwind",
      },
      {
        id: 7,
        name: "Kasirgue Landing",
        image: kasirguelandmain,
        year: "2024",
        client: "Kasirgue",
        link: "/works/kasirgueland",
        stack: "Nuxt, Tailwind",
      },
    ],
  }),
});

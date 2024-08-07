<template lang="">
  <div>
    <!-- head -->
    <div class="md:mb-24">
      <div>
        <div
          class="font-roboto text-4xl md:text-[9rem] leading-none md:leading-tight uppercase">
          Hello World.
        </div>
      </div>
      <div class="flex font-roboto text-xl md:text-3xl md:ml-2">
        My name is Dzakwan. Frontend Developer born in Sleman based in Semarang,
        Indonesia. I build functional, responsive, and accessible websites which
        will be the face of your company.
      </div>
    </div>

    <!-- about me -->
    <div id="about-me" class="md:flex py-10">
      <div class="flex-col mb-6 md:mb-0 md:w-5/12 md:sticky md:top-20 h-max">
        <div class="font-roboto font-regular text-xl">About Me</div>
        <div class="text-sm text-gray-700 dark:text-gray-400">
          Get to know about Me.
        </div>
      </div>

      <div class="flex-col md:w-6/12">
        <div
          class="w-1/2 md:w-1/4 rounded-xl group aspect-square relative overflow-hidden bg-gray-400 mb-4"
          :style="{ backgroundImage: `url(${ProfileImg})` }"
          style="
            background-size: cover;
            background-position: center center;
            opacity: 1;
            transform: none;
          "></div>
        <div class="h-min mb-10">
          <Transition name="text">
            <div
              v-if="!isDarkTheme"
              class="font-roboto font-light text-3xl md:text-4xl text-[#1a202c]">
              Day Coder,
            </div>
            <div
              v-else
              class="font-roboto font-light text-3xl md:text-4xl text-[#f6f6f6]">
              Night Gamer.
            </div>
          </Transition>
        </div>

        <div class="font-roboto font-light text-base mb-4">
          Haven't too long in the Frontend Development, I begin my journey at
          the Q4 of 2022 with my Bachelor's final project with Vue.js 2 and
          Vuetify stack. After that, I'm trying to do more project for My
          portofolio which you could find in My "Project" section. Now I'm
          focused with Frontend Development with Vue.js and Nuxt.js, still
          learning with "learning by doing" method. But if expected, I'm open to
          learn another stack to fullfil your requirements.
        </div>
        <div class="font-roboto font-light text-base mb-4">
          I have done some paid project that bring some challenge to me. From
          that experience, I have learn a lot about teamwork, effective works,
          and creativity which I will never stop just only with them.
        </div>
        <div class="font-roboto font-light text-base">
          Spent almost my free time for gaming like MOBA, Racing Sim,
          Strategies, etc. My motto "Experience from Experiments" means you will
          never know if you haven't tried yet. It's okay to fail, keep failing
          until no more fail comes to you.
        </div>
      </div>
    </div>

    <!-- experience -->
    <div id="experience" class="md:flex py-10">
      <div class="flex-col mb-6 md:mb-0 md:w-5/12 md:top-20 h-max">
        <div class="font-roboto font-regular text-xl">Experience</div>
        <div class="text-sm text-gray-700 dark:text-gray-400">
          Just My little work experience.
        </div>
      </div>
      <div class="flex flex-col md:w-6/12 font-roboto">
        <!-- item loop -->
        <div v-for="item in expData" :key="item.id">
          <Accordion class="mb-2 w-full">
            <template v-slot:title>
              <div class="flex w-full text-start justify-between">
                <div class="w-2/4 font-light text-xs md:text-base">
                  {{ item.comp }}
                </div>
                <div class="w-1/4 font-light text-xs md:text-base">
                  {{ item.time }}
                </div>
                <div class="w-1/4 font-light text-xs md:text-base">
                  {{ item.pos }}
                </div>
              </div>
            </template>
            <template v-slot:content>
              <p class="font-roboto pt-4 font-light text-xs md:text-base">
                {{ item.desc }}
              </p>
              <div v-if="item.stack !== ''" class="flex mt-4 items-center">
                <div class="mr-4">Stacks:</div>
                <div
                  class="rounded-lg dark:bg-[#f6f6f6] bg-[#1a202c] text-[#f6f6f6] dark:text-[#1a202c] p-2 text-sm">
                  {{ item.stack }}
                </div>
              </div>
            </template>
          </Accordion>
          <div class="bg-current h-px w-full mb-4"></div>
        </div>
        <p class="font-roboto pt-4 font-light text-emerald-600 text-xs md:text-base">
          I'm actively seeking opportunities to collaborate within a team
          environment, where I can contribute my expertise and continue to learn
          and grow.
        </p>
      </div>
    </div>
    <div class="hidden md:flex bg-current h-px w-full mb-4"></div>

    <!-- email -->
    <div id="email" class="md:flex py-10">
      <div class="flex-col mb-6 md:mb-0 md:w-5/12">
        <div class="text-sm text-gray-700 dark:text-gray-400">
          Ready to start a project?
        </div>
        <div class="font-roboto font-regular text-xl">Let's collaborate!</div>
      </div>

      <div class="flex-col md:w-6/12">
        <div class="font-roboto font-light text-l">Contact me at:</div>
        <div class="flex justify-start w-full">
          <a
            href="mailto:diegodzakwan@gmail.com"
            class="font-roboto text-xl group transition duration-300">
            diegodzakwan@gmail.com
            <span
              class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-current"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Accordion from "@/components/accordion.vue";
import ProfileImg from "@/assets/image/profile.png";

import expData from "@/assets/experience.json";

import { useThemeStore } from "@/store/themeStore";
export default {
  components: { Accordion },
  data() {
    return {
      ProfileImg: ProfileImg,
      expData: expData,
    };
  },
  computed: {
    isDarkTheme: () => useThemeStore().darkTheme,
  },
};
</script>
<style>
.text-enter-active,
.text-leave-active {
  transition: all 1s;
  margin-top: -20px;
}
.text-enter-from,
.text-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

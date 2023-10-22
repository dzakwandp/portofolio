<template lang="">
  <div>
    <!-- head -->
    <div class="md:mb-24">
      <div>
        <div class="flex gap-1 items-center py-2">
          <div class="relative flex h-7 w-7 items-center justify-center z-0">
            <div
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></div>
            <div
              class="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></div>
          </div>
          <p class="text-gray-700 dark:text-gray-400">
            Available for new opportunities
          </p>
        </div>
        <h1
          class="font-roboto text-4xl md:text-[9rem] leading-none md:leading-tight uppercase">
          Experience From Experiments.
        </h1>
      </div>
      <div class="flex justify-between items-end pb-8">
        <p class="text-gray-700 dark:text-gray-400 hidden md:block">
          2023 Portfolio ©
        </p>
        <p
          class="text-gray-700 dark:text-gray-400 text-base max-w-md text-right">
          — From the peace and calm of Sleman's creative energy, I'm a Software
          Engineer on a mission to innovate. Keep failing until you are no more
          failure.
        </p>
      </div>
    </div>

    <!-- projects -->
    <div id="projects" class="py-10 md:mt-28">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="col-span-1 md:col-span-2">
          <NuxtLink :to="projects[0].link">
            <div
              class="w-full rounded-xl group aspect-video relative overflow-hidden text-2xl bg-blue-100 text-black cursor-pointer lg:aspect-[12/5]"
              :style="{ backgroundImage: `url(${projects[0].image})` }"
              style="
                background-size: cover;
                background-position: center center;
                opacity: 1;
                transform: none;
              ">
              <div
                class="absolute top-0 left-0 w-full lg:-top-1/4 lg:group-hover:top-0 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-200">
                <div
                  class="flex justify-between items-start lg:items-center lg:hover:translate-y-0 p-2 lg:p-4">
                  <div
                    class="flex flex-col lg:flex-row gap-2 items-start lg:items-center">
                    <div
                      class="rounded-full px-4 py-1 bg-black/30 backdrop-blur text-white text-sm">
                      {{ projects[0].year }}
                    </div>
                    <div
                      class="rounded-full px-4 py-1 bg-black/30 backdrop-blur text-white text-sm hidden md:block">
                      {{ projects[0].name }}
                    </div>
                  </div>
                  <div
                    class="rounded-full px-4 py-1 bg-black/30 backdrop-blur text-white text-sm">
                    {{ projects[0].client }}
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div
          v-for="item in homeProject"
          :key="item.index"
          class="col-span-1 md:col-span-1">
          <NuxtLink :to="item.link"
            ><div
              class="w-full rounded-xl group aspect-video relative overflow-hidden text-2xl bg-blue-100 text-black cursor-pointer lg:aspect-video"
              :style="{ backgroundImage: `url(${item.image})` }"
              style="
                background-size: cover;
                background-position: center center;
                opacity: 1;
                transform: none;
              ">
              <div
                class="absolute top-0 left-0 w-full lg:-top-1/4 lg:group-hover:top-0 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-200">
                <div
                  class="flex justify-between items-start lg:items-center lg:hover:translate-y-0 p-2 lg:p-4">
                  <div
                    class="flex flex-col lg:flex-row gap-2 items-start lg:items-center">
                    <div
                      class="rounded-full px-4 py-1 bg-black/30 backdrop-blur text-white text-sm">
                      {{ item.year }}
                    </div>
                    <div
                      class="rounded-full px-4 py-1 bg-black/30 backdrop-blur text-white text-sm hidden md:block">
                      {{ item.name }}
                    </div>
                  </div>
                  <div
                    class="rounded-full px-4 py-1 bg-black/30 backdrop-blur text-white text-sm">
                    {{ item.client }}
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="flex justify-end w-full">
        <NuxtLink to="/works">
          <div
            class="px-4 py-2 rounded-xl backdrop-blur text-black bg-white/30 dark:text-white text-sm dark:bg-black/30 mt-4 border border-black dark:border-white w-fit cursor-pointer lg:mt-8">
            All Works
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- about me -->
    <div id="about-me" class="md:flex py-10">
      <div class="flex-col mb-6 md:mb-0 md:w-5/12">
        <div class="text-sm text-gray-700 dark:text-gray-400">A little bit</div>
        <div class="font-roboto font-regular text-xl">About Me</div>
      </div>

      <div class="flex-col md:w-6/12">
        <div class="font-roboto font-light text-3xl md:text-4xl mb-10">
          Graduated from Teknik Komputer of Universitas Diponegoro. Passionated
          with Frontend Development, Gaming too.
        </div>
        <div class="font-roboto font-light text-l">
          Haven't too long in the Frontend Development, I begin my journey at
          the Q4 of 2022 with my Bachelor's final project. Now I'm focused with
          Frontend Development with Vue.js and Nuxt.js, still learning with
          "learning by doing" method. I have done some paid project that you
          could saw at my "Project" section. Spent almost my free time for
          gaming like MOBA, Racing Sim, Strategies, etc. My motto "Experience
          from Experiments" means you will never know if you haven't tried yet.
          It's okay to fail, keep failing until no more fail comes to you.
        </div>
        <div class="flex justify-start w-full">
          <NuxtLink to="/about">
            <div
              class="px-4 py-2 rounded-xl backdrop-blur text-black bg-white/30 dark:text-white text-sm dark:bg-black/30 mt-4 border border-black dark:border-white w-fit cursor-pointer lg:mt-8">
              More about Me
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

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
import { useProjectStore } from "@/store/projectStore";
export default {
  data() {
    return {
      projects: useProjectStore().project,
    };
  },
  computed: {
    homeProject() {
      return this.projects.filter(
        (project) => project.id > 0 && 3 > project.id
      );
    },
  },
};
</script>
<style></style>

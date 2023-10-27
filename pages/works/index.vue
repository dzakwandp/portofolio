<template lang="">
  <div>
    <!-- head -->
    <div class="md:mb-24">
      <div>
        <h1
          class="font-roboto text-4xl md:text-[9rem] leading-none md:leading-tight uppercase">
          My Experiments.
        </h1>
      </div>
      <div class="flex justify-between items-end pb-8">
        <p class="text-gray-700 dark:text-gray-400 hidden md:block">
          2023 Portfolio ©
        </p>
        <p
          class="text-gray-700 dark:text-gray-400 text-base max-w-md text-right">
          — "All life is an experiment. The more experiments, you make the
          better."
        </p>
      </div>
    </div>

    <!-- projects -->
    <div id="projects" class="py-10 md:mt-28">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="item in projects"
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
};
</script>
<style lang=""></style>

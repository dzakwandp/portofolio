<template lang="">
  <div class="flex flex-col md:flex-row py-10">
    <!-- left side -->
    <div class="flex-col w-full md:w-3/12 md:sticky h-max top-20">
      <NuxtLink class="flex items-center" to="/works">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        <div class="font-roboto text-current ml-3">Back</div>
      </NuxtLink>

      <div class="my-6 font-roboto text-sm">
        <div class="font-medium">Company</div>
        <div class="font-light">{{ project[4].client }}</div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Year</div>
          <div>{{ project[4].year }}</div>
        </div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Stack</div>
          <div>{{ project[4].stack }}</div>
        </div>
      </div>
    </div>

    <!-- right side -->
    <div class="flex-col w-full md:w-5/12 items-start">
      <div
        class="w-full rounded-xl aspect-video relative overflow-hidden bg-cover bg-blue-100 text-black lg:aspect-video"
        :style="{ backgroundImage: `url(${project[4].image})` }"></div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Summary</div>
        <div class="text-base mt-4 leading-relaxed">
          This website contains database for Semarang citizen that commited to
          support YS. This website is built with Vue and Tailwind.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Background</div>
        <div class="text-base mt-4 leading-relaxed">
          Refactoring of the YS's databases from manually entry with Microsoft
          Excel to online databases that could entried from anywhere. The entry
          officer was spreaded over Semarang. The data was used for political
          campaign.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Design Process</div>
        <div class="text-xl font-medium mt-4">Goals</div>
        <div class="text-base mt-4 leading-relaxed">
          The expected outcome of this project is a web-based application that
          can be used to be databases that could be accessed via online. The
          application should be able to:
        </div>
        <ul class="mt-2 list-decimal list-inside">
          <li>Input citizen data</li>
          <li>Access the data</li>
          <li>Access the entry officer statistic</li>
          <li>Export the data</li>
        </ul>
        <div class="text-xl font-medium mt-4">System Spesification</div>
        <div class="text-base mt-4 leading-relaxed">
          This website was built using Vue and Tailwind for styling, all data is
          obtained from the API endpoint and then processed to be presented to
          the user. There is a form to entry the data, had a edit and delete
          feature for mistaken entry. Filter based on citizen location and
          search feature to ease viewing the data.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Results</div>
        <div class="text-xl font-medium mt-4">Login Page</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[0]})` }"></div>
        <div class="text-xl font-medium mt-4">Home Page</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[1]})` }"></div>
        <div class="text-xl font-medium mt-4">Detail Page</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[2]})` }"></div>
        <div class="text-xl font-medium mt-4">Statistic Page</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[3]})` }"></div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Tech Stack</div>
        <ul class="mt-2 list-disc list-inside">
          <li>VueJS</li>
          <li>Tailwind</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import login from "@/assets/image/simpatisanys/simpatisanys_login.png";
import home from "@/assets/image/simpatisanys/simpatisanys_home.png";
import detail from "@/assets/image/simpatisanys/simpatisanys_detail.png";
import statistik from "@/assets/image/simpatisanys/simpatisanys_statistik.png";

import { useProjectStore } from "@/store/projectStore";
export default {
  data() {
    return {
      project: useProjectStore().project,
      image: [login, home, detail, statistik],
    };
  },
};
</script>
<style lang=""></style>

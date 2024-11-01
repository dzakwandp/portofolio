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
        <div class="font-light">{{ project.client }}</div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Year</div>
          <div>{{ project.year }}</div>
        </div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Stack</div>
          <div>{{ project.stack }}</div>
        </div>
      </div>
    </div>

    <!-- right side -->
    <div class="flex-col w-full md:w-5/12 items-start">
      <div
        class="w-full rounded-xl aspect-video relative overflow-hidden bg-cover bg-blue-100 text-black lg:aspect-video"
        :style="{ backgroundImage: `url(${project.image})` }"></div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Summary</div>
        <div class="text-base mt-4 leading-relaxed">
          This website is built to create and print receipt, track selling
          records, and arrange the goods sold in the canteen. This is a
          collaborating project, the frontend built with Vue and Vuetify.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Background</div>
        <div class="text-base mt-4 leading-relaxed">
          During that time the sale of canteen and memorandum was recorded
          manually, it caused a difference in the amount of money between
          records and reality. Based on this, the canteen asks to make a system
          of recording goods sales.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Design Process</div>
        <div class="text-xl font-medium mt-4">Goals</div>
        <div class="text-base mt-4 leading-relaxed">
          The expected outcome of this project is a web-based application that
          can be used to create receipt and create selling records. The
          application should be able to:
        </div>
        <ul class="mt-2 list-decimal list-inside">
          <li>Create and print receipt</li>
          <li>Create and review selling records</li>
          <li>Manage goods in the system</li>
        </ul>
        <div class="text-xl font-medium mt-4">System Spesification</div>
        <div class="text-base mt-4 leading-relaxed">
          This website was built using Vue and Vuetify, there is only one role
          on this website that is responsible for making a memorandum,
          management of goods sold, and views sales reports on the application.
          This website runs locally on a cashier computer.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Results</div>
        <div class="text-xl font-medium mt-4">Home Page</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[0]})` }"></div>
        <div class="text-xl font-medium mt-4">Product Page</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[1]})` }"></div>
        <div class="text-xl font-medium mt-4">Dashboard</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[2]})` }"></div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Tech Stack</div>
        <ul class="mt-2 list-disc list-inside">
          <li>VueJS</li>
          <li>Vuetify</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import home from "@/assets/image/sicamping/sicamping_main.png";
import prod from "@/assets/image/sicamping/sicamping_prod.png";
import report from "@/assets/image/sicamping/sicamping_sell.png";
import { useProjectStore } from "@/store/projectStore";
export default {
  data() {
    return {
      project: useProjectStore().project.find((item)=> item.link === "/works/sicamping"),
      image: [home, prod, report],
    };
  },
};
</script>
<style lang=""></style>

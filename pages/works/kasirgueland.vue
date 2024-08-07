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
        <div class="font-light">{{ project[7].client }}</div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Year</div>
          <div>{{ project[7].year }}</div>
        </div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Stack</div>
          <div>{{ project[7].stack }}</div>
        </div>
      </div>
    </div>

    <!-- right side -->
    <div class="flex-col w-full md:w-5/12 items-start">
      <div
        class="w-full rounded-xl aspect-video relative overflow-hidden bg-cover bg-blue-100 text-black lg:aspect-video"
        :style="{ backgroundImage: `url(${project[7].image})` }"></div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Summary</div>
        <div class="text-base mt-4 leading-relaxed">
          This website contains company profiles Kasirgue, contain brand
          information, pricing, and contact information. This website is built
          with Nuxt and Vuetify.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Background</div>
        <div class="text-base mt-4 leading-relaxed">
          Kasirgue is a company that provide customable POS or cashier system.
          They need a company profile or landing page to introduce themself
          through internet.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Design Process</div>
        <div class="text-xl font-medium mt-4">Goals</div>
        <div class="text-base mt-4 leading-relaxed">
          The expected outcome of this project is a web-based application that
          can be used to be the face of company in digital media. The
          application should be able to:
        </div>
        <ul class="mt-2 list-decimal list-inside">
          <li>Show the information about company</li>
          <li>Show pricing information about the product</li>
          <li>Show contact of company</li>
        </ul>
        <div class="text-xl font-medium mt-4">System Spesification</div>
        <div class="text-base mt-4 leading-relaxed">
          This website was built using Nuxt and Tailwind for styling, all data
          is obtained from the API endpoint and then processed to be presented
          to the user. Nuxt was using for the support of SEO feature. Responsive
          also the main feature here.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Results</div>
        <div class="text-xl font-medium mt-4">Home Page</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[0]})` }"></div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Tech Stack</div>
        <ul class="mt-2 list-disc list-inside">
          <li>NuxtJS</li>
          <li>Tailwind</li>
        </ul>
        <div class="text-base font-base mt-2">
          For the result, you could check it
          <a
            href="https://kasirgue.com"
            target="_blank"
            class="font-semibold underline"
            >here.</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import home from "@/assets/image/kasirgueland/kasirgueland.png";

import { useProjectStore } from "@/store/projectStore";
export default {
  data() {
    return {
      project: useProjectStore().project,
      image: [home],
    };
  },
};
</script>
<style lang=""></style>

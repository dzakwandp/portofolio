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
          Yamaha Deta Denpasar is an official dealer website designed to provide customers with an easy and interactive way to browse Yamaha motorcycle models, check prices, and contact sales representatives. Built with Nuxt and Tailwind CSS.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Background</div>
        <div class="text-base mt-4 leading-relaxed">
          As one of the prominent Yamaha dealers in Bali, Yamaha Deta Denpasar needed an online presence to showcase their latest products, promotions, and facilitate online inquiries. The website serves as a digital showroom for potential buyers.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Design Process</div>
        <div class="text-xl font-medium mt-4">Goals</div>
        <div class="text-base mt-4 leading-relaxed">
          The main goals for this project included:
        </div>
        <ul class="mt-2 list-decimal list-inside">
          <li>Showcasing motorcycle categories and models clearly</li>
          <li>Providing easy access to pricing and promo information</li>
          <li>Seamless integration with WhatsApp for quick sales contact</li>
          <li>Fast loading times and SEO optimization</li>
        </ul>
        <div class="text-xl font-medium mt-4">System Specification</div>
        <div class="text-base mt-4 leading-relaxed">
          The website was built using Nuxt for server-side rendering and improved SEO, combined with Tailwind CSS for rapid and responsive UI development. It features dynamic product listings and direct communication channels with sales agents.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Results</div>
        <div class="text-xl font-medium mt-4">Home Page</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${project.image})` }"></div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Tech Stack</div>
        <ul class="mt-2 list-disc list-inside">
          <li>Nuxt</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
      <div class="text-base font-base mt-2">
        You can check the live website at
        <a
          href="https://yamahadetadenpasar.com"
          target="_blank"
          class="font-semibold underline"
          >yamahadetadenpasar.com</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import { useProjectStore } from "@/store/projectStore";

export default {
  data() {
    return {
      project: useProjectStore().project.find((item) => item.link === "/works/yamahadetadenpasar"),
    };
  },
};
</script>
<style lang=""></style>

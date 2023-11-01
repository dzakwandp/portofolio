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
        <div class="font-light">{{ project[0].client }}</div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Year</div>
          <div>{{ project[0].year }}</div>
        </div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Stack</div>
          <div>{{ project[0].stack }}</div>
        </div>
      </div>
    </div>

    <!-- right side -->
    <div class="flex-col w-full md:w-5/12 items-start">
      <div
        class="w-full rounded-xl aspect-video relative overflow-hidden bg-cover bg-blue-100 text-black lg:aspect-video"
        :style="{ backgroundImage: `url(${project[0].image})` }"></div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Summary</div>
        <div class="text-base mt-4 leading-relaxed">
          This website is contain some information of Kapital Printing like
          company profile, product details, contact information, and blog post.
          This website is built with MEVN (Mongo, Express, Vue, Node) stack.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Background</div>
        <div class="text-base mt-4 leading-relaxed">
          Kapital Printing is a company operating in the printing and
          accessories sector located in Sleman, DIY. The problem with this
          company is that they don't have a presence in digital media so it is
          still difficult to market their products in digital media.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Design Process</div>
        <div class="text-xl font-medium mt-4">Goals</div>
        <div class="text-base mt-4 leading-relaxed">
          The expected outcome of this project is a web-based application that
          can be used to manage student grades. The application should be able
          to:
        </div>
        <ul class="mt-2 list-decimal list-inside">
          <li>Manage the products listed in website</li>
          <li>Manage the post in website's blog</li>
          <li>Explain the company with the website</li>
        </ul>
        <div class="text-xl font-medium mt-4">System Spesification</div>
        <div class="text-base mt-4 leading-relaxed">
          This website is built with Express for backend and Vue for frontend.
          "admin" is the only role for this website, the role has responsibility
          to create, delete, and edit all item/post that listed in the website.
          This website consists of a main application, dashboard application and
          backend application which are built separately, the three applications
          are connected by an API controlled by the backend. This website also
          support responsive design for mobile users.
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
          <li>Tailwind</li>
          <li>Vuetify (for Dashboard)</li>
          <li>Express</li>
          <li>Mongo DB</li>
        </ul>
        <div class="text-base font-base mt-2">
          For the result, you could check it
          <a href="https://kapitalprinting.vercel.app" target="_blank" class="font-semibold underline">here.</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import home from "@/assets/image/kapitalprint/kphome.png";
import product from "@/assets/image/kapitalprint/kpprod.png";
import dashboard from "@/assets/image/kapitalprint/kpdash.png";
import { useProjectStore } from "@/store/projectStore";
export default {
  data() {
    return {
      project: useProjectStore().project,
      image: [home, product, dashboard],
    };
  },
};
</script>
<style lang=""></style>

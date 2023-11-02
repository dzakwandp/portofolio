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
        <div class="font-light">{{ project[2].client }}</div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Year</div>
          <div>{{ project[2].year }}</div>
        </div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Stack</div>
          <div>{{ project[2].stack }}</div>
        </div>
      </div>
    </div>

    <!-- right side -->
    <div class="flex-col w-full md:w-5/12 items-start">
      <div
        class="w-full rounded-xl aspect-video relative overflow-hidden bg-cover bg-blue-100 text-black lg:aspect-video"
        :style="{ backgroundImage: `url(${project[2].image})` }"></div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Summary</div>
        <div class="text-base mt-4 leading-relaxed">
          This website contains company profiles and simple e-commerce for
          purchasing spare parts by Vislap Laptop. This website is built with
          Vue and Vuetify.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Background</div>
        <div class="text-base mt-4 leading-relaxed">
          Vislap is a company selling computer spare parts, they asked for a
          website that contains a company profile as well as being able to sell
          online (e commerce).
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Design Process</div>
        <div class="text-xl font-medium mt-4">Goals</div>
        <div class="text-base mt-4 leading-relaxed">
          The expected outcome of this project is a web-based application that
          can be used to be the face of company in digital media and place for
          customers to buy items via online. The application should be able to:
        </div>
        <ul class="mt-2 list-decimal list-inside">
          <li>Manage the products listed in website</li>
          <li>Manage selling reports</li>
          <li>Manage technical service</li>
          <li>Manage technical service reports</li>
          <li>Explain the company with the website</li>
        </ul>
        <div class="text-xl font-medium mt-4">System Spesification</div>
        <div class="text-base mt-4 leading-relaxed">
          This website was built using Vue and Vuetify for styling, all data is
          obtained from the API endpoint and then processed to be presented to
          the user. There is a product filter on the shopping page to make it
          easier for users to choose items according to type. e-commerce
          payments use Midway as a payment gateway. There is a dashboard
          application that admins and technicians use to manage content, view
          reports, and carry out user-related activities on the website.
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
        <div class="text-xl font-medium mt-4">Service Page</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[2]})` }"></div>
        <div class="text-xl font-medium mt-4">Cart Page</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[3]})` }"></div>
        <div class="text-xl font-medium mt-4">Dashboard Page</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[4]})` }"></div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Tech Stack</div>
        <ul class="mt-2 list-disc list-inside">
          <li>VueJS</li>
          <li>Vuetify</li>
        </ul>
        <div class="text-base font-base mt-2">
          For the result, you could check it
          <a
            href="https://vislap.vercel.app"
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
import home from "@/assets/image/vislap/vislap_home.png";
import product from "@/assets/image/vislap/vislap_shop.png";
import service from "@/assets/image/vislap/vislap_service.png";
import cart from "@/assets/image/vislap/vislap_cart.png";
import dashboard from "@/assets/image/vislap/vislap_dash.png";

import { useProjectStore } from "@/store/projectStore";
export default {
  data() {
    return {
      project: useProjectStore().project,
      image: [home, product, service, cart, dashboard],
    };
  },
};
</script>
<style lang=""></style>

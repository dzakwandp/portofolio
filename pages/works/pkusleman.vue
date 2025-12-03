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
          This website contains company profiles of PKU Muhammadiyah Sleman,
          contains information, doctor list, doctor schedule, services, and
          contact information. This website is built with Vue and Tailwind.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Background</div>
        <div class="text-base mt-4 leading-relaxed">
          PKU Muhammadiyah Sleman is a hospital that provide medical services.
          They need a company profile or landing page to introduce themself
          through internet. The patient need to know about the hospital
          information, doctor list, doctor schedule, services, and contact
          information. This website also contain online registration system that
          separated from this project.
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
          <li>Show doctor list and doctor schedule</li>
          <li>Show services</li>
          <li>Show contact of hospital</li>
        </ul>
        <div class="text-xl font-medium mt-4">System Spesification</div>
        <div class="text-base mt-4 leading-relaxed">
          This website was built using Vue and Tailwind for styling, for the
          landing page is using Inspira UI, and the dashboard is using shadcn
          UI, all data is obtained from the API endpoint and then processed to
          be presented to the user. Some of the data displayed also based on the
          SIMRS database.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Results</div>
        <div class="text-xl font-medium mt-4">Home Page</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[0]})` }"></div>
        <div class="text-xl font-medium mt-4">Doctor List</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[1]})` }"></div>
        <div class="text-xl font-medium mt-4">Room List</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[2]})` }"></div>
        <div class="text-xl font-medium mt-4">Services</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[3]})` }"></div>
        <div class="text-xl font-medium mt-4">Dashboard</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[4]})` }"></div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Tech Stack</div>
        <ul class="mt-2 list-disc list-inside">
          <li>Vue</li>
          <li>Express</li>
          <li>Tailwind</li>
          <li>Inspira UI</li>
          <li>shadcn UI</li>
        </ul>
        <div class="text-base font-base mt-2">
          For the result, you could check it
          <a
            href="https://pkusleman.com"
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
import home from "@/assets/image/pkusleman/pkuslemanhome.png";
import dashboard from "@/assets/image/pkusleman/pkuslemandashboard.png";
import doctor from "@/assets/image/pkusleman/pkuslemandokter.png";
import kamar from "@/assets/image/pkusleman/pkuslemankamar.png";
import service from "@/assets/image/pkusleman/pkuslemanlayanan.png";

import { useProjectStore } from "@/store/projectStore";
export default {
  data() {
    return {
      project: useProjectStore().project.find(
        (item) => item.link === "/works/pkusleman"
      ),
      image: [home, doctor, kamar, service, dashboard],
    };
  },
};
</script>
<style lang=""></style>

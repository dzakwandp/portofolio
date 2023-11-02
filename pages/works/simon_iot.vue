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
        <div class="font-light">{{ project[1].client }}</div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Year</div>
          <div>{{ project[1].year }}</div>
        </div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Stack</div>
          <div>{{ project[1].stack }}</div>
        </div>
      </div>
    </div>

    <!-- right side -->
    <div class="flex-col w-full md:w-5/12 items-start">
      <div
        class="w-full rounded-xl aspect-video relative overflow-hidden bg-cover bg-blue-100 text-black lg:aspect-video"
        :style="{ backgroundImage: `url(${project[1].image})` }"></div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Summary</div>
        <div class="text-base mt-4 leading-relaxed">
          This website was built as an element of the vanamei shrimp pond water
          quality monitoring system. This website is my first job as a frontend
          developer.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Background</div>
        <div class="text-base mt-4 leading-relaxed">
          Diponegoro University is collaborating with one of the pond farmer
          groups in the Mororejo region to build a water quality monitoring
          system for vanamei shrimp ponds against the background of the problem
          of farmers having to monitor water quality manually.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Design Process</div>
        <div class="text-xl font-medium mt-4">Goals</div>
        <div class="text-base mt-4 leading-relaxed">
          The expected outcome of this project is a web-based application that
          can be used to manage and monitor the water quality of pond. The
          application should be able to:
        </div>
        <ul class="mt-2 list-decimal list-inside">
          <li>Manage the users</li>
          <li>Manage the pond</li>
          <li>Monitor the water quality</li>
        </ul>
        <div class="text-xl font-medium mt-4">System Spesification</div>
        <div class="text-base mt-4 leading-relaxed">
          The image below is the architecture of the shrimp pond water quality
          monitoring system
        </div>
        <div
          class="w-full rounded-xl bg-contain bg-blue-100 text-black aspect-[15/8]"
          :style="{ backgroundImage: `url(${image[0]})` }"></div>
        <div class="text-base mt-4 leading-relaxed">
          The above diagram is a representation of the overall shrimp pond water
          quality monitoring system that has been created. In short, this system
          includes data collection by pH, TDS (density), Turbidity, DO (Oxygen),
          and Temperature sensors, then this sensor data is collected by the
          Arduino Uno microcontroller board and then sent to the Gateway
          point-to-point using the LoRa Shield module. Once it reaches the
          Gateway, the data is then sent to the database server using the MQTT
          (Mosquitto) protocol. The database is also integrated with an API, so
          the data displayed on the application and website can be accessed
          through the API. This website works by utilizing the API produced by
          the backend, both in presenting data in graphic form, as well as farm
          and user management functions
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Results</div>
        <div class="text-xl font-medium mt-4">Pond List</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[1]})` }"></div>
        <div class="text-xl font-medium mt-4">Graph Data</div>
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
        <div class="text-base font-base mt-2">
          For the result, you could check it
          <a
            href="https://simon.ce.undip.ac.id"
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
import arch from "@/assets/image/simoniot/arch.png";
import detail from "@/assets/image/simoniot/siot_detail.png";
import graph from "@/assets/image/simoniot/siot_graph.png";
import { useProjectStore } from "@/store/projectStore";
export default {
  data() {
    return {
      project: useProjectStore().project,
      image: [arch, detail, graph],
    };
  },
};
</script>
<style lang=""></style>

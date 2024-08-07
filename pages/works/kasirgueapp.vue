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
        <div class="font-light">{{ project[6].client }}</div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Year</div>
          <div>{{ project[6].year }}</div>
        </div>
        <div class="md:mt-6 mt-2">
          <div class="font-medium">Stack</div>
          <div>{{ project[6].stack }}</div>
        </div>
      </div>
    </div>

    <!-- right side -->
    <div class="flex-col w-full md:w-5/12 items-start">
      <div
        class="w-full rounded-xl aspect-video relative overflow-hidden bg-cover bg-blue-100 text-black lg:aspect-video"
        :style="{ backgroundImage: `url(${project[6].image})` }"></div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Summary</div>
        <div class="text-base mt-4 leading-relaxed">
          This website is built to create and print receipt, track selling
          records, arrange the goods, manage stock and buying, and profit-loss
          report. This is a collaborating project, the frontend built with Nuxt
          and Tailwind.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Background</div>
        <div class="text-base mt-4 leading-relaxed">
          Kasirgue is a POS and Cashier System that provide solution for mistake
          probability of manual sales record. this app had selling, buying,
          stocks, and goods integrated record for minimizing mistake in shop
          bookkeeping.
        </div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Design Process</div>
        <div class="text-xl font-medium mt-4">Goals</div>
        <div class="text-base mt-4 leading-relaxed">
          The expected outcome of this project is a web-based application that
          can be used to create selling, buying, stock, and goods records. The
          application should be able to:
        </div>
        <ul class="mt-2 list-decimal list-inside">
          <li>Create and print receipt</li>
          <li>Create and review selling records</li>
          <li>Manage goods in the system</li>
          <li>Manage stock in the system</li>
          <li>Create and review buying records</li>
          <li>View profit-loss report</li>
        </ul>
        <div class="text-xl font-medium mt-4">System Spesification</div>
        <div class="text-base mt-4 leading-relaxed">
          This website was built using Nuxt and Tailwind, there is still only
          one role on this website that is responsible for making a memorandum,
          management of goods sold, buying goods, and views sales and buying
          reports on the application. This website runs online to support the
          accessibility feature.
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
        <div class="text-xl font-medium mt-4">Stock</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[2]})` }"></div>
        <div class="text-xl font-medium mt-4">Supplier</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[3]})` }"></div>
        <div class="text-xl font-medium mt-4">Pembelian</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[4]})` }"></div>
        <div class="text-xl font-medium mt-4">Pembelian</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[5]})` }"></div>
        <div class="text-xl font-medium mt-4">Laba Rugi</div>
        <div
          class="w-full rounded-xl bg-cover bg-blue-100 text-black aspect-[16/8]"
          :style="{ backgroundImage: `url(${image[6]})` }"></div>
      </div>

      <div class="font-roboto mt-10">
        <div class="text-3xl font-medium">Tech Stack</div>
        <ul class="mt-2 list-disc list-inside">
          <li>Nuxt</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div class="text-base font-base mt-2">
        For the result, you could check it or inquire at
        <a
          href="https://kasirgue.com"
          target="_blank"
          class="font-semibold underline"
          >here.</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import home from "@/assets/image/kasirgueapp/kasirgueapp_home.png";
import prod from "@/assets/image/kasirgueapp/kasirgueapp_barang.png";
import stock from "@/assets/image/kasirgueapp/kasirgueapp_stock.png";
import supplier from "@/assets/image/kasirgueapp/kasirgueapp_supplier.png";
import pembelian from "@/assets/image/kasirgueapp/kasirgueapp_pembelian.png";
import penjualan from "@/assets/image/kasirgueapp/kasirgueapp_penjualan.png";
import report from "@/assets/image/kasirgueapp/kasirgueapp_labarugi.png";
import { useProjectStore } from "@/store/projectStore";
export default {
  data() {
    return {
      project: useProjectStore().project,
      image: [home, prod, stock, supplier, pembelian, penjualan, report],
    };
  },
};
</script>
<style lang=""></style>

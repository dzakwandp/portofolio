<template>
  <nav class="bg-[#F6F6F6] dark:bg-[#1a202c] p-4 -mx-6 fixed w-full top-0 z-10">
    <div class="mx-auto flex justify-between items-center">
      <!-- title -->
      <div class="flex-row">
        <NuxtLink to="/" class="font-roboto font-regular text-xl"
          >Dzakwan Diego</NuxtLink
        >
        <div class="text-sm text-gray-700 dark:text-gray-400">
          Frontend Developer
        </div>
      </div>
      <!-- links -->
      <div class="hidden md:flex text-gray-700 dark:text-gray-400">
        <NuxtLink to="/" class="mx-4">Home</NuxtLink>
        <NuxtLink to="/works" class="mx-4">Works</NuxtLink>
      </div>
      <!-- socials and dark togle -->
      <div class="hidden md:flex items-center">
        <div class="flex-row mr-4">
          <div class="text-right text-gray-700 dark:text-gray-400">Social</div>
          <div class="flex items-center">
            <!-- github -->
            <a
              href="https://github.com/dzakwandp"
              target="_blank"
              class="text-gray-500 hover:text-gray-700 dark:hover:text-white dark:text-gray-400 mr-2">
              <svg
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
            <!-- linkedin -->
            <a
              href="https://linkedin.com/in/dzakwandp"
              target="_blank"
              class="text-gray-500 hover:text-gray-700 dark:hover:text-white dark:text-gray-400">
              <svg
                class="h-6 w-6"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                  fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </div>
        <button @click="toggleTheme">
          <!-- dark to light -->
          <div v-if="isDarkTheme">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5">
              <path
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </div>
          <!-- light to dark -->
          <div v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#1a202c"
              class="w-5 h-5">
              <path
                fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </button>
      </div>
      <!-- button for responsive menu -->
      <div class="fixed md:hidden right-6 top-6">
        <button @click="toggleTheme">
          <!-- dark to light -->
          <div v-if="isDarkTheme">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5">
              <path
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </div>
          <!-- light to dark -->
          <div v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#1a202c"
              class="w-5 h-5">
              <path
                fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </button>
        <button
          :class="{ hidden: closeButton }"
          @click="
            (showMobileMenu = !showMobileMenu),
              (closeButton = !closeButton),
              (menuButton = !menuButton)
          ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <button
          :class="{ hidden: menuButton }"
          @click="
            (showMobileMenu = !showMobileMenu),
              (menuButton = !menuButton),
              (closeButton = !closeButton)
          ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <!-- mobile menu -->
      <Transition>
        <div
          class="bg-black flex-auto items-center px-6 absolute h-screen w-full top-18 md:hidden"
          v-show="showMobileMenu">
          <div
            class="my-4"
            v-for="link in links"
            :key="link.name"
            :to="link.route"
            @click="
              (showMobileMenu = false),
                (menuButton = true),
                (closeButton = false)
            ">
            <router-link :to="link.route" class="text-xl hover:text-aqua">{{
              link.name
            }}</router-link>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
<script>
import { useThemeStore } from "@/store/themeStore";

export default {
  data() {
    return {
      showMobileMenu: false,
      menuButton: true,
      closeButton: false,
    };
  },
  computed: {
    isDarkTheme: () => useThemeStore().darkTheme,
  },
  methods: {
    toggleTheme() {
      useThemeStore().toggleTheme();
    },
  },
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

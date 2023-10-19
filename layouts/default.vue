<template>
  <div
    :class="{ dark: isDarkTheme, light: !isDarkTheme }"
    class="h-full px-6 pt-24">
    <Navbar />
    <NuxtPage> </NuxtPage>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import { useThemeStore } from "@/store/themeStore";

export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  computed: {
    isDarkTheme: () => useThemeStore().isDarkTheme,
  },
};
</script>

<style>
/* Your layout-specific styles here */
.light {
  background-color: #f6f6f6;
  color: #1a202c;
}
/* Dark theme styles */
.dark {
  background-color: #1a202c;
  color: #ffffff;
}
</style>

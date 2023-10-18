import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    darkTheme: false,
  }),
  actions: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme;
      localStorage.setItem("darkTheme", this.darkTheme.toString()); // Save to localStorage
    },
  },
  getters: {
    isDarkTheme: (state) => state.darkTheme,
  },
});

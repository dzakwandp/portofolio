// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/themes.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  // buildModules: [
  //   [
  //     "@nuxtjs/google-fonts",
  //     {
  //       families: {
  //         Roboto: {
  //           wght: [100,300,400,500,700,900],
  //         },
  //       },
  //       subsets: ["latin"],
  //       display: "swap",
  //       prefetch: false,
  //       preconnect: false,
  //       preload: false,
  //       download: true,
  //       base64: false,
  //     },
  //   ],
  // ],
});

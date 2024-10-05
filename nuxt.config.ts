// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "nuxt-auth-utils",
    "@vee-validate/nuxt",
    "nuxt-lucide-icons",
    "nuxt-icon",
    "nuxt-headlessui",
    "@morev/vue-transitions/nuxt",
  ],

  tailwindcss: {
    exposeConfig: true,
  },
  headlessui: { prefix: "H" },

  colorMode: {
    classSuffix: "",
  },

  imports: {
    imports: [{
      from: "tailwind-variants",
      name: "tv",
    }, {
      from: "tailwind-variants",
      name: "VariantProps",
      type: true,
    }, {
      from: "vue-sonner",
      name: "toast",
      as: "useSonner"
    }],
  },

  build: {
    transpile: ["vue-sonner"]
  }
});
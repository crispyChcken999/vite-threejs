// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    "@/plugins/element-plus",
    { src: "@/plugins/three.js", ssr:false },
  ],
  css: ["element-plus/dist/index.css"],
});

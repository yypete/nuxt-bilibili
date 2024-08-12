// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-04-03",
  // 开启调试工具
  devtools: { enabled: true },
  // 应用组件库模块
  modules: ["@vant/nuxt"],
});

<script setup lang="ts">
useSeoMeta({
  title: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
  description:
    "哔哩哔哩(bilibili.com)是国内知名的视频弹幕网站,这里有及时的动漫新番,活跃的ACG氛围,有创意的Up主。大家可以在这里找到许多欢乐。",
  keywords:
    "Bilibili,哔哩哔哩,哔哩哔哩动画,哔哩哔哩弹幕网,弹幕视频,B站,弹幕,字幕,AMV,MAD,MTV,ANIME,动漫,动漫音乐,游戏,游戏解说,二次元,游戏视频",
});
useHead({
  meta: [
    {
      name: "referrer",
      content: "no-referrer",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtPage keepalive="max:10" />
    <!-- keepalive 缓存页面 最大10级 -->
    <!-- NuxtPage 用于页面路由 首页为index文件中的index.vue-->
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
:root {
  --van-primary-color: #fb7299 !important;
}
</style>

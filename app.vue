<script setup lang="ts">
useSeoMeta({
  title: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
  description:'哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。',
  keywords:"Bilibili,哔哩哔哩,哔哩哔哩动画,哔哩哔哩弹幕网,弹幕视频,B站,弹幕,字幕,AMV,MAD,MTV,ANIME,动漫,动漫音乐,游戏,游戏解说,二次元,游戏视频"
});
</script>

<template>
  <div>
    <!-- 首页路由 -->
    <nuxt-link to="/">首页</nuxt-link>
    <!-- 附页路由 -->
    <nuxt-link to="/video">附页</nuxt-link>
    <NuxtPage />
  </div>
</template>

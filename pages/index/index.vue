<template>
  <div>
    <!-- 公共首部 -->
    <app-header />
    <!-- 频道导航 -->
    <van-tabs>
      <van-tab
        v-for="item in channelList?.Channel"
        :key="item.id"
        :title="item.name"
      ></van-tab>
    </van-tabs>
    <!-- 视频列表 -->
    <app-video-list/>
  </div>
</template>

<script setup lang="ts">
const { data: channelList } = await useFetch("/api/channel");
</script>

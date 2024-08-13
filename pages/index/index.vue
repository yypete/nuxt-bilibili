<template>
  <div>
    <!-- 公共首部 -->
    <header
      class="flex flex-wrap items-center justify-between p-4 bg-white shadow-lg"
    >
      <!-- Logo -->
      <span class="flex-shrink-0">
        <img src="../../assets/bilibili字母.png" class="h-12" alt="Logo" />
      </span>
      <!-- Search Bar -->
      <span class="flex-grow mx-4">
        <div class="relative">
          <input
            type="text"
            class="w-full p-2 pl-10 border rounded-lg"
            placeholder="搜索"
          />
          <img
            src="../../assets/search.png"
            alt="Search Icon"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 h-5"
          />
        </div>
      </span>
      <!-- Buttons -->
      <div class="flex items-center space-x-4">
        <span
          class="flex items-center justify-center rounded-full bg-gray-300 text-red-300 w-10 h-10"
        >
          <button>登录</button>
        </span>
        <span>
          <button
            class="flex items-center justify-center rounded-lg bg-red-300 text-gray-100 w-20 h-10"
          >
            下载APP
          </button>
        </span>
      </div>
    </header>
    <!-- 频道导航 -->
    <van-tabs>
      <van-tab
        v-for="item in channelList?.Channel"
        :key="item.id"
        :title="item.name"
      ></van-tab>
    </van-tabs>
    <!-- 视频列表 -->
    <van-list
      :loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="video-list flex flex-wrap mt-2">
        <nuxt-link
          class="w-1/2 flex justify-center items-start p-2"
          v-for="item in list"
          :key="item.aid"
          to=""
        >
          <span class="relative flex flex-col w-full h-full">
            <div class="relative w-full h-full">
              <img :src="item.pic" class="w-full h-full" :alt="item.title" />
              <!-- 播放量固定在左下角 -->
              <span
                class="absolute bottom-2 left-2 flex items-center space-x-1 text-sm"
              >
                <img src="../../assets/播放.webp" alt="播放" class="w-6 h-6" />
                <span>{{ item.stat.view }}</span>
              </span>
              <!-- 弹幕固定在右下角 -->
              <span
                class="absolute bottom-2 right-2 flex items-center space-x-1 text-sm"
              >
                <img src="../../assets/弹幕.png" alt="弹幕" class="w-5 h-5" />
                <span>{{ item.stat.danmaku }}</span>
              </span>
            </div>
            <!-- 视频下标题 -->
            <span
              class="flex items-end justify-center pt-2 font-serif font-bold"
            >
              {{ item.title }}
            </span>
          </span>
        </nuxt-link>
      </div>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import type { videoItem } from "@/types/video";
const { data: channelList } = await useFetch("/api/channel");
const { data: videoList } = await useFetch("/api/video");
const list = ref<videoItem[]>([]);
const loading = ref(false);
const finished = ref(false);
let page = 1;
let pagesize = 20;
const onLoad = () => {
  // 正在加载
  loading.value = false;
  const data = videoList.value?.video.slice(
    (page - 1) * pagesize,
    page * pagesize
  ) as videoItem[];
  list.value.push(...data);
  page++;
  // 当加载的数据等于全部数据时，表示加载完成
  if (videoList.value?.video.length === list.value.length) {
    finished.value = true;
  }
};
// 首次渲染20条，利于seo
onLoad();
</script>

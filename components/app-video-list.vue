<template>
  <van-list
    :loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="video-list flex flex-wrap mt-2">
      <nuxt-link
        v-for="item in list"
        :key="item.id"
        class="w-1/2 flex justify-center items-start p-2"
        :to="`/video/${item.bvid}`"
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
          <span class="flex items-end justify-center pt-2 font-serif font-bold">
            {{ item.title }}
          </span>
        </span>
      </nuxt-link>
    </div>
  </van-list>
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

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
      <van-tab v-for="item in 10" :key="item" title="频道"></van-tab>
    </van-tabs>
    <!-- 视频列表 -->
    <div class="video-list flex flex-wrap mt-2">
      <nuxt-link
        class="w-1/2 flex justify-center items-start p-2"
        v-for="item in 20"
        :key="item"
        to=""
      >
        <span class="relative flex flex-col w-full h-full m-2">
          <img
            src="../../assets/灰白视频.jpg"
            class="w-full h-3/5"
            alt="无法加载该视频"
          />
          <!-- 播放量固定在左下角 -->
          <span
            class="absolute translate-y-64 translate-x-2 flex items-center space-x-1"
          >
            <img src="../../assets/播放.webp" alt="播放" class="w-6 h-6" />
            <span>100万</span>
          </span>
          <!-- 弹幕固定在右下角 -->
          <span
            class="absolute translate-y-64 translate-x-92 flex items-center space-x-1"
          >
            <img src="../../assets/弹幕.png" alt="弹幕" class="w-5 h-5" />
            <span>9.9万</span>
          </span>

          <!-- 视频标题 -->
          <span class="flex items-end justify-center pt-2 font-serif font-bold">
            当你觉得扛不住的时候就来这里看看
          </span>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>
<style></style>

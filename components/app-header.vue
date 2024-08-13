<template>
  <!-- 公共首部 -->
  <header
    class="flex flex-wrap items-center justify-between p-4 bg-white shadow-lg"
  >
    <!-- Logo -->
    <nuxt-link to="/">
      <span class="flex-shrink-0">
        <img src="@/assets/bilibili字母.png" class="h-12" alt="Logo" />
      </span>
    </nuxt-link>
    <!-- Search Bar -->
    <span class="flex-grow mx-4">
      <div class="relative">
        <input
          type="text"
          class="w-full p-2 pl-10 border rounded-lg"
          placeholder="搜索"
        />
        <img
          src="@/assets/search.png"
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
</template>

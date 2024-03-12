<template>
  <header class="fixed top-0 w-full">
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xxl"
      >
        <a href="#" class="flex items-center">
          <img
            src="@/assets/images/logo.png"
            class="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
        </a>
      </div>
    </nav>
  </header>
  <section class="bg-white min-h-screen">
    <div
      class="flex flex-col items-center justify-center sm:px-0 sm:py-0 md:px-6 md:py-8 mx-auto md:h-screen lg:py-0"
    >
      <div class="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
        <router-view></router-view>
      </div>
    </div>

    <div class="relative w-[60px]">
      <div class="fixed right-20 bottom-10">
          <sw-translator></sw-translator>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SwTranslator } from '@/global';
</script>
<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1
      class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center pt-10 pb-5"
    >
      {{ $t('auth.header.resetPassword') }}
    </h1>
    <form class="space-y-4 md:space-y-6" action="#">
      <div>
        <sw-input
          :label="$t('auth.field.email')"
          placeholder="name@company.com"
          type="email"
          required
        ></sw-input>
      </div>
  
      <sw-button :loading="false">{{ $t('auth.extras.text.restorePassword') }}</sw-button>

      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        <router-link
          :to="{ name: 'auth.login' }"
          class="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
        {{ $t('auth.extras.text.rememberedPassword') }}
        </router-link>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { SwButton, SwInput } from "@/global";

</script>
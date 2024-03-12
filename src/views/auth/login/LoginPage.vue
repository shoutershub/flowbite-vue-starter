<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1
      class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center pt-10 pb-5"
    >
      {{ $t('auth.header.login') }}

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
      <div>
        <sw-input
          :label="$t('auth.field.password')"
          placeholder="••••••••"
          type="password"
          v-model="inputData"
          required
        ></sw-input>
      </div>
      <sw-seperator :text="$t('auth.extras.or')"></sw-seperator>
      <sw-sso-sign-in></sw-sso-sign-in>
      <div class="flex items-center justify-between">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="remember" class="text-gray-500 dark:text-gray-300"
              >{{$t('auth.extras.rememberMe')}}</label
            >
          </div>
        </div>

        <router-link
          :to="{ name: 'auth.reset.password' }"
          class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          {{$t('auth.extras.forogtPassword')}}
        </router-link>
      </div>

      <sw-button :loading="false">{{ $t('auth.extras.text.login') }}</sw-button>

      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        {{$t('auth.extras.forogtPassword')}}
        <router-link
          :to="{ name: 'auth.register' }"
          class="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          {{$t('auth.extras.text.signUp')}}
        </router-link>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { SwButton, SwInput, SwSeperator, SwSsoSignIn } from "@/global";
import {ref} from 'vue';


const inputData = ref<string>("Hello");
</script>

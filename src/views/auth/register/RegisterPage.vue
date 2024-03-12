<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1
      class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center pt-10 pb-5"
    >
      {{ $t('auth.header.register') }}
    </h1>
    <form class="space-y-4 md:space-y-6" action="#">
      <div>
        <sw-input
          :label="$t('auth.field.email')"
          :placeholder="$t('auth.extras.text.exampleEmail')"
          type="email"
          required
        ></sw-input>
      </div>
      <div>
        <sw-input
          :label="$t('auth.field.password')"
          placeholder="••••••••"
          type="password"
          required
        ></sw-input>
        <div class="text-center text-gray-400 text-sm mt-5 mb-5">
          {{$t('auth.extras.text.passwordHelpText')}}
        </div>

        <div class="text-center text-gray-400 text-sm mt-5 mb-5">
          {{$t('auth.extras.text.termsAndConditionHelpText')}}
          <a
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            href="#"
            >{{$t('auth.extras.text.termsAndCondition')}}</a
          >
          {{$t('auth.extras.text.and')}}
          <a
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            href="#"
            >{{$t('auth.extras.text.privacyPolicy')}}</a
          >
        </div>
      </div>

      <sw-button :loading="false">{{$t('auth.extras.text.register')}}</sw-button>
      
      <sw-seperator :text="$t('auth.extras.or')"></sw-seperator>
      <sw-sso-sign-in></sw-sso-sign-in>

      <ul class="text-sm font-light text-gray-500 dark:text-gray-400">
        <li>
          {{$t('auth.extras.text.alreadyHaveAnAccount')}}
          <router-link
            :to="{ name: 'auth.login' }"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
          {{$t('auth.extras.text.login')}}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'auth.reset.password' }"
            class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            > {{$t('auth.extras.forogtPassword')}} 
          </router-link>
        </li>
      </ul>
    </form>
  </div>
</template>

<script setup lang="ts">
import { SwButton, SwInput, SwSeperator, SwSsoSignIn } from "@/global";

</script>
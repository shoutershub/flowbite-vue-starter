<template>
  <router-view />
</template>

<script setup lang="ts">
//Load languages
import { languageStore } from '@/store/LanguageStore/LangugageStore';
const language = languageStore();

language.setLanguage();
</script>
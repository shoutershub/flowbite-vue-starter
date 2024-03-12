import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { LanguageTypes } from "./types";
import i18n from "@/plugins/languagePlugin/languagePlugin";

const storageName = import.meta.env.VITE_STORAGE_NAME;

console.log(import.meta.env);

export const languageStore = defineStore({
  id: "language",
  state: () => ({
    language: useStorage(storageName, {
      flag: "us",
      language: "en",
      title: "English",
    } as LanguageTypes),
  }),
  getters: {
    getCurrentLanguage: (state) => {
      return state.language
    },
  },
  actions: {
    setLanguage(){
      i18n.global.locale.value = this.language.language;
      console.log( i18n.global.locale);
    },
    getLanguage(language: any) {
      this.language = language;
    },
    changeCurrentLanguage(language: any) {
      this.language = language;
      const country = language.language.toLocaleLowerCase()
      i18n.global.locale.value = country

      if (i18n.global.availableLocales.includes(country)) {
      }
    },
  },
});

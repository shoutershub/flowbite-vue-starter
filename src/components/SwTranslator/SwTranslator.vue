<template>
  <sw-dropdown
    ref="reference"
    buttonclass="border-none"
    placement="top"
    buttonColor="alternative"
    :closeInside="true"
  >
    <template #title>
      <flag class="mr-2" :iso="defaultLanguage.flag" v-bind:squared="false" />
      {{ defaultLanguage.title }}
    </template>
    <div
      ref="floating"
      class="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
      :style="floatingStyles"
    >
      <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
        <li
          class="flex items-center hover:bg-slate-100 cursor-pointer pb-2 pt-2 rounded"
          v-for="entry in availableLanguages"
          @click="changeLanguageOption(entry)"
        >
          <flag class="ml-5" :iso="entry.flag" v-bind:squared="false" />
          <span
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >{{ entry.title }}
          </span>
        </li>
      </ul>
    </div>
  </sw-dropdown>
</template>

<script setup lang="ts">
import { SwDropdown } from "@/global";
import { ref, computed } from "vue";
import { useFloating, offset, flip, shift } from "@floating-ui/vue";
import { availableLanguages } from "@/store/LanguageStore/AvailableLanguages";
import { languageStore } from "@/store/LanguageStore/LangugageStore";
import { LanguageTypes } from "@/store/LanguageStore/types";

const reference = ref(null);
const floating = ref(null);

const { floatingStyles } = useFloating(reference, floating, {
  placement: "top",
  middleware: [offset(10), flip(), shift()],
});

const languageOption = languageStore();

function changeLanguageOption(option: LanguageTypes){
  languageOption.changeCurrentLanguage(option);
}

const defaultLanguage = computed(() => {
  return languageOption.getCurrentLanguage;
});
</script>
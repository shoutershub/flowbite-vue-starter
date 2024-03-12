/**
 * plugins/index.ts
 *
 * Included in `./src/main.ts`
 */

// Plugins
import type { App } from 'vue'
import router from '@/router';
import FlagIcon from 'vue-flag-icon';
import pinia from '@/store'
import i18n from "@/plugins/languagePlugin/languagePlugin";


import '@/assets/scss/gloabl.scss';




export function registerPlugins (app: App) {

  app
    .use(router)
    .use(FlagIcon)
    .use(pinia)
    .use(i18n)
}

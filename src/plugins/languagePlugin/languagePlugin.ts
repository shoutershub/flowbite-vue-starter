import {createI18n} from "vue-i18n";
import en from '@/locales/en.json'
import de from '@/locales/de.json'
import es from '@/locales/es.json'
import ar from '@/locales/ar.json'



// Type-define 'en-US' as the master schema for the resource

const i18n = createI18n({
    locale: 'en',
    legacy: false,
    globalInjection: true,
    messages: {
      'en': en,
      'de': de,
      'es': es,
      'ar': ar
    }
  })
  

  export default i18n;
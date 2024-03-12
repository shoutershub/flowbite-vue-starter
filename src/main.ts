import { createApp } from 'vue'
import App from '@/App.vue'

import { registerPlugins } from '@/plugins'

const app = createApp(App)
//Load and register plugins, keeps main.ts neat
registerPlugins(app)

app.mount('#app')

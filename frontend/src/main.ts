import { createApp } from 'vue';
import wasm from './wasm';
import ruster from './ruster';
import App from './App.vue';

(async () => {
  createApp(App).use(ruster).use(await wasm()).mount('#app');
})().catch(console.error);

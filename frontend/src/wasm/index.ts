import { App } from 'vue';
// eslint-disable-next-line import/no-relative-packages
import init, * as wasm from './pkg/rustberry_wasm';

export default async function load() {
  await init();
  return {
    install(app: App<Element>) {
      // eslint-disable-next-line no-param-reassign
      app.config.globalProperties.$wasm = wasm;
    },
  };
}

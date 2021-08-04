import { App } from "vue";

export default async function() {
  const wasm = await import("./pkg/index.js");
  return {
    install(app: App<Element>) {
      app.config.globalProperties.$wasm = wasm;
    },
  };
};

import type * as wasm from "./pkg/index";
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $wasm: typeof wasm;
  }
}

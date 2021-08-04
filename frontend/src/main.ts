import { createApp } from "vue";
import App from "@/App.vue";
import Ruster from "Ruster";
import Wasm from "Wasm";

(async () => {
  createApp(App)
    .use(Ruster)
    .use(await Wasm())
    .mount("#app");
})();

import { App } from "vue";
import RusterView from "./RusterView.vue";
import RusterLink from "./RusterLink.vue";
import routes from "./routes";

const Ruster = {
  to(destination: keyof typeof routes) {
    history.pushState({}, "", destination);
    window.dispatchEvent(new PopStateEvent("popstate", {}));
  },
};
export default {
  install(app: App<Element>) {
    app.component("RusterView", RusterView);
    app.component("RusterLink", RusterLink);
    app.component("RLink", RusterLink);
    app.config.globalProperties.$ruster = Ruster;
  },
};

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $ruster: typeof Ruster;
  }
}

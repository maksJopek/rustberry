import { App } from 'vue';
import RusterView from './RusterView.vue';
import RusterLink from './RusterLink.vue';
import routes from './routes';

export const Ruster = {
  to(destination: keyof typeof routes) {
    window.history.pushState({}, '', destination);
    window.dispatchEvent(new PopStateEvent('popstate', {}));
  },
};
export default {
  install(app: App<Element>) {
    app.component('RusterView', RusterView);
    app.component('RusterLink', RusterLink);
    app.component('RLink', RusterLink);
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$ruster = Ruster;
  },
};

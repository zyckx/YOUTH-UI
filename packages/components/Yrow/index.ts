import Yrow from './src/index.vue';
import type { App, Plugin } from 'vue';

export const YrowPlugin: Plugin = {
  install(app: App) {
    app.component('YRow', Yrow);
  },
};

export { Yrow };

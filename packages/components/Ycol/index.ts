import Ycol from './src/index.vue';
import type { App, Plugin } from 'vue';

export const YcolPlugin: Plugin = {
  install(app: App) {
    app.component('YCol', Ycol);
  },
};

export { Ycol };

import Date from './src/index.vue';
import type { App, Plugin } from 'vue';

export const DatePlugin: Plugin = {
  install(app: App) {
    app.component('YDate', Date);
  },
};

export { Date };

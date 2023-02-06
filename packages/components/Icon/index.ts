import type { App, Plugin } from 'vue';
import Icon from './src/index.vue';

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('y-icon', Icon);
  },
};

export {
  Icon
};

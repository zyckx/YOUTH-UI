import Input from './src/index.vue';
import type { App, Plugin } from 'vue';

export const InputPlugin: Plugin = {
  install(app: App) {
    app.component('YInput', Input);
  },
};

export { Input };

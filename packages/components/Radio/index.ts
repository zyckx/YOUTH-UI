import Radio from './src/index.vue';
import RadioGroup from './src/radio-group.vue';
import type { App, Plugin } from 'vue';

export const RadioPlugin: Plugin = {
  install(app: App) {
    app.component('YRadio', Radio);
    app.component('YRadioGroup', RadioGroup);
  },
};

export { Radio };

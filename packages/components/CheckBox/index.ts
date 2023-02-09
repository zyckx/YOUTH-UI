import CheckBox from './src/index.vue';
import CheckBoxGroup from './src/checkbox-group.vue';
import CheckBoxButton from './src/checkbox-button.vue';
import type { App, Plugin } from 'vue';

export const CheckBoxPlugin: Plugin = {
  install(app: App) {
    app.component('YCheckbox', CheckBox);
    app.component('YCheckboxGroup', CheckBoxGroup);
    app.component('YCheckboxButton', CheckBoxButton);
  },
};

export { CheckBox };

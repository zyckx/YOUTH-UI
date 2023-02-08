/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { ButtonPlugin } from './Button';
import { InputPlugin } from './Input';
import { CheckBoxPlugin } from './CheckBox';
import { IconPlugin } from './Icon';

import type { App, Plugin } from 'vue';


const YouthPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    InputPlugin.install?.(app);
    CheckBoxPlugin.install?.(app);
    IconPlugin.install?.(app);
    CheckBoxPlugin.install?.(app);
  },
};

export default YouthPlugin;

export * from './Button';
export * from './Input';
export * from './Icon';
export * from './CheckBox';

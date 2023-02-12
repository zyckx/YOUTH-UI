/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { InputPlugin } from './Input';
import { CheckBoxPlugin } from './CheckBox';
import { IconPlugin } from './Icon';

import { RadioPlugin } from './Radio';

import { DatePlugin } from './Date';
import { YcolPlugin } from './Ycol';
import { YrowPlugin } from './Yrow';


const YouthPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
InputPlugin.install?.(app);
CheckBoxPlugin.install?.(app);
IconPlugin.install?.(app);

RadioPlugin.install?.(app);

DatePlugin.install?.(app);
YcolPlugin.install?.(app);
YrowPlugin.install?.(app);

  },
};

export default YouthPlugin;

export * from './Button'
export * from './Input'
export * from './CheckBox'
export * from './Icon'

export * from './Radio'

export * from './Date'
export * from './Ycol'
export * from './Yrow'

/* eslint-disable prettier/prettier */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import { createRouter, createWebHashHistory } from 'vue-router'
 import type { RouterOptions } from 'vue-router';

 const routes = [
   {
     path: '/',
     name: '主页',
     component: () => import('../src/view/index.vue'),
   },
   {
     title: '按钮',
     name: 'Button',
     path: '/components/Button',
     component: () => import('packages/components/Button/docs/README.md'),
   },
   {
     title: '输入框',
     name: 'Input',
     path: '/components/Input',
     component: () => import('packages/components/Input/docs/README.md'),
   },
   {
     title: '多选框',
     name: 'CheckBox',
     path: '/components/CheckBox',
     component: () => import('packages/components/CheckBox/docs/README.md'),
   },
   {
     title: '图标',
     name: 'Icon',
     path: '/components/Icon',
     component: () => import('packages/components/Icon/docs/README.md'),
   },
   {
     title: '布局',
     name: 'Layout',
     path: '/components/Layout',
     component: () => import('packages/components/Layout/docs/README.md'),
   },
   {
     title: '单选框',
     name: 'Radio',
     path: '/components/Radio',
     component: () => import('packages/components/Radio/docs/README.md'),
   },
   {
     title: '颜色',
     name: 'Color',
     path: '/components/Color',
     component: () => import('packages/components/Color/docs/README.md'),
   },
   {
     title: '日期选择器',
     name: 'Date',
     path: '/components/Date',
     component: () => import('packages/components/Date/docs/README.md'),
   },
   {
     title: '选择器',
     name: 'Select',
     path: '/components/Select',
     component: () => import('packages/components/Select/docs/README.md'),
   },
 ];
 
 const routerConfig = {
   history: createWebHashHistory(),
   routes,
   scrollBehavior(to: any, from: any) {
     if (to.path !== from.path) {
       return { top: 0 };
     }
   },
 };
 
 const router = createRouter(routerConfig as RouterOptions);
 
 export default router;

<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 选择器

- 使用 vue3+typescript 实现的选择器组件
- 实现了基本的选择器功能,支持禁用,清空等属性，支持 v-model 双向绑定
- 支持多选模式

## 基础用法

<Preview comp-name="Select" demo-name="demo">
  <demo />
</Preview>

## 属性

|     参数      |     说明     |          类型           | 可选值 | 默认值 | 是否必填 |
| :-----------: | :----------: | :---------------------: | :----: | :----: | :------: |
|   `v-model`   |    绑定值    | string\|boolean\|number |   -    |        |    是    |
|   `options`   |   选项内容   |          array          |   -    |   []   |    是    |
|  `multiple`   |   是否多选   |         boolean         |   -    | false  |    否    |
| `placeholder` | 选择框占位符 |         string          |   -    | 请选择 |    否    |
|  `disbaled`   |   是否禁用   |         boolean         |   -    | false  |    否    |
|  `clearable`  |  是否可清空  |         boolean         |   -    | false  |    否    |

## 事件

|  事件名  |                说明                | 参数列表 |    参数说明    |
| :------: | :--------------------------------: | :------: | :------------: |
| `change` |        选中值发生变化时触发        |  $event  | 返回目前选中值 |
| `clear`  | 可清空模式下用户点击清空按钮时触发 |    -     |       -        |

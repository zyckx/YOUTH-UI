<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 日期选择器

用于选择或输入日期

## 基础用法

<Preview comp-name="Date" demo-name="demo">
  <demo />
</Preview>

## 属性

|     参数      |                           说明                            |  类型  | 可选值 | 默认值 |
| :-----------: | :-------------------------------------------------------: | :----: | :----: | :----: |
|   `v-model`   | 可被 new Date() 解析的字符串，例如：2022-02-01,2022/02/01 | String |   -    |   -    |
| `placeholder` |                      输入框占位字符                       | String |   -    |   -    |

## 事件

|  事件名  |     说明     | 参数列表 |              示例               |
| :------: | :----------: | :------: | :-----------------------------: |
| `change` | 日期选中事件 |  value   | change = (e) =>{console.log(e)} |

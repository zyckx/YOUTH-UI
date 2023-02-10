<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import inputDisabled from './disabled.vue'
import clearInput from './clear.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# Input 输入框

<p>通过鼠标或键盘输入字符</p>

## 基础用法

<Preview comp-name="Input" demo-name="demo">
  <demo />
</Preview>

## 禁用状态

通过`disabled` 属性指定是否禁用 `Input` 组件
<Preview comp-name="Input" demo-name="disabled">
<inputDisabled />
</Preview>

## 可清空

使用`clearable`属性即可得到一个可清空的输入框 (**图标加载不出**)
<Preview comp-name="Input" demo-name="clear">
<clearInput />
</Preview>

## 属性

|  参数  |    说明    |  类型  | 可选值 |  默认值   | 是否必填 |
| :----: | :--------: | :----: | :----: | :-------: | :------: |
| `arg1` | 第一个参数 | string |   -    | `default` |    否    |
| `arg2` | 第二个参数 | string |   -    | `default` |    否    |

## 事件

|    事件名     |    说明    | 参数列表  |            参数说明             |
| :-----------: | :--------: | :-------: | :-----------------------------: |
|    `click`    |  点击事件  |  $event   |        原生的 dom event         |
| `customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三 |

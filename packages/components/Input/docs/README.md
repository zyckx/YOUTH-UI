<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import inputDisabled from './disabled.vue'
import clearInput from './clear.vue'
import readonly from './readonly.vue'
import size from './size.vue'
import focus from './focus.vue'
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

## 只读

<Preview comp-name="Input" demo-name="readonly">
<readonly />
</Preview>

## 不同大小

通过设置 `size` 属性来设置不同大小，可选值为`default`(默认值)，`small`，`mini`
<Preview comp-name="Input" demo-name="size">
<size />
</Preview>

## 自定义`Focus`颜色

通过设置 `focus-color` 属性来设置不同颜色
<Preview comp-name="Input" demo-name="focus">
<focus />
</Preview>

## 属性

|     参数      |             说明              |      类型       |      可选值      | 默认值  |
| :-----------: | :---------------------------: | :-------------: | :--------------: | :-----: |
|   `v-model`   |         input 绑定值          | string / number |        -         |    -    |
| `placeholder` |        输入框占位字符         |     string      |        -         |    -    |
|  `disabled`   |        输入框是否禁用         |     boolean     | `true` / `false` | `false` |
|  `readonly`   |          输入框只读           |     boolean     | `true` / `false` | `false` |
|  `clearable`  |     输入框内容是否可清空      |     boolean     | `true` / `false` | `false` |
| `focus-color` | 自定义 focus 状态输入框的颜色 |     string      |        -         |    -    |

## 事件

|  事件名  |               说明                |        参数列表         |                  示例说明                   |
| :------: | :-------------------------------: | :---------------------: | :-----------------------------------------: |
| `focus`  |       input 获取焦点时触发        |          event          | `focus=(e)=>{console.log(e.target.value)`}  |
|  `blur`  |       input 失去焦点时触发        |          event          |  `blur=(e)=>{console.log(e.target.value)}`  |
| `input`  |      input 值发生改变时触发       | value：string ｜ number |        `input=(v)=>{console.log(v)}`        |
| `change` |  用户获得焦点并按下回车键时触发   |          event          | `change=(e)=>{console.log(e.target.value)}` |
| `clear`  | 可清空的 input 点击清空按钮时触发 |            -            |      `clear=()=>{console.log('清空')}`      |

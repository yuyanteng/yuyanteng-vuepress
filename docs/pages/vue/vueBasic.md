# 1.vue基础

## 2.1 概述

官网：https://cn.vuejs.org/

Vue.js是一套构建用户界面的**渐进式**框架。

Vue 采用**自底向上**增量开发的设计。

Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。

另一方面，当与单文件**组件**和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。(SPA单页面应用，所有的显示都在一个页面当中)

> 渐进式：一步一步，不是说你必须一次把所有的东西都用上
>
> 自底向上设计：是一种设计程序的过程和方法，就是先编写出基础程序段，然后再逐步扩大规模、补充和升级某些功能，实际上是一种自底向上构造程序的过程

![](img/12.png)

Vue从设计角度来讲，虽然能够涵盖这张图上所有的东西，但是你并不需要一上手就把所有东西全用上，都是可选的。

**声明式渲染和组件系统是**Vue的核心库所包含内容，而路由、状态管理、构建工具都有专门解决方案。这些解决方案相互独立，我们可以在核心的基础上任意选用其他的部件，不一定要全部整合在一起。

## 2.2 声明式渲染和组件化

可以使用`cnpm i vue` 下载vue的资源包，将dist/vue.js以及 vue.min.js 移动到lib目录下

### 2.2.1 **声明**式渲染

Vue.js的核心是一个允许采用简洁的模板语法来声明式的将数据渲染进DOM的系统，例如：

```vue
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>01 声明式渲染</title>
</head>
<body>
  {{ msg }}
  <div id="app">
    {{ msg }}
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app', // 告诉结构哪一段要使用vue的语法
    data: { // 初始化数据
      msg: 'hello msg'
    }
  })
</script>
</html>
```

### 2.2.2 **组件化**应用构建

组件系统是Vue的另一个重要概念（后续学习），因为它是一种抽象的允许我们使用**小型、独立**和通常**可复用**的“小积木”构建大型应用。几乎任意类型的应用界面都可以抽象为一个组件树。

![](img/13.png)

## 2.3 开发模式

> 注意：开发模式≠设计模式

开发模式，就是一个开发项目的方式或者标准。

比较常见的三种开发模式：MVC、MVP、MVVM

* MVC

MVC全名是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计典范，**用一种业务逻辑（C**）、数据（M）、界面显示（V）分离的方法组织代码，将业务逻辑聚集到一个部件里面，在改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑。

![](img/14.png)

1. 用户可以向 View 发送指令（DOM 事件），再由 View 直接要求 Model 改变状态。

2. 用户也可以直接向 Controller 发送指令（改变 URL 触发 hashChange 事件），再由Controller 发送给 View。
3. Controller 非常薄，只起到路由的作用，而 View 非常厚，业务逻辑都部署在 View。

**优点** -----  高内聚 低耦合

耦合性低，重用性高，部署快，可维护性高，有利于软件工程化管理

**缺点**

由于模型model和视图view要严格的分离，给前端程序带来了很大的困难，每次操作需要彻底的测试

* MVP

MVP是Model-View-Presenter简称，MVP是从经典的模式MVC演变而来，它们的基本思想有相通的地方Controller/Presenter负责逻辑的处理，Model提供数据，View负责显示：

![](img/15.png)

1. 各部分之间的通信，都是双向的。

2. View 与 Model 不发生联系，都通过 Presenter 传递。可以将一个Presenter用于多个视图，而不需要改变Presenter的逻辑。这个特性非常的有用，因为视图的变化总是比模型的变化频繁。

3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。

> **缺点**
>
> 由于对视图的渲染放在了Presenter中，所以视图和Presenter的交互会过于频繁。一旦视图需要变更，那么Presenter也需要变了。

* MVVM
  * M：（model）普通的javascript数据对象
  * V：（view）前端展示页面
  * VM：（ViewModel）用于双向绑定数据与页面，对于我们的课程来说，就是vue的实例

MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。**这种模式下，页面输**入改变数据，数据改变影响页面数据展示与渲染

> vue使用MVVM响应式编程模型，避免直接操作DOM , 降低DOM操作的复杂性。

![](img/16.png)

> **优点**
>
> * 低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的View上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
>
> * 可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。
>
> * 可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。

# 3.vue入门

## 3.1 传统DOM与vue实现对比

假设需要输出 “hello ty2103”

传统开发模式的原生js，jQuery代码如下：

```html
<div id="test"></div>
<!--原生js-->
<script>
  const msg = "hello ty2103"
  const test = document.getElementById('test')
  test.innerHTML = msg
</script>
<!--jQuery-->
<script>
	var msg = 'hello ty2103'
  $('#test').html(msg)
</script>
```

> **步骤**
>
> 1. 定义用于填充数据的标签
>
> 2. 引入vue.js库文件（ 学习测试使用开发版本，项目上线换成生产版本 ）
> 3. 使用vue语法实现需求
>
> 4. 将vue提供的数据填充到“第1步”中的标签里

代码如下

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>02 vue渲染方式</title>
</head>
<body>
  {{ msg }}
  <div id="app">
    {{ msg }}
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app', // 告诉结构哪一段要使用vue的语法
    data: { // 初始化数据
      msg: 'hello msg'
    }
  })
</script>
</html>
```

Vue实例细节分析：

* Vue参数对象属性

  * el：元素挂载的位置，值可以是CSS选择器或DOM元素

  * data：模型数据，值是一个对象

* 插值表达式 {{msg}}
  * 将数据填充到HTML标签中

**了解**：前端渲染方式

![](img/17.png)

前端渲染方式有：

* 原生JavaScript拼接字符串（维护困难） -  吃了符号的亏，上了大小写的当

* 使用前端模板引擎（维护较容易，但缺乏事件支持） - ejs / jade

* 使用Vue特有的模板语法
  * 插值表达式
  * 指令
  * 事件绑定
  * 属性绑定
  * 样式绑定
  * 分支循环结构
  * ...

## 3.2 vue devtools工具安装

通过chrome中的谷歌插件商店安装Vue Devtools工具，此工具帮助我们进行vue数据调试所用，一定要安装。

Vue工具在谷歌商店的地址是：https://chrome.google.com/webstore?utm_source=chrome-ntp-icon

> 请注意：打开chrome应用商店，**需要科学上网**才能访问到，至于怎么科学上网请各位自行解决。

安装好后打开Chrome的 开发者工具（F12或Ctrl+Shift+I） 即可使用

> **补充：如果自己解决不了科学上网问题，但是又需要用**Vue **开发工具那该怎么办？**
>
> 如果实在解决不了科学上网难题，Vue官方也提供了插件源码允许我们自己编译/构建GoogleChrom插件，步骤如下（构建插件流程稍微麻烦一些<**不要求掌握如何构建**>，此处已为同学们构建好，可以直接使用）。
>
> 官网-生态系统-devtools

* 克隆仓库

Git仓库地址：https://github.com/vuejs/vue-devtools

* 安装依赖包 cnpm i

* 构建 cnpm run build

* 打开Chrome扩展页面

* 开启开发者模式

* 加载已解压扩展，选择shells-chrome目录

* 将产生的 .crx 文件拖入谷歌浏览器 扩展程序 界面

* 在Windows策略管理器中添加Google策略模板文件，将插件对应的ID添加到 配置扩展程序白名 单 
  * .crx 和 .adm 文件已打包上传至公有云，可以点击访问2url.cc/l3M5x1进行下载

* 在谷歌浏览器 扩展程序 管理界面中给 Vue.js devtools 插件授权
  * 允许访问文件网址
  * 收集各项错误

也可以使用 谷歌访问助手 

## 3.3 vue 2.0 数据双向绑定原理

> 核心：数据劫持 + 发布与订阅

当把一个普通的JavaScript对象传给Vue实例的data选项，Vue将遍历此对象所有的属性，使用Object.defineProperty把这些属性全部转为getter/setter(数据劫持/数据映射)。

在属性被访问和修改时通知变化。每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。



数据的改变会引起视图的二次渲染

```js
var obj = { a: 1 }

// obj a.  setter getter

console.log(obj.a) // getter
obj.a = 2 // setter
```



![](img/18.png)

`Object.defineProperty(obj, prop, descriptor) `

> **obj**
>
> 要定义属性的对象。
>
> **prop**
>
> 要定义或修改的属性的名称 。
>
> **descriptor**
>
> 要定义选项。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>03 数据的双向绑定</title>
</head>
<body>
  <div id="msg"></div>
  <input id="ipt" type="text" oninput="changeVal(event)">
</body>
<script>
  // 参照值
  var userInfo = { userName: '吴大勋' }
  // 劫持的对象
  var obj = {}

  // obj.name = userInfo.userName
  // 数据劫持
  // Object.defineProperty(需要劫持的数据的对象，劫持的对象下的属性，选项)
  Object.defineProperty(obj, 'name', {
    get () { // getter
      return userInfo.userName
    },
    set (val) { // setter
      // obj.name = val // 没有意义的，应该修改参照的对象加以理解
      userInfo.userName = val
      document.getElementById('msg').innerHTML = userInfo.userName
    }
  })

  console.log(obj.name) // 调用了getter
  obj.name = '吴勋勋' // 调用了 setter
  console.log(obj.name) // 调用了getter

  // 默认的输入框显示数据
  document.getElementById('ipt').value = userInfo.userName

  function changeVal(event) {
    console.log(event.target.value)
    obj.name = event.target.value
  }
</script>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>04 vue数据绑定</title>
</head>
<body>
  <div id="app">
    {{ msg }}
    <input type="text" v-model="msg" />
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      msg: '吴大勋'
    }
  })
</script>
</html>
```



## 3.4 vue模版语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

### 3.4.1 插值表达式

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <div>
      <!-- 文本 “Mustache”语法 (双大括号)  -->
      {{ msg }}
    </div>
    <div>
      <!-- 原始的HTML 如果数据带有html标签并且需要解析 - 解析输出 -->
      <!-- v-html v-text 必须配合标签使用 -->
      <!-- v-html 解析输出 -->
      <!-- v-text 转义输出 -->
      {{ mark }} ----- 
      <div v-html="mark"></div>
      <div v-text="mark"></div>

      
    </div>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      msg: 'hello world',
      mark: '<h3>原始的html</h3>'
    }
  })
  
</script>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    {{ msg }} - {{ msg.split('').reverse().join('') }} --- {{ 1+ 1}}
    {{ flag ? '真' : '假' }}
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      msg: 'hello world',
      flag: true
    }
  })
  
</script>
</html>
```



### 3.4.2 指令

指令 (Directives) 是带有 `v-` 前缀的特殊 attribute。指令 attribute 的值预期是**单个 JavaScript 表达式**。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

# 4.常用指令

## 4.1 v-cloak

这个指令保持在元素上直到关联实例结束编译。

和 CSS 规则如 `[v-cloak] { display: none }` 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

如果网络不好的情况下，网页先显示 {{ message }}，如果vue加载完毕，显示 hello vue

闪烁

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <style>
    [v-cloak] { /* 如果未加载完vue，{{ message }} 不显示 */
      display: none;
    }
  </style>
</head>
<body>
  <!-- 如果多个元素都使用到了 {{}}, 可以在共同的父级元素上加 指令 v-cloak -->
  <div id="app"  v-cloak>
    {{ message }}
  </div>
</body>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello vue'
    }
  })
</script>
```



## 4.2 双向数据绑定指令 v-model

你可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。

它会根据控件类型自动选取正确的方法来更新元素。

尽管有些神奇，但 `v-model` 本质上不过是语法糖。

它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理

>`v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` attribute 的初始值而总是将 Vue 实例的数据作为数据来源。
>
>你应该通过 JavaScript 在组件的 `data` 选项中声明初始值。



`v-model` 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- text 和 textarea 元素使用 `value` property 和 `input` 事件；
- checkbox 和 radio 使用 `checked` property 和 `change` 事件；
- select 字段将 `value` 作为 prop 并将 `change` 作为事件。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>01 v-model</title>
</head>
<body>
  <div id="app">
    <div>
      <!-- value input -->
      姓名：<input type="text" v-model="userName">
    </div>
    <div>
      性别：
      <!-- checked change -->
      <!-- 如果后端要求sex字段的值是number类型，需要使用绑定属性 -->
      <input type="radio" v-model="sex" :value="1">男
      <input type="radio" v-model="sex" :value="0">女
    </div>
    <div>
      爱好：
      <!-- checked change -->
      <input type="checkbox" v-model="hobby" value="篮球">篮球
      <input type="checkbox" v-model="hobby" value="足球">足球
      <input type="checkbox" v-model="hobby" value="网球">网球
      <input type="checkbox" v-model="hobby" value="羽毛球">羽毛球
    </div>
    <div>
      阶段：
      <!-- value change -->
      <!-- safari 浏览器，select无法选中第一个选项 -->
      <select v-model="lesson">
        <option disabled value="">请选择</option>
        <option :value="1">一阶段</option>
        <option :value="2">二阶段</option>
        <option :value="3">三阶段</option>
      </select>
    </div>
    <div>
      备注：
      <!-- value input -->
      <textarea v-model="note"></textarea>
    </div>
    <div>
      <input type="checkbox" v-model="flag"> 同意*****协议
    </div>
    <button v-on:click="getData">获取数据</button>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: { // 一定要注意数据类型
      userName: '',
      sex: 1,
      hobby: [], // 如果多选，使用数组
      lesson: '',
      note: '',
      flag: false
    },
    methods: { // 自定义函数
      getData () {
        console.log({
          userName: this.userName, // 为什么不是 this.data.userName(vue的各种选项只是标识)
          sex: this.sex,
          hobby: this.hobby,
          lesson: this.lesson,
          note: this.note,
          flag: this.flag
        })
      }
    }
  })
</script>
</html>
```

> 注意：
>
> * 1.checkbox，如果你的数据类型是数组类型，代表的就是 多选框（爱好，兴趣）；如果数据类型是boolean类型，true代表的是选中的状态，false代表的是未选中（注册时已阅读 ****协议，购物车的选中状态）
>
> * 2.select下拉选择框：如果 `v-model` 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。
>
>   在 iOS 中，这会使用户无法选择第一个选项。
>
>   因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐提供一个值为空的禁用选项。
>
>   ```html
>   <div>
>   阶段:
>     <select v-model="lesson">
>       <option disabled value="">请选择</option>
>       <option value="1">1阶段</option>
>       <option value="2">2阶段</option>
>       <option value="3">3阶段</option>
>   	</select> - {{ lesson }}
>   </div>
>   ```
>
>   

## 4.3 v-once

只渲染元素和组件**一次**。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。

**这可以用于优化更新性能**。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <input type="text" v-model = "message" > - {{ message }}
    <div v-once>{{ message }}</div>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      message: '1234'
    }
  })
</script>
</html>
```



## 4.4 绑定属性 v-bind

动态地绑定一个或多个 attribute，或一个组件 prop 到表达式。

在绑定 `class` 或 `style` attribute 时，支持其它类型的值，如数组或对象。可以通过下面的教程链接查看详情。

在绑定 prop 时，prop 必须在子组件中声明。可以用修饰符指定不同的绑定类型。

没有参数时，可以绑定到一个包含键值对的对象。注意此时 `class` 和 `style` 绑定不支持数组和对象。

**vue中当遇到变量，boolean类型或者number类型时，需要使用绑定属性**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <!-- vue中属性之是变量，boolean类型，number类型,对象， 数组，null， underfined
      需要使用绑定属性
    -->
    <div class="message" v-bind:aaa="message"></div>
    <div num = "100"></div>
    <div v-bind:num = "1000"></div>
    <div  v-bind:obj = "{ a: 1000 }"></div>
    <!-- v-bind:属性名 = "属性值"
    可以简写为  :属性名=“属性值
    -->
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      message: '1234'
    }
  })
</script>
</html>
```



## 4.5 v-on

### 4.5.1 基本使用

**作用：**绑定事件监听器（事件绑定）

```js
<!-- 常规写法 --> 
<button v-on:click="num++"></button> 
<!-- 缩写 --> 
<button @click="num++"></button>
<!-- 事件处理函数调用：直接写函数名 --> 
<button @click="say"></button> 
<!-- 事件处理函数调用：常规调用,可以传递参数 --> 
<button @click="alert('123')"></button>
```

如果事件处理函数为自定义函数，则需要先进行定义，定义的方式如下：

```js
... 
data: { 
... 
},
methods: { 
  functionName: function(arg1,arg2,arg3,...) { 
    // something to do 
  },
  .... 
} 
```

> 注意：事件绑定 v-on 属性表达式中切记不能直接写业务逻辑，例如 @click="alert('123')"

**事件处理函数传参**

```html
<!-- 事件处理函数调用：直接写函数名 -->
<button @click="say"></button> 
<!-- 事件处理函数调用：常规调用 -->
<button @click="say('hi',$event)"></button>
```

在不传递自定义参数的时候，上述两种用法均可以使用；但是如果需要传递自定义参数的话，则需要使用第2种方式。

> 事件对象的传递与接收注意点
>
> 如果事件直接使用函数名并且不写小括号，那么默认会将事件对象作为唯一参数进行传递
>
> 如果使用常规的自定义函数调用（只要写了小括号），那么如果需要使用事件对象则必须作为最后一个参数进行传递，且事件对象的名称必须是“$event”

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>02 v-on</title>
</head>
<body>
  <div id="app">
    <!-- 无法使用事件对象 -->
    <button v-on:click="num += 10">加10</button>{{ num }}<br/>
    <!-- 不加（）的函数的默认参数为 事件对象 -->
    <button v-on:click="add">加20</button>{{ num }}<br/>
    <!-- 添加（）不能直接使用事件对象， 使用 $event 参数作为事件对象参数 -->
    <button v-on:click="addFn(50, $event)">加参数</button>{{ num }}<br/>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      num: 100
    },
    methods: {
      add (event) { // 默认参数
        console.log(event)
        this.num += 20
      },
      addFn (params, event) {
        console.log(event)
        this.num += params
      }
    }
  })
</script>
</html>
```



```html
<!--练习-->
<style> 
  #big {width: 300px; height: 300px; background-color: red; }
  #mid {width: 200px; height: 200px; background-color: green; }
  #sma {width: 100px; height: 100px; background-color: pink; } 
</style> 
<body>
  <div id="app">
    <div id="big" @click="say('大娃',$event)"> 
      <div id="mid" @click="say('二娃',$event)"> 
        <div id="sma" @click="say('三娃',$event)"></div> 
      </div> 
    </div> 
  </div> 
</body> 
<script src="lib/vue.js"></script> 
<script> 
  new Vue({ 
    el: '#app', 
    data: { },
    methods:{ 
      say: function(name,event){ 
        console.log('你点了' + name); 
      } 
    } 
  }) 
</script>
```



### 4.5.2 事件修饰符

含义：用来处理事件的特定行为

使用示例：

```html
<!-- 停止冒泡 --> 
<button @click.stop="doThis"></button> 
<!-- 阻止默认行为 --> 
<button @click.prevent="doThis"></button> 
<!-- 串联修饰符 --> 
<button @click.stop.prevent="doThis"></button>
```

更多事件修饰符请参考官方文档：https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>02 v-on</title>
  <style>
    .box { width: 100px; height: 100px; background-color: #f66; margin: 10px}
  </style>
</head>
<body>
  <div id="app">
    <!-- js 思路 -->
    <div class="box" @click="jsClickBox">
      <button class="btn" @click="jsClickBtn">按钮</button>
    </div>
    <!-- vue 设计了修饰符
      阻止冒泡：子元素添加了 stop
    -->
    <div class="box" @click="vueClickBox">
      <button class="btn" @click.stop="vueClickBtn">按钮</button>
    </div>
    <!-- 父元素上 添加 self -->
    <div class="box" @click.self="vueClickBox">
      <button class="btn" @click="vueClickBtn">按钮</button>
    </div>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      num: 100
    },
    methods: {
      jsClickBox () {
        console.log('box')
      },
      jsClickBtn (event) {
        event.stopPropagation()
        console.log('btn')
      },
      vueClickBox () {
        console.log('box')
      },
      vueClickBtn () {
        console.log('btn')
      }
    }
  })
</script>
</html>
```



### 4.5.3 按键修饰符

>  在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符。

```html
<!-- 只有在 `key` 是 `Enter` 回车键的时候调用 --> 
<input v-on:keyup.enter="submit"> 
<!-- 只有在 `key` 是 `Delete` 回车键的时候调用 --> 
<input v-on:keyup.delete="handle">
```

更多按键修饰符请参考官方文档：

https://cn.vuejs.org/v2/guide/events.html#%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6

```
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>02 v-on</title>
  <style>
    .box { width: 100px; height: 100px; background-color: #f66; margin: 10px}
  </style>
</head>
<body>
  <div id="app">
    <!-- js 思路 -->
    <div class="box" @click="jsClickBox">
      <button class="btn" @click="jsClickBtn">按钮</button>
    </div>
    <!-- vue 设计了修饰符
      阻止冒泡：子元素添加了 stop
    -->
    <div class="box" @click="vueClickBox">
      <button class="btn" @click.stop="vueClickBtn">按钮</button>
    </div>
    <!-- 父元素上 添加 self -->
    <div class="box" @click.self="vueClickBox">
      <button class="btn" @click="vueClickBtn">按钮</button>
    </div>

    <!-- 按键修饰符 -->
    <!-- 按 回车键 获取数据 -->
    <input type="text" @keyup="jsGetData"> <br/>
    <!-- <input type="text" @keyup.enter="vueGetData"><br/> -->
    <input type="text" @keyup.13="vueGetData"><br/>

  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      num: 100
    },
    methods: {
      jsClickBox () {
        console.log('box')
      },
      jsClickBtn (event) {
        event.stopPropagation()
        console.log('btn')
      },
      vueClickBox () {
        console.log('box')
      },
      vueClickBtn () {
        console.log('btn')
      },
      jsGetData (event) {
        if (event.keyCode === 13) {
          console.log(event.target.value)
        }
      },
      vueGetData (event) {
        console.log(event.target.value)
      }
    }
  })
</script>
</html>
```



### 4.5.4 自定义修饰符

需要配合 系统修饰键 完成

https://cn.vuejs.org/v2/guide/events.html#%E7%B3%BB%E7%BB%9F%E4%BF%AE%E9%A5%B0%E9%94%AE



按键修饰符还有一个额外的细节需要注意，Vue内置的按键修饰符是有限的，如果还需要用到其他键盘按键的修饰符，则此时我们可以通过全局对象config.keyCodes自行定义按键修饰符，例如：

```js
Vue.config.keyCodes.KEYNAME = 112
```

当然，在实际使用的时候也允许我们不去定义修饰符而直接去使用按键对应的数字（按键码），例如：

```html
<input v-on:keyup.13="submit">
```

但是这种方式直接记忆数字与按键的关系，不是很方便。已经被官方废弃了，并且可能在最新的浏览器中不被支持。参考地址：https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>02 v-on</title>
  <style>
    .box { width: 100px; height: 100px; background-color: #f66; margin: 10px}
  </style>
</head>
<body>
  <div id="app">
    <!-- js 思路 -->
    <div class="box" @click="jsClickBox">
      <button class="btn" @click="jsClickBtn">按钮</button>
    </div>
    <!-- vue 设计了修饰符
      阻止冒泡：子元素添加了 stop
    -->
    <div class="box" @click="vueClickBox">
      <button class="btn" @click.stop="vueClickBtn">按钮</button>
    </div>
    <!-- 父元素上 添加 self -->
    <div class="box" @click.self="vueClickBox">
      <button class="btn" @click="vueClickBtn">按钮</button>
    </div>

    <!-- 按键修饰符 -->
    <!-- 按 回车键 获取数据 -->
    <input type="text" @keyup="jsGetData"> <br/>
    <!-- <input type="text" @keyup.enter="vueGetData"><br/> -->
    <input type="text" @keyup.13="vueGetData"><br/>

    <!-- 系统修饰键 -->
    <!-- alt + c 打印信息 -->
    <input type="text" @keyup.alt.67="groupEvent">
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      num: 100
    },
    methods: {
      jsClickBox () {
        console.log('box')
      },
      jsClickBtn (event) {
        event.stopPropagation()
        console.log('btn')
      },
      vueClickBox () {
        console.log('box')
      },
      vueClickBtn () {
        console.log('btn')
      },
      jsGetData (event) {
        if (event.keyCode === 13) {
          console.log(event.target.value)
        }
      },
      vueGetData (event) {
        console.log(event.target.value)
      },
      groupEvent () {
        console.log('啦啦啦啦啦啦啦阿拉')
      }
    }
  })
</script>
</html>
```



## 4.6 循环分支（判断）指令

### 4.6.1 循环指令

**作用：**根据一组数组或对象的选项列表进行渲染。

**指令：**v-for

* 数组遍历使用示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>04 列表渲染</title>
</head>
<body>
  <div id="app">
    <!-- 
      v-for="item of list" :key 唯一性
      v-for="item in list" :key 唯一性
      v-for="item in list" :key 唯一性
      v-for="(item, index) of list" :key="index"

      为什要加key属性，如何验证
     -->
     <ul>
       <li v-for="(item, index) of list" :key="index">{{ item }}</li>
     </ul>

     <!-- 对象可以遍历吗 -->
     <!-- 字符串可以遍历吗 -->
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      list: ['a', 'b', 'c', 'd']
    },
    methods: {
      
    }
  })
</script>
</html>
```

> 细节：key的作用，提高性能，不影响显示效果（ 如果没有id，可以考虑使用索引替代 ）

* 对象遍历使用示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <!-- vue 借鉴了angularjs的循环 遍历的思想
      v-for="item in list"
      v-for="item of list"
      v-for="(item, index) of list"

      每一次遍历的时候，最好添加一个key属性 (十把锁，十把钥匙，新增一把锁和一把钥匙，如何快速区分 -- 贴标签)
      key属性就类似于标签
      key属性可以取值为 
        数据的唯一字段
        索引值为唯一字段
        如何体现高效： 控制台 给数据的头部添加数据体验 vm.list.unshift()
    -->
    <ul>
      <li v-for="item of list" :key="item">{{ item }}</li>
    </ul>
    <!-- 遍历对象
    v-for="(value, key, index) of obj"
    -->
    <ul>
      <li v-for="(value, key, index) of obj" :key="index">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  const vm = new Vue({
    el: '#app',
    data: {
      list: [ 'a', 'b', 'c', 'd', 'e'],
      obj: {
        a: 1,
        b: 2,
        c: 3
      }
    }
  })
  console.log(vm)

</script>
</html>
```

**作业**

> 遍历以下数据
>
> ```js
> data: {
> 	arr: [
> 		{
>       brand: '宝马',
>       list: [
>         'X5', 'X6'
>       ]
>     },
>     {
>       brand: '奥迪',
>       list: [
>         'A8', 'A6'
>       ]
>     },
>     {
>       brand: '奔驰',
>       list: [
>         'S500', 'S686'
>       ]
>     }
> 	]
> }
> ```
>
> 

### 4.6.2 分支指令 - 判断条件

**作用：**根据表达式的布尔值(true/false)进行判断是否渲染该元素

* v-if

* v-else

* v-else-if

> 上述三个指令是分支中最常见的。根据需求，v-if可以单独使用，也可以配合v-else一起使用，也可以配合v-else-if和v-else一起使用。

* v-show

> v-show是根据表达式之真假值，切换元素的 display CSS属性。



> 思考：v-if系列与v-show的区别是什么？
>
> v-if：控制元素是否渲染
>
> v-show：控制元素是否显示（已经渲染，display:none;）
>
> v-if系列指令、v-show指令可以与v-for指令结合起来使用（循环+分支）。例如：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <input type="text" v-model="grade"> {{ grade }}
    <br/>
    v-if输出：
    <div v-if="grade >= 90">优</div>
    <div v-else-if="grade>=80">良</div>
    <div v-else-if="grade>=70">中</div>
    <div v-else-if="grade>=60">差</div>
    <div v-else-if="grade>0">不及格</div>
    <div v-else>请输入考试成绩</div>

    v-show输出：
    <div v-show="grade >= 90">优</div>
    <div v-show="grade >= 80 && grade < 90">良</div>
    <div v-show="grade >= 70 && grade < 80">中</div>
    <div v-show="grade >= 60 && grade < 70">差</div>
    <div v-show="grade > 0 && grade < 60">不及格</div>
    <div v-show="grade === ''">请输入考试成绩</div>

    <!-- 对比v-if 以及 v-show ,可通过审查元素获取灵感 -->
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      grade: 88
    }
  })
</script>
</html>
```

> 通过审查元素观察 v-if 以及 v-show的区别

## 4.7 综合案例：简易购物车

![](img/23.png)

> 细节：
>
> ​	展示基本的商品信息
>
> ​	计算每个商品的小计
>
> ​	商品数量的加、减操作
>
> ​		+：增加商品数量，同时更新小计
>
> ​		-：减少商品数量，同时更新小计，如果本身为“1”，-不可以再次点击
>
> ​	如果需要在Vue实例中访问自身data属性中的数据，可以使用以下方式：
>
> ​		this.xxxxx
>
> ​		this.$data.xxxxx
>
> ​		this._data.xxxxx

**参考数据源**

```js
var cartData = [ { 
  id: 1, 
  name: '小米', 
  price: 100, 
  num: 1
}, { 
  id: 2, 
  name: '华为', 
  price: 200, 
  num: 1 
},{ 
  id: 3, 
  name: '联想',
  price: 300, 
  num: 1 
} ]
```

**参考核心代码**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>06 简易购物车</title>
</head>
<body>
  <div id="app">
    <table border="1">
      <tr>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>小计</th>
      </tr>
      <tr v-for="(item, index) of list" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button :disabled="item.num <= 1" @click="item.num-=1">-</button>
          {{ item.num }}
          <button @click="item.num += 1">+</button>
          <button @click="del(index)">X</button>
        </td>
        <td>
          {{ item.num * item.price }}
        </td>
      </tr>
    </table>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      list: [
        { 
          id: 1, 
          name: '小米', 
          price: 100, 
          num: 1
        }, { 
          id: 2, 
          name: '华为', 
          price: 200, 
          num: 1 
        }, { 
          id: 3, 
          name: '联想',
          price: 300, 
          num: 1 
        }
      ]
    },
    methods: {
      del (index) {
        // 返回值的结果为删除的元素
        this.list.splice(index, 1)
      }
    }
  })
</script>
</html>
```

>  `&emsp; `表示tab，一个顶四个`nbsp; `

## 4.8 样式绑定

### 4.8.1 class样式绑定

* 对象语法（ 用于控制开关切换 ） 

  ```html
  <style> 
    /* CSS片段 */ 
    .active { color: red; }
  </style>
  <!-- HTML片段 --> 
  <div v-bind:class="{active: isActive}">class样式</div>
  <script type='text/javascript'> 
    // JavaScript片段 
    data: { 
      isActive: true
    }
  </script>
  
  
  ```

* 数组写法

  ```html
  <style>
    /* CSS片段 */ 
    .active { 
      color: red; 
    }
  </style> 
  <!-- HTML片段 --> 
  <div v-bind:class="[activeClass]">数组写法</div>
  <script type='text/javascript'> 
    // JavaScript片段 
    data: { 
      activeClass: 'active' 
    }
  </script>
  ```


案例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>07 样式绑定</title>
  <style>
    .active {
      color: red;
    }
    .a {
      font-size: 40px;
    }
    .b {
      color: green;
    }
  </style>
</head>
<body>
  <div id="app">
    <!-- 样式绑定
    class绑定 - 对象 + 数组
    style绑定 - 对象 + 数组
    -->
    <!-- class 对象 -->
    <!-- <div class="active"></div> -->
    <!-- <div :class="{ active: flag }">class 对象写法</div> -->
    <div :class="flag ? 'active' : ''"></div>

    <!-- class 数组 -->
    <div :class="[ aclass, bclass ]">class数组写法</div>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      flag: false,
      aclass: 'a',
      bclass: 'b'
    }
  })
</script>
</html>
```



### 4.8.2 style样式处理

* 对象语法

```html
<!-- HTML片段 --> 
<div:style="{color: redColor, fontSize: '20px'}">对象写法</div> 
<script type='text/javascript'> 
  // JavaScript片段 
  data: { 
    redColor: 'red' 
  }
</script>
```

* 数组语法

```html
<!-- HTML片段 --> 
<div v-bind:style="[color, fontSize]">数组写法</div> 
<script type='text/javascript'>
  // JavaScript片段 
  data: { 
		color: {
      color: 'red' 
    },
    fontSize: { 
      'font-size': '20px' 
    } 
  }
</script>
```



## 4.9 v-model

修饰符

.lazy：默认情况下Vue的数据同步采用 input 事件，使用 .lazy 将其修改为失去焦点时触发(change)

.number：自动将用户的输入值转为数值类型（如果能转的话）

.trim：自动过滤用户输入的首尾空白字符

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>08 v-model修饰符</title>
</head>
<body>
  <div id="app">
    <!-- value input -->
    <input type="text" v-model="userName"> {{ userName }}<br/>
    <!-- value change  ----- .lazy   视情况而定 -->
    <input type="text" v-model.lazy="password"> {{ password }}<br/>

    <!-- .number 
    如果输入的值中含有 字母，自动忽略
    
    -->
    <input type="text"v-model.number="age">{{ age }}<br/>
    <!-- <input type="range">
    <input type="color">
    <input type="number"> -->

    <!-- .trim  先输入再查看效果-->
    <!-- <input type="text" v-model="note"> {{ note }} -->
    <input type="text" v-model.trim="note"> {{ note }}
    <button @click="getData">按钮</button>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      userName: '',
      password: '',
      age: '10',
      note: ''
    },
    methods: {
      getData () {
        console.log(this.note)
        // console.log(this.note.trim())
      }
    }
  })
</script>
</html>
```



## 4.10 综合案例： 购物车全选/全不选

* 分析给 全选 按钮绑定什么样的事件

  * click

  * change

* 全选 复选框与商品列表前面的复选框不是一回事

  * 两者v-mode的值肯定是不一样的

  * 全选 按钮的v-mode值应该是一个bool值

  * 商品列表前面的复选框v-model值应该是一个数组

**参考代码**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <input type="checkbox" value="a" v-model="arr" >a <br/>
    <input type="checkbox" value="b" v-model="arr" >b <br/>
    <input type="checkbox" value="c" v-model="arr" >c <br/>
    <input type="checkbox" value="d" v-model="arr" >d <br/>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      arr: ['c']
    }
  })
</script>
</html>
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>09 全选购物车</title>
</head>
<body>
  <div id="app">
    <table border="1">
      <tr>
        <th>
          <input type="checkbox" v-model="checkAll" @change="selectAll">
        </th>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>小计</th>
      </tr>
      <tr v-for="(item, index) of list" :key="item.id">
        <td>
          <input type="checkbox" v-model="arr" :value="item.id" @change="changeItem">
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button :disabled="item.num <= 1" @click="item.num-=1">-</button>
          {{ item.num }}
          <button @click="item.num += 1">+</button>
          <button @click="del(index)">X</button>
        </td>
        <td>
          {{ item.num * item.price }}
        </td>
      </tr>
    </table>{{ arr }}
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      arr: [], // 选中了那一些数据
      checkAll: false,
      list: [
        { 
          id: 1, 
          name: '小米', 
          price: 100, 
          num: 1
        }, { 
          id: 2, 
          name: '华为', 
          price: 200, 
          num: 1 
        }, { 
          id: 3, 
          name: '联想',
          price: 300, 
          num: 1 
        }
      ]
    },
    methods: {
      del (index) {
        // 返回值的结果为删除的元素
        this.list.splice(index, 1)
      },
      selectAll () { // 全选的事件
        if (this.checkAll) {
          this.list.forEach(item => {
            this.arr.push(item.id)
          })
        } else {
          this.arr = []
        }
      },
      changeItem () {
        // 勾选列表，会改变arr的数据，从而改变了长度
        // 如果list的长度和arr 的长度相同，代表所有的都已经被选中了
        this.checkAll = this.list.length === this.arr.length
      }
    }
  })
</script>
</html>
```

# 5.vue常用特性

## 5.1 自定义指令

除了核心功能默认内置的指令，Vue也允许注册自定义指令。有的情况下，对普通 DOM 元素进行底层操作，这时候就会用到自定义指令绑定到元素上执行相关操作。

**自定义指令分为：** 全局 **指令和** 局部 **指令**，当全局指令和局部指令同名时以局部指令为准。

自定义指令**常用**钩子函数有：

* bind：在**指令**第一次绑定到元素时调用

* inserted：被绑定**元素**插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)

* update：数据更新时调用

> 请注意：不管在定义全局还是局部自定义指令时，所提及的指令名均是不带 v- 前缀的名称

**全局自定义指令定义**

```js
// 无参(v-once/v-cloak)
Vue.directive('指令名',{ 
  钩子函数名: function(el[,....]){ 
  // 业务逻辑 
  // el参数是挂载到元素的DOM对象 
	} 
}
// 传参(v-text/v-html/v-model) v-model="username"
Vue.directive('指令名',{ 
  钩子函数名: function(el,binding[,....]){ 
  	let param = binding.value  // param 其实就时 username 的值
    // 业务逻辑
    },
    .... 
} 
```

> 全局自定义指令（后续的知识点也是的）不能写在Vue实例中（或者某个组件中）

**自动获取焦点的指令**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>10 自定义指令</title>
</head>
<body>
  <div id="app">
    <!-- 
      v-model="userName"
      v-html="str"

      v-once
      v-cloak
      v-pre
     -->
     <!-- 输入框输入手机号码，如果输入不匹配手机好的规则，显示红色，匹配显示绿色 -->
     <!--  -->

     <input type="text" v-focus>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  // 全局的自定义指令  new Vue 实例之前使用
  // 使用时是 v-name 定义时是name
  Vue.directive('focus', {
    // bind inserted update
    inserted (el) { // el 代表的就是当前的dom元素
      el.focus() // DOM元素获取焦点
    }
  })
  // 局部的自定义指令  new Vue 或者组件的选项中使用
  const app = new Vue({
    el: '#app',
    data: {
     
    }
  })
</script>
</html>
```



**局部自定义指令定义**

可以在 new Vue 的时候添加 directives 以注册局部自定义指令，局部自定义指令只能在当前组件中使用：

```js
directives: { 
  指令名: { 
    // 指令的定义 
    钩子函数名: function (el,binding) { 
      // 业务逻辑 
    } 
  } 
}
```

**函数简写（重点）**

> 在很多时候，我们可能想在 bind **和** update 时触发相同行为（如果只是其一，则还是单独分开声明），而不关心其它的钩子。那么这样写：

```js
// 全局 
Vue.directive('指令名', function (el,binding) { 
  // 业务逻辑 
})
// 局部 
directives: { 
  指令名: function (el,binding) { 
    // 业务逻辑 
  } 
}
```

> 在自定义指令的方法中，不能像以前的 methods 中的方法一样使用关键词 this ，此时 this关键词指向的是 Window 对象。

案例：使用自定义指令实现以下效果

* 使用全局指令定义自定义的 v-red（不传参） 和 v-color（传参）

* 使用局部自定义指令实现 v-mobile（不传参） 验证用户输入的是否是合法的手机号

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>11 自定义指令案例</title>
</head>
<body>
  <div id="app">
    <div v-red>文本显示为红色</div>
    <div v-color="'pink'">文本显示为自定义颜色</div>
     <!-- 输入框输入手机号码，如果输入不匹配手机好的规则，显示红色，匹配显示绿色 -->
     <!-- 要添加v-model, 其实就是监测了数据发生了改变 -->
    <input type="text" v-mobile v-model="phone">
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  Vue.directive('red', {
    bind (el) { // inserted
      el.style.color = "red"
    }
  })
  Vue.directive('color', {
    bind (el, binding) { // inserted
      console.log(binding)
      el.style.color = binding.value
    }
  })
  Vue.directive('mobile', {
    bind (el, binding) { // inserted
      console.log(11111)
    },
    inserted (el, binding) {
      console.log(22222)
    },
    update (el) { // 因为一直输入手机号，所以值在更新，使用update
      console.log(3333)
      if (/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(el.value)) {
        el.style.color = 'green'
      } else {
        el.style.color = 'red'
      }
    }
  })
  const app = new Vue({
    el: '#app',
    data: {
      phone: ''
    }
  })
</script>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>12 局部自定义指令</title>
</head>
<body>
  <div id="app">
    <div v-red>文本显示为红色</div>
    <div v-color="'pink'">文本显示为自定义颜色</div>
     <!-- 输入框输入手机号码，如果输入不匹配手机好的规则，显示红色，匹配显示绿色 -->
     <!-- 要添加v-model, 其实就是监测了数据发生了改变 -->
    <input type="text" v-mobile v-model="phone">
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  // Vue.directive('red', {
  //   bind (el) { // inserted
  //     el.style.color = "red"
  //   }
  // })
  // Vue.directive('color', {
  //   bind (el, binding) { // inserted
  //     console.log(binding)
  //     el.style.color = binding.value
  //   }
  // })
  // Vue.directive('mobile', {
  //   bind (el, binding) { // inserted
  //     console.log(11111)
  //   },
  //   inserted (el, binding) {
  //     console.log(22222)
  //   },
  //   update (el) { // 因为一直输入手机号，所以值在更新，使用update
  //     console.log(3333)
  //     if (/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(el.value)) {
  //       el.style.color = 'green'
  //     } else {
  //       el.style.color = 'red'
  //     }
  //   }
  // })
  const app = new Vue({
    el: '#app',
    data: {
      phone: ''
    },
    directives: {
      'red': {
        bind (el) {
          el.style.color = 'red'
        }
      },
      'color': {
        bind(el, binding) {
          el.style.color = binding.value
        }
      },
      'mobile': {
        update (el) {
          if (/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(el.value)) {
            el.style.color = 'green'
          } else {
            el.style.color = 'red'
          }
        }
      }
    }
  })
</script>
</html>
```

> 推荐使用全局的自定义指令

## 5.2 计算属性 - computed

模板中放入太多的逻辑会让模板过重且难以维护，使用计算属性可以让模板变得简洁易于维护。计算属性是基于它们的响应式**依赖**进行**缓存**的，计算属性比较适合对多个变量或者对象进行处理后返回一个结果值，也就是说多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化。

计算属性定义在Vue对象中，通过关键词 **computed** 属性对象中定义一个个函数，并返回一个值，使用计算属性时和 data 中的数据使用方式一致。

**任何复杂的业务逻辑，我们都应当使用计算属性** -  计算属性具有依赖性，只有依赖的值发生改变，才会重新计算

**示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>13 计算属性</title>
</head>
<body>
  <div id="app">
    <h4>原字符串</h4>
    {{ msg }} <br/>
    <h4>表达式 - 不易于维护</h4>
    {{ msg.split('').reverse().join('') }}<br/>
    {{ msg.split('').reverse().join('') }}<br/>
    {{ msg.split('').reverse().join('') }}<br/>
    <h4>函数/方法 - 易于维护 - 调用多次，执行多次</h4>
    {{ reverseMsgFn() }}<br/>
    {{ reverseMsgFn() }}<br/>
    {{ reverseMsgFn() }}<br/>
    <h4>计算属性 - 易于维护，依赖的数据发生改变，才会重新执行</h4>
    <!-- 使用方法和data中的一样 -->
    {{ reverseMsg }}<br/>
    {{ reverseMsg }}<br/>
    {{ reverseMsg }}
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  
  const app = new Vue({
    el: '#app',
    data: {
      msg: 'hello vue'
    },
    computed: {
      reverseMsg () {
        console.log('computed')
        return this.msg.split('').reverse().join('')
      }
    },
    methods: {
      reverseMsgFn () {
        console.log('fn')
        return this.msg.split('').reverse().join('')
      }
    },
  })
</script>
</html>
```



> **注意：**只要依赖的数据源不发生改变，计算属性里的对应方法就只被调用1次，其它时候被调用时则使用缓存。



## 5.3 监听器 - watch 侦听属性

使用watch来侦听data中数据的变化，watch中的属性一定是data 中已经存在的数据。

**使用场景：**数据变化时执行异步或开销比较大的操作。

**典型应用：**http://www.pinyinzi.cn/

![](img/20.png)

![](img/21.png)

**参考代码：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <input type="text" v-model='firstName'> +
    <input type="text" v-model='lastName'> = 
    <input type="text" v-model='fullName'> 
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
 
  new Vue({
    el: '#app',
    data: {
      firstName: '',
      lastName: '',
      fullName: ''
    },
    watch: {
      firstName (newVal, oldVal) {
        console.log('newVal', newVal)
        this.fullName = newVal + this.lastName
      },
      lastName (newVal, oldVal) {
        this.fullName = this.firstName + newVal
      }
    }
  })
  
</script>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <input type="text" v-model='firstName'> +
    <input type="text" v-model='lastName'> = 
    <input type="text" v-model='fullName'> 
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
 
  new Vue({
    el: '#app',
    data: {
      firstName: '',
      lastName: ''
    },
    computed: {
      fullName () {
        return this.firstName + this.lastName
      }
    }
  })
  
</script>
</html>
```



> 注意点：
>
> * 声明监听器，使用的关键词是 watch
>
> * 每个监听器的方法，可以接受2个参数，第一个参数是新的值，第二个参数是之前的值

**注意：**当需要监听一个对象的改变时，普通的watch方法无法监听到对象内部属性的改变，此时就需要deep属性对对象进行深度监听。

**使用对象的数据形式改写上述案例参考代码：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>01 深度侦听</title>
</head>
<body>
  <div id="app">
    <!-- 如何侦听对象下的属性的变化  ----  深度侦听 -->
    <input type="text" v-model="msg">
    <input type="text" v-model="userInfo.firstName"> +
    <input type="text" v-model="userInfo.lastName"> = {{ userInfo.fullName }}

  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      msg: 'hello msg',
      userInfo: {
        firstName: '吴',
        lastName: '大勋',
        fullName: '吴大勋'
      }
    },
    watch: {
      msg (newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      // userInfo (newVal, oldVal) { // 无法监测到 userInfo下的属性的变化的
      //   console.log(newVal, oldVal)
      // }
      // userInfo: { // 深度侦听
      //   handler (newVal, oldVal) { // 代码的业务逻辑
      //     console.log(newVal, oldVal)
      //     this.userInfo.fullName = newVal.firstName + newVal.lastName
      //   },
      //   deep: true, // 深度侦听的关键
      //   immediate: true // 主动触发一次侦听函数
      // }
      // 不叫深度侦听
      'userInfo.firstName': function (newVal, oldVal) {
        this.userInfo.fullName = newVal + this.userInfo.lastName
      },
      'userInfo.lastName': function (newVal, oldVal) {
        this.userInfo.fullName = this.userInfo.firstName + newVal
      }
    }
  })
</script>
</html>
```



## 5.4 综合案例：继续完善购物车

**进一步需求：**

* 增加自动计算总价功能，只计算被选中的商品【计算属性】

  * 循序渐进

  * 可以先计算全部的，再剔除未选中的商品
* 增加反选功能
* 当手动选中全部商品， 全选 复选框自动选中，但凡有一个商品的复选框没有被选中，则 全选复选框不选中【监听】

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>02 完善购物车</title>
</head>
<body>
  <div id="app">
    <table border="1">
      <tr>
        <th>
          <input type="checkbox" v-model="checkAll" @change="selectAll">
        </th>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>小计</th>
      </tr>
      <tr v-for="(item, index) of list" :key="item.id">
        <td>
          <input type="checkbox" v-model="arr" :value="item.id" @change="changeItem">
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button :disabled="item.num <= 1" @click="item.num-=1">-</button>
          {{ item.num }}
          <button @click="item.num += 1">+</button>
          <button @click="del(index)">X</button>
        </td>
        <td>
          {{ item.num * item.price }}
        </td>
      </tr>
    </table>{{ arr }}

    <div>
      <p>总数： {{ totalNum }}</p>
      <p>总价： {{ totalPrice }}</p>
    </div>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      arr: [], // 选中了那一些数据
      checkAll: false,
      // list: JSON.parse(localStorage.getItem('list'))
      list: [
        { 
          id: 1, 
          name: '小米', 
          price: 100, 
          num: 1
        }, { 
          id: 2, 
          name: '华为', 
          price: 200, 
          num: 1 
        }, { 
          id: 3, 
          name: '联想',
          price: 300, 
          num: 1 
        }
      ]
    },
    computed: {
      totalNum () {
        // es6 reduce  
        // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
        return this.list.reduce((sum, item) => {
          // return sum + item.num // 全部计算
          // 选中的数据才计算（arr数组中元素是item.id --- 如何判断一个值是不是在数组中）
          // 数组的方法使用： 整理数组的常用方法以及使用场景
          // indexOf    可以处理简单元素的数组
          // findIndex  可以处理对象数组
          const index = this.arr.findIndex(itm => { // 如果有返回索引值，如果没有返回-1
            return itm === item.id
          })
          return index !== -1 ? sum + item.num : sum + 0
        }, 0)
      },
      totalPrice () {
        // var totalPrice = 0
        // this.list.forEach(item => {
        //   totalPrice += item.num * item.price
        // })
        // return totalPrice
        return this.list.reduce((sum, item) => {
          // return sum + item.num * item.price
          const index = this.arr.indexOf(item.id)
          return index !== -1 ? sum + item.num * item.price : sum + 0
        }, 0)
      }
    },
    methods: {
      del (index) {
        // 返回值的结果为删除的元素
        this.list.splice(index, 1)
      },
      selectAll () { // 全选的事件
        if (this.checkAll) {
          this.list.forEach(item => {
            this.arr.push(item.id)
          })
        } else {
          this.arr = []
        }
      },
      changeItem () {
        // 勾选列表，会改变arr的数据，从而改变了长度
        // 如果list的长度和arr 的长度相同，代表所有的都已经被选中了
        this.checkAll = this.list.length === this.arr.length
      }
    }
  })

  // const testArr = [1, 2, 3, 4, 5]
  // console.log(testArr.findIndex(item => {
  //   return item === 10
  // }))
</script>
</html>
```



## 5.5 过滤器 - filters

**作用：**格式化数据，比如将字符串格式化为首字母大写、将日期格式化为指定的格式等。

* 过滤器可以定义成全局过滤器和局部过滤器。

* 过滤器的本质就是一个方法，使用过滤器实际上就相当于方法调用，仅是书写形式上的差异(使用的时候需要用“|”，其也可以被称之为 管道 或 变量/数据修饰符 ）

![](img/22.png)

**声明语法：**

```js
// 全局过滤器 
Vue.filter('过滤器名称',function(value[,arg1,arg2...]){ 
  //过滤器业务逻辑 
  return .... 
})
// 局部过滤器 
el: '#app', 
data: {}, 
filters: { 
  过滤器名称: function(value[,arg1,arg2...]){ 
    return something 
  },
 .... 
}
```

**使用语法：**

```html
<!-- 过滤器使用 -->
<div>{{msg | upper}}</div>
<!-- 过滤器允许连续使用，“前 → 后”按顺序执行 --> 
<div>{{msg | upper | lower}}</div> 
<!-- 过滤器支持在v-bind中使用 --> 
<div v-bind:id='id | formatId'></div> 
<!-- 过滤器支持传参 --> 
<div>{{msg | mysub(1,2)}}</div>
```



**案例：性别展示以及货币符号**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>03 过滤器</title>
</head>
<body>
  <div id="app">
    <h2>不使用过滤器</h2>
    <div>
      {{ sex === 1 ? '男' : '女' }}
    </div>
    <div>
      {{ sex === 1 ? '男' : '女' }}
    </div>
    <div>
      {{ sex === 1 ? '男' : '女' }}
    </div>
    <h2>使用过滤器</h2>
    <div>
      {{ sex | sexFilter }}
    </div>
    <div>
      {{ sex | sexFilter }}
    </div>
    <div>
      {{ sex | sexFilter }}
    </div>
    <div>
      {{ price | priceFilter('China') }}
    </div>
    <div :sex="sex | sexFilter"></div>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  // 过滤器
  // 数据库中存储的是 男 女  还是 1 0，界面显示的 男 女  还是 1 0
  // 中国  ¥  美国 $
  // 数据库中一般存储的 性别为 1 和0 ，后端返回给前端的数据也是 1 和 0，但是用户希望看到的是 男和女

  // 全局的过滤器  / 局部过滤器

  // Vue.filter('sexFilter', function (val) {
  //   return val === 1 ? '男' : '女'
  // })
  // Vue.filter('priceFilter', function (val, county) {
  //   return county === 'China' ? '¥' + val : '$' + val
  // })
  const app = new Vue({
    el: '#app',
    data: {
      sex: 0,
      price: 300
    },
    filters: {
      sexFilter (val) {
        return val === 1 ? '男' : '女'
      },
      priceFilter (val, county) {
        return county === 'China' ? '¥' + val : '$' + val
      }
    }
  })
</script>
</html>
```



## 5.6 混入 - mixins

混入（mixins）是一种分发Vue组件中**可复用**功能的非常灵活的方式。**混入对象可以包含任意组件选项**。当组件使用混入对象时，所有混入对象（加的水）的选项将被混入该组件本身的选项（锅底）。

混入分为全局混入和局部混入。

![](img/24.png)

**示例：**

* 局部混入（按需混入）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>04 混入</title>
</head>
<body>
  <div id="app">
    <button @click="add">+</button>
    {{ count }}
    <button @click="reduce">-</button>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  // 混入 
  // 全局混入  不推荐
  // Vue.mixin({
  //   data () {
  //     return {
  //       name: '吴大勋'
  //     }
  //   },
  //   methods: {
  //     add () {
  //       this.count += 100
  //     },
  //     reduce () {
  //       this.count -= 10
  //     }
  //   }
  // })
  // 局部混入  推荐
  const mymixins = {
    data () { // 混入时 data 选项为 函数
      return {
        b: 1000
      }
    },
    mounted () {
      console.log(1) 
    },
    methods: {
      add () {
        console.log('add')
        this.count += 100
      } 
    }
  }
  // 生命周期的钩子函数中的代码都会执行
  // 自定义函数如果出现同名，以组件的函数为主
  // 其余的会自主补齐
  const app = new Vue({
    el: '#app',
    mixins: [mymixins],
    data: {
      count: 100
    },
    mounted () {
      console.log(2)
      console.log(this.b)
    },
    methods: {
      add () {
        this.count++
      },
      reduce () {
        this.count--
      }
    }
  })
</script>
</html>
```

* 全局混入（强制混入）



**注意事项**

* 当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”，合并策略：

  * data 数据对象发生冲突时以组件数据优先

  * 同名钩子函数将合并为一个数组，都将被调用，并且混入对象的钩子将在组件自身钩子**之前**调用

  * 值为对象的选项，例如 methods 、 components 和 directives ，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对

* 全局注册使用时需要格外小心！一旦使用全局混入，它将影响**每一个**之后创建的 Vue 实例

## 5.7 生命周期

每个 Vue 实例在被创建之前都要经过一系列的初始化过程。例如需要设置数据监听、编译模板、挂载实例到 DOM，在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，目的是给予用户在一些特定的场景下添加他们自己代码的机会。

Vue生命周期的主要阶段：4个before， 4个ed，创建，装载，更新，销毁

* 挂载（初始化相关属性）

  * beforeCreate ---- 备孕

    **注意点**：在此时不能获取data中的数据，也就是说 this.msg 得到的是

  * created ---- 怀上了

  * beforeMount ---- 怀胎十月

  * mounted【页面加载完毕的时候就是此时】 ---- 生下来了

    **注意点**：默认情况下，在组件的生命周期中只会触发一次

* 更新（元素或组件的变更操作）

  * beforeUpdate

  * updated

    **注意点**：可以重复触发的

* 销毁（销毁相关属性）

  * beforeDestroy --- game over前

  * destroyed --- game over

> 销毁（手动）使用 this.$destroy()

关于8个生命周期涉及到的方法，可以参考Vue官网API：

https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90

<img src="img/25.png" alt="1" style="zoom:33%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>05 生命周期</title>
</head>
<body>
  <div id="app">
    <input type="text" v-model="msg">
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  // https://cn.vuejs.org/v2/api/#beforeCreate
  const app = new Vue({
    el: '#app',
    data: {
      msg: 'hello'
    },
    watch: {
      msg (newVal) {
        if (newVal === 'hello 123') {
          this.$destroy()
        }
      }
    },
    // 备孕中
    beforeCreate () { // *
      console.log('beforeCreate')
    },
    // 怀上了
    created () { // ***** 数据的请求（胎教）
      console.log('created')
    },
    // 十月怀胎
    beforeMount () { // *
      console.log('beforeMount')
    },
    // 出生了
    mounted () { // ********** 数据的请求（早教），DOM操作，数据的实例化，定时器，计时器
      console.log('mounted')
    },
    // 一天天长大
    beforeUpdate () { // *
      console.log('beforeUpdate')
    },
    // 孩子一天天变化
    updated () { // *** DOM操作，数据的实例化
      console.log('updated')
    },
    beforeDestroy () { // *** 清楚对象，清楚计时器，清楚定时器
      console.log('beforeDestroy')
    },
    // game over
    destroyed () { // *
      console.log('destroyed')
    },
    activated () { // 配合 keep-alive 使用，手机运行程序 - 程序后台管理
      
    },
    deactivated () { // 配合 keep-alive 使用，手机运行程序 - 程序后台管理
      
    },
    errorCaptured: (err, vm, info) => { // *
      
    }
  })
</script>
</html>
```



## 5.8 虚拟DOM与diff算法

**什么是diff（different）算法？**

差异比较算法的一种，把树形结构按照层级分解，只**比较同级**元素。不同层级的节点只有创建和删除操作

![](img/27.png)



虚拟DOM+diff算法 **的方式与** 传统DOM操作 **相比，有什么好处？**

**传统DOM**操作：在一次操作中，往往会伴随多个DOM节点更新，浏览器收到第一个DOM请求后并不知道还有若干次更新操作，因此会马上执行流程，最终执行若干次。在后续找DOM坐标的时候，可能因为前期更新DOM导致了后续需要寻找的DOM坐标发生了变化。而操作DOM频繁还会出现页面卡顿，影响用户体验。

**虚拟**DOM+diff算法**：若一次操作中有若干次更新DOM的动作，虚拟DOM不会立即操作DOM，而是将这若干次更新的diff内容保存到本地一个JS对象中，最终将这个JS对象**一次性放到DOM树上，再进行后续操作，避免大量无谓的计算量。



# 6.网络请求

## 6.1 XMLHttpRequest

​	浏览器对XMLHttpRequest对象的支持度不足, 创建 XMLHttpRequest 对象时需要对IE浏览器做的兼

容解决。 -  ActiveXObject

​	回顾：XHR

* readyState
  
* 0-4，0表示未初始化，4表示请求已完成
  
* status（HTTP响应状态码）

  * 200：**OK**，成功

  * 3XX【重定向系列的状态码】

    * 301：永久重定向

    * 302：临时重定向

    * 307：内部浏览器（缓存）重定向
  
  * 4XX【错误系列】
  
    * 400：bad request，错误请求
  
    * 401：鉴权失败
    * 403：禁止访问 
    * 404：找不到对应的资源 
    * 405：方法不被允许
  
  * 5XX【服务器错误，环境问题】
  
    * 500：服务器内部错误（代码、环境问题）
  
    * 502：bad Getway，错误网关
  
  **使用XHR请求全国高校数据接口**
  
  接口地址
  
  * https://api.i-lynn.cn/college
  
  * 只循环展示 list 信息即可
  
  * 接口可以直接被跨域请求
  
  案例效果



**参考代码：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
</body>
<script>
  // 1.生成XHR对象
  var xhr = new XMLHttpRequest()
  // 2.绑定回调函数 
  xhr.onreadystatechange = function () {
    // 3. 判断是否成功 
    if (xhr.readyState === 4 && xhr.status === 200) {
      const list = JSON.parse(xhr.responseText).data
      console.log(list)
    }
  }
  // 4. 打开请求
  xhr.open('GET', 'https://api.i-lynn.cn/college')
  // 5.发送请求
  xhr.send()
</script>
</html>
```



## 6.2 jQuery

jQuery类的引入解决自己写兼容的烦恼，但现在只是使用了jQuery库中的网络请求功能，而jQuery中大量的dom的方法都是无效引入了，有点大材小用的意思。

```js
$.ajax({ 
  url, 
  type:get/post, 
  data, 
  dataType:json/text/xml/html/jsonp 
  success:function(res){}, 
  error:function(){} 
})
$.get(url,data,callback,dataType) 
$.post(url,data,callback,dataType)
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <ul>
      <li v-for="(item,index) of list" :key = "index">{{ item.area }}</li>
    </ul>
  </div>
</body>
<script src="lib/jquery.min.js"></script>
<script src="lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      list: []
    },
    async mounted () {
      // async await
      // async 加载函数上，表示函数内部有异步操作
      // await 记载异步操作前,把异步操作写为同步
      const res = await $.get("https://api.i-lynn.cn/college", 'json')
      console.log(res)
      this.list = res.data.list
    }
  })
</script>
</html>
```

> async：关键词，用于函数声明关键词 function 之前，标记当前的函数为异步函数
>
> await：关键词，让当前关键词的行代码执行之后等到到结果之后再去执行后续代码



## 6.3 fetch

**由HTML5提供的内置API**

更加简单的数据获取方式，功能更强大、灵活，可以看作是xhr的升级版

基于Promise实现

fetch支持很多请求方式，但默认为 GET 请求，如果需要使用其他方式可以通过第二个自选参数的 method 选项去指定

```
fetch(url[,some settings]).then(fn2) .then(fn3) ... .catch(fn)
```

```js
// 通过url表达式来传递数据 
fetch("http://xxx/?id=123") 
  .then(res => res.json()) 
  .then(data => console.log(data)); 

// post标准提交 
fetch("http://xxxx/post", { 
  method: "post", 
  body: "uname=lisi&pwd=123", 
  headers: { "Content-Type": "application/x-www-form-urlencoded"
           }
})
  .then(res => res.json()) 
  .then(data => console.log(data));

// post提交json数据 
fetch("http://localhost:3000/books", { 
  method: "post", 
  body: JSON.stringify({ uname: "lisi", pwd: "123", }), 
  headers: { "Content-Type": "application/json", }
})
  .then(res => res.json()) 
  .then(data => console.log(data));
```

> 注意：fetch 不会发送 cookies。除非你使用了credentials 的初始化选项 credentials: "include"

在上述代码示例中我们会看到有个 json() 方法，它是fetch的响应结果处理方法，fetch的常用响应

结果处理方法有：

* text()：将返回体处理成字符串类型

* json()：返回结果和JSON.parse(responseText)一样

**使用fetch方式改写 XHR 部分案例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>06 fetch</title>
</head>
<body>
  <div id="app">
    <ul>
      <li v-for="item of list" :key="item.proid">
        {{ item.proname }}
      </li>
    </ul>
    <input type="text" v-model="loginname">
    <input type="text" v-model="password">
    <button @click="login">登录</button>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  // http://121.89.205.189/apidoc/
  new Vue({
    el: '#app',
    data: {
      list: [],
      loginname: '18813007814',
      password: '123456'
    },
    mounted () {
      // get请求
      fetch('http://121.89.205.189/api/pro/list?limitNum=1')
        .then(res => res.json()) // 需要把promise的对象转换为json对象
        .then(res => {
          console.log(res)
          this.list = res.data
        })
    },
    methods: {
      // post请求
      login () {
        // 18813007814  Ty2102
        fetch('http://121.89.205.189/api/user/login', {
          method: 'post',
          body: JSON.stringify({ loginname: this.loginname, password: this.password }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(res => {
            console.log(res)
          })
      }
    }
  })
</script>
</html>
```



## 6.4 axios

### 6.4.1 基本使用

文档：https://www.kancloud.cn/yunye/axios/234845

axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和node.js中。**axios是vue作者推荐使用**

**的网络请求库**，它具有以下特性：

* 支持浏览器和node.js

* 支持promise

* 能够拦截 请求和响应

* 自动转换json数据

**axios**的浏览器支持

![](img/29.png)

**在使用**axios**之前需要在对应的模板文件中引入**axios**的**js库文件，随后按照以下用法使用axios：

```js
// GET请求方式 
axios.get('/get_data?id=10010')
  .then(ret => console.log(ret.data))

axios.get('/get_data',{ 
  params: { 
    id: 10010, 
    name: 'zhangsan', 
    age: 26 } })
  .then(ret => console.log(ret.data)) 

//POST请求方式 
axios.post('/set_data', { 
  firstName: 'zhang', lastName: 'san' 
}).then(ret => { }) 

axios({ 
  method: 'post', 
  url: 'set_data', 
  timeout: 1000, 
  headers: {'X-Custom-Header': 'foobar'}, 
  data: { firstName: 'zhang', lastName: 'san' } 
}).then(ret => { })
```

当然axios**除了**支持传统的 GET 和 POST 方式**以外**，常见的请求方式还支持：

* put：修改数据

* delete：删除数据

以上方的axios请求示例为例，axios响应结果（ ret ）的主要属性有：

* data：实际响应回来的数据（最常用）**

* headers：响应头信息

* status：响应状态码

* statusText：响应状态信息

另外需要注意的是，在使用axios发送请求之前它允许我们通过**全局配置**做一些设置，这样可以方便后续的请求操作，例如：

* axios.defaults.timeout = 3000【设置超时时间】

* axios.defaults.baseURL = 'http://localhost/app'【设置默认地址】

* axios.defaults.headers['_token'] = '123123123'【设置请求头信息，通用头信息】_

  * axios.defaults.headers.get['_token'] = '123123'

  * axios.defaults.headers.post['_token'] = '123123'

  * axios.defaults.headers.common['_token'] = '123123'【通用头信息，common可以不写】

> 注意：
>
> axios发送post请求的时候，默认发送json格式数据
>
> 如果需要发送post表单类型请求，则需要指定请求头

```js
axios.post('college',{ 
  username: 'zhangsan', age: 22 
},{ 
  headers: { "Content-Type": "application/x-www-form-urlencoded" } 
}).then(ret => this.list = ret.data.list)
```

**使用axios方式改写 XHR 部分案例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>07 axios</title>
</head>
<body>
  <div id="app">
    <ul>
      <li v-for="item of list" :key="item.proid">
        {{ item.proname }}
      </li>
    </ul>
    <input type="text" v-model="loginname">
    <input type="text" v-model="password">
    <button @click="login">登录</button>
  </div>
</body>
<script src="lib/vue.js"></script>
<script src="lib/axios.min.js"></script>
<script>
  // http://121.89.205.189/apidoc/
  new Vue({
    el: '#app',
    data: {
      list: [],
      loginname: '18813007814',
      password: '123456'
    },
    mounted () {
      // get请求
      // fetch('http://121.89.205.189/api/pro/list?limitNum=1')
      //   .then(res => res.json()) // 需要把promise的对象转换为json对象
      //   .then(res => {
      //     console.log(res)
      //     this.list = res.data
      //   })
      // axios.get('http://121.89.205.189/api/pro/list')
      //   .then(res => {
      //     console.log(res)
      //     this.list = res.data.data
      //   })
      // axios.get('http://121.89.205.189/api/pro/list?limitNum=2')
      //   .then(res => {
      //     console.log(res)
      //     this.list = res.data.data
      //   })
      axios.get('http://121.89.205.189/api/pro/list', { // 推荐使用他传递参数
        params: {
          limitNum: 3
        }
      })
        .then(res => {
          console.log(res)
          this.list = res.data.data
        })
    },
    methods: {
      // post请求
      login () {
        // 18813007814  Ty2102
        // fetch('http://121.89.205.189/api/user/login', {
        //   method: 'post',
        //   body: JSON.stringify({ loginname: this.loginname, password: this.password }),
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // }).then(res => res.json())
        //   .then(res => {
        //     console.log(res)
        //   })
        axios.post('http://121.89.205.189/api/user/login', {
          loginname: this.loginname,
          password: this.password
        }).then(res => {
          console.log(res)
        })
      }
    }
  })
</script>
</html>
```



### 6.4.2 拦截器

**目的：**在请求 发出去之前 / 收到响应之后 做一些操作

**请求拦截器**

![](img/30.png)

```js
axios.interceptors.request.use(function(config){ 
  // 在请求发出去之前进行一些信息设置 
  return config; 
},function(err){ 
  // 处理响应的错误信息 
});
```

**响应拦截器**

![](img/31.png)

```js
axios.interceptors.response.use(function(res){ 
  // res为axios对象 
  return res; 
},function(err){ 
  // 处理响应的错误信息 
});
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <ul>
      <li v-for="(item,index) of list" :key = "index">{{ item.area }}</li>
    </ul>
  </div>
</body>
<script src="lib/vue.js"></script>
<script src="lib/axios.min.js"></script>
<script>
  axios.interceptors.request.use(function(config){ 
    // 在请求发出去之前进行一些信息设置 
    console.log('loading......')
    return config; 
  },function(err){ 
    // 处理响应的错误信息 
  });

  axios.interceptors.response.use(function(res){ 
    // res为axios对象 
    console.log('loading end')
    return res; 
  },function(err){ 
    // 处理响应的错误信息 
  });
  new Vue({
    el: '#app',
    data: {
      list: []
    },
    mounted () {
      // axios.get('https://api.i-lynn.cn/college')
      //   .then(res => {
      //     console.log(res)
      //     this.list = res.data.data.list
      //   })
      axios({
        url: 'https://api.i-lynn.cn/college',
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        console.log(res)
        this.list = res.data.data.list
      })
    }
  })
</script>
</html>
```



# 7.vue组件



## 7.1 什么是组件

组件 （Component）是 Vue.js 最强大的功能之一，组件是一个自定义元素或称为一个模块，包括所需的模板（HTML）、逻辑（JavaScript）和样式（CSS）。

**组件化开发的特点：**

* 标准

* 分治

* 重用

* 组合

组件也是有 全局（component） 与 局部（components） 之分。

## 7.2 组件的注册及其使用

在使用组件时需要注意以下几点：

* 构造 Vue 实例时传入的各种选项大多数都可以在组件里使用，只有一个例外：**data**必须是函数，同时这个函数要求返回一个对象

```js
data:{
  msg: 'hello world'
}

data: function(){ 
  return { 
    msg: '你好世界' 
  } 
}
```

* 组件模板 template

  * 必须是单个根元素

  ```html
  <!-- 单个根元素 -->
  <div>
    <ul>
      <li></li> 
    </ul> 
    <ul>
      <li></li> 
    </ul> 
  </div> 
  <!-- 不符合单个根元素的情况 --> 
  <p></p> 
  <p></p>
  ```

  * 支持模板字符串形式

    ```
    `${a}`
    ```

    

* 组件名称命名方式
  * 短横线方式（推荐）
    * my-component
  * 大驼峰方式（只能在其他组件模板字符串中使用，不能在HTML模板中**直接**使用）
    * MyComponent

> 大驼峰式组件名不能在HTML模板中直接使用，如果需要在HTML模板中使用，需要将其进行特定规则转化：
>
> * 首字母从大写转为小写
>
> * 后续每遇到大写字母都要转化成小写并且在转化后的小写字母前加 -
>
> 例如， WoDeZuJian 这个大驼峰组件名在HTML中使用的时候需要写成 wo-de-zu-jian

### 7.2.1 全局组件

全局组件注册形式如下：

```js
// 声明全局组件 
Vue.component(componentName,{ 
  data: '组件数据', 
  template: '组件模版内容' 
})
```

上述示例中， component() 的第一个参数是 组件名 （**实则可以看作是**HTML标签名称），第二个参数是一个对象形式的选项，里面存放组件的声明信息。全局组件注册后，任何Vue实例都可以使用。

例如，有以下代码：

```js
// 声明一个全局的HelloWorld组件 
Vue.component('HelloWorld', { 
  data: function(){ 
    return { 
      msg: 'HelloWorld' 
    } 
  },
  template: '<div>{{msg}}</div>' 
});
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>01 全局注册组件</title>
</head>
<body>
  <div id="app">
    <!-- 3.使用组件 -->
    <!-- 像html标签一样使用组件
      a.在纯html模版中不可以使用大驼峰式的标签组件
      b.但是可以使用短横线的方式
      c.在vue的单文件组件中可以使用 大驼峰式的标签组件
    -->
    <my-header></my-header>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  // 1.定义组件
  const Header = {
    // 定义组件时没有 el 选项，使用template代替
    template: `
              <div>
                <h1>这里是标题 - {{ title }}</h1>
                <button @click="add">加</button>{{ count }}
              </div>
              `,
    // data在组件中必须是一个函数 --- 作用域
    data () {
      return {
        title: 'VUE 权威指南',
        count: 10
      }
    },
    // 其余选项均保持一致
    methods: {
      add () {
        this.count += 10
      }
    }
  }
  // 2.注册组件 - // 全局注册组件
  // Vue.component(组件名称，组件选项)
  // Vue.component('MyHeader', Header) // 大驼峰式命名
  Vue.component('my-header', Header) // 短横线方式命名

  new Vue({
    el: '#app'
  })
</script>
</html>
```

发现组件的 template选项，如果代码过多，代码的可读性很差，所以可以提取模版信息

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>01 全局注册组件</title>
</head>
<body>
  <div id="app">
    <!-- 4.使用组件 -->
    <!-- 像html标签一样使用组件
      a.在纯html模版中不可以使用大驼峰式的标签组件
      b.但是可以使用短横线的方式
      c.在vue的单文件组件中可以使用 大驼峰式的标签组件
    -->
    <my-header></my-header>
  </div>
</body>
<script src="lib/vue.js"></script>
<!-- 1.定义组件的模版,通过id指示是哪个组件的
    组件模版应该写在页面的哪个位置 - 因为 template 是一个空标签
  -->
<template id="header">
  <div>
    <h1>这里是标题 - {{ title }}</h1>
    <button @click="add">加</button>{{ count }}
  </div>
</template>
<script>
  // 2.定义组件
  const Header = {
    // 定义组件时没有 el 选项，使用template代替
    template: '#header',
    // data在组件中必须是一个函数 --- 作用域
    data () {
      return {
        title: 'VUE 权威指南',
        count: 10
      }
    },
    // 其余选项均保持一致
    methods: {
      add () {
        this.count += 10
      }
    }
  }
  // 3.注册组件 - // 全局注册组件
  // Vue.component(组件名称，组件选项)
  // Vue.component('MyHeader', Header) // 大驼峰式命名
  Vue.component('my-header', Header) // 短横线方式命名

  new Vue({
    el: '#app'
  })
</script>
</html>
```

> 1.定义组件的模版 <template id=""></template>
>
> 2.定义组件 const Com = { }
>
> 3.注册组件： 全局注册和局部注册
>
> 4.使用组件

### 7.2.2 局部组件

局部组件定义后只能在当前注册它的Vue实例中使用，其是通过某个 Vue 实例/组件的实例选项components 注册。

例如，有以下代码：

```js
var Child = { 
  template: '<div>A custom component!</div>' 
}
new Vue({ 
  components: { 
    // <my-component> 将只在父组件模板中可用 
    'my-component': Child 
  } 
})
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>03 局部注册组件</title>
</head>
<body>
  <div id="app">
    <!-- 4.使用组件 -->
    <!-- 像html标签一样使用组件
      a.在纯html模版中不可以使用大驼峰式的标签组件
      b.但是可以使用短横线的方式
      c.在vue的单文件组件中可以使用 大驼峰式的标签组件
    -->
    <my-header></my-header>
  </div>
</body>
<script src="lib/vue.js"></script>
<!-- 1.定义组件的模版,通过id指示是哪个组件的
    组件模版应该写在页面的哪个位置 - 因为 template 是一个空标签
  -->
<template id="header">
  <div>
    <h1>这里是标题 - {{ title }}</h1>
    <button @click="add">加</button>{{ count }}
  </div>
</template>
<script>
  // 2.定义组件
  const Header = {
    // 定义组件时没有 el 选项，使用template代替
    template: '#header',
    // data在组件中必须是一个函数 --- 作用域
    data () {
      return {
        title: 'VUE 权威指南',
        count: 10
      }
    },
    // 其余选项均保持一致
    methods: {
      add () {
        this.count += 10
      }
    }
  }
  // 3.注册组件 - // 全局注册组件
  // Vue.component(组件名称，组件选项)
  // Vue.component('MyHeader', Header) // 大驼峰式命名
  // Vue.component('my-header', Header) // 短横线方式命名

  new Vue({
    el: '#app',
    components: { // 3.局部注册组件
      // MyHeader: Header
      'my-header': Header
    }
  })
</script>
</html>
```



### 7.2.3 组件的使用

在HTML模板中，组件以**一个自定义标签的形式存在**，起到占位符的功能。通过Vue.js的声明式渲染后，占位符将会被替换为实际的内容，下面是一个最简单的模块示例：

```html
<div id="app"> 
  <my-component></my-component>
</div>
```

也可以在一个组件的组件模板中去使用**其他已经注册**的组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>04 封装swiper</title>
  <link rel="stylesheet" href="lib/swiper-bundle.min.css" />
  <style>
    .swiper-container {
      width: 100%;
      height: 300px;
    }  
  </style>
</head>
<body>
  <div id="app">
    <!-- 4.使用组件 -->
    <my-swiper></my-swiper>
  </div>
</body>
<script src="lib/vue.js"></script>
<script src="lib/axios.min.js"></script>
<script src="lib/swiper-bundle.min.js"></script>
<!-- 1.定义组件的模版 -->
<template id="mySwiper">
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item of list" :key="item.bannerid">
          <img :src="item.img" alt="">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
   </div>
</template>
<script>
  // 2.定义组件
  const SwiperCom = {
    template: '#mySwiper',
    data () {
      return {
        list: []
      }
    },
    mounted () {
      axios.get('http://121.89.205.189/api/banner/list')
        .then(res => {
          console.log(res.data.data)
          this.list = res.data.data
                  
        })
    },
    updated() {
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
    }
  }
  // 3.注册组件 - // 全局注册组件

  new Vue({
    el: '#app',
    components: { // 3.局部注册组件
      MySwiper: SwiperCom
    }
  })
</script>
</html>
```



## 7.3 组件间传值

如前面介绍组件时所说，组件有 分治 的特点，每个组件之间具有一定的独立性，但是在实际工作中使用组件的时候有互相之间传递数据的需求，此时就得考虑如何进行 组件间传值 的问题了。

### 7.3.1 父->子传值

父子组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>05 父子组件</title>
</head>
<body>
  <div id="app">
    <my-parent></my-parent>
  </div>
</body>
<template id="parent">
  <div>
    <h1>父组件</h1>
    <my-child></my-child>
  </div>
</template>
<template id="child">
  <div>
    <h3>子组件</h3>
  </div>
</template>
<script src="lib/vue.js"></script>
<script>
  const Child = {
    template: '#child'
  }
  const Parent = {
    template: '#parent',
    components: {
      MyChild: Child
    }
  }
  // 谁用谁注册
  new Vue({
    el: '#app',
    components: {
      MyParent: Parent
    }
  })
</script>
</html>
```



* 父组件以属性的形式绑定值到子组件身上

* 子组件通过使用属性props接收

  * props是单向绑定的（只读属性）：当父组件的属性变化时，将传导给子组件，但是反过来不会

  * props属性支持两种常见的写法形式

    * 数组

      * 优点：书写简单

      * 缺点：不能设置默认值、数据类型

    * 对象

      * 优点：可以设置数据默认值与数据类型

      * 缺点：写法复杂

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>06 父组件给子组件传值1</title>
</head>
<body>
  <div id="app">
    <my-parent></my-parent>
  </div>
</body>
<template id="parent">
  <div>
    <h1>父组件</h1>
    <!-- 1.父组件在调用子组件的地方，添加自定义的属性 -->
    <!-- 如果自定义的属性的值是变量，boolean类型，number类型，对象，数组，
      null或者undefined，需要使用绑定属性 -->
    <my-child :msg="msg" :flag="true" :num="100" :obj="{a:1}" :arr="[1, 2, 3]"></my-child>
  </div>
</template>
<template id="child">
  <div>
    <h3>子组件</h3>
    {{ msg }} - {{ flag }} -- {{ num }} -- {{ obj }} -- {{ arr }}
  </div>
</template>
<script src="lib/vue.js"></script>
<script>
  // 在子组件定义的地方，添加props选项,props可以有两大类的使用方法
  // 数组
  //    数组的元素就是自定义的属性名,这样就可以通过自定义的属性名渲染子组件的数据
  // 对象，对象的写法又分为两大类写法
  const Child = {
    props: ['msg', 'flag', 'num', 'obj', 'arr'],
    template: '#child'
  }
  const Parent = {
    template: '#parent',
    data () {
      return {
        msg: 'hello msg'
      }
    },
    components: {
      MyChild: Child
    }
  }
  // 谁用谁注册
  new Vue({
    el: '#app',
    components: {
      MyParent: Parent
    }
  })
</script>
</html>
```

> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>07 父组件给子组件传值2</title>
> </head>
> <body>
>     <div id="app">
>        <my-parent></my-parent>
>     </div>
> </body>
> <template id="parent">
>     <div>
>        <h1>父组件</h1>
>        <!-- 1.父组件在调用子组件的地方，添加自定义的属性 -->
>        <!-- 如果自定义的属性的值是变量，boolean类型，number类型，对象，数组，
>          null或者undefined，需要使用绑定属性 -->
>        <my-child :msg="msg" :flag="true" :num="100" :obj="{a:1}" :arr="[1, 2, 3]"></my-child>
>      </div>
>   </template>
> <template id="child">
>   <div>
>       <h3>子组件</h3>
>        {{ msg }} - {{ flag }} -- {{ num }} -- {{ obj }} -- {{ arr }}
>      </div>
>    </template>
>   <script src="lib/vue.js"></script>
> <script>
>   // 在子组件定义的地方，添加props选项,props可以有两大类的使用方法
>   // 数组
>     //    数组的元素就是自定义的属性名,这样就可以通过自定义的属性名渲染子组件的数据
>     // 对象，对象的写法又分为两大类写法
>     //    对象的key值为自定义的属性名，value值为数据类型,这样就可以通过自定义的属性名渲染子组件的数据
>     const Child = {
>        // props: ['msg', 'flag', 'num', 'obj', 'arr'],
>        props: {
>          msg: String,
>          flag: Boolean,
>          num: Number,
>          obj: Object,
>          arr: Array
>        },
>        template: '#child'
>      }
>     const Parent = {
>       template: '#parent',
>        data () {
>          return {
>            msg: 'hello msg'
>          }
>        },
>        components: {
>          MyChild: Child
>        }
>      }
>     // 谁用谁注册
>     new Vue({
>        el: '#app',
>        components: {
>          MyParent: Parent
>        }
>     })
> </script>
> </html>
> ```
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>08 父组件给子组件传值3</title>
> </head>
> <body>
>     <div id="app">
>        <my-parent></my-parent>
>     </div>
> </body>
> <template id="parent">
>     <div>
>        <h1>父组件</h1>
>        <!-- 1.父组件在调用子组件的地方，添加自定义的属性 -->
>        <!-- 如果自定义的属性的值是变量，boolean类型，number类型，对象，数组，
>          null或者undefined，需要使用绑定属性 -->
>        <my-child :msg="msg" :flag="true" :num="100" :obj="{a:1}" :arr="[1, 2, 3]"></my-child>
>        <my-child :msg="msg" :flag="true" :arr="[4, 5, 6]"></my-child>
>      </div>
>   </template>
> <template id="child">
>   <div>
>       <h3>子组件</h3>
>        {{ msg }} - {{ flag }} -- {{ num }} -- {{ obj }} -- {{ arr }}
>      </div>
>    </template>
>   <script src="lib/vue.js"></script>
> <script>
>   // 在子组件定义的地方，添加props选项,props可以有两大类的使用方法
>   // 数组
>     //    数组的元素就是自定义的属性名,这样就可以通过自定义的属性名渲染子组件的数据
>     // 对象，对象的写法又分为两大类写法
>     //    对象的key值为自定义的属性名，value值为数据类型,这样就可以通过自定义的属性名渲染子组件的数据
>     //    对象的key值为自定义的属性名，value值为新的一个对象
>     //        对象的key值可以为type,value值则为数据类型
>     //        对象的key值可以为default，value值则为属性的默认值（如果默认值是对象和数组，需要使用函数返回他们）
>     //        对象的key值可以为 required，value值则表示该属性是必须传递的数据
>     //        对象的key值可以为 validator, value值则表示可以对该属性进行验证
>      const Child = {
>        // props: ['msg', 'flag', 'num', 'obj', 'arr'],
>        // props: {
>        //   msg: String,
>        //   flag: Boolean,
>        //   num: Number,
>        //   obj: Object,
>        //   arr: Array
>        // },
>        props: {
>          msg: {
>            type: String
>          },
>          flag: Boolean,
>          num: {
>            type: Number,
>            default: 1,
>            validator (val) {
>              if (val > 10) {
>                console.log('ok')
>              } else {
>                console.log('fail')
>              }
>              
>              return val > 10
>            }
>          },
>          obj: {
>            type: Object,
>            default () { return { a: 10000 }}
>          },
>          arr: {
>            type: Array,
>            required: true
>          }
>        },
>        template: '#child'
>      }
>      const Parent = {
>        template: '#parent',
>        data () {
>         return {
>           msg: 'hello msg'
>          }
>        },
>        components: {
>          MyChild: Child
>        }
>      }
>      // 谁用谁注册
>      new Vue({
>        el: '#app',
>       components: {
>         MyParent: Parent
>        }
>      })
>    </script>
>    </html>
>   ```
> 
> 
> 
>自己整理话术：

### 7.3.2 子->父传值

* 子组件模版内容中用 $emit() 定义 自定义事件 ， $emit() 方法有2个参数

  * 第一个参数为自定义的事件名称

  * 第二个参数为需要传递的数据（可选）

* 父组件模板内容中的子组件占位标签上用v-on（或@）绑定子组件定义的自定义事件名，监听子组件的事件，实现通信

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>09 子组件给父组件传值</title>
</head>
<body>
  <div id="app">
    <my-parent></my-parent>
  </div>
</body>
<template id="parent">
  <div>
    <h1>父组件</h1>
    <!-- 父组件在调用子组件的地方，绑定一个自定义的事件
      这个事件的实现由父组件负责，事件的默认参数就是子组件传递给父组件的值
    -->
    <my-child @my-event="getChildData"></my-child>
  </div>
</template>
<template id="child">
  <div>
    <h3>子组件</h3>
    <button @click="sendData">发送数据</button>
  </div>
</template>
<script src="lib/vue.js"></script>
<script>
  const Child = {
    template: '#child',
    // 在子组件的某一个事件内部，通过this.$emit('自定义的事件名', 参数)完成传值
    methods: {
      sendData () {
        this.$emit('my-event', 10000)
      }
    }
  }
  const Parent = {
    template: '#parent',
    components: {
      MyChild: Child
    },
    methods: {
      getChildData (val) {
        console.log(val)
      }
    }
  }
  // 谁用谁注册
  new Vue({
    el: '#app',
    components: {
      MyParent: Parent
    }
  })
</script>
</html>
```



### 7.3.3 EventBus

> EventBus又被称之为中央事件总线

在Vue中通过单独的 事件中心 来管理非 父子关系 组件（兄弟）间的通信：

公众号千千万，都得先关注公众号,一旦发送消息，就可以收到消息 - 专注交流一百年

![](img/32.png)

**核心步骤**

* 建立事件中心

```
const eventBus = new Vue()
```

* 传递数据

```
eventBus.$emit('自定义事件名',传递的数据)
```

* 接收数据

```
eventBus.$on('自定义事件名'[,callback])
```

* 销毁事件中心

```
eventBus.$off('自定义事件名')
```

先建立事件中心 `const bus = new Vue()`

在需要接受数据的地方先监听自定义事件以及接受数据的回调函数`bus.$on('my-event', (data) => {})`

在需要传递数据的地方提交 自定义事件以及参数 `bus.$emit('my-event', params)`

<img src="img/45.png" style="zoom:50%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>10 非父子组件传值 - 兄弟组件之间传值</title>
</head>
<body>
  <div id="app">
    <my-content></my-content>
    <my-footer></my-footer>
  </div>
</body>
<template id="content">
  <div>
    {{ name }}
  </div>
</template>
<template id="footer">
  <ul>
    <li @click="changeName('首页')">首页</li>
    <li @click="changeName('分类')">分类</li>
    <li @click="changeName('购物车')">购物车</li>
    <li @click="changeName('我的')">我的</li>
  </ul>
</template>
<script src="lib/vue.js"></script>
<script>
  // 注意：先监听才能接收到数据（得先关注公众号才能接收到消息）
  // 创建vue的实例作为中央事件总线 bus
  const bus = new Vue()
  const Content = {
    template: '#content',
    data () {
      return {
        name: '首页'
      }
    },
    mounted () {
      // 在需要监听数据的地方，通过bus.$on('自定义的事件',回调函数)用来接收数据，
      // 回调函数参数即为兄弟组件传递过来的值
      bus.$on('my-event', (val) => {
        this.name = val
      })
    }
  }
  const Footer = {
    template: '#footer',
    methods: {
      changeName (val) {
        // 在需要传值的地方，通过bus.$emit('自定义的事件',参数)完成传值操作
        bus.$emit('my-event', val)
      }
    }
  }
  // 谁用谁注册
  new Vue({
    el: '#app',
    components: {
      MyContent: Content,
      MyFooter: Footer
    }
  })
</script>
</html>
```



### 7.3.4 ref

ref 属性被用来给元素或子组件注册引用信息，引用信息将会注册在父组件的 $refs 对象上。

如果在普通的 DOM 元素上使用 ref 属性，则引用指向的就是 DOM 元素；

如果 ref 属性用在子组件上，引用就指向子组件**实例**。

* ref 放在标签上，拿到的是原生节点。 
* ref 放在组件上 拿到的是组件实例

* 原理：在父组件中通过 ref 属性（会被注册到父组件的 $refs 对象上）拿到组件/DOM对象，从而得到组件/DOM中的**所有的信息**，也包括值

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>11 Ref</title>
</head>
<body>
  <div id="app">
    <!-- ref属性既可以使用到 DOM元素，也可以使用到组件
    DOM元素  this.$refs 获取到DOM组成的对象
    组件上   this.$refs 获取到相关子组件组成的对象
    -->
    <div ref="smile">😂</div>
    <div ref="cry">😭</div>
    <my-content ref="com"></my-content>
    <button @click="getDOMData">获取值</button>
  </div>
</body>
<template id="content">
  <div>
    {{ name }}
  </div>
</template>

<script src="lib/vue.js"></script>
<script>
  const Content = {
    template: '#content',
    data () {
      return {
        name: '首页'
      }
    }
  }
  
  // 我是***他父亲
  new Vue({
    el: '#app',
    components: {
      MyContent: Content
    },
    methods: {
      getDOMData () {
        console.log(this.$refs) // 获取到所有的ref属性
        console.log(this.$refs.smile.innerHTML)
        console.log(this.$refs.cry.innerHTML)
        console.log(this.$refs.com) // 获取到子组件的实例
        console.log(this.$refs.com.name) // 直接在父组件中调用子组件中属性和方法
      }
    },
  })
</script>
</html>
```

> 注意：
>
> ref 属性这种获取子元素/组件的方式虽然写法简单，容易上手，但是其由于权限过于开放，不推荐使用，有安全问题。（不仅可以获取值，还可以获取其他所有的元素/组件的数据，甚至可以修改这些数据。）

### 7.3.5 parent

可以通过$parent直接获取到父组件的实例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>12 parent</title>
</head>
<body>
  <div id="app">
    <!-- $parent可以直接在子组件中获取到父组件的实例的属性和方法
    -->
    <div ref="smile">😂</div>
    <div ref="cry">😭</div>
    <my-content ref="com"></my-content>
  </div>
</body>
<template id="content">
  <div>
    {{ name }}
    {{ $parent.msg }} 
    <button @click="getData">通过parent获取父组件的数据</button>
  </div>
</template>

<script src="lib/vue.js"></script>
<script>
  const Content = {
    template: '#content',
    data () {
      return {
        name: '首页'
      }
    },
    methods: {
      getData () {
        console.log(this.$parent)
        console.log(this.$parent.msg)
        this.$parent.fn()
      }
    },
  }
  
  // 我爸是李刚
  new Vue({
    el: '#app',
    components: {
      MyContent: Content
    },
    data: {
      msg: 'hello msg'
    },
    methods: {
      fn () {
        console.log(110)
      }
    },
  })
</script>
</html>
```

> 如果需要在组件的结构中访问父组件的属性和方法，不需要添加this,但是也可以添加

### 7.3.6 祖先组件传递后代组件

<img src="img/46.png" style="zoom:33%;" />

通过 provide + inject 完成传值

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>01 祖先组件传值给后代组件</title>
</head>
<body>
  <div id="app">
    <com></com>
  </div>
</body>
<template id="com">
  <div>
    后代组件 - {{ theme }}
  </div>
</template>
<script src="lib/vue.js"></script>
<script>
  const Com = {
    inject: ['theme'],
    template: '#com'
  }
  new Vue({
    el: '#app',
    data: {},
    components: {
      Com
    },
    provide: {
      theme: 'dark'
    }
  })
</script>
</html>
```

```vue
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>02 祖先组件传值给后代组件</title>
</head>
<body>
  <div id="app">
    <com></com>
  </div>
</body>
<template id="com">
  <div>
    后代组件 - {{ theme }} -- {{ message }}
  </div>
</template>
<script src="lib/vue.js"></script>
<script>
  const Com = {
    inject: ['theme', 'message'], // inject 还可以是 对象，类比 props中的对象
    template: '#com'
  }
  new Vue({
    el: '#app',
    data: {
      msg: 'hello msg'
    },
    components: {
      Com
    },
    provide () { // 如果数据中包含组件的变量，使用 返回对象的 provide 函数
      return {
        theme: 'light',
        message: this.msg
      }
    }
  })
  // 状态管理器
</script>
</html>
```



> `provide` 和 `inject` 主要在开发高阶插件/组件库时使用。并不推荐用于普通应用程序代码中。

## 7.4 动态组件

**通过分支条件判断实现选项卡切换**

```html
<body>
  <div id="app">
    <home v-if="type==='home'"></home>
    <kind v-else-if="type==='kind'"></kind>
    <cart v-else-if="type==='cart'"></cart>
    <user v-else></user>
    <ul>
      <li @click="goPage('home')">首页</li>
      <li @click="goPage('kind')">分类</li>
      <li @click="goPage('cart')">购物车</li>
      <li @click="goPage('user')">我的</li>
    </ul>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  const Home = { template: '<div>首页组件</div>' }
  const Kind = { template: '<div>分类组件</div>' }
  const Cart = { template: '<div>购物车组件</div>' }
  const User = { template: '<div>我的组件</div>' }
  new Vue({
    el: '#app',
    data: {
      type: 'home'
    },
    components: {
      home: Home,
      kind: Kind,
      cart: Cart,
      user: User,
    },
    methods: {
      goPage (type) {
        this.type = type
      }
    }
  })
</script>
```

通过使用保留的 <component> 元素，动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>04 动态组件</title>
</head>
<body>
  <div id="app">
    <!-- <home v-if="type==='home'"></home>
    <kind v-else-if="type==='kind'"></kind>
    <cart v-else-if="type==='cart'"></cart>
    <user v-else></user> -->
    <!-- type 的值是组件的名称 --- 组件标签 -->
    <component :is="type"></component>
    <ul>
      <li @click="goPage('home')">首页</li>
      <li @click="goPage('kind')">分类</li>
      <li @click="goPage('cart')">购物车</li>
      <li @click="goPage('user')">我的</li>
    </ul>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  const Home = { template: '<div>首页组件</div>' }
  const Kind = { template: '<div>分类组件</div>' }
  const Cart = { template: '<div>购物车组件</div>' }
  const User = { template: '<div>我的组件</div>' }
  new Vue({
    el: '#app',
    data: {
      type: 'home'
    },
    components: {
      home: Home,
      kind: Kind,
      cart: Cart,
      user: User,
    },
    methods: {
      goPage (type) {
        this.type = type
      }
    }
  })
</script>
</html>


```

> 思考：如果每个组件中都有一个输入框，点击切换时输入不同的内容，然后再切换，查看效果




> **keep-alive**的作用：
>
> keep-alive 可以将已经切换出去的非活跃组件保留在内存中。如果把切换出去的组件保留在内存中，可以保留它的状态，避免重新渲染。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>05 动态组件</title>
</head>
<body>
  <div id="app">
    <!-- type 的值是组件的名称 --- 组件标签 -->
    <!-- 默认情况下，动态组件在切换时会触发组件的销毁和重建 -->
    <!-- 可以使用 keep-alive 组件解决这个问题
      可以缓存组件的状态，避免了组件的销毁和重建
    -->
    <keep-alive>
      <component :is="type"></component>
    </keep-alive>
    <ul>
      <li @click="goPage('home')">首页</li>
      <li @click="goPage('kind')">分类</li>
      <li @click="goPage('cart')">购物车</li>
      <li @click="goPage('user')">我的</li>
    </ul>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  const Home = { 
    template: '<div>首页组件 <input type="text"/></div>',
    mounted () { console.log('home mounted') },
    destroyed() {console.log('home destroyed')},
  }
  const Kind = { 
    template: '<div>分类组件 <input type="text"/></div>',
    mounted () { console.log('kind mounted') },
    destroyed() {console.log('kind destroyed')} 
  }
  const Cart = { 
    template: '<div>购物车组件 <input type="text"/></div>',
    mounted () { console.log('cart mounted') },
    destroyed() {console.log('cart destroyed')} 
  }
  const User = { 
    template: '<div>我的组件 <input type="text"/></div>',
    mounted () { console.log('user mounted') },
    destroyed() {console.log('user destroyed')} 
  }
  new Vue({
    el: '#app',
    data: {
      type: 'home'
    },
    components: {
      home: Home,
      kind: Kind,
      cart: Cart,
      user: User,
    },
    methods: {
      goPage (type) {
        this.type = type
      }
    }
  })
</script>
</html>


```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>06 动态组件钩子</title>
</head>
<body>
  <div id="app">
    <!-- type 的值是组件的名称 --- 组件标签 -->
    <!-- 默认情况下，动态组件在切换时会触发组件的销毁和重建 -->
    <!-- 可以使用 keep-alive 组件解决这个问题
      可以缓存组件的状态，避免了组件的销毁和重建
    -->
    <!-- 
      使用了keep-alive 数据请求在activated，否则可以在 created / mounted
      activated   请求数据
      deactivated
     -->
    <keep-alive>
      <component :is="type"></component>
    </keep-alive>
    <ul>
      <li @click="goPage('home')">首页</li>
      <li @click="goPage('kind')">分类</li>
      <li @click="goPage('cart')">购物车</li>
      <li @click="goPage('user')">我的</li>
    </ul>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  const Home = { 
    template: '<div>首页组件 <input type="text"/></div>',
    mounted () { console.log('home mounted') },
    destroyed() {console.log('home destroyed')},
    activated() { console.log('home activated')},
    deactivated() {console.log('home deactivated')},
  }
  const Kind = { 
    template: '<div>分类组件 <input type="text"/></div>',
    mounted () { console.log('kind mounted') },
    destroyed() {console.log('kind destroyed')},
    activated() { console.log('kind activated')},
    deactivated() {console.log('kind deactivated')},  
  }
  const Cart = { 
    template: '<div>购物车组件 <input type="text"/></div>',
    mounted () { console.log('cart mounted') },
    destroyed() {console.log('cart destroyed')},
    activated() { console.log('cart activated')},
    deactivated() {console.log('cart deactivated')},  
  }
  const User = { 
    template: '<div>我的组件 <input type="text"/></div>',
    mounted () { console.log('user mounted') },
    destroyed() {console.log('user destroyed')},
    activated() { console.log('user activated')},
    deactivated() {console.log('user deactivated')},  
  }
  new Vue({
    el: '#app',
    data: {
      type: 'home'
    },
    components: {
      home: Home,
      kind: Kind,
      cart: Cart,
      user: User,
    },
    methods: {
      goPage (type) {
        this.type = type
      }
    }
  })
</script>
</html>


```



> 思考：使用keep-alive 看似保留了所有的状态，但是如果某一个组件不要保留状态呢

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>06 动态组件钩子</title>
</head>
<body>
  <div id="app">
    <!-- 可以给 keep-alive 添加属性，表示需要缓存的组件 
    include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
    exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
    max - 数字。最多可以缓存多少组件实例。
    -->
    <!-- 逗号分隔字符串、正则表达式或一个数组来 -->
    <!-- 匹配首先检查组件自身的 name 选项，如果 name 选项不可用，则匹配它的局部注册名称 -->

    <!-- 逗号分隔字符串,逗号后不要加空格 -->
    <!-- <keep-alive include="ahome,akind">
      <component :is="type"></component>
    </keep-alive> -->

    <!-- 正则表达式: 绑定属性 -->
    <!-- <keep-alive :include="/ahome|akind|auser/">
      <component :is="type"></component>
    </keep-alive> -->

    <!-- 数组 -->
    <keep-alive :include="['acart', 'user']">
      <component :is="type"></component>
    </keep-alive>
    <!-- 匹配首先检查组件自身的 name 选项，如果 name 选项不可用，则匹配它的局部注册名称 -->
    <ul>
      <li @click="goPage('home')">首页</li>
      <li @click="goPage('kind')">分类</li>
      <li @click="goPage('cart')">购物车</li>
      <li @click="goPage('user')">我的</li>
    </ul>
  </div>
</body>
<script src="lib/vue.js"></script>
<script>
  const Home = {
    name: 'ahome',
    template: '<div>首页组件 <input type="text"/></div>',
    mounted () { console.log('home mounted') },
    destroyed() {console.log('home destroyed')},
    activated() { console.log('home activated')},
    deactivated() {console.log('home deactivated')},
  }
  const Kind = { 
    name: 'akind',
    template: '<div>分类组件 <input type="text"/></div>',
    mounted () { console.log('kind mounted') },
    destroyed() {console.log('kind destroyed')},
    activated() { console.log('kind activated')},
    deactivated() {console.log('kind deactivated')},  
  }
  const Cart = { 
    name: 'acart',
    template: '<div>购物车组件 <input type="text"/></div>',
    mounted () { console.log('cart mounted') },
    destroyed() {console.log('cart destroyed')},
    activated() { console.log('cart activated')},
    deactivated() {console.log('cart deactivated')},  
  }
  const User = { 
    // name: 'auser',
    template: '<div>我的组件 <input type="text"/></div>',
    mounted () { console.log('user mounted') },
    destroyed() {console.log('user destroyed')},
    activated() { console.log('user activated')},
    deactivated() {console.log('user deactivated')},  
  }
  new Vue({
    el: '#app',
    data: {
      type: 'home'
    },
    components: {
      home: Home,
      kind: Kind,
      cart: Cart,
      user: User,
    },
    methods: {
      goPage (type) {
        this.type = type
      }
    }
  })
</script>
</html>


```





**案例：使用动态组件实现简易的步骤向导效果**

![](img/33.png)

```html
<body>
  <div id="app"> 
    <button @click='change("step1")'>第一步</button> 
    <button @click='change("step2")'>第二步</button>
    <button @click='change("step3")'>第三步</button> 
    <keep-alive> 
      <component :is="name"></component> 
    </keep-alive> 
  </div> 
</body> 
<script src="lib/vue.js"></script> 
<script>
  var step1 = {
    template: '<div>这是第一步的操作</div>'
  }
  var step2 = {
    template: '<div>这是第二步的操作</div>'
  } 
  var step3 = {
    template: '<div>这是第三步的操作</div>'
  }
  var vm = new Vue({ 
    el: "#app", 
    data: { 
      name: "step2",
    },
    components: { 
      step1, 
      step2, 
      step3 
    },
    methods: { 
      change:function(name){ 
        this.name = name 
      } 
    } 
  }) 
</script>
```

## 7.5 组件插槽

组件的最大特性就是 重用 ，而用好插槽能大大提高组件的可重用能力。

**插槽的作用：**父组件向子组件传递内容。

![](img/34.png)

通俗的来讲，**插槽无非就是在** 子组件 **中挖个坑，坑里面放什么东西由** 父组件 **决定。**

插槽类型有：

* 单个（匿名）插槽

* 具名插槽

* 作用域插槽

### 7.5.1 匿名插槽

> 匿名插槽一般就是使用单个插槽

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>06 动态组件钩子</title>
</head>
<body>
  <div id="app">
    <!-- 默认情况下，调用组件时，直接写到内部的内容是不会显示的 -->
    <!-- 如果想要显示，就在定义组件模版时，添加 slot 标签 -->
    <!-- 插槽：内容分发 -->
    <!-- 组件内部的代码显示还是不显示，在哪里显示，如何显示，这就是内容分发所干的活 -->
    <my-header>
      <ul>
        <li>logo</li>
        <li>搜索</li>
        <li>我的</li>
      </ul>
    </my-header>
    <my-header>
      <ul>
        <li>返回</li>
        <li>标题</li>
        <li></li>
      </ul>
    </my-header>
  </div>
</body>
<template id="header">
  <header>
    <slot></slot>
    <hr />
    <slot></slot>
  </header>
</template>
<script src="lib/vue.js"></script>
<script>
  const Header = {
    template: '#header'
  }
  new Vue({
    el: '#app',
    components: {
      MyHeader: Header
    }
  })
</script>
</html>


```

> 注意：子组件的 slot 标签中允许书写内容，当父组件不往子组件传递内容时， slot 中的内容才会被展示出来。

### 7.5.2 具名插槽

slot 元素可以用一个特殊的特性 name 来进一步配置如何分发内容。多个插槽可以有不同的名字，具名插槽将匹配内容片段中有对应 slot 特性的元素。

上中下 形式网页布局示例代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>06 动态组件钩子</title>
</head>
<body>
  <div id="app">
    <!-- 默认情况下，调用组件时，直接写到内部的内容是不会显示的 -->
    <!-- 如果想要显示，就在定义组件模版时，添加 slot 标签 -->
    <!-- 插槽：内容分发 -->
    <!-- 组件内部的代码显示还是不显示，在哪里显示，如何显示，这就是内容分发所干的活 -->
    <!-- 具名插槽：调用组件时，有多个代码需要显示到不同的位置
      定义模版添加slot 并配有 name 属性，调用组件时添加 slot属性指向之前的name的值
    -->
    <my-header>
      <div slot="left">logo</div>
      <div>搜索</div>
      <div slot="right">我的</div>
    </my-header>
    <my-header>
      <div slot="left">返回</div>
      <div>标题</div>
      <div slot="right"></div>
    </my-header>
  </div>
</body>
<template id="header">
  <header>
    <slot name="left"></slot>
    <!-- 默认的name属性为 default -->
    <slot></slot>
    <slot name="right"></slot>
  </header>
</template>
<script src="lib/vue.js"></script>
<script>
  const Header = {
    template: '#header'
  }
  new Vue({
    el: '#app',
    components: {
      MyHeader: Header
    }
  })
</script>
</html>


```

> 具名插槽存在的意义就是为了解决在单个页面中同时使用多个插槽。

### 7.5.3 作用域插槽 了解

**应用场景：**父组件对子组件的内容进行加工处理

作用域插槽是一种**特殊类型**的插槽，**作用域插槽会绑定了一套数据，父组件可以拿这些数据来用**，于是，情况就变成了这样：样式父组件说了算，但父组件中内容可以显示子组件插槽绑定的数据。

> 自 2.6.0 起有所更新。已废弃的使用 `slot-scope` attribute 的语法在[这里](https://cn.vuejs.org/v2/guide/components-slots.html#废弃了的语法)。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>10 作用域插槽</title>
</head>
<body>
  <div id="app">
    <my-header>
      <div slot-scope="props">
        <h1>1111</h1>
        {{ props.test }}
      </div>
    </my-header>
  </div>
</body>
<template id="header">
  <header>
    <slot test = "测试"></slot>
  </header>
</template>
<script src="lib/vue.js"></script>
<script>
  const Header = {
    template: '#header'
  }
  new Vue({
    el: '#app',
    components: {
      MyHeader: Header
    }
  })
</script>
</html>


```

### 7.5.4 v-slot指令

https://cn.vuejs.org/v2/api/#v-slot

> 定义组件
>
> 挖个坑 `<slot></slot>`,如果要使用具名插槽`<slot name="test"></slot>`
>
> 调用组件时<template v-slot></template>或者 <template v-slot="test"></template>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>11 v-slot</title>
</head>
<body>
  <div id="app">
    <my-header>
      <!-- <div slot="left">logo</div>
      <div>搜索</div>
      <div slot="right">我的</div> -->
      <template v-slot:left>
        <div>logo</div>
      </template>
      <div>搜索</div>
      <template v-slot:right>
        <div>我的</div>
      </template>
    </my-header>
  </div>
</body>
<template id="header">
  <header>
    <slot name="left"></slot>
    <!-- 默认的name属性为 default -->
    <slot></slot>
    <slot name="right"></slot>
  </header>
</template>
<script src="lib/vue.js"></script>
<script>
  const Header = {
    template: '#header'
  }
  new Vue({
    el: '#app',
    components: {
      MyHeader: Header
    }
  })
</script>
</html>


```






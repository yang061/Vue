# Vue全家桶

## Vue2

### 一、vue基础

#### 1.1 Vue简介

##### 1.1.1. 官网

- [英文官网](https://vuejs.org/)
- [中文官网](https://cn.vuejs.org/)

##### 1.1.2. vue介绍

- Vue 是一套用来动态【构建用户界面】的【渐进式】JavaScript框架
  ○ 构建用户界面：把数据通过某种办法变成用户界面
  ○ 渐进式：Vue可以自底向上逐层的应用

    > 简单应用只需要一个轻量小巧的核心库
    >
    > 复杂应用可以引入各式各样的Vue插件


##### 1.1.3. Vue 的特点

1. 遵循MVVM模式
2. 编码简洁，体积小，运行效率高，适合移动/PC端开发
3. 它本身只关注 UI，可以引入其它第三方库开发项目
4. 采用【组件化】模式，提高代码复用率、且让代码更好维护

![67247968774](https://github.com/yang061/Vue/blob/main/readmeImages/vue2/2.4%20%E7%BB%84%E4%BB%B6%E5%8C%96%E6%A8%A1%E5%BC%8F)

5. 【声明式】编码，让编码人员无需直接操作DOM，提高开发效率

![67247944158](https://github.com/yang061/Vue/blob/main/readmeImages/vue2/2.5%E5%A3%B0%E6%98%8E%E5%BC%8F%E7%BC%96%E7%A0%81)

6. 使用虚拟DOM 和 Diff算法，尽量复用DOM节点

![67247987614](https://github.com/yang061/Vue/blob/main/readmeImages/vue2/2.6%20%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdis)

![67248012143](https://github.com/yang061/Vue/blob/main/readmeImages/vue2/2.6%20%E8%99%9A%E6%8B%9Fdom%E5%92%8Cdiff)

##### 1.1.4. 与其它 JS 框架的关联

1. 借鉴 Angular 的模板和数据绑定技术
2. 借鉴 React 的组件化和虚拟 DOM 技术

##### 1.1.5. Vue 周边库

1. vue-cli: vue 脚手架
2. vue-resource
3. axios
4. vue-router: 路由
5. vuex: 状态管理
6. element-ui: 基于 vue 的 UI 组件库(PC 端)





#### 1.2 初识Vue

1. 想让Vue工作，就必须创建一个【Vue实例】，且要传入一个配置对象

2. root 容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法

3. root 容器里的代码被称为【**Vue模板**】

4. 注意区分：js表达式 和 js代码（语句）

   * 表达式：一个表达式会产生一个值，可以放到任何一个需要值的地方：

     > (1). a
     >
     > (2). a+b
     >
     > (3). demo(1)  函数调用,有返回值
     >
     > (4). x===y ? 'a' : 'b'

   * js代码 (语句):控制代码走向

     > (1). if( ){ } 判断语句
     >
     > (2). for( ){ }  循环语句

5. Vue 实例与容器是【一一对应】的

6. 真实开发中只有一个Vue实例，并且会配合着组件一起使用

7. `{{xxx}}`中的 xxx 要写 `js 表达式`，且 xxx 可以自动读取到data中的所有属性

8. 一旦data中的数据发生变化，那么模板中用到该数据的地方也会自动更新(Vue实现的响应式)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>初识Vue</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <!-- 容器作用：为Vue提供模板，让Vue解析的数据知道往哪放 -->
    <div class="root">
      <h1>Hello,{{name.toUpperCase()}},{{address}}</h1>
      <!--{{插值语法}}
        {{}}中只能写js表达式
        toUpperCase() 是插值语法中的一种
      -->
    </div>

    <script>
      Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示

      //创建Vue实例
      new Vue({
        el: '.root', //el用于指定当前Vue实例为哪个容器服务，值`通常`为css选择器字符串。
        // el:document.getElementById('root') //为什么是通常，因为有另一个写法，但一般不用。
        data: {
          // data中用于存放数据，数据供el所指定的容器使用,值我们暂时先写成一个对象
          name: 'xiaojIng',
          address: '北京',
        },
      })
    </script>
  </body>
</html>
```



#### 1.3 模板语法

`Vue模板`语法有2大类:

* **插值语法：**

1. 功能：用于解析`标签体`内容
2. 写法：`{{xxx}}`，xxx是【js表达式】，且可以直接读取到data中的所有属性
* **指令语法:**

1. 功能：用于解析标签（包括：标签属性、标签体内容、绑定事件…）
2. 举例：`v-bind:href="xxx" `或 简写为 `:href="xxx"`，xxx同样要写【js表达式】，且可以直接读取到data中的所有属性(把xxx中的数据当成js表达式来看)
3. 备注：Vue中有很多的指令，且形式都是 v-xxx，此处只是拿v-bind举例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>模板语法</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备一个容器 -->
    <div id="root">
      <h1>插值语法</h1>
      <hr />
      <p>你好，{{name}}</p>
      <h1>指令语法</h1>
      <a v-bind:href="school.url.toUpperCase()" x="hello"
        >点我去{{school.name}}学习1</a
      ><br />
      <a :href="school.url" x="hello">点我去{{school.name}}学习2</a>
    </div>
    <script>
      Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示

      //创建Vue实例
      new Vue({
        el: '#root',
        data: {
          school: {
            name: '尚硅谷',
            url: 'http://www.atguigu.com',
          },
          name: 'jack',
          hello: '你好',
        },
      })
    </script>
  </body>
</html>
```



#### 1.4 数据绑定

Vue中有2种数据绑定的方式：

* 单向绑定(v-bind)：数据只能从data流向页面(页面中被绑定的容器数据改变不会影响data的值)
* 双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data

**备注:**

> 1.双向绑定一般都应用在表单类元素上（如：input、select等）
>
> 2.v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>数据绑定</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备一个容器 -->
    <div id="root">
      <div id="root">
        <!-- 普通写法 -->
        <!-- 单向数据绑定:
        <input type="text" v-bind:value="name" /> <br />
        双向数据绑定:
        <input type="text" v-model:value="name" /> <br /> -->

        <!-- 简写 -->
        单向数据绑定:
        <input type="text" :value="name" /> <br />
        双向数据绑定:
        <input type="text" v-model="name" /> <br />

        <!-- 下列代码是错误的，因为v-model只能应用在表单类元素(输入类元素有【value值的】)上 -->
        <!-- <h2 v-model:x="name">你好啊</h2> -->
      </div>
    </div>
    <script>
      Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示
      new Vue({
        el: '#root',
        data: {
          name: '尚硅谷',
        },
      })
    </script>
  </body>
</html>
```



#### 1.5 el和data的两种写法

1. el有2种写法

* 创建Vue实例对象的时候配置el属性
* 先创建Vue实例，随后再通过 `vm.$mount(‘#root’)`指定el的值
2. data有2种写法

* 对象式：data： { }
* 函数式：data() { return { } }
* **如何选择：**目前哪种写法都可以，以后到组件时，data必须使用函数，否则会报错

3. 一个重要的原则

* 由Vue管理的函数(eg:data函数)，一定不要写箭头函数，否则 this 就不再是Vue实例了,而是window

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>el和data的两种写法</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h1>你好，{{name}}</h1>
    </div>
    <script>
      Vue.config.productionTip = false

      //   el的两种写法
      /* const v = new Vue({
        // el: '#root', //第一种
        data: {
          name: '尚硅谷',
        },
      })
      console.log(v)
      v.$mount('#root') //第二种 */

      //   data的两种写法
      new Vue({
        el: '#root',
        // data的第一种写法：对象式
        /* data:{
            name:'尚硅谷'
        } */

        //data的第二种写法：函数式(组件必须用)
        // data: function (){} 可以简写为data(){}
        data: function () {
          console.log('@@@', this) //此处的this是Vue实例对象(限于普通函数)；如果写成箭头函数，this就是window
          return {
            name: '尚硅谷',
          }
        },
      })
    </script>
  </body>
</html>
```



#### 1.6 MVVM模型

1. M：模型(`Model`) ：对应 data 中的【数据】
2. V：视图(`View`) ：模板 (dom => 页面 =>模板)
3. VM：视图模型(`ViewModel`) ： Vue 实例对象（相当于数据和页面的连接桥梁）

**注意:**

- `data`中所有的属性，最后都出现在了`vm`身上
- `vm`身上所有的属性 及`Vue原型`身上所有的属性，在 Vue模板中都可以直接使用

```html
 <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h1>学校名称：{{name}}</h1>
      <h1>学校地址：{{address}}</h1>
      <h1>测试一下：{{$options}}</h1>
    </div>
    <script>
      Vue.config.productionTip = false

      const vm = new Vue({
        el: '#root',
        data: {
          name: '尚硅谷',
          address: '成都',
        },
      })
      console.log(vm)
    </script>
  </body>
```



#### 1.7 数据代理

##### 1.7.1 Object.defineproperty( )

建议学习文章地址：

https://zh.javascript.info/property-descriptors

https://zh.javascript.info/property-[accessors](https://so.csdn.net/so/search?q=accessors&spm=1001.2101.3001.7020)

**Object.defineProperty**(obj, prop, descriptor)

> obj：要定义属性的对象。
>
> prop：要定义或修改的属性的名称
>
> descriptor：要定义或修改的属性描述符

**属性标志:**

对象属性（properties），除 `value `外，还有三个特殊的特性（attributes），也就是所谓的“标志”

* `writable` — 如果为 `true`，则值可以被修改，否则它是只可读的,默认为false
* `enumerable` — 如果为 `true`，则表示是可以遍历的，,默认为false,可以在for… .in Object.keys()中遍历出来
* `configurable` — 如果为 `true`，则此控制属性可以被删除，默认值是false

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>回顾Object.defineproperty方法</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <script>
      let number = 18
      let person = {
        name: '张三',
        // age: '18',
        sex: '男',
      }
      /* Object.defineProperty(添加属性的对象,'添加的属性名',配置项) 更高级
          * 由该方法添加的属性不参与枚举(遍历)
         Object.keys(对象名) 把对象中所有属性的值一起存放到数组中

       */

      Object.defineProperty(person, 'age', {
        // 相当于person对象的age属性值是现用现取的
        // value: 18,
        // enumerable: true, //控制属性是否可以枚举，默认值是false
        // writable: true, //控制属性是否可以修改，默认值是false
        // configurable: true, //控制属性是否可以删除，默认值是false

        // 当有人读取person的age属性时，get函数(getter)就会被调用，且返回值是age的值
        get: function () {
          console.log('有人读取age属性了')
          return number
        },

        // 当有人读取person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值(value)；修改number不会生效，因为setter里面没有number
        set(value) {
          console.log('有人修改了age属性,且值为', value)
          number = value
        },
      })
      console.log(person)
      console.log(Object.keys(person))
    </script>
  </body>
</html>
```

##### 1.7.2 Vue中的数据代理

**数据代理：**通过一个对象 代理对另一个对象中属性的操作(读/写)

```html
<script>
      let obj1 = { x: 100 }
      let obj2 = { y: 200 }
      Object.defineProperty(obj2, 'x', {
        get() {
          // 读取后调用，返回obj1的x属性
          return obj1.x
        },
        set(value) {
          obj1.x = value
        },
      })
```

1. Vue中的数据代理通过vm对象来代理data对象中属性的操作（读/写）

   > 相当于vm对象中存储了data对象的‘备份’，可以通过这个备份直接绑定data中的数据

2. Vue中数据代理的好处：更加方便的操作data中的数据

3. 基本原理

   * 通过`object.defineProperty()`把 `data对象`中所有属性添加到`vm`上
   * 为每一个添加到vm上的属性，都指定一个 `getter`,`setter`
   * 在`getter`,`setter`内部去操作（读/写）data中对应的属性

![image-20220627120432752](https://github.com/yang061/Vue/blob/main/readmeImages/vue2/%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86)

4.解读

`Vue` 将 `data`中的数据拷贝了一份到 `_ data`属性中，又将`_ data`里面的属性提到`Vue实例`中（如name），通过`defineProperty`实现数据代理，这样通过`geter/setter`操作 name，进而操作`_data`中的 name。而`_data`又对data进行数据劫持，实现响应式（修改data的数据会实时更新dom（页面））。

> name被修改–>调用setter–>重新解析模板–>生成新的虚拟DOM–>新旧DOM对比（diff）–>更新页面



#### 1.8 事件处理

##### 1.8.1 事件的基本使用

1. 使用`v-on:xxx`或`@xxx`绑定事件，其中 xxx 是事件名
2. 事件的回调需要配置在`methods对象`中，最终会在vm上
3. methods中配置的函数，不要用箭头函数，否则 this 就【不是】vm了，而是window
4. methods中配置的函数，都是被 Vue所管理的函数，this 的指向是`vm`或`组件实例对象`
5. `@click="demo"`和`@click="demo($event,参数)"`效果一致，但后者可以传参

```html
<body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>欢迎来到{{name}}学习</h2>
      <!-- <button v-on:click="showInfo">点我提示信息</button> -->
      <button @click="showInfo1">点我提示信息1(不传参)</button>
      <button @click="showInfo2(666,$event)">点我提示信息2(传参)</button>
    </div>
    <script src="../js/vue.js"></script>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          //data里面的数据才会数据代理
          name: '尚硅谷',
        },
        methods: {
          //对象里面配方法
          showInfo1(event) {
            // alert('同学你好1')
            console.log(event.target.innerText)
            // console.log(this) //此处的this的vm
          },
          showInfo2(number, e) {
            console.log(number, e)
            // alert('同学你好11')
            // console.log(event.target.innerText)
            // console.log(this) //此处的this的vm
          },
        },
      })
    </script>
  </body>
```

##### 1.8.2 事件修饰符

1. `prevent` 阻止默认事件（常用）
2. `stop `阻止事件冒泡（常用）
3. `once `事件只触发一次（常用）
4. `capture` 使用事件的捕获模式
5. `self` 只有`event.target`是当前操作的元素时才触发事件
6. `passive` 事件的默认行为立即执行，无需等待事件回调执行完毕

* 修饰符可以【连续写】，比如可以这么用：`@click.prevent.stop="showInfo"`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin-top: 20px;
      }
      .demo1 {
        height: 80px;
        background-color: skyblue;
      }
      .box1 {
        padding: 5px;
        background-color: skyblue;
      }
      .box2 {
        background-color: red;
      }
      .list {
        width: 200px;
        height: 200px;
        background-color: peru;
        /* 形成滚动条 */
        overflow: auto;
      }
      li {
        height: 100px;
      }
    </style>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>欢迎来到{{name}}学习</h2>
      <!-- 阻止默认事件（常用） -->
      <a href="http://www.atguigu.com" @click.prevent="showInfo"
        >点我提示信息</a
      >

      <!-- 阻止事件冒泡（常用）：冒泡(先内后外) -->
      <div class="demo1" @click="showInfo">
        <button @click.stop="showInfo">点我提示信息</button>
      </div>
      <!-- 事件只触发一次（常用） -->
      <button @click.once="showInfo">点我提示信息</button>
      <!-- 使用事件的捕获模式:先外后内 -->
      <div class="box1" @click.capture="showMsg(1)">
        div1
        <div class="box2" @click="showMsg(2)">div2</div>
      </div>

      <!-- 只有event.target是当前操作的元素时才触发事件,一定程度上也可以阻止冒泡 -->
      <div class="demo1" @click.self="showInfo">
        <button @click="showInfo">点我提示信息</button>
      </div>
    </div>

    <!-- 事件的默认行为立即执行，无需等待事件回调执行完毕 -->
    <!-- 
        滚动事件:
        1.@scroll:滚动条滚动时触发(滚动鼠标滚轮/键盘上下移动)
        2.@wheel:鼠标滚动轮滚动时触发;鼠标滚动轮滚动一次可能px走了很远
     -->
    <ul class="list" @wheel.passive="demo">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          name: '尚硅谷',
        },
        methods: {
          showInfo(e) {
            alert('你好')
            // console.log(e.target)
          },
          showMsg(msg) {
            console.log(msg)
          },
          demo() {
            for (let i = 0; i < 1000; i++) {
              console.log('#')
            }
            console.log('die了')
          },
        },
      })
    </script>
  </body>
</html>
```

##### 1.8.3 键盘事件

> 键盘上的每个按键都有自己的【名称】和【编码】，例如：Enter（13）。而Vue还对一些常用按键起了别名方便使用

1. Vue中常用的按键【别名】

* 回车=>`enter`
* 删除=>`delete`(捕获“删除(`DELETE`)”和“退格(`BACKSPACE`)”键)
* 退出=>`esc`
* 空格=>`space`
* 换行=>`tab`(特殊，必须配合`keydown事件`去使用)
* 上=>`up`
* 下=>`down`
* 左=>`left`
* 右=>`right`

2. Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（多单词【小写短横线写法】

   > NumLock(num-lock) 
   >
   > CapsLock(caps-lock)）

3. 系统修饰键**（用法特殊）**ctrl、alt、shift、meta（meta就是win键）

* 配合keyup使用：按下修饰键的同时，再按下其他键(任意键)，随后释放其他键，事件才被触发


  > 指定 ctrl+y 使用 @keyup.ctrl.y

* 配合keydown使用：正常触发事件

4. 也可以使用keyCode去指定具体的按键**（不推荐）**

   > @keyup.13=xxx(@keyup.enter=xxx)

5. `Vue.config.keyCodes.自定义键名 = 键码`，可以去定制按键别名



#### 1.9 计算属性

##### 1.9.1 姓名案例（插值语法实现）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      姓: <input type="text" v-model="firstName" /> <br />
      名: <input type="text" v-model="lastName" /> <br />
      全名：<span>{{firstName}}-{{lastName}}</span>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    new Vue({
      el: '#root',
      data: {
        firstName: '张',
        lastName: '三',
      },
    })
  </script>
</html>
```

##### 1.9.2 姓名案例（methods实现）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      姓: <input type="text" v-model="firstName" /> <br />
      名: <input type="text" v-model="lastName" /> <br />
      全名：<span>{{fullName()}}</span>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    new Vue({
      el: '#root',
      data: {
        firstName: '张',
        lastName: '三',
      },
      methods: {
        fullName() {
          // 只要data的数据发生改变，vue就会重新解析模板，重新解析模板时只要遇到了插值语法里面的方法，该方法一定会重新调用的
          console.log('@---fullName')
          return this.firstName + '-' + this.lastName
        },
      },
    })
  </script>
</html>
```

##### 1.9.3 姓名案例（计算属性实现）

* 定义：要用的属性不存在，要通过【已有属性计算】得来

* 原理：底层借助了`Objcet.defineProperty`方法提供的getter和setter

* **getter**
  1. get作用？
    * (1).当有人读取该计算属性时，get就会被调用，且返回值就作为该计算属性的值 

  1. get函数什么时候执行？

    * (1).初次读取时会执行一次(第一次读取后有缓存)
    * (2).当`依赖的数据`发生改变时会被再次调用



* 优势：与methods实现相比，【内部有缓存机制】（复用），效率更高，调试方便

* 备注：

  1. 计算属性最终会出现在`vm`上，直接读取使用即可

  2. 如果计算属性要被修改，那必须写【set函数】去响应修改，且set中要引起计算时依赖的数据发生改变（否则无意义）

     > set不是必须写的

  3. 如果计算属性确定【不考虑修改】，可以使用计算属性的简写形式

> 完整写法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      姓: <input type="text" v-model="firstName" /> <br />
      名: <input type="text" v-model="lastName" /> <br />
      全名：<span>{{fullName}}</span>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    const vm = new Vue({
      el: '#root',
      // vue认为data里面的数据都是属性
      data: {
        firstName: '张',
        lastName: '三',
      },
      methods: {
        demo() {},
      },
      // data和methods里面的数据都是直接放到vm上

      // 计算属性
      // 调用fullName时，自动调用get函数,把get函数的返回值放到vm上
      computed: {
        fullName: {
          /* get作用？
          1. 当有人读取fullName时，get就会被调用，且返回值就作为fullName的值 
          */
          /* get什么时候调用?
          1. 初次读取fullName时(第一次读取后有缓存)
          2. 所依赖的数据(firstName + lastName)发生变化时
          */
          get() {
            // console.log(this) //这里的this是vm
            console.log('被调用了')
            return this.firstName + '-' + this.lastName
          },
          // set不是必须写的
          /* set什么时候调用?
          1. fullName的值被修改时调用
          2. 返回修改后的值，如果不把修改后的值与原数据关联起来，那原本的数据不会改变
          */
          set(value) {
            console.log('set', value)
            const arr = value.split('-')
            this.firstName = arr[0]
            this.lastName = arr[1]
          },
        },
      },
    })
  </script>
</html>
```

> 简写

```html
<body>
    <!-- 准备好一个容器 -->
    <div id="root">
      姓: <input type="text" v-model="firstName" /> <br />
      名: <input type="text" v-model="lastName" /> <br />
      全名：<span>{{fullName}}</span>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    const vm = new Vue({
      el: '#root',
      // vue认为data里面的数据都是属性
      data: {
        firstName: '张',
        lastName: '三',
      },

      // 计算属性
      computed: {
        // 只会读不会改时可以简写
        // 相当于fullName函数起了getter的作用
        fullName() {
          console.log('被调用了')
          return this.firstName + '-' + this.lastName
        },
      },
    })
  </script>
```

##### 1.9.4 method和computed区别

* 如果只使用一次，其实没什么区别。
* 使用多次的时候，method每次都会重新调用，而computed会从缓存中读取。




#### 1.10 侦听属性

##### 1.10.1 method方法实现

```html
<body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>今天天气很{{info}}</h2>
      <!-- 绑定事件的时候：@xxx="yyy" yyy可以写一些简单的语句 -->
      <!-- <button @click="isHot = !isHot">切换天气</button> -->
      <button @click="changeWeather">切换天气</button>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    new Vue({
      el: '#root',
      data: {
        isHot: true,
      },
      computed: {
        info() {
          return this.isHot ? '炎热' : '凉爽'
        },
      },
      methods: {
        changeWeather() {
          this.isHot = !this.isHot
        },
      },
    })
  </script>
```

##### 1.10.2 watch实现

侦听属性watch：

- 当被监视的属性`变化`时, 回调函数【自动调用】（handler）, 进行相关操作
- 监视的属性【必须存在】，才能进行监视！既可以监视`data`，也可以监视【计算属性】
- 配置项属性`immediate:false`，改为 `true`，则初始化时调用一次 `handler(newValue,oldValue)`,相当于立即执行
- 监视的两种写法：
  * (1).new Vue时传入`watch配置`
  * (2).通过`vm.$watch`监视

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>天气案例_监视属性</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>今天天气很{{info}}</h2>
      <!-- 绑定事件的时候：@xxx="yyy" yyy可以写一些简单的语句 -->
      <!-- <button @click="isHot = !isHot">切换天气</button> -->
      <button @click="changeWeather">切换天气</button>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    const vm = new Vue({
      el: '#root',
      data: {
        isHot: true,
      },
      computed: {
        info() {
          return this.isHot ? '炎热' : '凉爽'
        },
      },
      methods: {
        changeWeather() {
          this.isHot = !this.isHot
        },
      },
      // 监视属性
      // 1.方法1 * 如果很明确知道要监视谁，那用法1
      /* watch: {
        isHot: {
          immediate: true, //初始化时让handler调用一下(立即执行)；默认false
          // handler什么时候调用? 当isHot发生改变时
          handler(newValue, oldValue) {
            console.log('被改了', newValue, oldValue)
          },
        },
      }, */
    })
    // 2.方法2 * 如果一开始不知道要监视谁，那用法2
    vm.$watch('isHot', {
      immediate: true, //初始化时让handler调用一下(立即执行)；默认false
      // handler什么时候调用? 当isHot发生改变时
      handler(newValue, oldValue) {
        console.log('被改了', newValue, oldValue)
      },
    })
  </script>
</html>
```

##### 1.10.3 深度监视

* (1).Vue中的watch【默认不监测】对象内部值的改变（默认一层）

  obj:{name:’ds’,age:18} 这里的一层指的后面整个对象字面量，而不是里面的值是第一层

* (2).配置`deep:true`可以监测【对象内部值】改变（多层）

**备注：**

* (1).Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以

  > 想可以加deep：true

* (2).使用watch时根据数据的具体结构(层级)，决定是否采用`深度监视`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>天气案例_深度监视属性</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>今天天气很{{info}}</h2>
      <!-- 绑定事件的时候：@xxx="yyy" yyy可以写一些简单的语句 -->
      <!-- <button @click="isHot = !isHot">切换天气</button> -->
      <button @click="changeWeather">切换天气</button>
      <hr />
      <h3>a的值是:{{numbers.a}}</h3>
      <button @click="numbers.a++">点我a+1</button>
      <h3>b的值是:{{numbers.b}}</h3>
      <button @click="numbers.b++">点我b+1</button>
      {{numbers.c.d.e}}
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    const vm = new Vue({
      el: '#root',
      data: {
        isHot: true,
        numbers: {
          a: 1,
          b: 2,
          c: {
            d: {
              e: 100,
            },
          },
        },
      },
      computed: {
        info() {
          return this.isHot ? '炎热' : '凉爽'
        },
      },
      methods: {
        changeWeather() {
          this.isHot = !this.isHot
        },
      },
      // 监视属性
      watch: {
        isHot: {
          // handler什么时候调用? 当isHot发生改变时
          handler(newValue, oldValue) {
            console.log('被改了', newValue, oldValue)
          },
        },
        // 监视多级结构中某个属性的变化,对象原本的属性身上是有【''】的，只是我们写习惯了，省略了
        /* 'numbers.a': {
          handler() {
            console.log('a变了')
          },
        },
      }, */
        // 监视多级结构中某个属性的变化,
        numbers: {
          deep: true,
          handler() {
            console.log('a变了')
          },
        },
      },
    })
  </script>
</html>
```

> 简写 Vs 正常写法

```html
<body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>今天天气很{{info}}</h2>
      <!-- 绑定事件的时候：@xxx="yyy" yyy可以写一些简单的语句 -->
      <!-- <button @click="isHot = !isHot">切换天气</button> -->
      <button @click="changeWeather">切换天气</button>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    const vm = new Vue({
      el: '#root',
      data: {
        isHot: true,
      },
      computed: {
        info() {
          return this.isHot ? '炎热' : '凉爽'
        },
      },
      methods: {
        changeWeather() {
          this.isHot = !this.isHot
        },
      },
      // 监视属性
      watch: {
        // 正常写法
        /*  isHot: {
          //immediate:true, //初始化时让handler调用一下
          // deep: true, //深度监视
          handler(newValue, oldValue) {
            console.log('isHot被改了', newValue, oldValue)
          },
        }, */
        // 简写(没有deep和immediate时，只有handler才能用)
        /*  isHot(newValue, oldValue) {
          //isHot函数当handler用
          console.log('isHot被改了', newValue, oldValue)
        }, */
      },
    })

    // 正常写法
    /* vm.$watch('isHot', {
      immediate: true, //初始化时让handler调用一下
      deep: true, //深度监视
      handler(newValue, oldValue) {
        console.log('被改了', newValue, oldValue)
      },
    }) */

    // 简写 (没有deep和immediate时，只有handler才能用)
    vm.$watch('isHot', function (newValue, oldValue) {
      console.log('被改了', newValue, oldValue)
    })
  </script>
```

##### 1.10.4 watch与computed区别

1. `computed`能完成的功能，`watch`都可以完成

2. `watch`能完成的功能，`computed`不一定能完成，

   > 例如：watch可以进行`异步操作 `

**两个重要的小原则:**

* 1.所被Vue管理的函数，**最好**写成【普通函数】，这样this的指向才是`vm `或 `组件实例对象`
* 2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），**最好**写成【箭头函数】，这样this的指向才是`vm` 或 `组件实例对象`

>  比如想延迟一秒显示fullName,只能用`watch`实现

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>姓名案例_watch实现</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      姓: <input type="text" v-model="firstName" /> <br />
      名: <input type="text" v-model="lastName" /> <br />
      全名：<span>{{fullName}}</span>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    const vm = new Vue({
      el: '#root',
      // vue认为data里面的数据都是属性
      data: {
        firstName: '张',
        lastName: '三',
        fullName: '张-三',
      },

      watch: {
        firstName(val) {
          // setTimeout 不是vue管理的函数，由js引擎管理(调用的)
          setTimeout(() => {
            console.log(this) //vm
            this.fullName = val + '-' + this.lastName
          }, 1000)
        },
        lastName(val) {
          this.fullName = this.firstName + '-' + val
        },
      },
    })
  </script>
</html>
```



#### 1.11 绑定样式

##### 1.11.1 绑定class样式

写法：`:class=“xxx”  `

>  xxx可以是字符串、对象、数组。

所以分为三种写法，字符串写法，数组写法，对象写法

* 字符串写法

>  适用于：样式的类名不确定，需要动态指定

* 数组写法
> 适用于：要绑定的样式个数不确定，名字也不确定

* 对象写法
> 适用于：要绑定的样式个数确定，名字也确定，但是要动态决定用不用

##### 1.11.2 绑定style样式

* :style="{ fontSize:xxx }" 

> 其中xxx是动态值

* :style="[a,b]" 
> 其中a,b是样式对象；【样式对象里面的属性名要是存在的一个css属性】

**代码案例**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .basic {
        width: 200px;
        height: 100px;
        border: 1px solid #000;
      }
      .red {
        background-color: red;
      }
      .skyblue {
        background-color: skyblue;
      }
      .pink {
        background-color: pink;
      }
      .atguigu1 {
        background-color: yellowgreen;
      }
      .atguigu2 {
        font-size: 30px;
        text-shadow: 2px 2px 10px red;
      }
      .atguigu3 {
        border-radius: 20px;
      }
    </style>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
      <div class="basic" :class="color" @click="changeColor">{{name}}</div>
      <br /><br />

      <!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定，名字也不确定 -->
      <div class="basic" :class="classArr">{{name}}</div>
      <br /><br />

      <!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定，名字也确定，但是要动态决定用不用 -->
      <div class="basic" :class="classObj">{{name}}</div>
      <br /><br />

      <!-- 绑定style样式--对象写法 -->
      <div class="basic" :style="styleObj">{{name}}</div>
      <br /><br />

      <!-- 绑定style样式--数组写法：重复的样式以后面的(styleObj2)为准
      还可以用styleArr(在data里面以数组的形式写对象(styleObj)
      -->
      <div class="basic" :style="[styleObj,styleObj2]">{{name}}</div>
      <br /><br />
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    new Vue({
      el: '#root',
      data: {
        name: '爱睡觉的',
        color: 'skyblue',
        classArr: ['atguigu1', 'atguigu2', 'atguigu3'],
        classObj: {
          atguigu2: false, //false不用该类
          atguigu3: false,
        },
        styleObj: {
          fontSize: '40px',
          color: 'pink',
        },
        styleObj2: {
          fontSize: '100px',
          backgroundColor: 'orange',
        },
      },
      methods: {
        changeColor() {
          // 点击随机切换颜色
          const arr = ['red', 'skyblue', 'pink']
          //  Math.random() 是(0,1] ; Math.floor() 向下取整
          const index = Math.floor(Math.random() * 3)
          this.color = arr[index]
        },
      },
    })
  </script>
</html>
```



#### 1.12 条件渲染

##### 1.12.1 v-if

1. 写法：

   (1).`v-if`=“表达式”

   (2).`v-else-if`=“表达式”

   (3).`v-else`=“表达式”

2. 适用于：【切换频率较低】的场景，因为不展示的DOM元素直接被移除

3. 特点：不展示的DOM元素直接被移除

4. 注意：

   * `v-if`可以和`v-else-if`、`v-else`一起使用，但要求【结构不能被“打断”】
   * `template标签`不影响结构，页面html中不会有此标签，但【只能】配合v-if，不能配合v-show

5. 当条件不成立时, `v-if `的所有子节点不会解析(项目中使用)

##### 1.12.2 v-show

1. 写法：

   (1).`v-show=“表达式”`

2. 适用于：【切换频率较高】的场景

3. 特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉(display:none)

4. 备注：使用`v-if`的时，元素可能无法获取到(因为被移除)，而使用`v-show`一定可以获取到

> v-if 是实打实地【改变】dom元素，v-show 是【隐藏或显示】dom元素

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>当前n的值是:{{n}}</h2>
      <button @click="n++">点我n++</button>
      <!-- 使用v-show做条件渲染(根据布尔值显示隐藏) 
      1.v-show为false时会隐藏结构(display:block/none)
      2.隐藏显示切换的频率高使用
      -->
      <!-- <h2 v-show="false">{{name}}</h2> -->
      <!-- <h2 v-show="1===5">{{name}}</h2> -->

      <!-- 使用v-if做条件渲染(根据布尔值显示隐藏) 
      1.v-if为false时会删除整个被控制html结构(增减dom节点)
      2.隐藏显示切换的频率低使用
      -->
      <!-- <h2 v-if="false">{{name}}</h2> -->
      <!-- <h2 v-if="1===5">{{name}}</h2> -->

      <!-- v-else和v-else-if (使用时不允许被打断【中间不能有其他代码】)-->
      <!-- <div v-if="n===1">angular</div>
      <div v-else-if="n===2">react</div>
      <div v-else-if="n===3">vue</div>
      <div v-else>哈哈哈</div> -->

      <!-- v-if和template的配合使用 -->
      <template v-if="n===1">
        <h2>螺蛳粉</h2>
        <h2>火锅</h2>
        <h2>阿阿布</h2>
      </template>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    const vm = new Vue({
      el: '#root',
      data: {
        name: '甜皮鸭',
        n: 0,
      },
    })
  </script>
</html>
```



#### 1.13 列表渲染

##### 1.13.1 v-for指令

1. 用于展示列表数据

2. 语法：`v-for`=“**(item, index)** `in/of` **xxx**” `:key`=**“yyy”**

   > 这里key可以是index，更好的是遍历对象的【唯一标识】
   >
   > 如果key写的是index，前面可以不写index也能用

3. 可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <!-- 遍历数组 
      v-for="(实参，索引号)  of 【data里面的数值】-->
      <h2>人员列表</h2>
      <ul>
        <li v-for="(p,index) of persons" :key="index">{{index}}--{{p.name}}-{{p.age}}</li>
      </ul>

      <!-- 遍历对象
      v-for="(属性值,属性名) of 【data里面的对象】-->
      <h2>汽车信息</h2>
      <ul>
        <li v-for="(value,k) of car" :key="k">{{k}}--{{value}}</li>
      </ul>

      <!-- 遍历字符串
      v-for="(自定义字符串名字,索引号) of 【data里面的字符串】 -->
      <h2>测试遍历字符串</h2>
      <ul>
        <li v-for="(char,index) of str" :key="index">{{char}}--{{index}}</li>
      </ul>

      <!-- 遍历指定次数
      v-for="(数值,索引号) of 【数字】 
      数值从1开始，索引号从0开始
      -->
      <h2>测试遍历指定次数</h2>
      <ul>
        <li v-for="(number,index) of 5" :key="index">{{number}}--{{index}}</li>
      </ul>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    new Vue({
      el: '#root',
      data: {
        persons: [
          { id: '001', name: '张三', age: 18 },
          { id: '002', name: '李四', age: 19 },
          { id: '003', name: '王五', age: 20 },
        ],
        car: {
          name: '奥迪',
          price: '20w',
          color: 'red',
        },
        str: 'hello',
      },
    })
  </script>
</html>
```

##### 1.13.2 key作用与原理

1. vue中的key有什么作用？（key的内部原理）

* 就是vue的`虚拟dom`，vue会根据 data中的数据生成`虚拟dom`，如果是第一次生成页面，就将虚拟dom转成真实dom，在页面展示出来。

2. 虚拟dom有啥用？

* 每次`vm._data` 中的数据更改，都会触发生成新的虚拟dom，新的虚拟dom会跟旧的虚拟dom进行比较，如果有相同的，在生成真实dom时，这部分相同的就不需要重新生成，只需要将两者之间不同的dom转换成真实dom，再与原来的真实dom进行拼接。我的理解是虚拟dom就是起到了一个dom复用的作用，还有避免重复多余的操作，下文有详细解释。


3. 而key有啥用？

* ​ key是虚拟dom的标识。

**面试题：**`react`、`vue`中的`key`有什么作用？（key的内部原理）

1. `虚拟DOM`中`key`的作用：

* (1).`key`是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】

*  (2).随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：


2. 对比规则：
* (1).旧虚拟DOM中**找到了**与新虚拟DOM相同的`key`：

  * ①.若虚拟DOM中【内容没变】, 直接使用之前的真实DOM！(复用)
  * ②.若虚拟DOM中【内容变了】, 则生成新的真实DOM，随后【替换掉】页面中之前的真实DOM。

*   (2).旧虚拟DOM中**未找到**与新虚拟DOM相同的`key`

  *  ①.创建新的真实DOM，随后渲染到到页面。

3. 用index作为key可能会引发的问题：

*   (1). 若对数据进行：逆序添加、逆序删除等【**破坏顺序操作**】:

  * ①.会产生没有必要的真实DOM更新 == > 界面效果没问题, 但【效率低】。

*   (2). 如果结构中还包含【**输入类的DOM**】：

  * ①. 会产生错误DOM更新 == > 界面【有问题】。

4. 开发中如何选择`key`?:

*  (1).最好使用每条数据的**【唯一标识作为key】,** 比如id、手机号、身份证号、学号等唯一值。
*  (2).如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <!-- 遍历数组 
        key是vue内部征用的(虚拟dom中显示)，html中不显示
        如果不写key,默认把index的数据作为key
      -->
      <h2>人员列表</h2>
      <button @click.once="add">添加一个老刘</button>
      <ul>
        <li v-for="(p,index) of persons" :key="index">
          {{index}}--{{p.name}}--{{p.age}}
          <input type="text" />
        </li>
      </ul>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示
    new Vue({
      el: '#root',
      data: {
        persons: [
          { id: '001', name: '张三', age: 18 },
          { id: '002', name: '李四', age: 19 },
          { id: '003', name: '王五', age: 20 },
        ],
      },
      methods: {
        add() {
          const p = { id: '004', name: '老刘', age: '40' }
          // unshift() 在数组最前面放数据
          this.persons.unshift(p)
        },
      },
    })
  </script>
</html>
```



> index作为key

![67273734678](https://github.com/yang061/Vue/blob/main/readmeImages/vue2/1.13.2%20key%E4%BD%9C%E7%94%A8%E4%B8%8E%E5%8E%9F%E7%90%86)

> id作为key

![67273756803](https://github.com/yang061/Vue/blob/main/readmeImages/vue2/id%E4%BD%9C%E4%B8%BAkey)

##### 1.13.3 列表过滤

**watch实现**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>人员列表</h2>
      <input type="text" placeholder="请输入名字" v-model="keyWord" />
      <ul>
        <li v-for="(p,index) of filPersons" :key="index">
          {{p.name}}--{{p.age}}--{{p.sex}}
        </li>
      </ul>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示

    // 用watch实现
    // #region * 强制折叠
    new Vue({
      el: '#root',
      data: {
        keyWord: '',
        persons: [
          { id: '001', name: '马冬梅', age: 18, sex: '女' },
          { id: '002', name: '周冬雨', age: 19, sex: '女' },
          { id: '003', name: '周杰伦', age: 20, sex: '男' },
          { id: '004', name: '温兆伦', age: 40, sex: '男' },
        ],
        filPersons: [],
      },
      // watch与data同级别
      watch: {
        // val是新值
        keyWord: {
          immediate: true, //不等代码跑完先执行一次，相当于第一次输入空字符串=>显示所有
          handler() {
            // filters过滤,不更改原数组，而是返回新数组
            this.filPersons = this.persons.filter((p) => {
              //  indexOf看有没有xxx包含某值,返回该值在xxx中的索引号（从0开始）
              //   eg:'abc'.indexOf('b') => 1
              //   'abc'.indexOf('x') =>-1
              //   'abc'.indexOf('')=>0 包含空字符串

              return p.name.indexOf(val) !== -1 //
            })
          },
        },
      },
    })
    //#endregion

  </script>
</html>
```

**computed实现**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>人员列表</h2>
      <input type="text" placeholder="请输入名字" v-model="keyWord" />
      <ul>
        <li v-for="(p,index) of filPersons" :key="index">
          {{p.name}}--{{p.age}}--{{p.sex}}
        </li>
      </ul>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示

    // 用computed实现
    new Vue({
      el: '#root',
      data: {
        keyWord: '',
        persons: [
          { id: '001', name: '马冬梅', age: 18, sex: '女' },
          { id: '002', name: '周冬雨', age: 19, sex: '女' },
          { id: '003', name: '周杰伦', age: 20, sex: '男' },
          { id: '004', name: '温兆伦', age: 40, sex: '男' },
        ],
      },
      computed: {
        /* 计算属性什么时候调用？
        1.计算的时候所依赖的数据发生变化
        2.一开始的时候
        */
        filPersons() {
          return this.persons.filter((p) => {
            return p.name.indexOf(this.keyWord) !== -1
          })
        },
      },
    })
  </script>
</html>

```

##### 1.13.4 列表排序

![](https://github.com/yang061/Vue/blob/main/readmeImages/vue2/%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F%E6%A1%88%E4%BE%8B.png)

```html
<body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>人员列表</h2>
      <input type="text" placeholder="请输入名字" v-model="keyWord" />
      <button @click="sortType=2">年龄升序</button>
      <button @click="sortType=1">年龄降序</button>
      <button @click="sortType=0">原顺序</button>
      <ul>
        <li v-for="(p,index) of filPersons" :key="p.id">
          {{p.name}}--{{p.age}}--{{p.sex}}
        </li>
      </ul>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示

    new Vue({
      el: '#root',
      data: {
        keyWord: '',
        sortType: 0, //sortType类型是数字！！！0原顺序 1降序 2 升序
        persons: [
          { id: '001', name: '马冬梅', age: 33, sex: '女' },
          { id: '002', name: '周冬雨', age: 19, sex: '女' },
          { id: '003', name: '周杰伦', age: 20, sex: '男' },
          { id: '004', name: '温兆伦', age: 40, sex: '男' },
        ],
      },
      computed: {
        filPersons() {
          const arr = this.persons.filter((p) => {
            return p.name.indexOf(this.keyWord) !== -1
          })
          // 判断是否需要排序
          if (this.sortType) {
            arr.sort((p1, p2) => {
              return this.sortType === 1 ? p2.age - p1.age : p1.age - p2.age
            })
          }
          return arr
        },
      },
    })

    // sort复习
    /*
    // 1.sort改变原数组
    // 2.前 - 后 =>升序
    // 3.后 - 前 =>降序
    // 4.sort括号里面只写一个，返回原数组

    let arr = [1, 3, 5, 4, 4, 8, 7]
    arr.sort((a, b) => {
      // return a - b //升 [1, 3, 4, 4, 5, 7, 8]
      // return b - a //降 [8, 7, 5, 4, 4, 3, 1]
      // return b //原数组
    })
    console.log(arr)*/
  </script>
```

#### 1.14 数据监视

##### 1.14.1 问题引入

![67280842644](https://github.com/yang061/Vue/blob/main/readmeImages/vue2/%E6%95%B0%E6%8D%AE%E7%9B%91%E8%A7%86%E5%8E%9F%E7%90%86.png)

****

```html
<body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>人员列表</h2>
      <button @click="updateMei">更新马冬梅</button>
      <ul>
        <li v-for="(p,index) of persons" :key="p.id">
          {{p.name}}--{{p.age}}--{{p.sex}}
        </li>
      </ul>
    </div>
  </body>
  <script>
    Vue.config.productionTip = false //阻止vue在启动时生成生产提示

    new Vue({
      el: '#root',
      data: {
        keyWord: '',
        sortType: 0, //sortType类型是数字！！！0原顺序 1降序 2 升序
        persons: [
          { id: '001', name: '马冬梅', age: 33, sex: '女' },
          { id: '002', name: '周冬雨', age: 19, sex: '女' },
          { id: '003', name: '周杰伦', age: 20, sex: '男' },
          { id: '004', name: '温兆伦', age: 40, sex: '男' },
        ],
      },
      methods: {
        updateMei() {
          // this.persons[0].name = '马老师' //奏效
          // this.persons[0].age = 50 //奏效
          // this.persons[0].sex = '男' //奏效
          this.persons[0] = { id: '001', name: '马老师', age: 50, sex: '男' }
        },
      },
    })
  </script>
```

>  点击更新马冬梅的信息，马冬梅的数据并没有发生改变，这个更改的数据并没有被 vue 监测到。

##### 1.14.2 模拟一个数据监视

```html
 <script>
      // 本案例只模拟了一层，而vue里面有递归有多少层都能找到并为他设置getter和setter
      let data = {
        name: '小明',
        age: 19,
      }
      //   创建一个监视的实例对象，用于监视data中属性的变化
      const obs = new Observer(data)
      console.log(obs)

      //   准备一个vm实例对象
      let vm = {}
      vm._data = data = obs

      //   监视属性的构造函数
      function Observer(obj) {
        // 汇总对象中所有的属性形成一个数组
        const keys = Object.keys(obj)
        // 遍历
        keys.forEach((k) => {
          // 在this(实例对象)中添加属性(k)
          Object.defineProperty(this, k, {
            get() {
              return obj[k]
            },
            set(val) {
              console.log(`${k}被改了`)
              obj[k] = val
            },
          })
        })
      }
    </script>
```

##### 1.14.3 Vue.set的使用

`Vue.set(target，propertyName/index，value) `或

`vm.$set(target，propertyName/index，value)`

**用法：**

​	向响应式对象中添加一个 `property`，并确保这个`新 property `同样是响应式的，且触发视图更新。它`必须`用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 `vm.myObject.newProperty = 'hi'`)

**注意：**

​	`Vue.set() `或 `vm.$set `有缺陷：

> 括号中第一个数据target不能是vm和vm身上第一层的数据(_data和data里面的)

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <hr />
      <h1>学生信息</h1>
      <button @click="addSex">添加一个性别属性，默认男</button>
      <h2>姓名：{{student.name}}</h2>
      <h2 v-if="student.sex">性别：{{student.sex}}</h2>
      <h2>年龄：真实{{student.age.rage}},对外{{student.age.sage}}</h2>
      <hr />
      <h2>朋友们</h2>
      <ul>
        <li v-for="(f,index) in student.friends" ::key="index">
          {{f.name}}-- {{f.age}}
        </li>
      </ul>
    </div>
  </body>

  <script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
      el: '#root',
      data: {
        name: '尚硅谷',
        address: '北京',
        student: {
          name: 'tom',
          age: {
            rAge: 40,
            sAge: 29,
          },
          friends: [
            { name: 'jerry', age: 35 },
            { name: 'Tom', age: 45 },
          ],
        },
      },
      methods: {
        addSex() {
          // Vue.set(target,'key','value')  target不能是vm和vm身上第一层的数据(_data和data里面的)
          //   Vue.set(this.student, 'sex', '男')
          this.$set(this.student, 'sex', '男') //vm的方法
        },
      },
    })
  </script>
```

##### 1.14.4 监视数组

```html
<body>
    <!-- 准备好一个容器-->
    <div id="root">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <hr />
      <h1>学生信息</h1>
      <button @click="addSex">添加一个性别属性，默认男</button>
      <h2>姓名：{{student.name}}</h2>
      <h2 v-if="student.sex">性别：{{student.sex}}</h2>
      <h2>年龄：真实{{student.age.rage}},对外{{student.age.sage}}</h2>
      <hr />
      <h2>爱好</h2>
      <ul>
        <li v-for="(h,index) in student.hobby" ::key="index">{{h}}</li>
      </ul>
      <h2>朋友们</h2>
      <ul>
        <li v-for="(f,index) in student.friends" ::key="index">
          {{f.name}}-- {{f.age}}
        </li>
      </ul>
    </div>
  </body>

  <script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
      el: '#root',
      data: {
        name: '尚硅谷',
        address: '北京',
        student: {
          name: 'tom',
          age: {
            rAge: 40,
            sAge: 29,
          },
          hobby: ['抽烟', '喝酒', '烫头'],
          friends: [
            { name: 'jerry', age: 35 },
            { name: 'Tom', age: 45 },
          ],
        },
      },
    })
  </script>
```

![](https://github.com/yang061/Vue/blob/main/readmeImages/vue2/%E7%9B%91%E8%A7%86%E6%95%B0%E7%BB%841.png)

> 所以我们通过 vm._data.student.hobby[0] = ‘aaa’ // 不奏效
>
> `vue `监测在数组那没有 getter 和 setter，所以监测不到数据的更改，也不会引起页面的更新

vue 对数组无法通过 getter 和 setter 进行数据监视,而是通过 `包装`数组上常用的用于修改数组的方法来实现的。

![](https://github.com/yang061/Vue/blob/main/readmeImages/vue2/%E7%9B%91%E8%A7%86%E6%95%B0%E7%BB%842.png)

##### 1.14.5 练习

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Vue监测数据改变的原理</title>
    <!-- 引入Vue -->
    <script type="text/javascript" src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器-->
    <div id="root">
      <h1>学生信息</h1>
      <button @click="student.age++">年龄+1</button><br />

      <button @click="addSex">添加一个性别属性，默认男</button><br />
      <button @click="student.sex='未知'">修改性别</button><br />
      <button @click="addFriend">在列表首位添加一个朋友</button><br />
      <button @click="updateFirstFriendName">
        修改第一个朋友的名字为：张三</button
      ><br />
      <button @click="addHobby">添加一个爱好</button><br />
      <button @click="updateFirstHobby">修改第一个爱好为：开车</button><br />
      <button @click="removeSmoke">过滤爱好中的抽烟</button><br />

      <h2>姓名：{{student.name}}</h2>
      <!-- 没有sex属性时隐藏 -->
      <h2 v-if="student.sex">性别：{{student.sex}}</h2>
      <h2>年龄：{{student.age}}</h2>
      <h2>爱好</h2>
      <ul>
        <li v-for="(h,index) in student.hobby" ::key="index">{{h}}</li>
      </ul>
      <h2>朋友们</h2>
      <ul>
        <li v-for="(f,index) in student.friends" ::key="index">
          {{f.name}}-- {{f.age}}
        </li>
      </ul>
    </div>
  </body>

  <script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
      el: '#root',
      data: {
        student: {
          name: 'tom',
          age: 29,
          hobby: ['抽烟', '喝酒', '烫头'],
          friends: [
            { name: 'jerry', age: 35 },
            { name: 'Tom', age: 45 },
          ],
        },
      },
      methods: {
        // 添加一个性别属性
        addSex() {
          // Vue.set(this.student, 'sex', '男')
          this.$set(this.student, 'sex', '男')
        },
        // 在列表首位添加一个朋友
        addFriend() {
          this.student.friends.unshift({ name: 'pop', age: 50 })
        },
        updateFirstFriendName() {
          // 修改对象的属性，本质是改对象
          this.student.friends[0].name = '张三'
        },
        addHobby() {
          this.student.hobby.push('打篮球')
        },
        updateFirstHobby() {
          // this.student.hobby.splice(0, 1, '开车') //从第0个开始删一个在插入一个新的
          // Vue.set(this.student.hobby, 0, '开车') //爱好里面的第0个改为开车
          this.set(this.student.hobby, 0, '开车') //爱好里面的第0个改为开车
        },
        removeSmoke() {
          // 需要重新赋值,新数组替换旧数组
          this.student.hobby = this.student.hobby.filter((h) => {
            return h !== '抽烟'
          })
        },
      },
    })
  </script>
</html>
```

##### 1.14.6 总结

Vue监视数据的原理：

1. `vue`会监视`data`中所有层次的数据
2. 如何监测`对象`中的数据？

* 通过setter实现监视，且要在new Vue时就传入要监测的数据。

  * (1).对象中后追加的属性，Vue默认`不做`响应式处理
  * (2).如需给后添加的属性做响应式，请使用如下API：

  > `Vue.set(target，propertyName/index，value)` 或
  >
  > `vm.$set(target，propertyName/index，value)`

3. 如何监测`数组`中的数据？

* 通过`包裹数组`更新元素的方法实现，本质就是做了两件事：

  * (1).调用原生对应的方法对数组进行更新
  * (2).重新解析模板，进而更新页面

4. 在Vue修改`数组`中的某个元素一定要用如下方法：

   1. 使用这些API:`push()`、`pop()`、`shift()`、`unshift()`、`splice()`、`sort()`、`reverse()`
   2. `Vue.set()` 或 `vm.$set()`

> **特别注意：**
>
> Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象（data和_data） 添加属性！！！
>
> 例:Vue.set(this,…,…)或this.$set(this,…,…)


#### 1.15 v-model双向绑定(收集表单数据)

* 若：`<input type="text"/>`，则`v-model`收集的是`value`值，用户输入的就是`value值`。

  > `number`和` v-model.number`一起使用

```html
<!-- 准备好一个容器-->
<div id="root">
    <form @submit.prevent="demo">
        账号：<input type="text" v-model.trim="userInfo.account"> <br/><br/>
        密码：<input type="password" v-model="userInfo.password"> <br/><br/>
        年龄：<input type="number" v-model.number="userInfo.age"> <br/><br/>
        <button>提交</button>
    </form>
</div>

<script type="text/javascript">
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
            userInfo:{
                account:'',
                password:'',
                age:18,
            }
        },
        methods: {
            demo(){
                console.log(JSON.stringify(this.userInfo))
            }
        }
    })
</script>

```

* 若：`<input type="radio"/>`，则`v-model`收集的是`value`值，且要给标签【配置】`value`值。

```html
<!-- 准备好一个容器-->
<div id="root">
    <form @submit.prevent="demo">
        性别：
        男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
        女<input type="radio" name="sex" v-model="userInfo.sex" value="female">
    </form>
</div>

<script type="text/javascript">
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
            userInfo:{
                sex:'female'
            }
        },
        methods: {
            demo(){
                console.log(JSON.stringify(this.userInfo))
            }
        }
    })
</script>
```

* 若：`<input type="checkbox"/>`
  1. 【没有】配置input的value属性，那么收集的就是`checked`（勾选 or 未勾选，是布尔值）
  2. 【配置】input的value属性:
     * v-model的初始值是`非数组`，那么收集的就是`checked`（勾选 or 未勾选，是布尔值）
     * v-model的初始值是`数组`，那么收集的的就是`value`组成的数组

```html
<!-- 准备好一个容器-->
<div id="root">
    <form @submit.prevent="demo">
        爱好：
        学习<input type="checkbox" v-model="userInfo.hobby" value="study">
        打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
        吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
        <br/><br/>
        所属校区
        <select v-model="userInfo.city">
            <option value="">请选择校区</option>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="shenzhen">深圳</option>
            <option value="wuhan">武汉</option>
        </select>
        <br/><br/>
        其他信息：
        <textarea v-model.lazy="userInfo.other"></textarea> <br/><br/>
        <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
        <button>提交</button>
    </form>
</div>

<script type="text/javascript">
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
            userInfo:{
                hobby:[],
                city:'beijing',
                other:'',
                agree:''
            }
        },
        methods: {
            demo(){
                console.log(JSON.stringify(this.userInfo))
            }
        }
    })
</script>
```

![](https://github.com/yang061/Vue/blob/main/readmeImages/vue2/%E6%94%B6%E9%9B%86%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE.png)

* 备注

> v-model的三个修饰符：
>
> * lazy：失去焦点再收集数据
> * number：输入字符串转为有效的数字
> * trim：输入首尾空格过滤
>
> 例：`v-model.number=“phone” `就算是number类型的input框，`vue`收集的还是字符串，可以使用这个修饰符


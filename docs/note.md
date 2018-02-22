### 学习准备

#### 模块化

###### 命名空间

###### commonjs

`module.exports` 暴露模块, `require` 引入模块, 同步执行

###### amd/cmd/umd

amd

```javascript
define(
	// 模块名
	'alpha',
  	['require', 'exports', 'beta'],
  	function (require, exports, beta) {
      	exports.verb = function() {
          	return beta.verb()
      }
  }
)
```

cmd 尽可能懒执行

```javascript
define(function(require, exports, module) {
  	// 通过 require 引入依赖
    var $ = require('jquery')
    var Spinning = require('./spinning')
    // 通过 exports 对外提供接口
    exports.doSomething = ...
    // 或者
    module.exports = ...
})
```

umd 通用解决方案 ，判断是否支持amd, 判断是否支持commonJS, 都不支持使用全局变量

```javascript
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      	// amd Register as an anonymous module
      	define([], factory)
    } else if (typeof exports === 'object') {
        // Node.
      	module.exports = factory()
    } else {
        // Browser globals (root is window)
      	root.returnExports = factory()
    }
})(this, function() {
    ...
    return {}
})
```

###### ES Module

一个文件一个模块 `export/import` 

``` javascript
// 引入
import theDefault, { named1, named2 } from 'src/lib'
import theDefault from 'src/lib'
import { named1, named2 } from 'src/lib'
import { named1 as myNamed1, named2 } from 'src/lib'
import * as mylib from 'src/lib'
import 'src/lib'
// 导出
export let myValue = ''
export function myFun() {}
export class MyClass {}
export default 123
export default function () {}

const MY_CONST = ''
export { MY_CONST as THE_CONST }
// 引入再导出
export * from 'src/other_module'
export { foo, bar } from 'src/other_module'
export { foo as myFoo, bar } from 'src/other_module'
```

#### CSS模块化

##### CSS设计模式

###### OOCSS 

​    	结构和设计分离，容器和内容分离。

###### SMACSS

​	可扩展和模块化结构。base - layout - module - state - theme

###### Atomic CSS

​	原子化css `<div class="mt-10 w-100 h-15"></div>`

###### MCSS

​	多层级的css。foundation > base > project > cosmetic

###### AMCSS

​	属性编码 `<div am-size="large" am-disabled></div>`

###### BEM

​	Block - Element - Modifier

#### webpack 简介

##### 概述

javascript打包，代码分割并按需加载，根据loader加载各种资源。

##### 版本更迭 

v1.0.0  --- 2014.2.20

v2.2.0  --- 2017.1.18

v3.0.0  --- 2017.6.19

v4.0.0  ---  ???

##### 功能进化 






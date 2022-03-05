# 手写专题
## 原生API实现
### Object.create
### instanceof
### new
### call/apply
### bind
### 实现compose函数
### 用setTimeout模拟setInterval
### ES5模拟ES6继承
### bind
### Promise
#### 实现
##### 1 初步实现
##### 2 实现all和race
##### 3 可取消
#### 场景题
##### 1 实现有并行限制的promise调度器
##### 2 红绿灯

## 常见功能实现
### 防抖
### 节流
### 发布订阅模式
### 观察者模式
### 数组去重
### 数组flat降维
### 深拷贝
### 柯里化



```js
function debounce(func, delay, immediate){
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    if (immediate) {
      const exec = !timer;
      timer = setTimeout(()=>{
        func.apply(this, arguments)
        timer = null;
      }, delay);
      if (exec) {
        func.apply(this, arguments)
      }
    } else {
      timer = setTimeout(()=>{
        func.apply(this, arguments)
      }, delay);
    }
  }
}
```

### 节流

```js
function throttle(func, delay){
  let timer = null;
  return function () {
    if (!timer) {
      func.apply(this, arguments)
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  }
}
```

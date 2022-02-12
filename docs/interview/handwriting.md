# 手写题

### 防抖

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

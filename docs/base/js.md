# JS专题

## 防抖

```js
function debounce(func, delay, immediate){
  let timer = null;
  return function(){
    const context = this;
    const args = arguments;
    if (timer) clearTimeout(timer);
    if (immediate) {
      const exec = !timer;
      timer = setTimeout(()=>{
        func.apply(context, args);
        timer = null;
      }, delay);
      if (exec) {
        func.apply(context, args)
      }
    } else {
      timer = setTimeout(()=>{
        func.apply(context, args)
      }, delay);
    }
  }
}
```

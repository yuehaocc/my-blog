# TypeScript实践问题

## 1 keyof可以获取key作为联合类型，那么怎么获取值呢

```ts
type Valueof<T> = T[keyof T];

type mode = {
  edit: 1,
  save: 2,
};

type editSave = Valueof<mode>
```

## 2 TypeScript如何将对象属性值的字面量作为联合类型
使用 1 中的方法
```ts
const RestfulMethod = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE'
};

type IRestfulMethod = typeof RestfulMethod;
// 此时IRestfulMethod：
// type IRestfulMethod = {
//     get: string;
//     post: string;
//     put: string;
//     delete: string;
// }

type TypeRestfulMethod = IRestfulMethod[keyof IRestfulMethod;
// 此时TypeRestfulMethod：
// type TypeRestfulMethod = string

// 并不是期望的：
type TypeRestfulMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
```

没办法只能去google，找到[官网文档](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)描述如下：

> TypeScript 3.4 introduces a new construct for literal values called const assertions. Its syntax is a type assertion with const in place of the type name (e.g. 123 as const). When we construct new literal expressions with const assertions, we can signal to the language that , no literal types in that expression should be widened (e.g. no going from "hello" to string)

大意就是说TypeScript 3.4之后除了个”常量断言“，支持在字面量后面直接加“as const"来防止字面量类型自动扩大（widened, 或者翻译成泛化，还是其他？），比如
// Type '"hello"'
let x = "hello" as const;
如果没有加as const的话，x的类型就是string，而加了后就限定成'hello'这个字面量。

```ts
const modeA = {
  edit: 1,
  save: 2,
} as const;

type editSaveA = Valueof<typeof modeA>

let a: editSaveA = 3
// Type '3' is not assignable to type 'editSaveA'.ts(2322)
```

参考 [深入理解 TypeScript如何将对象属性值的字面量作为联合类型](https://zhuanlan.zhihu.com/p/406211160)

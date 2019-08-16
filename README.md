TypeScript Webpack Import "corejs" Multiple Times Demo
======================================================

从Babel 7.4.0开始，已经不再推荐使用`@babel/polyfill`，而是直接使用：

```
import "core-js/stable";
import "regenerator-runtime/runtime";
```

在这个demo里，在webpack.config.ts中，通过多次引入它们来证明：

1. 它们的确可以成功的添加polyfill
2. 可以多次导入

```
npm install
npm demo
```

可以使用IE11打开，在browser console中，没有看到`includes`相关的报错
（IE11不支持`includes`，如果没有报错，说明起作用了）

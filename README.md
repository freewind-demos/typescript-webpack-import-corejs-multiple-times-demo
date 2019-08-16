TypeScript Webpack Import Babel Polyfill Demo
==============================================

如果babel polyfill在多个文件中被载入，则在浏览器中，会出问题：

- 旧版`babel-polyfill`: 报错

```
Uncaught Error: only one instance of babel-polyfill is allowed
```

- 新版`@babel/polyfill`: 警告

```
@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning.
```

解决办法是：

- 旧版`babel-polyfill`: 使用`idempotent-babel-polyfill`这个库
- 新版`@babel/polyfill`: <s>使用`@babel/polyfill/noConflict`</s>

注意：

> 🚨 As of Babel 7.4.0, this package has been deprecated in favor of
> directly including core-js/stable (to polyfill ECMAScript features)
> and regenerator-runtime/runtime (needed to use transpiled generator functions):
> > import "core-js/stable";
> > import "regenerator-runtime/runtime";

```
npm install
npm demo
```

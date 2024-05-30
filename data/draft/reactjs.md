## 1. 为什么要分 react 和 react-dom 两个包， 提供了什么功能？

react 包时 react 的核心库，提供了 react 组件和状态管理功能，比如创建组件、管理状态、生命周期方法
react-dom 是 专门用来处理 react 组件渲染到 dom 上的库，提供了 render 方法，将 react 组件渲染到 dom 上

## 2. 什么是 useMemo? 作用是什么？

useMemo 是一个 react 的 hook，用来缓存计算结果，避免重新的页面渲染导致的重复计算，提高性能

## 3. React 的 useReducer 和 redux 有什么区别？

## 4. what's the function of strictMode

Strict Mode enables the following development-only behaviors:

- Your components will re-render an extra time to find bugs caused by impure rendering.
- Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
- Your components will be checked for usage of deprecated APIs.

## 5. 什么是 pure function.

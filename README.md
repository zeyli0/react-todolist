### react 中虚拟 dom

### 1 全部替换的方式：（性能不好）

1.1 state 数据
1.2 jsx 模板
1.3 数据 + 模板结合， 生成真实 dom，来显示
1.4 state 数据发生变化
1.5 数据 + 模板结合，生成真实的 dom，替换原始的 dom

### 2 先对比部分替换的方式：（性能提升不明显）

2.1 state 数据
2.2 jsx 模板
2.3 数据 + 模板结合， 生成真实 dom，来显示
2.4 state 数据发生变化
2.5 数据 + 模板结合，生成真实的 dom，并不替换原始的 dom
2.6 新 dom（DocumentFragment）和原始的 dom 做比对，找差异
2.7 找到 input 框发生变化
2.8 只用新的 dom 中的 input 元素，替换老的 dom 中的 input 元素

### 3 虚拟 dom 的方式：

3.1 state 数据
3.2 jsx 模板
3.3 数据 + 模板结合， 生成真实 dom，来显示

<div id='abc'><span>hello world</span></div>
3.4 生成虚拟的 dom（虚拟 dom 就是一个 js 对象，用它来描述真实 dom）
['div', {id: 'abc'}, ['span', {}, 'hello world']]
3.5 state 数据发生变化
3.6 数据+模板生成新的虚拟 dom
3.7 比较原始虚拟 dom 和新的虚拟 dom 的区别。找区别中 span 的区别
3.8 直接操作 dom，改变 span 中的内容

### 4 react 中虚拟 dom 的方式：

jsx -> js 对象 ->真实的 dom
React.createElement()js 对象=》真实 dom

4.1 state 数据
4.2 jsx 模板
4.3 数据 + 模板 生成虚拟的 dom（虚拟 dom 就是一个 js 对象，用它来描述真实 dom）
['div', {id: 'abc'}, ['span', {}, 'hello world']]

4.4 数据 + 模板结合， 生成真实 dom，来显示

<div id='abc'><span>hello world</span></div>
React.createElement('div, {}, React.createElement('span',{}, 'hello world'))
4.5 state 数据发生变化
4.6 数据+模板生成新的虚拟 dom
4.7 比较原始虚拟 dom 和新的虚拟 dom 的区别。找区别中 span 的区别
    diff(difference)算法进行比对
4.8 直接操作原始 dom，改变 span 中的内容

### 虚拟 dom 的优点：

1. 性能提升了
2. 它使得跨端应用得以实现，React Native

### react 中 setState 设置成异步，为了提升性能，

### react 中虚拟 dom 中的 diff 算法（虚拟 dom 树 进行同层比对）

比如循环，key 值不可取 index，因为在进行循环比对时下标比对导致标识不稳定

### react 中 ref(reference) 的引用

ref={(input) => {this.input = input}}

### react 中的生命周期函数（在某一时刻组件自动调用的函数）

Initialization：
setup props and state (constructor)

Mounting:
// 在组件即将挂载到页面的时刻自动执行，一般只在第一次挂载时执行(被废弃)
componentWillMount
// render 函数中不可调用 ajax 异步请求数据
render
// 在组件即挂载到页面之后自动执行， 一般只在第一次挂载时执行
// ajax 异步请求数据放在 componentDidMount 最合适
componentDidMount

Updation：
props：
// 当组件要从父组件接收参数
// 只要父组件的 render 函数被重新执行了，子组件的这个生命周期函数就会被执行
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate // (被废弃)
render
componentDidUpdate
state:
shouldComponentUpdate // 提升性能,作性能优化
componentWillUpdate // (被废弃)
render
componentDidUpdate

Unmounting:
// 当组件即将被移除时，会被自动执行
componentWillUnmount

### These lifecycle methods have often been misunderstood and subtly misused;

componentWillMount
componentWillReceiveProps
componentWillUpdate

### react-transition-group

### Redux 数据层框架

Redux = Reducer + Flux
工作流程：
action creator =>(dispatch)=> Store =>(previousState, action)=> reducers
=>(newState)=> Store =>(state )=> React components

store 拆分 actionCreators 和 actionTypes

store 唯一
reducer 必须是纯函数 接收 state，绝不修改 state 的值

### UI 组件和容器组件

UI 组件：展示,页面渲染
容器组件：处理逻辑

无状态组件：当普通组件中只有一个 render 函数时，可以通过一个箭头函数直接返回

### Redux 中发送异步请求获取数据

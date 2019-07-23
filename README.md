## 我的笔记
redux 分支
1.store核心管理：store对象，state，reduce
2.reducer(oldState,action)：根据老的state 和  action产生新的state，switch（）
3.actions：action对象的工厂函数：有一般参数属性和函数属性（返回dispatch（haha))
4.容器：connect产生的，有redux 的语法和业务逻辑
5.ui组件：负责显示页面，没有reduce的API语法，没有自身的状态
6action-types：里面定义常量，大写
import React from 'react';
//三个阶段，装载阶段（3）、更新阶段（2）、销毁阶段（1）

export default class TestLife extends React.Component{
  /* 装载阶段（3） */
  //执行顺序：constructor/render/componentDidMount

  //构造器
  //super必须是第一行代码，声明式变量定义在this.state中
  // 在构造器中，props 和 state 不要交叉赋值，它俩没有任何关系
  // 在构造器中，不要执行 this.setState()
  // 在构造器中，不要开启异步任务，比如调接口、定时器等
  constructor(props){
    super(props)
    this.state = {
      count:1,
      mag:'hello',
      list:[],
      flag:true
    }
    console.log('----------constructor')
  }

  // 相当于Vue中mounted()
  // 它表示DOM初始化已完成，所有虚拟DOM都已经被渲染成真实的DOM了
  // 一般在这里，可以调接口、定时器、DOM操作
  componentDidMount(){
    console.log('---------componentDidMount')
  }

  /* 更新阶段（2）*/
  // 这是一个开关：用于控制是否更新
  // 询问React：我该更新界面？
  // 这个生命周期，用于性能优化，我们可以精确地控制某些state变量发生变化时不更新视图
  // 实际工作中很少用，我们会函数式组件(PureComponent)作为替代解决
  shouldComponentUpdate(nextProps,nextState){
    console.log('----------shouldComponentUpdate')
    console.log('开关打开state', nextState)
    let {flag , count} = this.state;
    return (flag && count <10)
  }

  // 相当于Vue中的updated()
  // 表示DOM已经更新完成
  // 在该生命周期中，同样不要使用 this.setState()
  componentDidUpdate(){
    console.log('----------componentDidUpdate')
  }

  /* 销毁阶段（1） */
  // 相当于Vue中的beforeDistroy()
  // 关闭长连接、定时器，清缓存
  componentWillUnmount(){
    console.log('-------componentWillUnmount')
  }
  render(){//render用于将React渲染的虚拟DOM渲染到浏览器DOM
    console.log('--------render')

    let {count} = this.state
    return(
      <div>
        <h1>测试生命周期</h1>
        <hr/>
        <h1>{count}</h1>
        <button onClick={()=>this.setState(state=>({count:state.count+1}))}>改变Count</button>
        <button onClick={()=>this.setState(state=>({flag:false}))}>改变flag</button>
      </div>
    )
  }
}
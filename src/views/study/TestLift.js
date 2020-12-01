import React from 'react';

const ChildA = props =>{
  return(
    <div>
      <h3>childa</h3>
      <h3>{props.count}</h3>
      <button onClick={()=>props.onChange(5)}>自增</button>
    </div>
  )
}

const ChildB = props =>{
  return(
    <div>
      <h3>childb</h3>
      <h3>{props.count}</h3>
      <button onClick={()=>props.onChange(8)}>自检</button>
    </div>
  )
}
export default class TestLift extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count : 0// 两个子组件需要共享这个状态（数据）
    }
  }
  render(){
    let{count} = this.state;
    return(
      <div>
        <h1>测试状态提升</h1>
        <hr/>
        <ChildA 
          count={count} 
          onChange={step=>this.setState(state=>({count:state.count+step}))}
        />
        <ChildB count={count}
          onChange={sub=>this.setState(state=>({count:state.count-sub}))}
        />
      </div>
    )
  }
}
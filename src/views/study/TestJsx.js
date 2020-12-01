import React from 'react';
import img from '@/utils/img';

//什么是JSX？
//JSX = JavaScript XML 是一种js语法糖（写起来很爽）
//为什么要使用JSX ?
// 在React开发中JSX语法是可选的，但是React官方建议使用JSX，JSX代码更加优雅、便于维护。

//JSX是变量、是对象、React元素
//JSX是可嵌套的
//JSX中，可以使用表达式，但要使用{}包起来
//JSX中。class这个属性要写成className
//JSX中。for 这个属性要写成htmlFor
//JSX中，注释内容也要使用{}包起来
//JSX中，默认可以防注入攻击（XSS）

//React元素 vs. React类
//简单理解：视觉上看起来像是HTML结构的玩意，就是React元素，也叫JSX
const red = 'jsx';
const name = '大熊猫';
const ele1 = <div className={red}>Hello {name}</div>

const ele2 = <div>{Math.random()}</div>

const ele3 = <div>{ele1}++{ele2}</div>

const ele4 = ()=><div>我是嗯了ele4</div>
const ele5 = function(){
    var str = '';
    for(let i = 1 ; i <= 10 ; i++){
          
        str = <div>{ele1}</div>
    }
    return str
}
// 如果不使用JSX语法糖，应该像这样创建React组件
const ele6 = React.createElement(
    'div',
    {
        className:{red},title:'hello div',id:'box'
    },
    "Helllo {name}"
)

//类组件
export default class TestJsx extends React.Component{
  constructor(props){
    super(props)
  }
    render(){
      console.log('jsx props-------',this.props)
        return(
            <div>
                {name}
                {ele1}
                {ele2}
                {ele3}
                {ele4()}
                {ele5()}
                {ele6}
                {/* 这是我公司的图片 */}
                <img src={img.logo} />
            </div>
        )
    }
}

// export default ele6;//该方法抛出无效，得组件形式
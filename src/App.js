import React from 'react';

// import TestJsx from './views/study/TestJsx';
// import TestProps from './views/study/TestProps';
// import TestEvent from './views/study/TestEvent';
// import TestState from './views/study/TestState';
// import TestCondition from './views/study/TestCondition';
// import TestList from './views/study/TestList';
// import TestForm from './views/study/TestForm';
// import TestLife from './views/study/TestLife';
// import TestLift from './views/study/TestLift';
// import TestLang from './views/study/TestLang'; 
// import TestCombine from './views/study/TestCombine';
// import TestContext from './views/study/TestContext';
import ThemeCtx from '@/utils/theme.js';
// import TestHoc from './views/study/TestHoc.js';
// import TestHooks from './views/study/TestHooks';
// import TestTypes from './views/study/TestTypes';
import {Layout} from '@/components';
// const ele = <h1>Hello React 2020</h1>;
// console.log(TextJsx)
//类组件，组件定义

//导入路由
import{
  HashRouter,
  BrowserRouter
} from 'react-router-dom';
class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        color:'#000000',
        background:'#ffffff'
      }
    }
    toggleTheme(){
      this.setState(state=>({theme:Math.random()>0.5?themes.light:themes.dark}))
    }
    themeChange(key,e){
      console.log(key,e.target.value);
      this.setState({[key]:e.target.value})
    }
    render(){
      let {color,background} = this.state;
        return (
          <HashRouter>
            <ThemeCtx.Provider value={{color,background}}>
              <Layout/>
              {/* <TestJsx/> */}
              {/* <TestProps msg='Hello MSG' buley='how are you' bol={true} arrs={[1,2,3,4]} user={{name:'小刚',age:10}}/> */}
              {/* <TestEvent msg='改变值'/> */}
              {/* {<TestState/>} */}
              {/* {<TestCondition/>} */}
              {/* {<TestList/>} */}
              {/* <TestForm/> */}
              {/* <TestLife/> */}
              {/* <TestLift/> */}
              {/* <TestLang/> */}
              {/* <TestCombine/> */}
              {/* <TestContext/> */}
              {/* <div>
                <input type="color" value={color} onChange={(e)=>this.themeChange('color',e)}/>
                <input type="color" value={background} onChange={(e)=>this.themeChange('background',e)}/>
                <span style={{paddingLeft:'50px'}}>选择背景色：</span>
                <hr/>
              </div> */}
              {/* <TestHoc/> */}
              {/* <TestHooks/> */}
              {/* <TestTypes/> */}
            </ThemeCtx.Provider>
          </HashRouter>
        )
    }
}
// 函数式组件，组件定义
// function App(){
//     return ele
// }

export default App;
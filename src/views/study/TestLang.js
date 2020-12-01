import React from 'react';

// 子组件
const LgLang = props=>{
  let {list,value,onChange} = props;
  function langClick(ele,e){
    console.log('lang clicked', ele)
    // 调用父组件传递过来的自定义事件
    // e.target.value = ele.lang_py;
    onChange(ele)
  }
  return (
    <div className='qf-lang'>
      {
        list.map(ele=>(
          <span
            key={ele.id}
            className={value===ele.lang_py ? 'on' : ''}
            onClick={(e)=>langClick(ele,e)}
          >
            {ele.lang_zh}
          </span>
        ))
      }
    </div>
  )
}
export default class TestLang extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      langList:[
        { id: 1, lang_zh:'中文', lang_py: 'zh'},
        { id: 2, lang_zh: '英文', lang_py: 'en' },
        { id: 3, lang_zh: '日语', lang_py: 'jp' },
        { id: 4, lang_zh: '法语', lang_py: 'fr' },
        { id: 5, lang_zh: '韩语', lang_py: 'kr' }
      ],
      lang_py:'zh'
    }
  }
  langChange(ele,e){
    console.log('父组件中的 lang change 被触发了', e)
    // this.setState({lang_py:e.target.value})
    this.setState({lang_py:ele.lang_py})
  }
  render(){
    let {langList,lang_py} = this.state;
    const arr = langList.filter(ele=>ele.lang_py === lang_py)
    return(
      <div>
        <h1>测试组件通信</h1>
        <LgLang list={langList} value={lang_py} onChange={(ele,e)=>this.langChange(ele,e)}/>
        <h1>当前你的选择是：<span>{arr[0].lang_zh}</span></h1>
      </div>
    )
  }
}
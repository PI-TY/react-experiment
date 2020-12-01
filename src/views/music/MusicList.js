import React,{useState,useEffect} from 'react';
import MusicRow from './MusicRow';

export default props=>{
  const [list,setList] = useState([]);
  useEffect(()=>{
    //渲染初始化完成 componentDidMount
    const res = [
      { id: 1, name: '稻香' },
      { id: 2, name: '等你下课' },
      { id: 3, name: '一路向北' }
    ]// setCount() 是一个方法，它专门用于改变 count的 类似setState专门用于更新视图
    setList(res)
    console.log(list)
    return undefined
  },[]);

  return(
    <div>
      <h1>音乐列表</h1>
      {
        list.map(ele=>(
          <MusicRow key={ele.id} music={ele}/>
        ))
      }
    </div>
  )
}
import React from 'react';

import {useParams} from 'react-router-dom';
// useParams方法返回一个包含URL参数的键/值对的对象。使用它来访问match中当前<路由>的参数。
export default props => {
  console.log('MusicDetail--useParams',useParams())
  let {id} = useParams();
  return (
    <div>
      <h1>音乐详情页</h1>
      <h1>{id}</h1>
    </div>
  )
}
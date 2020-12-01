import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

const MusicRow = props=>{
  let {music} = props;
  const history = useHistory()
  const skipToDetail = (ele)=>{
    console.log('MusicRew props',props,history);
    history.push('/music/detail/'+music.id)
  }
  
  return (
    <div>
      <span>{music.id}</span>
      <span>---</span>
      <span>{music.name}</span>
      <span>---</span>
      <span onClick={skipToDetail}>跳转</span>
    </div>
  )
}
// 给无状态组件添加props数据类型校验
MusicRow.propTypes = {
  music:PropTypes.object.isRequired
}

export default MusicRow;
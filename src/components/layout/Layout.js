import React from 'react';

import Sider from './Sider';
import Header from './Header';
import Main from './Main';
import './style.scss';
export default props=>{
  return (
    <div className='qf-layout'>
      <Sider/>
      <Header/>
      <Main/>
    </div>
  )
}
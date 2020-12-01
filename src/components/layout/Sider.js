import React from 'react';

import routes from '@/views';
import {NavLink} from 'react-router-dom';
//NavLink 相当于vue的router-link
export default props=>{
  
  // 用于生成菜单的方法
  const createNavLink = ()=>{
    return routes.map(ele=>(
      <div key={ele.id}>
          <NavLink 
            to={ele.path} 
            activeClassName='on'
            exact={!ele.noexact}
          >{ele.text}</NavLink>
      </div>
    ))
  }

  return (
    <div className = 'qf-sider'>
      {createNavLink()}
    </div>
  )
}

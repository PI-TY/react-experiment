import React from 'react';


// 粗粒度的权限管理
// 细粒度的权限管理
export default function roleHoc(WrappedCpm){
  return class extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        
      }
    }
    componentDidMount(){
      this.setState({userinfo:{
        role: 1,
        mobile: '1300000000',
        username: '小王'
      }})
    }
    render(){
      let {userinfo} = this.state;
      console.log('roleHoc--props',this.props)
      console.log('roleHoc--userinfo',userinfo)
      return(
        <div>
          <WrappedCpm {...this.props} userinfo={userinfo}/>
        </div>
      )
    }
  }
}
(self.webpackChunkreact_study=self.webpackChunkreact_study||[]).push([[164],{164:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(851);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var i=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(f,e);var t,n,c,i,s=(c=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=a(c);if(i){var n=a(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this,e)).state={gender:1,numIdx:1,classDis:"d1",styleDis:"block",color:"red",size:20},t}return t=f,(n=[{key:"renderNumDiv",value:function(){var e=null;switch(this.state.numIdx){case 1:e=r.createElement("div",null,"1111111");break;case 2:e=r.createElement("div",null,"222222");break;case 3:e=r.createElement("div",null,"33333");break;case 4:e=r.createElement("div",null,"444444")}return e}},{key:"change",value:function(e){switch(e){case"gender":this.setState((function(e){return{gender:1===e.gender?2:1}}));break;case"numIdx":this.setState({numIdx:Math.ceil(4*Math.random())});break;case"classDis":this.setState((function(e){return{classDis:"d1"===e.classDis?"d2":"d1"}}));break;case"styleDis":this.setState((function(e){var t=["red","yellow","green","blue","black"];return{styleDis:"block"===e.styleDis?"none":"block",size:e.size+5,color:t[Math.floor(Math.random()*t.length)]}}))}}},{key:"render",value:function(){var e=this,t=this.state,n=t.gender,c=t.numIdx,l=t.classDis,o=t.styleDis,u=t.size,a=t.color;return r.createElement("div",null,r.createElement("h1",null,"测试条件渲染"),r.createElement("hr",null),1===n?r.createElement("div",null,"女"):r.createElement("div",null,"男"),r.createElement("button",{onClick:function(){return e.change("gender")}},"切换性别"),r.createElement("hr",null),1===c&&r.createElement("div",null,"111111"),2===c&&r.createElement("div",null,"222222"),3===c&&r.createElement("div",null,"333333"),4===c&&r.createElement("div",null,"444444"),this.renderNumDiv(),r.createElement("button",{onClick:function(){return e.change("numIdx")}},"切换数字"),r.createElement("hr",null),r.createElement("div",{className:l},"className实现渲染"),r.createElement("button",{onClick:function(){return e.change("classDis")}},"更改className"),r.createElement("hr",null),r.createElement("div",{id:"ok",style:{color:a,fontSize:u+"px",display:o}},"动态style来改变"),r.createElement("button",{onClick:function(){return e.change("styleDis")}},"更改style"))}}])&&l(t.prototype,n),f}(r.Component)}}]);
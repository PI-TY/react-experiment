(self.webpackChunkreact_study=self.webpackChunkreact_study||[]).push([[651],{651:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(851);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var i=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(f,e);var t,n,l,i,s=(l=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(l);if(i){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return o(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this,e)).state={list:[{id:1,name:"zhangsan",age:20},{id:2,name:"lisi",age:21},{id:3,name:"xiaoming",age:22},{id:4,name:"xioahong",age:23}]},t}return t=f,(n=[{key:"renderList1",value:function(){return this.state.list.map((function(e){return r.createElement("div",{key:e.id},r.createElement("span",null,e.name),r.createElement("span",null,"------"),r.createElement("span",null,e.id),r.createElement("span",null,"-------"),r.createElement("span",null,e.age))}))}},{key:"renderList2",value:function(){var e=this,t=this.state.list,n=[];return t.map((function(t,l){t.age=t.age+4,t.checked=t.checked||!1,n.push(r.createElement("div",{key:t.id},r.createElement("input",{type:"checkbox",checked:t.checked,onChange:function(t){return e.rowChange(t,l)}}),r.createElement("span",null,t.name),r.createElement("span",null,"------"),r.createElement("span",null,t.id),r.createElement("span",null,"-------"),r.createElement("span",null,t.age),r.createElement("span",null,"------"),r.createElement("button",{onClick:function(){return e.rowClick(t)}},"操作")))})),n}},{key:"rowChange",value:function(e,t){var n=this;console.log("e",t,e.target.checked),this.setState((function(n){return n.list[t].checked=e.target.checked,{list:n.list}}),(function(){console.log("this.state.list",n.state.list)}))}},{key:"rowClick",value:function(e){console.log("row",e.id,e)}},{key:"render",value:function(){var e=this.state.list,t=[];return e.map((function(e,n){e.age=e.age+2,t.push(r.createElement("div",{key:e.id},r.createElement("span",null,e.id),r.createElement("span",null,"--"),r.createElement("span",null,e.name),r.createElement("span",null,"--"),r.createElement("span",null,e.age)))})),r.createElement("div",null,r.createElement("h1",null,"测试列表"),r.createElement("hr",null),[r.createElement("div",{key:"1"},"1"),r.createElement("div",{key:"2"},"2"),r.createElement("div",{key:"3"},"3")],r.createElement("hr",null),e.map((function(e){return r.createElement("div",{key:e.id}," ",r.createElement("span",null,e.name),r.createElement("span",null,"-------"),r.createElement("span",null,e.id),r.createElement("span",null,"------"),r.createElement("span",null,e.age))})),r.createElement("hr",null),this.renderList1(),r.createElement("hr",null),t,r.createElement("hr",null),this.renderList2())}}])&&a(t.prototype,n),f}(r.Component)}}]);
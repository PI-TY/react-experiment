(self.webpackChunkreact_study=self.webpackChunkreact_study||[]).push([[148],{148:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});var r=n(851);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(s,t);var e,n,o,a,f=(o=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=i(o);if(a){var n=i(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=f.call(this,t)).state={count:100,price:9.9,a:1,b:2,c:3},e}return e=s,(n=[{key:"changeCount",value:function(){var t=this;setTimeout((function(){console.log("11111"),t.setState((function(t,e){return{count:++t.count,price:t.price-=.001}}),(function(){console.log("done")})),console.log("22222")}),1e3)}},{key:"changeABC",value:function(){this.setState({a:1e3,b:2e3,c:3e3})}},{key:"render",value:function(){var t=this,e=this.state,n=e.count,o=e.price,c=e.a,u=e.b,l=e.c;return r.createElement("div",null,r.createElement("h1",null,"测试State"),r.createElement("hr",null),r.createElement("h1",null,"数量：",n),r.createElement("h1",null,"单价：",o),r.createElement("h1",null,"总价：",n*o),r.createElement("button",{onClick:function(){return t.changeCount()}},"改变总价"),r.createElement("h1",null,c),r.createElement("h1",null,u),r.createElement("h1",null,l),r.createElement("button",{onClick:function(){return t.changeABC()}},"改变ABC"))}}])&&c(e.prototype,n),s}(r.Component)}}]);
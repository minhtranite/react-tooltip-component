!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.ReactTooltipComponent=t(require("react"),require("react-dom")):e.ReactTooltipComponent=t(e.React,e.ReactDOM)}(this,function(e,t){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),i=n(r);t.default=i.default,e.exports=t.default},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=function(e,t,o){for(var n=!0;n;){var r=e,i=t,p=o;n=!1,null===r&&(r=Function.prototype);var l=Object.getOwnPropertyDescriptor(r,i);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(p)}var a=Object.getPrototypeOf(r);if(null===a)return;e=a,t=i,o=p,n=!0,l=a=void 0}},s=o(2),a=n(s),u=o(3),c=n(u),f=!("undefined"==typeof document||!document||!document.createElement),d=function(e){function t(){var e=this;r(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this.componentDidMount=function(){e.container=e.props.container||(f?document.body:null),e.componentEl=c.default.findDOMNode(e),e.tooltipEl=document.createElement("div");var t=document.createElement("div");t.className="tooltip-arrow";var o=document.createElement("div");o.className="tooltip-inner",o.textContent=e.props.title,e.tooltipEl.appendChild(t),e.tooltipEl.appendChild(o),e.tooltipEl.className="tooltip "+e.props.position,e.container.appendChild(e.tooltipEl),e.resetTooltip(),e.componentEl.addEventListener(e.props.fixed?"mouseenter":"mousemove",e.handleMouseMove),e.componentEl.addEventListener("mouseleave",e.handleMouseOut)},this.componentDidUpdate=function(){e.tooltipEl.className="tooltip "+e.props.position,e.tooltipEl.childNodes[1].textContent=e.props.title},this.componentWillUnmount=function(){e.componentEl.removeEventListener(e.props.fixed?"mouseenter":"mousemove",e.handleMouseMove),e.componentEl.removeEventListener("mouseleave",e.handleMouseOut),e.container.removeChild(e.tooltipEl)},this.resetTooltip=function(){e.tooltipEl.style.transition="opacity 0.4s",e.tooltipEl.style.left="-500px",e.tooltipEl.style.top="-500px",e.tooltipEl.style.opacity=0},this.handleMouseMove=function(t){if(""!==e.props.title){var o=e.getTooltipPosition(t),n=e.getTooltipOffset();e.tooltipEl.style.left=o.x+n.x+"px",e.tooltipEl.style.top=o.y+n.y+"px",e.tooltipEl.style.opacity=1}},this.handleMouseOut=function(){e.resetTooltip()},this.getTooltipPosition=function(t){var o=void 0,n=void 0,r=document.body.getBoundingClientRect(),i=e.container.getBoundingClientRect(),p=i.left-r.left,l=i.top-r.top;if(e.props.fixed){var s=e.componentEl.getBoundingClientRect(),a=s.left-p,u=s.top-l,c=e.componentEl.offsetWidth,f=e.componentEl.offsetHeight,d=0,m=0;switch(e.props.position){case"top":d=c/2,m=0;break;case"right":d=c,m=f/2;break;case"bottom":d=c/2,m=f;break;case"left":d=0,m=f/2}o=a+d+(window.scrollX||window.pageXOffset),n=u+m+(window.scrollY||window.pageYOffset)}else{var y=t.clientX,v=t.clientY;o=y-p+(window.scrollX||window.pageXOffset),n=v-l+(window.scrollY||window.pageYOffset)}return{x:o,y:n}},this.getTooltipOffset=function(){var t=e.tooltipEl.offsetWidth,o=e.tooltipEl.offsetHeight,n=0,r=0;switch(e.props.position){case"top":n=-(t/2),r=-(o+Number(e.props.space));break;case"right":n=Number(e.props.space),r=-(o/2);break;case"bottom":n=-(t/2),r=Number(e.props.space);break;case"left":n=-(t+Number(e.props.space)),r=-(o/2)}return{x:n,y:r}}}return i(t,e),p(t,[{key:"render",value:function(){return this.props.children}}],[{key:"propTypes",value:{container:a.default.PropTypes.any,children:a.default.PropTypes.node.isRequired,title:a.default.PropTypes.string.isRequired,position:a.default.PropTypes.oneOf(["left","top","right","bottom"]),fixed:a.default.PropTypes.bool,space:a.default.PropTypes.oneOfType([a.default.PropTypes.string,a.default.PropTypes.number])},enumerable:!0},{key:"defaultProps",value:{container:f?document.body:null,position:"top",fixed:!0,space:5},enumerable:!0}]),t}(a.default.Component);t.default=d,e.exports=t.default},function(t,o){t.exports=e},function(e,o){e.exports=t}])});
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),i=(n(10),n(1)),u=function(){var e=Object(a.useState)(10),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),u=Object(i.a)(r,2),s=u[0],l=u[1],d=function(){var e=document.getElementById("Background"),t=e.offsetWidth/10-2;c(e.offsetHeight/t*10+10)},f=function(){l(359===s?0:s+1)};return Object(a.useEffect)(function(){requestAnimationFrame(f)},[s]),Object(a.useEffect)(function(){window.addEventListener("resize",function(){d()}),d()},[]),o.a.createElement("div",{id:"Background"},Array.from({length:n}).map(function(e,t){return o.a.createElement("div",{className:"Cell",key:t,style:{transform:"rotate(".concat(t+s,"deg)")}})}))},s=(n(11),function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)(function(){document.documentElement.style.setProperty("--hue",n)},[n]),o.a.createElement("div",{id:"App"},o.a.createElement(u,null),o.a.createElement("div",{id:"Content"},o.a.createElement("input",{type:"range",min:0,max:359,value:n,onChange:function(e){return c(Number(e.target.value))}})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.9290d455.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),c=n.n(r),i=(n(10),n(1)),u=function(){var e=Object(o.useState)(10),t=Object(i.a)(e,2),n=t[0],r=t[1],c=function(){var e=document.getElementById("Background"),t=e.offsetWidth/10-2;r(e.offsetHeight/t*10+10)};return Object(o.useEffect)(function(){window.addEventListener("resize",function(){c()}),c()},[]),a.a.createElement("div",{id:"Background"},Array.from({length:n}).map(function(e,t){return a.a.createElement("div",{className:"Cell",key:t,style:{transform:"rotate(".concat(n/90*9*t,"deg)")}})}))},l=(n(11),function(){var e=Object(o.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)(function(){document.documentElement.style.setProperty("--hue",n)},[n]),a.a.createElement("div",{id:"App"},a.a.createElement(u,null),a.a.createElement("div",{id:"Content"},a.a.createElement("input",{type:"range",min:0,max:359,value:n,onChange:function(e){return r(Number(e.target.value))}})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.ca88190d.chunk.js.map
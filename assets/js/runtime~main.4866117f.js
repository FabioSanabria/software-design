(()=>{"use strict";var e,t,r,a,o,d={},f={};function n(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=d,n.c=f,e=[],n.O=(t,r,a,o)=>{if(!r){var d=1/0;for(b=0;b<e.length;b++){r=e[b][0],a=e[b][1],o=e[b][2];for(var f=!0,c=0;c<r.length;c++)(!1&o||d>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(f=!1,o<d&&(d=o));if(f){e.splice(b--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var d={};t=t||[null,r({}),r([]),r(r)];for(var f=2&a&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>d[t]=()=>e[t]));return d.default=()=>e,n.d(o,d),o},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"assets/js/"+({20:"b7c90adc",53:"935f2afb",85:"1f391b9e",95:"ec4c47df",195:"c4f5d8e4",203:"6d30fd8f",266:"c4f6f21a",324:"ddcaf161",344:"dabd9b33",414:"393be207",421:"23374ca6",453:"1ae8df76",514:"1be78505",594:"9209c96b",600:"6de5430e",748:"94545425",799:"a0542c43",817:"14eb3368",876:"03181aef",880:"18a925a0",883:"1d0d24d0",902:"1d411135",918:"17896441",995:"e9bb09a7"}[e]||e)+"."+{20:"8d100ca7",53:"173b1321",85:"a51e52d8",95:"65fdac4e",195:"3fc31b5a",203:"100b8b29",210:"6c578aef",266:"2bd87796",324:"5f315ac8",344:"3bb6cbed",414:"cf687753",421:"0abfa209",453:"e1a1bbe5",514:"e5fe3905",594:"c9d86b04",600:"487e34f8",748:"10995ef8",799:"c768e74d",817:"98f4f4fb",876:"e872ce67",880:"b1ef58a3",883:"d8495618",902:"c0d57714",918:"488379c2",972:"38d85c27",995:"c906d9ee"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="my-website:",n.l=(e,t,r,d)=>{if(a[e])a[e].push(t);else{var f,c;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){f=u;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",o+r),f.src=e),a[e]=[t];var l=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),c&&document.head.appendChild(f)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/software-design/",n.gca=function(e){return e={17896441:"918",94545425:"748",b7c90adc:"20","935f2afb":"53","1f391b9e":"85",ec4c47df:"95",c4f5d8e4:"195","6d30fd8f":"203",c4f6f21a:"266",ddcaf161:"324",dabd9b33:"344","393be207":"414","23374ca6":"421","1ae8df76":"453","1be78505":"514","9209c96b":"594","6de5430e":"600",a0542c43:"799","14eb3368":"817","03181aef":"876","18a925a0":"880","1d0d24d0":"883","1d411135":"902",e9bb09a7:"995"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var d=n.p+n.u(t),f=new Error;n.l(d,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+d+")",f.name="ChunkLoadError",f.type=o,f.request=d,a[1](f)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,d=r[0],f=r[1],c=r[2],i=0;if(d.some((t=>0!==e[t]))){for(a in f)n.o(f,a)&&(n.m[a]=f[a]);if(c)var b=c(n)}for(t&&t(r);i<d.length;i++)o=d[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(b)},r=self.webpackChunkmy_website=self.webpackChunkmy_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
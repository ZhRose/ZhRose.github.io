"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=a,f=c["".concat(p,".").concat(k)]||c[k]||d[k]||i;return n?l.createElement(f,r(r({ref:t},u),{},{components:n})):l.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},r="CSS",o={unversionedId:"\u524d\u7aef/CSS",id:"\u524d\u7aef/CSS",title:"CSS",description:"1.position\u5b9a\u4f4d",source:"@site/docs/\u524d\u7aef/CSS.md",sourceDirName:"\u524d\u7aef",slug:"/\u524d\u7aef/CSS",permalink:"/docs/\u524d\u7aef/CSS",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef",permalink:"/docs/category/\u524d\u7aef"},next:{title:"HTML",permalink:"/docs/\u524d\u7aef/HTML"}},p={},s=[{value:"1.position\u5b9a\u4f4d",id:"1position\u5b9a\u4f4d",level:3},{value:"\u5e38\u7528\u7684\u6709\u4e94\u79cd\u5f62\u5f0f\u5206\u522b\u662f static, relative,absolute,fixed,sticky,\u5f53\u8bbe\u7f6e\u5b9a\u4f4d\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528z-index\u6765\u8c03\u8282\u5143\u7d20\u7684\u5c42\u7ea7\u5173\u7cfb\uff0c\u5f53\u7136z-index\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u8d1f\u503c\uff0c\u8fd9\u65f6\u5019\u9875\u9762\u4e2d\u7684\u6587\u6863\u6d41\u5c06\u4f1a\u906e\u76d6\u5b9a\u4f4d\u7684\u5143\u7d20",id:"\u5e38\u7528\u7684\u6709\u4e94\u79cd\u5f62\u5f0f\u5206\u522b\u662f-static-relativeabsolutefixedsticky\u5f53\u8bbe\u7f6e\u5b9a\u4f4d\u540e\u53ef\u4ee5\u4f7f\u7528z-index\u6765\u8c03\u8282\u5143\u7d20\u7684\u5c42\u7ea7\u5173\u7cfb\u5f53\u7136z-index\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u8d1f\u503c\u8fd9\u65f6\u5019\u9875\u9762\u4e2d\u7684\u6587\u6863\u6d41\u5c06\u4f1a\u906e\u76d6\u5b9a\u4f4d\u7684\u5143\u7d20",level:5},{value:"2.\u5f39\u6027\u76d2",id:"2\u5f39\u6027\u76d2",level:3},{value:"\u901a\u8fc7display\u6765\u8bbe\u7f6e\uff0c\u6709\u4e09\u4e2a\u5c5e\u6027\u5206\u522b\u4e3anone,flex,inline-flex\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7flex-direction\u6765\u6307\u5b9a\u4e3b\u8f74\u548c\u6a2a\u8f74\u65b9\u5411\uff0c\u6c34\u5e73\u5219\u4e3arow,\u7ad6\u76f4\u4e3acolumn,\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0-reverse\u6765\u8bbe\u7f6e\u662f\u5426\u9700\u8981\u5012\u53d9\u6392\u5217\uff0cflex-warp\u662f\u7528\u6765\u6307\u5b9a\u6392\u5217\u662f\u5426\u9700\u8981\u6362\u884c\uff0c\u9ed8\u8ba4\u503c\u662fnowrap\uff0c\u8fde\u5199\u5f62\u5f0fflex-flow\u8bbe\u5b9a\u8f74\u5411\u548c\u662f\u5426\u6362\u884c",id:"\u901a\u8fc7display\u6765\u8bbe\u7f6e\u6709\u4e09\u4e2a\u5c5e\u6027\u5206\u522b\u4e3anoneflexinline-flex\u8fd8\u53ef\u4ee5\u901a\u8fc7flex-direction\u6765\u6307\u5b9a\u4e3b\u8f74\u548c\u6a2a\u8f74\u65b9\u5411\u6c34\u5e73\u5219\u4e3arow\u7ad6\u76f4\u4e3acolumn\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0-reverse\u6765\u8bbe\u7f6e\u662f\u5426\u9700\u8981\u5012\u53d9\u6392\u5217flex-warp\u662f\u7528\u6765\u6307\u5b9a\u6392\u5217\u662f\u5426\u9700\u8981\u6362\u884c\u9ed8\u8ba4\u503c\u662fnowrap\u8fde\u5199\u5f62\u5f0fflex-flow\u8bbe\u5b9a\u8f74\u5411\u548c\u662f\u5426\u6362\u884c",level:5},{value:"3.\u5916\u8fb9\u8ddd\u6298\u53e0\u95ee\u9898",id:"3\u5916\u8fb9\u8ddd\u6298\u53e0\u95ee\u9898",level:3},{value:"\u5f53\u4f7f\u7528\u76d2\u5b50\u6a21\u578b\u65f6\uff0c\u5982\u679c\u5144\u5f1f\u5143\u7d20\u4e4b\u95f4\u7684\u5916\u8fb9\u8ddd\u4e0d\u4e00\u6837\u65f6\u4f1a\u9ed8\u8ba4\u9009\u53d6\u8ddd\u79bb\u8f83\u5c0f\u7684\u503c\u4f5c\u4e3a\u4e8c\u8005\u7684\u5916\u8fb9\u8ddd\u7684\u5927\u5c0f\uff0c\u9632\u6b62\u5143\u7d20\u4e4b\u95f4\u7684\u8ddd\u79bb\u8fc7\u5927\u5bfc\u81f4\u7684\u6298\u53e0\u95ee\u9898\u3002",id:"\u5f53\u4f7f\u7528\u76d2\u5b50\u6a21\u578b\u65f6\u5982\u679c\u5144\u5f1f\u5143\u7d20\u4e4b\u95f4\u7684\u5916\u8fb9\u8ddd\u4e0d\u4e00\u6837\u65f6\u4f1a\u9ed8\u8ba4\u9009\u53d6\u8ddd\u79bb\u8f83\u5c0f\u7684\u503c\u4f5c\u4e3a\u4e8c\u8005\u7684\u5916\u8fb9\u8ddd\u7684\u5927\u5c0f\u9632\u6b62\u5143\u7d20\u4e4b\u95f4\u7684\u8ddd\u79bb\u8fc7\u5927\u5bfc\u81f4\u7684\u6298\u53e0\u95ee\u9898",level:5},{value:"\u5f53\u7236\u5b50\u5143\u7d20\u4e4b\u95f4\u7684\u5916\u8fb9\u636e\u91cd\u5408\u65f6\uff0c\u7ed9\u5b50\u5143\u7d20\u8bbe\u7f6e\u5916\u8fb9\u8ddd\u4f1a\u9ed8\u8ba4\u7684\u4f20\u9012\u7ed9\u7236\u5143\u7d20\uff0c\u5bfc\u81f4\u7236\u5143\u7d20\u4e5f\u53d1\u751f\u79fb\u52a8\uff0c\u89e3\u51b3\u65b9\u6cd5\u901a\u8fc7\u5728\u7236\u5143\u7d20\u6216\u5b50\u5143\u7d20\u4e4b\u95f4\u6dfb\u52a0\u5185\u5bb9\u6216\u5185\u8fb9\u8ddd\u6765\u9694\u5f00\u5916\u8fb9\u8ddd\u6216\u8005\u901a\u8fc7\u5b9a\u4f4d\u6216\u8005\u5f39\u6027\u76d2\u6765\u5b9e\u73b0\u4e00\u4e2a\u5782\u76f4\u5c45\u4e2d\u7684\u6548\u679c\u3002",id:"\u5f53\u7236\u5b50\u5143\u7d20\u4e4b\u95f4\u7684\u5916\u8fb9\u636e\u91cd\u5408\u65f6\u7ed9\u5b50\u5143\u7d20\u8bbe\u7f6e\u5916\u8fb9\u8ddd\u4f1a\u9ed8\u8ba4\u7684\u4f20\u9012\u7ed9\u7236\u5143\u7d20\u5bfc\u81f4\u7236\u5143\u7d20\u4e5f\u53d1\u751f\u79fb\u52a8\u89e3\u51b3\u65b9\u6cd5\u901a\u8fc7\u5728\u7236\u5143\u7d20\u6216\u5b50\u5143\u7d20\u4e4b\u95f4\u6dfb\u52a0\u5185\u5bb9\u6216\u5185\u8fb9\u8ddd\u6765\u9694\u5f00\u5916\u8fb9\u8ddd\u6216\u8005\u901a\u8fc7\u5b9a\u4f4d\u6216\u8005\u5f39\u6027\u76d2\u6765\u5b9e\u73b0\u4e00\u4e2a\u5782\u76f4\u5c45\u4e2d\u7684\u6548\u679c",level:5},{value:"4.\u5c45\u4e2d\u65b9\u5f0f\u603b\u7ed3",id:"4\u5c45\u4e2d\u65b9\u5f0f\u603b\u7ed3",level:3},{value:"1.\u76d2\u5b50\u6a21\u578b\uff1a\u76d2\u5b50\u6a21\u578b\u53ef\u4ee5\u901a\u8fc7  \u6c34\u5e73\u5916\u8fb9\u8ddd+\u5143\u7d20\u5bbd\u5ea6=\u5916\u90e8\u5bb9\u5668\u5bbd\u5ea6\u516c\u5f0f\uff0c\u6765\u5b9e\u73b0\u6c34\u5e73\u5c45\u4e2d\uff0c\u7f3a\u70b9\u662f\u5782\u76f4\u65b9\u5411\u4f1a\u53d1\u751f\u5916\u8fb9\u8ddd\u6298\u53e0\u95ee\u9898\u5bfc\u81f4\u5782\u76f4\u5c45\u4e2d\u65e0\u6cd5\u5b9e\u73b0",id:"1\u76d2\u5b50\u6a21\u578b\u76d2\u5b50\u6a21\u578b\u53ef\u4ee5\u901a\u8fc7--\u6c34\u5e73\u5916\u8fb9\u8ddd\u5143\u7d20\u5bbd\u5ea6\u5916\u90e8\u5bb9\u5668\u5bbd\u5ea6\u516c\u5f0f\u6765\u5b9e\u73b0\u6c34\u5e73\u5c45\u4e2d\u7f3a\u70b9\u662f\u5782\u76f4\u65b9\u5411\u4f1a\u53d1\u751f\u5916\u8fb9\u8ddd\u6298\u53e0\u95ee\u9898\u5bfc\u81f4\u5782\u76f4\u5c45\u4e2d\u65e0\u6cd5\u5b9e\u73b0",level:5},{value:"2.\u5b9a\u4f4d\u5b9e\u73b0\u5c45\u4e2d\uff1a\u901a\u8fc7\u7ed9\u5b50\u5143\u7d20\u8bbe\u7f6e\u7edd\u5bf9\u5b9a\u4f4d\uff0c\u7ed9\u7236\u5143\u7d20\u8bbe\u7f6e\u76f8\u5bf9\u5b9a\u4f4d\uff0c\u7136\u540e\u518d\u7ed9\u5b50\u5143\u7d20\u7684\u504f\u79fb\u91cf\u5168\u90e8\u8bbe\u7f6e\u4e3a\u2018 0 \u2019\u4ee5\u540e\uff0c\u518d\u901a\u8fc7\u7ed9margin\u8bbe\u7f6eauto\u5c5e\u6027\u5373\u53ef,\u7f3a\u70b9\u662f\u9700\u8981\u627e\u5230\u7236\u5143\u7d20\u5e76\u8bbe\u7f6e\u76f8\u5bf9\u5b9a\u4f4d\u4e14\u4ee3\u7801\u6bd4\u8f83\u5197\u957f",id:"2\u5b9a\u4f4d\u5b9e\u73b0\u5c45\u4e2d\u901a\u8fc7\u7ed9\u5b50\u5143\u7d20\u8bbe\u7f6e\u7edd\u5bf9\u5b9a\u4f4d\u7ed9\u7236\u5143\u7d20\u8bbe\u7f6e\u76f8\u5bf9\u5b9a\u4f4d\u7136\u540e\u518d\u7ed9\u5b50\u5143\u7d20\u7684\u504f\u79fb\u91cf\u5168\u90e8\u8bbe\u7f6e\u4e3a-0-\u4ee5\u540e\u518d\u901a\u8fc7\u7ed9margin\u8bbe\u7f6eauto\u5c5e\u6027\u5373\u53ef\u7f3a\u70b9\u662f\u9700\u8981\u627e\u5230\u7236\u5143\u7d20\u5e76\u8bbe\u7f6e\u76f8\u5bf9\u5b9a\u4f4d\u4e14\u4ee3\u7801\u6bd4\u8f83\u5197\u957f",level:5},{value:"3.\u901a\u8fc7\u5c06\u5916\u90e8\u5bb9\u5668\u901a\u8fc7display=tabel-cell\u53d8\u6210\u8868\u683c\uff0c\u7136\u540e\u901a\u8fc7vertical-align \u548cmargin=0\uff0cauto\u6765\u8fbe\u5230\u6c34\u5e73\u7ad6\u76f4\u5c45\u4e2d\u6216\u8005\u901a\u8fc7\u5c06\u5b50\u5143\u7d20\u8bbe\u7f6e\u4e3ainlin-block\u7136\u540e\u518d\u8bbe\u7f6etext-align\u4e5f\u80fd\u8fbe\u5230\u4e00\u79cd\u5c45\u4e2d\u7684\u6548\u679c,\u7f3a\u70b9\u662f\u5916\u90e8\u5bb9\u5668\u4e0d\u592a\u7075\u6d3b\u65e0\u6cd5\u4f7f\u7528margin\u6765\u8fbe\u5230\u5c45\u4e2d",id:"3\u901a\u8fc7\u5c06\u5916\u90e8\u5bb9\u5668\u901a\u8fc7displaytabel-cell\u53d8\u6210\u8868\u683c\u7136\u540e\u901a\u8fc7vertical-align-\u548cmargin0auto\u6765\u8fbe\u5230\u6c34\u5e73\u7ad6\u76f4\u5c45\u4e2d\u6216\u8005\u901a\u8fc7\u5c06\u5b50\u5143\u7d20\u8bbe\u7f6e\u4e3ainlin-block\u7136\u540e\u518d\u8bbe\u7f6etext-align\u4e5f\u80fd\u8fbe\u5230\u4e00\u79cd\u5c45\u4e2d\u7684\u6548\u679c\u7f3a\u70b9\u662f\u5916\u90e8\u5bb9\u5668\u4e0d\u592a\u7075\u6d3b\u65e0\u6cd5\u4f7f\u7528margin\u6765\u8fbe\u5230\u5c45\u4e2d",level:5},{value:"4.\u5f39\u6027\u76d2\u5b9e\u73b0\u5c45\u4e2d\u7684\u65b9\u5f0f\u975e\u5e38\u7b80\u5355\uff0c\u5206\u522b\u901a\u8fc7\u4e3b\u8f74\u548c\u4fa7\u8f74\u5b9e\u73b0\u5c45\u4e2d\u7684\u65b9\u5f0f\u5373\u53ef",id:"4\u5f39\u6027\u76d2\u5b9e\u73b0\u5c45\u4e2d\u7684\u65b9\u5f0f\u975e\u5e38\u7b80\u5355\u5206\u522b\u901a\u8fc7\u4e3b\u8f74\u548c\u4fa7\u8f74\u5b9e\u73b0\u5c45\u4e2d\u7684\u65b9\u5f0f\u5373\u53ef",level:5},{value:"5.\u5b9a\u4f4d\u7ed3\u5408\u5e73\u79fbtranslateX\u548ctranslateY\u6765\u5b9e\u73b0\u9875\u9762\u5c45\u4e2d\u7684\u6548\u679c,translate\u4e0d\u4f1a\u4f7f\u5143\u7d20\u8131\u79bb\u6587\u6863\u6d41\uff0c\u53ef\u4ee5\u8bbe\u7f6epx\u6216\u8005\u767e\u5206\u6570\u7684\u5355\u4f4d\uff0c\u767e\u5206\u6570\u76f8\u5bf9\u7684\u662f\u81ea\u8eab\u5927\u5c0f",id:"5\u5b9a\u4f4d\u7ed3\u5408\u5e73\u79fbtranslatex\u548ctranslatey\u6765\u5b9e\u73b0\u9875\u9762\u5c45\u4e2d\u7684\u6548\u679ctranslate\u4e0d\u4f1a\u4f7f\u5143\u7d20\u8131\u79bb\u6587\u6863\u6d41\u53ef\u4ee5\u8bbe\u7f6epx\u6216\u8005\u767e\u5206\u6570\u7684\u5355\u4f4d\u767e\u5206\u6570\u76f8\u5bf9\u7684\u662f\u81ea\u8eab\u5927\u5c0f",level:5},{value:"\u9009\u62e9\u5668",id:"\u9009\u62e9\u5668",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:5},{value:"\u5143\u7d20\u663e\u793a\u6a21\u5f0f",id:"\u5143\u7d20\u663e\u793a\u6a21\u5f0f",level:5},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",level:6},{value:"\u76d2\u5b50\u6a21\u578b",id:"\u76d2\u5b50\u6a21\u578b",level:5}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"css"},"CSS"),(0,a.kt)("h3",{id:"1position\u5b9a\u4f4d"},"1.position\u5b9a\u4f4d"),(0,a.kt)("h5",{id:"\u5e38\u7528\u7684\u6709\u4e94\u79cd\u5f62\u5f0f\u5206\u522b\u662f-static-relativeabsolutefixedsticky\u5f53\u8bbe\u7f6e\u5b9a\u4f4d\u540e\u53ef\u4ee5\u4f7f\u7528z-index\u6765\u8c03\u8282\u5143\u7d20\u7684\u5c42\u7ea7\u5173\u7cfb\u5f53\u7136z-index\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u8d1f\u503c\u8fd9\u65f6\u5019\u9875\u9762\u4e2d\u7684\u6587\u6863\u6d41\u5c06\u4f1a\u906e\u76d6\u5b9a\u4f4d\u7684\u5143\u7d20"},"\u5e38\u7528\u7684\u6709\u4e94\u79cd\u5f62\u5f0f\u5206\u522b\u662f static, relative,absolute,fixed,sticky,\u5f53\u8bbe\u7f6e\u5b9a\u4f4d\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528z-index\u6765\u8c03\u8282\u5143\u7d20\u7684\u5c42\u7ea7\u5173\u7cfb\uff0c\u5f53\u7136z-index\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u8d1f\u503c\uff0c\u8fd9\u65f6\u5019\u9875\u9762\u4e2d\u7684\u6587\u6863\u6d41\u5c06\u4f1a\u906e\u76d6\u5b9a\u4f4d\u7684\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1.static: \u672a\u8bbe\u7f6e\u5b9a\u4f4d\u6216\u8005\u5b9a\u4f4d\u7684\u521d\u59cb\u503c\n2.relative: \u76f8\u5bf9\u5b9a\u4f4d\uff0c\u5b9a\u4e49\u540e\u4e0d\u4f1a\u4f7f\u5143\u7d20\u8131\u79bb\u6587\u6863\u6d41\uff0c\u8bbe\u7f6e\u504f\u79fb\u91cf\uff08offset\uff09\u540e\uff0c\u5f53\u524d\u4f4d\u7f6e\u4ecd\u7136\u4e3a\u8be5\u5143\u7d20\u6240\u5360\u7528\u7684\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u540e\u4f18\u5148\u7ea7\u4e5f\u4f1a\u4e0a\u5347\n3.absolute\uff1a\u7edd\u5bf9\u5b9a\u4f4d\uff0c\u5b9a\u4e49\u540e\u4f1a\u4f7f\u5143\u7d20\u8131\u79bb\u6587\u6863\u6d41\uff0c\u5982\u679c\u7956\u5148\u5143\u7d20\u4e2d\u672a\u8bbe\u7f6e\u76f8\u5bf9\u5b9a\u4f4d\uff0c\u5219\u4f1a\u9ed8\u8ba4\u7684\u548chtml\u5916\u5c42\u7684\u521d\u59cb\u5185\u5bb9\u5757\u5bf9\u9f50\u4f4d\u7f6e\uff0c\u5982\u679c\u7956\u5148\u8bbe\u7f6e\u5b9a\u4f4d\u5219\u4f1a\u4f18\u5148\u548c\u7956\u5148\u4e2d\u6700\u8fd1\u5b9a\u4f4d\u7684\u5143\u7d20\u5bf9\u9f50\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u540e\u4f18\u5148\u7ea7\u4f1a\u4e0a\u5347\n4.fixed\uff1a\u56fa\u5b9a\u5b9a\u4f4d\uff0c\u8bbe\u7f6e\u540e\u56fe\u7247\u5728\u6587\u7ae0\u4e2d\u7684\u4f4d\u7f6e\u4e0d\u4f1a\u53d1\u751f\u6539\u53d8\uff0c\u548cabsolute\u4e00\u6837\u4e5f\u4f1a\u8131\u79bb\u6587\u6863\u6d41\uff0c\u5c42\u7ea7\u4e5f\u4f1a\u63d0\u5347\n5.sticky :\u7c98\u6ede\u5b9a\u4f4d\uff0c\u548crelative\u7c7b\u4f3c\uff0c\u53c2\u7167\u7269\u4e3a\u7956\u5148\u5143\u7d20\u4e2d\u6700\u8fd1\u7684\u6709\u6eda\u52a8\u6761\u7684\u5143\u7d20,\u8be5\u5143\u7d20\u4e0d\u4f1a\u5728\u6307\u5b9a\u4f4d\u7f6e\u5916\u7684\u5730\u65b9\u53d1\u751f\u79fb\u52a8\n")),(0,a.kt)("h3",{id:"2\u5f39\u6027\u76d2"},"2.\u5f39\u6027\u76d2"),(0,a.kt)("h5",{id:"\u901a\u8fc7display\u6765\u8bbe\u7f6e\u6709\u4e09\u4e2a\u5c5e\u6027\u5206\u522b\u4e3anoneflexinline-flex\u8fd8\u53ef\u4ee5\u901a\u8fc7flex-direction\u6765\u6307\u5b9a\u4e3b\u8f74\u548c\u6a2a\u8f74\u65b9\u5411\u6c34\u5e73\u5219\u4e3arow\u7ad6\u76f4\u4e3acolumn\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0-reverse\u6765\u8bbe\u7f6e\u662f\u5426\u9700\u8981\u5012\u53d9\u6392\u5217flex-warp\u662f\u7528\u6765\u6307\u5b9a\u6392\u5217\u662f\u5426\u9700\u8981\u6362\u884c\u9ed8\u8ba4\u503c\u662fnowrap\u8fde\u5199\u5f62\u5f0fflex-flow\u8bbe\u5b9a\u8f74\u5411\u548c\u662f\u5426\u6362\u884c"},"\u901a\u8fc7display\u6765\u8bbe\u7f6e\uff0c\u6709\u4e09\u4e2a\u5c5e\u6027\u5206\u522b\u4e3anone,flex,inline-flex\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7flex-direction\u6765\u6307\u5b9a\u4e3b\u8f74\u548c\u6a2a\u8f74\u65b9\u5411\uff0c\u6c34\u5e73\u5219\u4e3arow,\u7ad6\u76f4\u4e3acolumn,\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0-reverse\u6765\u8bbe\u7f6e\u662f\u5426\u9700\u8981\u5012\u53d9\u6392\u5217\uff0cflex-warp\u662f\u7528\u6765\u6307\u5b9a\u6392\u5217\u662f\u5426\u9700\u8981\u6362\u884c\uff0c\u9ed8\u8ba4\u503c\u662fnowrap\uff0c\u8fde\u5199\u5f62\u5f0fflex-flow\u8bbe\u5b9a\u8f74\u5411\u548c\u662f\u5426\u6362\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"none:\u672a\u8bbe\u7f6e\u6216\u9ed8\u8ba4\u521d\u59cb\u503c\nflex\uff1a\u8bbe\u7f6e\u4e3a\u5757\u7ea7\u5f39\u6027\u76d2\u5b50\uff0c\u540e\u767d\u4f60\u7684\u5bb9\u5668\u4f1a\u81ea\u52a8\u6309\u7167\u5757\u7ea7\u5143\u7d20\u6027\u8d28\u6392\u5217\ninline-flex :\u8bbe\u7f6e\u4e3a\u884c\u5185\u5757\u5f39\u6027\u5bb9\u5668\uff0c\u540e\u9762\u7684\u5bb9\u5668\u8fd8\u4f1a\u9ed8\u8ba4\u6309\u7167\u540c\u884c\u6392\u5217\n\nflex-basis  :\u5bb9\u5668\u57fa\u7840\u503c\u5927\u5c0f\u9ed8\u8ba4\u503cauto,\u4e5f\u53ef\u4ee5\u6839\u636ebasis\u503c\u7ed9\u4e3b\u8f74\u65b9\u5411\u5143\u7d20\u8bbe\u7f6e\u5927\u5c0f\nflex-shrink \u6307\u7684\u662f\u6536\u7f29\u7cfb\u6570\uff0c\u9ed8\u8ba4\u503c\u662f1\uff0c\u8ba1\u7b97\u7684\u662f\u76f8\u5bf9\u6bd4\u4f8b\nflex-grow\u662f\u751f\u957f\u7cfb\u6570\uff0c\u9ed8\u8ba4\u503c\u662f1\uff0c\u8ba1\u7b97\u7684\u662f\u76f8\u5bf9\u6bd4\nflex:\u53ef\u4ee5\u540c\u65f6\u8bbe\u7f6eshrink,grow,basis\u503c,\u8bbe\u7f6e\u4e3aauto\u81ea\u52a8\u5206\u914d\u7a7a\u95f4\n\njustify-content  \u6307\u7684\u662f\u4e3b\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f\nalign-items align-content\u8bbe  \u6307\u7684\u662f\u4fa7\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f\n\u4e0a\u8ff0\u4e24\u79cd\u5bf9\u9f50\u65b9\u5f0f\u90fd\u6709\u4e0b\u8ff0\u9009\u9879\n            start \u6cbf\u7740\u5f00\u59cb\u4f4d\u7f6e\u6392\u5217\n            end  \u4e3b\u8f74\u987a\u5e8f\u6392\u5217\uff0c\u6700\u540e\u5143\u7d20\u9760\u8fb9\u6846\n            center  \u6c34\u5e73\uff08\u7ad6\u76f4\uff09\u5c45\u4e2d\u6392\u5217\n             space-around  \u5c06\u7a7a\u767d\u5206\u7ed9\u5143\u7d20\u5468\u56f4\uff0c\u5916\u8fb9\u53ef\u80fd\u7a7a\u95f4\u4e0d\u4e00\u81f4\n             space-between  \u5c06\u7a7a\u8868\u5206\u7ed9\u5143\u7d20\u4e2d\u95f4\n             space-evently  \u5c06\u7a7a\u767d\u5143\u7d20\u5206\u7ed9\u5e73\u5747\u5206\u7ed9\u5143\u7d20\u7684\u5468\u56f4\n\n\n\n")),(0,a.kt)("h3",{id:"3\u5916\u8fb9\u8ddd\u6298\u53e0\u95ee\u9898"},"3.\u5916\u8fb9\u8ddd\u6298\u53e0\u95ee\u9898"),(0,a.kt)("h5",{id:"\u5f53\u4f7f\u7528\u76d2\u5b50\u6a21\u578b\u65f6\u5982\u679c\u5144\u5f1f\u5143\u7d20\u4e4b\u95f4\u7684\u5916\u8fb9\u8ddd\u4e0d\u4e00\u6837\u65f6\u4f1a\u9ed8\u8ba4\u9009\u53d6\u8ddd\u79bb\u8f83\u5c0f\u7684\u503c\u4f5c\u4e3a\u4e8c\u8005\u7684\u5916\u8fb9\u8ddd\u7684\u5927\u5c0f\u9632\u6b62\u5143\u7d20\u4e4b\u95f4\u7684\u8ddd\u79bb\u8fc7\u5927\u5bfc\u81f4\u7684\u6298\u53e0\u95ee\u9898"},"\u5f53\u4f7f\u7528\u76d2\u5b50\u6a21\u578b\u65f6\uff0c\u5982\u679c\u5144\u5f1f\u5143\u7d20\u4e4b\u95f4\u7684\u5916\u8fb9\u8ddd\u4e0d\u4e00\u6837\u65f6\u4f1a\u9ed8\u8ba4\u9009\u53d6\u8ddd\u79bb\u8f83\u5c0f\u7684\u503c\u4f5c\u4e3a\u4e8c\u8005\u7684\u5916\u8fb9\u8ddd\u7684\u5927\u5c0f\uff0c\u9632\u6b62\u5143\u7d20\u4e4b\u95f4\u7684\u8ddd\u79bb\u8fc7\u5927\u5bfc\u81f4\u7684\u6298\u53e0\u95ee\u9898\u3002"),(0,a.kt)("h5",{id:"\u5f53\u7236\u5b50\u5143\u7d20\u4e4b\u95f4\u7684\u5916\u8fb9\u636e\u91cd\u5408\u65f6\u7ed9\u5b50\u5143\u7d20\u8bbe\u7f6e\u5916\u8fb9\u8ddd\u4f1a\u9ed8\u8ba4\u7684\u4f20\u9012\u7ed9\u7236\u5143\u7d20\u5bfc\u81f4\u7236\u5143\u7d20\u4e5f\u53d1\u751f\u79fb\u52a8\u89e3\u51b3\u65b9\u6cd5\u901a\u8fc7\u5728\u7236\u5143\u7d20\u6216\u5b50\u5143\u7d20\u4e4b\u95f4\u6dfb\u52a0\u5185\u5bb9\u6216\u5185\u8fb9\u8ddd\u6765\u9694\u5f00\u5916\u8fb9\u8ddd\u6216\u8005\u901a\u8fc7\u5b9a\u4f4d\u6216\u8005\u5f39\u6027\u76d2\u6765\u5b9e\u73b0\u4e00\u4e2a\u5782\u76f4\u5c45\u4e2d\u7684\u6548\u679c"},"\u5f53\u7236\u5b50\u5143\u7d20\u4e4b\u95f4\u7684\u5916\u8fb9\u636e\u91cd\u5408\u65f6\uff0c\u7ed9\u5b50\u5143\u7d20\u8bbe\u7f6e\u5916\u8fb9\u8ddd\u4f1a\u9ed8\u8ba4\u7684\u4f20\u9012\u7ed9\u7236\u5143\u7d20\uff0c\u5bfc\u81f4\u7236\u5143\u7d20\u4e5f\u53d1\u751f\u79fb\u52a8\uff0c\u89e3\u51b3\u65b9\u6cd5\u901a\u8fc7\u5728\u7236\u5143\u7d20\u6216\u5b50\u5143\u7d20\u4e4b\u95f4\u6dfb\u52a0\u5185\u5bb9\u6216\u5185\u8fb9\u8ddd\u6765\u9694\u5f00\u5916\u8fb9\u8ddd\u6216\u8005\u901a\u8fc7\u5b9a\u4f4d\u6216\u8005\u5f39\u6027\u76d2\u6765\u5b9e\u73b0\u4e00\u4e2a\u5782\u76f4\u5c45\u4e2d\u7684\u6548\u679c\u3002"),(0,a.kt)("h3",{id:"4\u5c45\u4e2d\u65b9\u5f0f\u603b\u7ed3"},"4.\u5c45\u4e2d\u65b9\u5f0f\u603b\u7ed3"),(0,a.kt)("h5",{id:"1\u76d2\u5b50\u6a21\u578b\u76d2\u5b50\u6a21\u578b\u53ef\u4ee5\u901a\u8fc7--\u6c34\u5e73\u5916\u8fb9\u8ddd\u5143\u7d20\u5bbd\u5ea6\u5916\u90e8\u5bb9\u5668\u5bbd\u5ea6\u516c\u5f0f\u6765\u5b9e\u73b0\u6c34\u5e73\u5c45\u4e2d\u7f3a\u70b9\u662f\u5782\u76f4\u65b9\u5411\u4f1a\u53d1\u751f\u5916\u8fb9\u8ddd\u6298\u53e0\u95ee\u9898\u5bfc\u81f4\u5782\u76f4\u5c45\u4e2d\u65e0\u6cd5\u5b9e\u73b0"},"1.\u76d2\u5b50\u6a21\u578b\uff1a\u76d2\u5b50\u6a21\u578b\u53ef\u4ee5\u901a\u8fc7  \u6c34\u5e73\u5916\u8fb9\u8ddd+\u5143\u7d20\u5bbd\u5ea6=\u5916\u90e8\u5bb9\u5668\u5bbd\u5ea6\u516c\u5f0f\uff0c\u6765\u5b9e\u73b0\u6c34\u5e73\u5c45\u4e2d\uff0c\u7f3a\u70b9\u662f\u5782\u76f4\u65b9\u5411\u4f1a\u53d1\u751f\u5916\u8fb9\u8ddd\u6298\u53e0\u95ee\u9898\u5bfc\u81f4\u5782\u76f4\u5c45\u4e2d\u65e0\u6cd5\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"}," .box1{\n            height: 100px;\n            width: 100px;\n            background: #bfa;\n            margin: 0,auto;\n        }\n")),(0,a.kt)("h5",{id:"2\u5b9a\u4f4d\u5b9e\u73b0\u5c45\u4e2d\u901a\u8fc7\u7ed9\u5b50\u5143\u7d20\u8bbe\u7f6e\u7edd\u5bf9\u5b9a\u4f4d\u7ed9\u7236\u5143\u7d20\u8bbe\u7f6e\u76f8\u5bf9\u5b9a\u4f4d\u7136\u540e\u518d\u7ed9\u5b50\u5143\u7d20\u7684\u504f\u79fb\u91cf\u5168\u90e8\u8bbe\u7f6e\u4e3a-0-\u4ee5\u540e\u518d\u901a\u8fc7\u7ed9margin\u8bbe\u7f6eauto\u5c5e\u6027\u5373\u53ef\u7f3a\u70b9\u662f\u9700\u8981\u627e\u5230\u7236\u5143\u7d20\u5e76\u8bbe\u7f6e\u76f8\u5bf9\u5b9a\u4f4d\u4e14\u4ee3\u7801\u6bd4\u8f83\u5197\u957f"},"2.\u5b9a\u4f4d\u5b9e\u73b0\u5c45\u4e2d\uff1a\u901a\u8fc7\u7ed9\u5b50\u5143\u7d20\u8bbe\u7f6e\u7edd\u5bf9\u5b9a\u4f4d\uff0c\u7ed9\u7236\u5143\u7d20\u8bbe\u7f6e\u76f8\u5bf9\u5b9a\u4f4d\uff0c\u7136\u540e\u518d\u7ed9\u5b50\u5143\u7d20\u7684\u504f\u79fb\u91cf\u5168\u90e8\u8bbe\u7f6e\u4e3a\u2018 0 \u2019\u4ee5\u540e\uff0c\u518d\u901a\u8fc7\u7ed9margin\u8bbe\u7f6eauto\u5c5e\u6027\u5373\u53ef,\u7f3a\u70b9\u662f\u9700\u8981\u627e\u5230\u7236\u5143\u7d20\u5e76\u8bbe\u7f6e\u76f8\u5bf9\u5b9a\u4f4d\u4e14\u4ee3\u7801\u6bd4\u8f83\u5197\u957f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"}," .box1{\n           position: absolute;\n           top: 0;\n           bottom: 0;\n           left: 0;\n           right: 0;\n           margin: auto\uff1b\n        }\n")),(0,a.kt)("h5",{id:"3\u901a\u8fc7\u5c06\u5916\u90e8\u5bb9\u5668\u901a\u8fc7displaytabel-cell\u53d8\u6210\u8868\u683c\u7136\u540e\u901a\u8fc7vertical-align-\u548cmargin0auto\u6765\u8fbe\u5230\u6c34\u5e73\u7ad6\u76f4\u5c45\u4e2d\u6216\u8005\u901a\u8fc7\u5c06\u5b50\u5143\u7d20\u8bbe\u7f6e\u4e3ainlin-block\u7136\u540e\u518d\u8bbe\u7f6etext-align\u4e5f\u80fd\u8fbe\u5230\u4e00\u79cd\u5c45\u4e2d\u7684\u6548\u679c\u7f3a\u70b9\u662f\u5916\u90e8\u5bb9\u5668\u4e0d\u592a\u7075\u6d3b\u65e0\u6cd5\u4f7f\u7528margin\u6765\u8fbe\u5230\u5c45\u4e2d"},"3.\u901a\u8fc7\u5c06\u5916\u90e8\u5bb9\u5668\u901a\u8fc7display=tabel-cell\u53d8\u6210\u8868\u683c\uff0c\u7136\u540e\u901a\u8fc7vertical-align \u548cmargin=0\uff0cauto\u6765\u8fbe\u5230\u6c34\u5e73\u7ad6\u76f4\u5c45\u4e2d\u6216\u8005\u901a\u8fc7\u5c06\u5b50\u5143\u7d20\u8bbe\u7f6e\u4e3ainlin-block\u7136\u540e\u518d\u8bbe\u7f6etext-align\u4e5f\u80fd\u8fbe\u5230\u4e00\u79cd\u5c45\u4e2d\u7684\u6548\u679c,\u7f3a\u70b9\u662f\u5916\u90e8\u5bb9\u5668\u4e0d\u592a\u7075\u6d3b\u65e0\u6cd5\u4f7f\u7528margin\u6765\u8fbe\u5230\u5c45\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"}," .box4{\n            display: table-cell; \n            vertical-align: middle;\n            margin: 0,auto;//\u4e8c\u8005\u9009\u5176\u4e00\n        }\n        .box5{\n            display: inline-block;\n            text-align: center;\n        }\n")),(0,a.kt)("h5",{id:"4\u5f39\u6027\u76d2\u5b9e\u73b0\u5c45\u4e2d\u7684\u65b9\u5f0f\u975e\u5e38\u7b80\u5355\u5206\u522b\u901a\u8fc7\u4e3b\u8f74\u548c\u4fa7\u8f74\u5b9e\u73b0\u5c45\u4e2d\u7684\u65b9\u5f0f\u5373\u53ef"},"4.\u5f39\u6027\u76d2\u5b9e\u73b0\u5c45\u4e2d\u7684\u65b9\u5f0f\u975e\u5e38\u7b80\u5355\uff0c\u5206\u522b\u901a\u8fc7\u4e3b\u8f74\u548c\u4fa7\u8f74\u5b9e\u73b0\u5c45\u4e2d\u7684\u65b9\u5f0f\u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},".box6{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n")),(0,a.kt)("h5",{id:"5\u5b9a\u4f4d\u7ed3\u5408\u5e73\u79fbtranslatex\u548ctranslatey\u6765\u5b9e\u73b0\u9875\u9762\u5c45\u4e2d\u7684\u6548\u679ctranslate\u4e0d\u4f1a\u4f7f\u5143\u7d20\u8131\u79bb\u6587\u6863\u6d41\u53ef\u4ee5\u8bbe\u7f6epx\u6216\u8005\u767e\u5206\u6570\u7684\u5355\u4f4d\u767e\u5206\u6570\u76f8\u5bf9\u7684\u662f\u81ea\u8eab\u5927\u5c0f"},"5.\u5b9a\u4f4d\u7ed3\u5408\u5e73\u79fbtranslateX\u548ctranslateY\u6765\u5b9e\u73b0\u9875\u9762\u5c45\u4e2d\u7684\u6548\u679c,translate\u4e0d\u4f1a\u4f7f\u5143\u7d20\u8131\u79bb\u6587\u6863\u6d41\uff0c\u53ef\u4ee5\u8bbe\u7f6epx\u6216\u8005\u767e\u5206\u6570\u7684\u5355\u4f4d\uff0c\u767e\u5206\u6570\u76f8\u5bf9\u7684\u662f\u81ea\u8eab\u5927\u5c0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},".box7{\n        width:300px;\n        height:300px;\n        position:absolute;\n        top:50%\n        left:50%\n        transform:translateX(-50%);\n        transform:translateY(-50%0);\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f15\u5165\u65b9\u5f0f\n\u5185\u5d4c\u5f0f\uff1acss\u76f4\u63a5\u5199\u5728style\u6807\u7b7e\u4e2d\n\u5916\u8054\u5f0f\uff1a\u5199\u5728\u5355\u72ec\u7684css\u6587\u4ef6\u4e2d\uff0c\u901a\u8fc7link\u6807\u7b7e\u5f15\u5165\n\u884c\u5185\u5f0f\uff1a\u76f4\u63a5\u5199\u5728HTML\u6807\u7b7e\u4e2d\uff0c\u9700\u8981\u52a0style\u5f15\u5165")),(0,a.kt)("h3",{id:"\u9009\u62e9\u5668"},"\u9009\u62e9\u5668"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6807\u7b7e\u9009\u62e9\u5668\uff1a\u6807\u7b7e\u540d+\uff5bcss\u5185\u5bb9\uff5d\uff0c\u540c\u540d\u6807\u7b7e\u4e5f\u4f1a\u663e\u793a\u8be5\u5185\u5bb9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7c7b\u9009\u62e9\u5668\uff1a.\u7c7b\u540d{}\uff0c\u5728\u5bf9\u5e94\u7684\u6807\u7b7e\u4e2d\u52a0class\u5c5e\u6027\uff0c\u901a\u8fc7\u7c7b\u540d\u627e\u5230\u8be5\u6807\u7b7e\uff0c\u7c7b\u540d\u53ea\u80fd\u7531\u6570\u5b57\u5b57\u6bcd\u4e0b\u6ed1\u7ebf\u4e2d\u5212\u7ebf\u7ec4\u6210\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u4e2d\u5212\u7ebf\u5f00\u5934\uff0c\u4e00\u4e2a\u6807\u7b7e\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u7c7b\u540d\uff0c\u9700\u8981\u7a7a\u683c\u9694\u5f00\u5373\u53ef")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"id\u9009\u62e9\u5668\uff1a#id\u540d{}\uff0c\u6240\u6709\u6807\u7b7e\u90fd\u6709id\u5c5e\u6027\uff0cid\u4e00\u4e2a\u754c\u9762\u53ea\u80fd\u6709\u4e00\u4e2a\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u901a\u914d\u7b26\u9009\u62e9\u5668\uff1a*{}\uff0c\u5c06\u6240\u6709\u6807\u7b7e\u8bbe\u7f6e\u6837\u5f0f\uff0c\u4e00\u822c\u7528\u4e8e\u9664\u53bb\u5916\u95f4\u8dddmargin\u548c\u5185\u95f4\u8dddpadding\n\u6587\u5b57\u5b57\u4f53\u548c\u6587\u672c\u6837\u5f0f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u540e\u4ee3\u9009\u62e9\u5668\uff1a\u6807\u7b7e\u540d\u52a0\u7a7a\u683c\u52a0\u5b50\u4ee3\u6807\u7b7e\u540d\uff0c\u6837\u5f0f\u9ed8\u8ba4\u4f1a\u7ed9\u540e\u4ee3\u90fd\u6dfb\u4e0a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u200b    \u5b50\u4ee3\u9009\u62e9\u5668\uff1a\u6807\u7b7e\u540d>\u6807\u7b7e\u540d{}\uff0c\u5b50\u4ee3\u53ea\u5305\u62ec\u513f\u5b50")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u200b    \u5e76\u96c6\u9009\u62e9\u5668\uff1a\u9009\u62e9\u56681\uff0c\u9009\u62e9\u56682{}\uff0c\u540c\u65f6\u63a7\u5236\u591a\u4e2a\u6807\u7b7e\u8bbe\u7f6e\u6837\u5f0f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u200b    \u590d\u5408\u9009\u62e9\u5668\uff1a\u9009\u62e9\u56681\u9009\u62e9\u56682{}\uff0c\u7d27\u6328\u7740")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u200b    \u5144\u5f1f\u9009\u62e9\u5668\uff1a\u5144+\u5f1f\uff5b\uff5d\u7d27\u968f\u5176\u540e\u7684\u53d8\u989c\u8272\uff0c\u5144\uff5e\u5f1f\uff5b\uff5d\u9009\u4e2d\u7684\u662f\u4e2d\u95f4\u6240\u6709\u7684")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"  ",(0,a.kt)("inlineCode",{parentName:"p"},"hover"),"\u4f2a\u7c7b\u9009\u62e9\u5668\uff1a\u9009\u62e9\u5668:hover{}\uff0c\u9009\u4e2d\u9f20\u6807\u60ac\u505c\u5728\u5143\u7d20\u4e0a\u7684\u72b6\u6001\uff0c\u8bbe\u7f6e\u6837\u5f0f \uff0c :visited\u53ea\u80fd\u7528\u4e8e\u8bbf\u95ee\u8fc7\u7684\u94fe\u63a5\uff0c\u6d89\u53ca\u9690\u79c1\uff0c\u614e\u7528\uff0c:link\u7528\u6765\u8868\u793a\u672a\u8bbf\u95ee\u7684\u94fe\u63a5\uff0c\uff1aactive\u70b9\u51fb\u8d85\u94fe\u63a5\u4f1a\u663e\u793a\u7684\u72b6\u6001\n:first-of-child\u7b2c\u4e00\u4e2a\u5b50\u5143\u7d20\uff0c:first-of-type\u540c\u7c7b\u578b\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5b50\u5143\u7d20\uff0c:nth-child(\u4efb\u610f\u6570)\u7b2cn\u4e2a\u5b50\u5143\u7d20\uff0c:ntg-last-child()\u5012\u6570\u7b2cn\u4e2a\u5b50\u5143\u7d20\uff0c:only-child\u552f\u4e00\u7684\u5b50\u5143\u7d20\n\u9009\u62e9\u5668\uff1anot(\u9009\u62e9\u5668)\uff0c\u5426\u5b9a\u4f2a\u7c7b\uff0c\u9664\u4e86\u67d0\u4e9b\u5143\u7d20\uff0c\u4f2a\u5143\u7d20\u8bed\u6cd5::before\u6807\u7b7e\u8d77\u59cb\u4f4d\u7f6e\uff0c::after\u6807\u7b7e\u7ed3\u675f\u4f4d\u7f6e\uff0cconten\u53ef\u4ee5\u5728\u8be5\u4f4d\u7f6e\u6dfb\u52a0\u5185\u5bb9\uff0c\u4e0d\u7b97\u7f51\u9875\u4e2d\u7684\u6b63\u5f0f\u5185\u5bb9\uff0c::selection\u8868\u793a\u9009\u4e2d\u7684\u6587\u5b57\u5185\u5bb9\n\u4f2a\u7c7b\u662f\u5177\u6709\u987a\u5e8f\u7684\uff0c\u540c\u4e00\u4e2a\u7c7b\u8bbe\u7f6e\u540c\u4e00\u4e2a\u53ef\u4ee5\u540c\u65f6\u5b58\u5728\u7684\u6837\u5f0f\uff0c\u4f1a\u540e\u9762\u8986\u76d6\u524d\u9762")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"emmet\u8bed\u6cd5\n\u6807\u7b7e\u540ddiv\n\u7c7b\u9009\u62e9\u5668.\u7c7b\u540d\nid\u9009\u62e9\u5668#id\n\u4ea4\u96c6\u9009\u62e9\u5668p.red#one\n\u5b50\u4ee3\u9009\u62e9\u5668ul>li{}*\u4e2a\u6570")),(0,a.kt)("h5",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("p",null,"   font-size:\u6587\u5b57\u5927\u5c0f\uff0c\u9ed8\u8ba416px,1em\u5c31\u662f\u4e00\u4e2afont-size\uff0crem\u53c2\u7167\u4e8e\u6839\u5143\u7d20 "),(0,a.kt)("p",null,"\u200b     font-weight:\u5b57\u4f53\u7c97\u7ec6\uff0c\u6b63\u5e38\u4e3a400,\u52a0\u7c97700"),(0,a.kt)("p",null,"\u200b     font-style:\u5b57\u4f53\u6837\u5f0f\uff08\u662f\u5426\u503e\u659c\uff09\uff0citalic"),(0,a.kt)("p",null,"\u200b     font-family:\u5b57\u4f53\u7cfb\u5217\uff0c\u5fae\u8f6f\u96c5\u9ed1\uff0c\u82f9\u4f53"),(0,a.kt)("p",null,"\u200b     sans-serif:\u65e0\u886c\u7ebf\u5b57\u4f53\u7b14\u753b\u7c97\u7ec6\u5747\u5300\uff0c\u7f51\u9875\u4f7f\u7528"),(0,a.kt)("p",null,"\u200b     serif:\u886c\u7ebf\u5b57\u4f53\uff0c\u9996\u5c3e\u6709\u7b14\u950b\u88c5\u9970 \uff0c\u62a5\u7eb8\u4e66\u7c4d\u5e94\u7528"),(0,a.kt)("p",null,"\u200b     monospace:\u7b49\u5bbd\u5b57\u4f53\uff0c\u7a0b\u5e8f\u5458\u7f16\u5199\uff0c\u5229\u4e8e\u4ee3\u7801\u9605\u8bfb Consolas\uff0cfire code"),(0,a.kt)("p",null," @font-face\u53ef\u4ee5\u8fdc\u7a0b\u63d0\u4f9b\u5b57\u4f53\u4f9b\u7528\u6237\u4f7f\u7528\uff0c\u5185\u6709src\u548cfont-family\u5c5e\u6027\uff08\u81ea\u5b9a\u4e49\u540d\u79f0\uff09\uff0c\u6d89\u53ca\u7248\u6743\u95ee\u9898"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," \u590d\u5408\u5c5e\u6027\uff1a\u5c31\u662f\u591a\u4e2a\u5c5e\u6027\u8fde\u5199\u7684\u5f62\u5f0f\uff0c\u5c5e\u6027\u4e4b\u95f4\u9700\u8981\u52a0\u7a7a\u683c\uff0cfont\u6709\u987a\u5e8f")),(0,a.kt)("p",null," text-indent:\u5b57\u4f53\u7f29\u8fdb\u6548\u679c\uff0c\u4e00\u822c\u8bbe\u7f6e\u4e3a2em\uff0c1em\u4ee3\u8868\u4e00\u4e2a\u5b57\u8282\u957f\u5ea6"),(0,a.kt)("p",null," text-align:\u6587\u672c\u6c34\u5e73\u5bf9\u9f50\u65b9\u5f0f\uff0cleft\u4e3a\u5de6\u5bf9\u9f50\uff0ccenter\u4e3a\u5c45\u4e2d\u5bf9\u9f50\uff0cright\u4e3a\u53f3\u5bf9\u9f50\uff0c\u5982\u679c\u8981\u8ba9\u6c34\u5e73\u5143\u7d20\u5c45\u4e2d\uff0c\u53ea\u9700\u7ed9\u7236\u7ea7\u5143\u7d20\u52a0text-align\u5373\u53ef"),(0,a.kt)("p",null," text-decoration:\u7ed9\u6587\u672c\u52a0\u88c5\u9970\u7ebf\uff0cunderline \u52a0\u4e0b\u5212\u7ebf\uff0cline-through\u52a0\u5220\u9664\u7ebf\uff0coverline\u4e0a\u5212\u7ebf\uff0cnone\u65e0\u88c5\u9970\u7ebf\u3002"),(0,a.kt)("p",null,"line-height:\u63a7\u5236\u4e00\u884c\u7684\u4e0a\u4e0b\u884c\u95f4\u8ddd\uff0c\u53d6\u503c\u7b2c\u4e00\u79cd\u6570\u5b57\u52a0px\uff0c\u7b2c\u4e8c\u79cd\u500d\u6570\uff08font-size\u7684\u500d\u6570\uff09"),(0,a.kt)("p",null,"  background-image(url)\uff1a\u8bbe\u7f6e\u80cc\u666f\u56fe\u7247"),(0,a.kt)("p",null," background-repeat(bgr)\uff1arepeat\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u90fd\u5e73\u94fa\uff0cno-repeat\u4e0d\u5e73\u94fa\uff0crepeat-x\u6cbf\u7740\u6c34\u5e73\u65b9\u5411\u5e73\u94fa\uff0c  repeat-y\u6cbf\u7740\u5782\u76f4\u65b9\u5411\u5e73\u94fa"),(0,a.kt)("p",null,"  background-position\uff1a\u80cc\u666f\u56fe\u4f4d\u7f6e\uff0ccenter\uff0ctop\uff0cbottom\u53ef\u4ee5\u8fde\u5199\uff0c\u6ca1\u6709\u987a\u5e8f"),(0,a.kt)("h5",{id:"\u5143\u7d20\u663e\u793a\u6a21\u5f0f"},"\u5143\u7d20\u663e\u793a\u6a21\u5f0f"),(0,a.kt)("p",null,"\u5757\u7ea7\u5143\u7d20\uff1a\u53ef\u4ee5\u8bbe\u7f6e\u5bbd\u9ad8\uff0c\u72ec\u5360\u4e00\u884c\uff0c\u4ee3\u8868\u6807\u7b7e "),(0,a.kt)("p",null,"  div,\uff0cp\uff0ch\uff0cul\uff0cli\uff0cdl\u2026\u9ed8\u8ba4\u5bbd\u5ea6\u548c\u4ed6\u7239\u4e00\u6837"),(0,a.kt)("p",null,"  \u884c\u5185\u5143\u7d20\uff1a\u4e00\u884c\u663e\u793a\u591a\u4e2a\uff0c\u4e0d\u80fd\u8bbe\u7f6e\u5bbd\u9ad8\uff0c\u4ee3\u8868\u6807\u7b7e\uff0cspan\uff0c\uff0ca\uff0cstrong\u2026"),(0,a.kt)("p",null,"  \u884c\u5185\u5757\u5143\u7d20\uff1a\u4e00\u884c\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2a\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5bbd\u9ad8\uff0c\u4ee3\u8868\u5143\u7d20input\uff0ctextarea\uff0cbutton\uff0cselect"),(0,a.kt)("p",null,"  \u4e09\u79cd\u6a21\u5f0f\u8f6c\u5316\uff0c\u901a\u8fc7\u52a0display\u5c5e\u6027\uff0cblock\uff0cinline-block\uff0cinline"),(0,a.kt)("p",null,"  \u5305\u542b\u5757\uff1a\u5305\u542b\u5757\u5c31\u662f\u79bb\u5f53\u524d\u5143\u7d20\u6700\u8fd1\u7684\u7956\u5148\u5757\u5143\u7d20"),(0,a.kt)("h6",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b50\u6807\u7b7e\u9ed8\u8ba4\u4f1a\u7ee7\u627f\u7236\u6807\u7b7e\u4e2d\u7684\u6587\u672c\u6837\u5f0f\uff0c\u5982\u679c\u5b50\u6807\u7b7e\u81ea\u5e26\u6709\u6837\u5f0f\uff0c\u5219\u4e0d\u4f1a\u88ab\u7ee7\u627f")),(0,a.kt)("h5",{id:"\u76d2\u5b50\u6a21\u578b"},"\u76d2\u5b50\u6a21\u578b"),(0,a.kt)("p",null,"   border\u4e3a\u5c5e\u6027\uff0c\u53ef\u4ee5\u8fde\u5199\u4e3a\u50cf\u7d20\uff08\u7c97\u7ec6\uff09+solid\uff08\u7ebf\u6761\u79cd\u7c7b\uff09+\u989c\u8272\uff0cdatted\u4e3a\u70b9\u7ebf\uff0cdashed\u865a\u7ebf\uff0csolid\u4e3a\u5b9e\u7ebf\uff0c\u52a0-\u65b9\u5411\uff0c\u8868\u793a\u5355\u4e2a\u65b9\u5411\u6dfb\u52a0\u3002"),(0,a.kt)("p",null,"outline\u662f\u8f6e\u5ed3\u7ebf\uff0cbox-shadow\u662f\u9634\u5f71\uff0c\u4f5c\u4e3a\u88c5\u9970\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5e03\u5c40\n\u56fe\u6807\u5b57\u4f53 iconfont \uff08\u5c0f\u56fe\u6807\u968f\u610f\u6539\u5927\u5c0f\uff09"),(0,a.kt)("p",null,"\u7b2c\u4e09\u65b9\u56fe\u6807\u5b57\u4f53\u5e93!\n\u6d6e\u52a8 float\u4f7f\u5143\u7d20\u8131\u79bb\u6587\u6863\u6d41\uff0cnone\uff0cleft\u5de6\u79fb\uff0cright\u53f3\u79fb\uff0c\u540c\u884c\u6392\u5217\uff0c\u6d6e\u52a8\u5143\u7d20\u4e0d\u4f1a\u76d6\u4f4f\u6587\u5b57\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u73af\u7ed5\u6548\u679c\uff0c\u8131\u79bb\u6587\u6863\u6d41\uff0c\u5757\u5143\u7d20\u4e0d\u518d\u5355\u72ec\u5360\u4e00\u884c\uff0c\u884c\u5185\u5143\u7d20\u53d8\u6210\u5757\u5143\u7d20"),(0,a.kt)("p",null," \u6d6e\u52a8\u4f1a\u5bfc\u81f4\u9ad8\u5ea6\u584c\u9677\u95ee\u9898\uff1a\u901a\u8fc7\u5f00\u542fBFC\u540e \uff0c\u5b50\u5143\u7d20\u7684\u5782\u76f4\u5916\u8fb9\u8ddd\u4e0d\u4f1a\u4f20\u9012\u7ed9\u7236\u5143\u7d20\uff0c\u5143\u7d20\u4e0d\u4f1a\u88ab\u6d6e\u52a8\u5143\u7d20\u6240\u8986\u76d6\uff0c\u5143\u7d20\u53ef\u4ee5\u5305\u542b\u6d6e\u52a8\u7684\u5b50\u5143\u7d20\u3002"),(0,a.kt)("p",null,"\u6d6e\u52a8\u4f1a\u5f00\u542fBFC\uff0coverflow\u4e5f\u4f1a\u5f00\u542fBFC\uff0cdisplay\uff1aflow-root\uff0c\u8fd8\u6709\u5f88\u591a\u65b9\u5f0f\nclear \uff1aleft\uff0cright\u6e05\u9664\u6d6e\u52a8\u5143\u7d20\u4ea7\u751f\u7684\u5f71\u54cd"))}d.isMDXComponent=!0}}]);
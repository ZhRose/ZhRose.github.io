"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[422],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),v=a,m=c["".concat(p,".").concat(v)]||c[v]||d[v]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},6067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4},o="Maven",l={unversionedId:"tutorial-JAVA/Meaven",id:"tutorial-JAVA/Meaven",title:"Maven",description:"\u53ef\u9009\u4f9d\u8d56\uff1a\u5bf9\u5916\u9690\u85cf\u5f53\u524d\u8d44\u6e90\u5bf9\u5e94\u7684\u4f9d\u8d56\u5173\u7cfb---\u4e0d\u900f\u660e",source:"@site/docs/tutorial-JAVA/Meaven.md",sourceDirName:"tutorial-JAVA",slug:"/tutorial-JAVA/Meaven",permalink:"/docs/tutorial-JAVA/Meaven",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Mybatis",permalink:"/docs/tutorial-JAVA/Mybatis"},next:{title:"springboot",permalink:"/docs/tutorial-JAVA/Spring-boot"}},p={},s=[{value:"\u53ef\u9009\u4f9d\u8d56\uff1a\u5bf9\u5916\u9690\u85cf\u5f53\u524d\u8d44\u6e90\u5bf9\u5e94\u7684\u4f9d\u8d56\u5173\u7cfb---\u4e0d\u900f\u660e",id:"\u53ef\u9009\u4f9d\u8d56\u5bf9\u5916\u9690\u85cf\u5f53\u524d\u8d44\u6e90\u5bf9\u5e94\u7684\u4f9d\u8d56\u5173\u7cfb---\u4e0d\u900f\u660e",level:5},{value:"\u6392\u9664\u4f9d\u8d56\uff1a\u9690\u85cf\u5176\u4ed6\u8d44\u6e90\u4e2d\u5bf9\u5e94\u7684\u4f9d\u8d56---\u4e0d\u9700\u8981",id:"\u6392\u9664\u4f9d\u8d56\u9690\u85cf\u5176\u4ed6\u8d44\u6e90\u4e2d\u5bf9\u5e94\u7684\u4f9d\u8d56---\u4e0d\u9700\u8981",level:5},{value:"\u805a\u5408\u5de5\u7a0b\uff1a\u7528\u6765\u7ba1\u7406\u5176\u4ed6\u5de5\u7a0b\u7684\u4e00\u4e2a\u6839\u5de5\u7a0b\uff0c\u6b64\u5de5\u7a0b\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u6a21\u5757\uff0c\u5185\u5bb9\u53ea\u6709\u4e00\u4e2apom\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u4e86packaging\u6253\u5305\u65b9\u5f0f\u4e3apom,\u5e76\u8bbe\u7f6e\u4e86\u5f53\u524d\u805a\u5408\u5de5\u7a0b\u6240\u542b\u6709\u7684\u5b50\u6a21\u5757\u540d\u79f0modules",id:"\u805a\u5408\u5de5\u7a0b\u7528\u6765\u7ba1\u7406\u5176\u4ed6\u5de5\u7a0b\u7684\u4e00\u4e2a\u6839\u5de5\u7a0b\u6b64\u5de5\u7a0b\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u6a21\u5757\u5185\u5bb9\u53ea\u6709\u4e00\u4e2apom\u6587\u4ef6\u5176\u4e2d\u5305\u542b\u4e86packaging\u6253\u5305\u65b9\u5f0f\u4e3apom\u5e76\u8bbe\u7f6e\u4e86\u5f53\u524d\u805a\u5408\u5de5\u7a0b\u6240\u542b\u6709\u7684\u5b50\u6a21\u5757\u540d\u79f0modules",level:5},{value:"\u7ee7\u627f\uff1a\u5b50\u5de5\u7a0b\u4e2d\u53ef\u4ee5\u7ee7\u627f\u7236\u5de5\u7a0b\u4e2d\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u5e76\u4e14\u51cf\u5c11\u7248\u672c\u4e4b\u95f4\u7684\u51b2\u7a81",id:"\u7ee7\u627f\u5b50\u5de5\u7a0b\u4e2d\u53ef\u4ee5\u7ee7\u627f\u7236\u5de5\u7a0b\u4e2d\u7684\u914d\u7f6e\u4fe1\u606f\u5e76\u4e14\u51cf\u5c11\u7248\u672c\u4e4b\u95f4\u7684\u51b2\u7a81",level:5},{value:"\u5c5e\u6027\uff1a\u7c7b\u4f3c\u4e8ejavaSE\u4e2d\u7684\u53d8\u91cf\uff0c\u901a\u8fc7properties\u6765\u8bbe\u7f6e\u53d8\u91cf\u540d\uff0c\u6bcf\u4e2a\u53d8\u91cf\u540d\u4ee3\u8868\u7248\u672c\u4fe1\u606f\uff0c\u7528\u5230\u5730\u65b9\u91c7\u7528${\u53d8\u91cf\u540d}\u5373\u53ef,\u8d44\u6e90\u6587\u4ef6\u7684\u5f15\u7528\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u53d8\u91cf\u540d\uff0c\u7136\u540e\u5728\u4e0d\u540c\u7684\u9879\u76ee\u4e2d\u7684propertise\u6587\u4ef6\u901a\u8fc7${}\u6765\u5f15\u7528\uff0c\u4f46\u662f\u5f15\u7528\u6e90\u9700\u8981\u6dfb\u52a0\u76ee\u5f55\u52a0\u8f7d\u5c5e\u6027\u548c\u8d44\u6e90\u8fc7\u6ee4\u5668",id:"\u5c5e\u6027\u7c7b\u4f3c\u4e8ejavase\u4e2d\u7684\u53d8\u91cf\u901a\u8fc7properties\u6765\u8bbe\u7f6e\u53d8\u91cf\u540d\u6bcf\u4e2a\u53d8\u91cf\u540d\u4ee3\u8868\u7248\u672c\u4fe1\u606f\u7528\u5230\u5730\u65b9\u91c7\u7528\u53d8\u91cf\u540d\u5373\u53ef\u8d44\u6e90\u6587\u4ef6\u7684\u5f15\u7528\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u53d8\u91cf\u540d\u7136\u540e\u5728\u4e0d\u540c\u7684\u9879\u76ee\u4e2d\u7684propertise\u6587\u4ef6\u901a\u8fc7\u6765\u5f15\u7528\u4f46\u662f\u5f15\u7528\u6e90\u9700\u8981\u6dfb\u52a0\u76ee\u5f55\u52a0\u8f7d\u5c5e\u6027\u548c\u8d44\u6e90\u8fc7\u6ee4\u5668",level:5},{value:"\u7248\u672c\uff1aSNAPSHOT:\u5feb\u7167\u7248\u672c\uff0c\u4e0d\u65ad\u8fed\u4ee3\uff0c\u8fd8\u6ca1\u8d8b\u4e8e\u7a33\u5b9a",id:"\u7248\u672csnapshot\u5feb\u7167\u7248\u672c\u4e0d\u65ad\u8fed\u4ee3\u8fd8\u6ca1\u8d8b\u4e8e\u7a33\u5b9a",level:5},{value:"RELEASE:\u53d1\u5e03\u7248\u672c\uff0c\u6bd4\u8f83\u7a33\u5b9a\u7684\u7248\u672c  \u5bf9\u5916\u53d1\u5e03\uff0c\u8fd8\u6709\u8bf8\u591a\u7684\u4f8b\u5982alpha,beta,\u7eaf\u6570\u5b57\u7248",id:"release\u53d1\u5e03\u7248\u672c\u6bd4\u8f83\u7a33\u5b9a\u7684\u7248\u672c--\u5bf9\u5916\u53d1\u5e03\u8fd8\u6709\u8bf8\u591a\u7684\u4f8b\u5982alphabeta\u7eaf\u6570\u5b57\u7248",level:5},{value:"\u591a\u73af\u5883\u7684\u5f00\u53d1\uff1a\u4fbf\u4e8e\u7248\u672c\u7684\u5207\u6362\uff08\u5f00\u53d1\uff0c\u6d4b\u8bd5\uff0c\u4e0a\u7ebf\uff09\uff0c\u901a\u8fc7\u6dfb\u52a0profile,\u6307\u5b9aid\u4e3a\u7248\u672c\u540d\u79f0\uff0cpropertis\u6307\u5b9a\u53c2\u6570\u7684\u503c\uff0c\u7136\u540e\u901a\u8fc7activation\u6807\u7b7e\u8868\u793a\u9ed8\u8ba4\u73af\u5883\u6216\u8005\u901a\u8fc7mvn\u547d\u4ee4\u4e2d   mvn \u6307\u4ee4 -P \u73af\u5883\u5b9a\u4e49id   \u7c7b:mvn install -P  pro_env",id:"\u591a\u73af\u5883\u7684\u5f00\u53d1\u4fbf\u4e8e\u7248\u672c\u7684\u5207\u6362\u5f00\u53d1\u6d4b\u8bd5\u4e0a\u7ebf\u901a\u8fc7\u6dfb\u52a0profile\u6307\u5b9aid\u4e3a\u7248\u672c\u540d\u79f0propertis\u6307\u5b9a\u53c2\u6570\u7684\u503c\u7136\u540e\u901a\u8fc7activation\u6807\u7b7e\u8868\u793a\u9ed8\u8ba4\u73af\u5883\u6216\u8005\u901a\u8fc7mvn\u547d\u4ee4\u4e2d---mvn-\u6307\u4ee4--p-\u73af\u5883\u5b9a\u4e49id---\u7c7bmvn-install--p--pro_env",level:4},{value:"\u79c1\u670d(\u7ec4\u5458\u4e4b\u95f4\u5171\u4eab)",id:"\u79c1\u670d\u7ec4\u5458\u4e4b\u95f4\u5171\u4eab",level:4}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"maven"},"Maven"),(0,a.kt)("h5",{id:"\u53ef\u9009\u4f9d\u8d56\u5bf9\u5916\u9690\u85cf\u5f53\u524d\u8d44\u6e90\u5bf9\u5e94\u7684\u4f9d\u8d56\u5173\u7cfb---\u4e0d\u900f\u660e"},"\u53ef\u9009\u4f9d\u8d56\uff1a\u5bf9\u5916\u9690\u85cf\u5f53\u524d\u8d44\u6e90\u5bf9\u5e94\u7684\u4f9d\u8d56\u5173\u7cfb---\u4e0d\u900f\u660e"),(0,a.kt)("h5",{id:"\u6392\u9664\u4f9d\u8d56\u9690\u85cf\u5176\u4ed6\u8d44\u6e90\u4e2d\u5bf9\u5e94\u7684\u4f9d\u8d56---\u4e0d\u9700\u8981"},"\u6392\u9664\u4f9d\u8d56\uff1a\u9690\u85cf\u5176\u4ed6\u8d44\u6e90\u4e2d\u5bf9\u5e94\u7684\u4f9d\u8d56---\u4e0d\u9700\u8981"),(0,a.kt)("h5",{id:"\u805a\u5408\u5de5\u7a0b\u7528\u6765\u7ba1\u7406\u5176\u4ed6\u5de5\u7a0b\u7684\u4e00\u4e2a\u6839\u5de5\u7a0b\u6b64\u5de5\u7a0b\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u6a21\u5757\u5185\u5bb9\u53ea\u6709\u4e00\u4e2apom\u6587\u4ef6\u5176\u4e2d\u5305\u542b\u4e86packaging\u6253\u5305\u65b9\u5f0f\u4e3apom\u5e76\u8bbe\u7f6e\u4e86\u5f53\u524d\u805a\u5408\u5de5\u7a0b\u6240\u542b\u6709\u7684\u5b50\u6a21\u5757\u540d\u79f0modules"},"\u805a\u5408\u5de5\u7a0b\uff1a\u7528\u6765\u7ba1\u7406\u5176\u4ed6\u5de5\u7a0b\u7684\u4e00\u4e2a\u6839\u5de5\u7a0b\uff0c\u6b64\u5de5\u7a0b\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u6a21\u5757\uff0c\u5185\u5bb9\u53ea\u6709\u4e00\u4e2apom\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u4e86packaging\u6253\u5305\u65b9\u5f0f\u4e3apom,\u5e76\u8bbe\u7f6e\u4e86\u5f53\u524d\u805a\u5408\u5de5\u7a0b\u6240\u542b\u6709\u7684\u5b50\u6a21\u5757\u540d\u79f0modules"),(0,a.kt)("h5",{id:"\u7ee7\u627f\u5b50\u5de5\u7a0b\u4e2d\u53ef\u4ee5\u7ee7\u627f\u7236\u5de5\u7a0b\u4e2d\u7684\u914d\u7f6e\u4fe1\u606f\u5e76\u4e14\u51cf\u5c11\u7248\u672c\u4e4b\u95f4\u7684\u51b2\u7a81"},"\u7ee7\u627f\uff1a\u5b50\u5de5\u7a0b\u4e2d\u53ef\u4ee5\u7ee7\u627f\u7236\u5de5\u7a0b\u4e2d\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u5e76\u4e14\u51cf\u5c11\u7248\u672c\u4e4b\u95f4\u7684\u51b2\u7a81"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"1.\u5728\u7236\u5de5\u7a0b\u4e2d\u914d\u7f6e\u5bf9\u5e94\u5b50\u5de5\u7a0b\u4e2d\u9700\u8981\u7684\u4f9d\u8d56\uff0c\u5e76\u914d\u7f6e\u5b50\u5de5\u7a0b\u4e2d\u53ef\u9009\u62e9\u7684\u4f9d\u8d56\uff0c\u901a\u8fc7dependencyMannagement\u6765\u8bbe\u7f6e\n2.\u5728\u5b50\u5de5\u7a0b\u4e2d\u914d\u7f6e\u7ee7\u627f\u7684\u7236\u5de5\u7a0b\u901a\u8fc7parent\u6765\u8bbe\u7f6e\uff0crelativepath\u586b\u5199\u7236\u5de5\u7a0b\u7684pom\u6587\u4ef6\u4f4d\u7f6e\n3.\u5b50\u5de5\u7a0b\u4e2d\u5c31\u53ef\u4ee5\u4f7f\u7528\u7236\u5de5\u7a0b\u4e2d\u7684\u4f9d\u8d56\uff0c\u53ef\u4ee5\u4e0d\u6307\u5b9a\u7248\u672c\n")),(0,a.kt)("h5",{id:"\u5c5e\u6027\u7c7b\u4f3c\u4e8ejavase\u4e2d\u7684\u53d8\u91cf\u901a\u8fc7properties\u6765\u8bbe\u7f6e\u53d8\u91cf\u540d\u6bcf\u4e2a\u53d8\u91cf\u540d\u4ee3\u8868\u7248\u672c\u4fe1\u606f\u7528\u5230\u5730\u65b9\u91c7\u7528\u53d8\u91cf\u540d\u5373\u53ef\u8d44\u6e90\u6587\u4ef6\u7684\u5f15\u7528\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u53d8\u91cf\u540d\u7136\u540e\u5728\u4e0d\u540c\u7684\u9879\u76ee\u4e2d\u7684propertise\u6587\u4ef6\u901a\u8fc7\u6765\u5f15\u7528\u4f46\u662f\u5f15\u7528\u6e90\u9700\u8981\u6dfb\u52a0\u76ee\u5f55\u52a0\u8f7d\u5c5e\u6027\u548c\u8d44\u6e90\u8fc7\u6ee4\u5668"},"\u5c5e\u6027\uff1a\u7c7b\u4f3c\u4e8ejavaSE\u4e2d\u7684\u53d8\u91cf\uff0c\u901a\u8fc7properties\u6765\u8bbe\u7f6e\u53d8\u91cf\u540d\uff0c\u6bcf\u4e2a\u53d8\u91cf\u540d\u4ee3\u8868\u7248\u672c\u4fe1\u606f\uff0c\u7528\u5230\u5730\u65b9\u91c7\u7528${\u53d8\u91cf\u540d}\u5373\u53ef,\u8d44\u6e90\u6587\u4ef6\u7684\u5f15\u7528\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u53d8\u91cf\u540d\uff0c\u7136\u540e\u5728\u4e0d\u540c\u7684\u9879\u76ee\u4e2d\u7684propertise\u6587\u4ef6\u901a\u8fc7${}\u6765\u5f15\u7528\uff0c\u4f46\u662f\u5f15\u7528\u6e90\u9700\u8981\u6dfb\u52a0\u76ee\u5f55\u52a0\u8f7d\u5c5e\u6027\u548c\u8d44\u6e90\u8fc7\u6ee4\u5668"),(0,a.kt)("h5",{id:"\u7248\u672csnapshot\u5feb\u7167\u7248\u672c\u4e0d\u65ad\u8fed\u4ee3\u8fd8\u6ca1\u8d8b\u4e8e\u7a33\u5b9a"},"\u7248\u672c\uff1aSNAPSHOT:\u5feb\u7167\u7248\u672c\uff0c\u4e0d\u65ad\u8fed\u4ee3\uff0c\u8fd8\u6ca1\u8d8b\u4e8e\u7a33\u5b9a"),(0,a.kt)("h5",{id:"release\u53d1\u5e03\u7248\u672c\u6bd4\u8f83\u7a33\u5b9a\u7684\u7248\u672c--\u5bf9\u5916\u53d1\u5e03\u8fd8\u6709\u8bf8\u591a\u7684\u4f8b\u5982alphabeta\u7eaf\u6570\u5b57\u7248"},"RELEASE:\u53d1\u5e03\u7248\u672c\uff0c\u6bd4\u8f83\u7a33\u5b9a\u7684\u7248\u672c  \u5bf9\u5916\u53d1\u5e03\uff0c\u8fd8\u6709\u8bf8\u591a\u7684\u4f8b\u5982alpha,beta,\u7eaf\u6570\u5b57\u7248"),(0,a.kt)("h4",{id:"\u591a\u73af\u5883\u7684\u5f00\u53d1\u4fbf\u4e8e\u7248\u672c\u7684\u5207\u6362\u5f00\u53d1\u6d4b\u8bd5\u4e0a\u7ebf\u901a\u8fc7\u6dfb\u52a0profile\u6307\u5b9aid\u4e3a\u7248\u672c\u540d\u79f0propertis\u6307\u5b9a\u53c2\u6570\u7684\u503c\u7136\u540e\u901a\u8fc7activation\u6807\u7b7e\u8868\u793a\u9ed8\u8ba4\u73af\u5883\u6216\u8005\u901a\u8fc7mvn\u547d\u4ee4\u4e2d---mvn-\u6307\u4ee4--p-\u73af\u5883\u5b9a\u4e49id---\u7c7bmvn-install--p--pro_env"},"\u591a\u73af\u5883\u7684\u5f00\u53d1\uff1a\u4fbf\u4e8e\u7248\u672c\u7684\u5207\u6362\uff08\u5f00\u53d1\uff0c\u6d4b\u8bd5\uff0c\u4e0a\u7ebf\uff09\uff0c\u901a\u8fc7\u6dfb\u52a0profile,\u6307\u5b9aid\u4e3a\u7248\u672c\u540d\u79f0\uff0cpropertis\u6307\u5b9a\u53c2\u6570\u7684\u503c\uff0c\u7136\u540e\u901a\u8fc7activation\u6807\u7b7e\u8868\u793a\u9ed8\u8ba4\u73af\u5883\u6216\u8005\u901a\u8fc7mvn\u547d\u4ee4\u4e2d   mvn \u6307\u4ee4 -P \u73af\u5883\u5b9a\u4e49id   \u7c7b:mvn install -P  pro_env"),(0,a.kt)("h4",{id:"\u79c1\u670d\u7ec4\u5458\u4e4b\u95f4\u5171\u4eab"},"\u79c1\u670d(\u7ec4\u5458\u4e4b\u95f4\u5171\u4eab)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u672c\u5730\u4ed3\u5e93\u8fde\u63a5\u79c1\u670d\u7684\u5bc6\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u5728maven\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0server\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2a\n<server>\n<id>\u81ea\u5df1\u5efa\u9020\u7684\u79c1\u670d\u4ed3\u5e93\u540d\u79f0<id>\n<username></username>\n<password></password>\n</server>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5f53\u524d\u5de5\u7a0b\u5b58\u653e\u5728\u79c1\u670d\u7684\u4f4d\u7f6e(\u4e00\u822crelease\u7248\u672c\u548csnapShop\u7248\u672c\u5206\u5f00\u5b58\u653e)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#\u5de5\u7a0b\u7684pom\u6587\u4ef6\u4e2d,\u901a\u8fc7deploy\u5b58\u653e\u5728\u5bf9\u5e94\u7684\u4ed3\u5e93\u5f53\u4e2d\n<distributionManahement>\n<repository>\n<id>\u4ed3\u5e93\u7684\u540d\u79f0</id>\n<url>\u4ed3\u5e93\u7684\u5730\u5740</url\n<repository>\n</distributionManahement>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e0b\u8f7d\u7684\u5730\u5740\uff08\u4ed3\u5e93\u7ec4\u7684\u5730\u5740")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#\u5728maven\u914d\u7f6e\u6587\u4ef6\u4e2d\n<mirror>\n<id> \u914d\u7f6e\u8981\u672c\u5730\u4ed3\u5e93\u8981\u8bbf\u95ee\u7684\u79c1\u670d\u4ed3\u5e93\u7ec4\u7684\u540d\u79f0</id>\n<url>\u8be5\u4ed3\u5e93\u7ec4\u7684\u5730\u5740</url>\n</mirror>\uff09\n")))}d.isMDXComponent=!0}}]);
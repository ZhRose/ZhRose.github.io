"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[159],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var i=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=i.createContext({}),s=function(e){var r=i.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return i.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},y=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),y=n,d=u["".concat(l,".").concat(y)]||u[y]||m[y]||a;return t?i.createElement(d,p(p({ref:r},c),{},{components:t})):i.createElement(d,p({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=y;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var s=2;s<a;s++)p[s]=t[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1674:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(7462),n=(t(7294),t(3905));const a={sidebar_position:5},p="springboot",o={unversionedId:"JAVA/SpringBoot",id:"JAVA/SpringBoot",title:"springboot",description:"propertise>yml>yaml\u6587\u4ef6\u7684\u6267\u884c\u987a\u5e8f\uff0c\u5176\u4e2dyml,yaml\u586b\u5199\u6570\u636e\u65f6\u9700\u8981\u52a0\u7a7a\u683c",source:"@site/docs/JAVA/SpringBoot.md",sourceDirName:"JAVA",slug:"/JAVA/SpringBoot",permalink:"/docs/JAVA/SpringBoot",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Maven",permalink:"/docs/JAVA/Meaven"},next:{title:"mybatisPlus",permalink:"/docs/JAVA/Mybatisplus"}},l={},s=[{value:"propertise&gt;yml&gt;yaml\u6587\u4ef6\u7684\u6267\u884c\u987a\u5e8f\uff0c\u5176\u4e2dyml,yaml\u586b\u5199\u6570\u636e\u65f6\u9700\u8981\u52a0\u7a7a\u683c",id:"propertiseymlyaml\u6587\u4ef6\u7684\u6267\u884c\u987a\u5e8f\u5176\u4e2dymlyaml\u586b\u5199\u6570\u636e\u65f6\u9700\u8981\u52a0\u7a7a\u683c",level:5},{value:"YAML\u6570\u636e\u8bfb\u53d6\u7684\u65b9\u5f0f",id:"yaml\u6570\u636e\u8bfb\u53d6\u7684\u65b9\u5f0f",level:4},{value:"\u5355\u4e2a\u6570\u636e\uff1a@value()\uff0c\u5c5e\u6027\u540d\u5f15\u7528\u65b9\u5f0f\uff1a${\u4e00\u7ea7\u5c5e\u6027\u540d\uff0c\u4e8c\u7ea7\u5c5e\u6027\u540d....}",id:"\u5355\u4e2a\u6570\u636evalue\u5c5e\u6027\u540d\u5f15\u7528\u65b9\u5f0f\u4e00\u7ea7\u5c5e\u6027\u540d\u4e8c\u7ea7\u5c5e\u6027\u540d",level:6},{value:"\u5168\u6570\u636e\u8bfb\u5165\uff1a\u5c01\u88c5\u6210Environment\u5bf9\u8c61\uff0c\u901a\u8fc7env.getProperty(&quot;id&quot;)\u83b7\u53d6\uff0c\u6846\u67b6\u5185\u90e8\u7528\u7684\u8f83\u591a\uff0c\u6216\u8005\u81ea\u5b9a\u4e49\u4e00\u4e2a\u5bf9\u8c61\u6765\u5c01\u88c5\u6570\u636e\uff0c\u5c06\u8be5\u7c7b\u4ea4\u7ed9spring\u6846\u67b6\uff0c\u5e76\u5199\u5165\u6ce8\u89e3@ConfigurationProperties(prefix=&quot;&quot;)",id:"\u5168\u6570\u636e\u8bfb\u5165\u5c01\u88c5\u6210environment\u5bf9\u8c61\u901a\u8fc7envgetpropertyid\u83b7\u53d6\u6846\u67b6\u5185\u90e8\u7528\u7684\u8f83\u591a\u6216\u8005\u81ea\u5b9a\u4e49\u4e00\u4e2a\u5bf9\u8c61\u6765\u5c01\u88c5\u6570\u636e\u5c06\u8be5\u7c7b\u4ea4\u7ed9spring\u6846\u67b6\u5e76\u5199\u5165\u6ce8\u89e3configurationpropertiesprefix",level:6},{value:"\u591a\u73af\u5883\u5f00\u53d1\uff0cyml\u6587\u4ef6\u7528---\u6765\u9694\u5f00\uff0c\u4e0d\u540c\u73af\u5883\u901a\u8fc7profile\u6765\u8868\u793a\uff0c\u914d\u7f6e\u73af\u5883\u901a\u8fc7active\u6765\u9009\u62e9,propertise\u6587\u4ef6\u901a\u8fc7spring.propertise.active=id\u6765\u5b9e\u73b0\uff0c\u4e0d\u540c\u7684\u73af\u5883\u8981\u751f\u6210\u4e0d\u540c\u7684\u6587\u4ef6\uff0c\u4e0d\u540c\u7684\u6587\u4ef6\u7528\u8fd9\u79cdapplication-pro.propertise\u683c\u5f0f\u6765\u8868\u793a",id:"\u591a\u73af\u5883\u5f00\u53d1yml\u6587\u4ef6\u7528---\u6765\u9694\u5f00\u4e0d\u540c\u73af\u5883\u901a\u8fc7profile\u6765\u8868\u793a\u914d\u7f6e\u73af\u5883\u901a\u8fc7active\u6765\u9009\u62e9propertise\u6587\u4ef6\u901a\u8fc7springpropertiseactiveid\u6765\u5b9e\u73b0\u4e0d\u540c\u7684\u73af\u5883\u8981\u751f\u6210\u4e0d\u540c\u7684\u6587\u4ef6\u4e0d\u540c\u7684\u6587\u4ef6\u7528\u8fd9\u79cdapplication-propropertise\u683c\u5f0f\u6765\u8868\u793a",level:6},{value:"\u5e26\u53c2\u6570\u542f\u52a8spring boot  \uff1ajava -jar springboot.jar  --spring.profiles.active=test",id:"\u5e26\u53c2\u6570\u542f\u52a8spring-boot--java--jar-springbootjar----springprofilesactivetest",level:6},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:5},{value:"\u6574\u5408mybatisplus",id:"\u6574\u5408mybatisplus",level:4},{value:"\u5b9a\u4e49domain\u5b9e\u4f53\u7c7b\uff0c\u5b9a\u4e49\u6570\u636e\u5c42\u63a5\u53e3\uff0c\u4f7f\u5176\u7ee7\u627fBaseMapper&lt;\u5b9e\u4f53\u7c7b\u540d&gt;,\u5e76\u6dfb\u52a0\u6ce8\u89e3@Mapper\t\uff0c\u5373\u53ef\u5728\u6d4b\u8bd5\u7c7b\u4e2d\u6dfb\u52a0\u67e5\u627e\u8bed\u53e5",id:"\u5b9a\u4e49domain\u5b9e\u4f53\u7c7b\u5b9a\u4e49\u6570\u636e\u5c42\u63a5\u53e3\u4f7f\u5176\u7ee7\u627fbasemapper\u5b9e\u4f53\u7c7b\u540d\u5e76\u6dfb\u52a0\u6ce8\u89e3mapper\u5373\u53ef\u5728\u6d4b\u8bd5\u7c7b\u4e2d\u6dfb\u52a0\u67e5\u627e\u8bed\u53e5",level:5},{value:"\u6761\u4ef6\u67e5\u8be2",id:"\u6761\u4ef6\u67e5\u8be2",level:4},{value:"\u5b57\u6bb5\u5c04\u548c\u8868\u540d\u6620\u5c04\u5173\u7cfb\u53ef\u4ee5\u901a\u8fc7@TabFild()\u548c@TableName\u6765\u4fee\u6539",id:"\u5b57\u6bb5\u5c04\u548c\u8868\u540d\u6620\u5c04\u5173\u7cfb\u53ef\u4ee5\u901a\u8fc7tabfild\u548ctablename\u6765\u4fee\u6539",level:5}],c={toc:s},u="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,i.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"springboot"},"springboot"),(0,n.kt)("h5",{id:"propertiseymlyaml\u6587\u4ef6\u7684\u6267\u884c\u987a\u5e8f\u5176\u4e2dymlyaml\u586b\u5199\u6570\u636e\u65f6\u9700\u8981\u52a0\u7a7a\u683c"},"propertise>yml>yaml\u6587\u4ef6\u7684\u6267\u884c\u987a\u5e8f\uff0c\u5176\u4e2dyml,yaml\u586b\u5199\u6570\u636e\u65f6\u9700\u8981\u52a0\u7a7a\u683c"),(0,n.kt)("h4",{id:"yaml\u6570\u636e\u8bfb\u53d6\u7684\u65b9\u5f0f"},"YAML\u6570\u636e\u8bfb\u53d6\u7684\u65b9\u5f0f"),(0,n.kt)("h6",{id:"\u5355\u4e2a\u6570\u636evalue\u5c5e\u6027\u540d\u5f15\u7528\u65b9\u5f0f\u4e00\u7ea7\u5c5e\u6027\u540d\u4e8c\u7ea7\u5c5e\u6027\u540d"},"\u5355\u4e2a\u6570\u636e\uff1a@value()\uff0c\u5c5e\u6027\u540d\u5f15\u7528\u65b9\u5f0f\uff1a${\u4e00\u7ea7\u5c5e\u6027\u540d\uff0c\u4e8c\u7ea7\u5c5e\u6027\u540d....}"),(0,n.kt)("h6",{id:"\u5168\u6570\u636e\u8bfb\u5165\u5c01\u88c5\u6210environment\u5bf9\u8c61\u901a\u8fc7envgetpropertyid\u83b7\u53d6\u6846\u67b6\u5185\u90e8\u7528\u7684\u8f83\u591a\u6216\u8005\u81ea\u5b9a\u4e49\u4e00\u4e2a\u5bf9\u8c61\u6765\u5c01\u88c5\u6570\u636e\u5c06\u8be5\u7c7b\u4ea4\u7ed9spring\u6846\u67b6\u5e76\u5199\u5165\u6ce8\u89e3configurationpropertiesprefix"},'\u5168\u6570\u636e\u8bfb\u5165\uff1a\u5c01\u88c5\u6210Environment\u5bf9\u8c61\uff0c\u901a\u8fc7env.getProperty("id")\u83b7\u53d6\uff0c\u6846\u67b6\u5185\u90e8\u7528\u7684\u8f83\u591a\uff0c\u6216\u8005\u81ea\u5b9a\u4e49\u4e00\u4e2a\u5bf9\u8c61\u6765\u5c01\u88c5\u6570\u636e\uff0c\u5c06\u8be5\u7c7b\u4ea4\u7ed9spring\u6846\u67b6\uff0c\u5e76\u5199\u5165\u6ce8\u89e3@ConfigurationProperties(prefix="")'),(0,n.kt)("h6",{id:"\u591a\u73af\u5883\u5f00\u53d1yml\u6587\u4ef6\u7528---\u6765\u9694\u5f00\u4e0d\u540c\u73af\u5883\u901a\u8fc7profile\u6765\u8868\u793a\u914d\u7f6e\u73af\u5883\u901a\u8fc7active\u6765\u9009\u62e9propertise\u6587\u4ef6\u901a\u8fc7springpropertiseactiveid\u6765\u5b9e\u73b0\u4e0d\u540c\u7684\u73af\u5883\u8981\u751f\u6210\u4e0d\u540c\u7684\u6587\u4ef6\u4e0d\u540c\u7684\u6587\u4ef6\u7528\u8fd9\u79cdapplication-propropertise\u683c\u5f0f\u6765\u8868\u793a"},"\u591a\u73af\u5883\u5f00\u53d1\uff0cyml\u6587\u4ef6\u7528---\u6765\u9694\u5f00\uff0c\u4e0d\u540c\u73af\u5883\u901a\u8fc7profile\u6765\u8868\u793a\uff0c\u914d\u7f6e\u73af\u5883\u901a\u8fc7active\u6765\u9009\u62e9,propertise\u6587\u4ef6\u901a\u8fc7spring.propertise.active=id\u6765\u5b9e\u73b0\uff0c\u4e0d\u540c\u7684\u73af\u5883\u8981\u751f\u6210\u4e0d\u540c\u7684\u6587\u4ef6\uff0c\u4e0d\u540c\u7684\u6587\u4ef6\u7528\u8fd9\u79cdapplication-pro.propertise\u683c\u5f0f\u6765\u8868\u793a"),(0,n.kt)("h6",{id:"\u5e26\u53c2\u6570\u542f\u52a8spring-boot--java--jar-springbootjar----springprofilesactivetest"},"\u5e26\u53c2\u6570\u542f\u52a8spring boot  \uff1ajava -jar springboot.jar  --spring.profiles.active=test"),(0,n.kt)("h5",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"springBoot\u4e2d\u56db\u7ea7\u914d\u7f6e\u6587\u4ef6\n1\u7ea7\uff1afile :config/application.yml     \u4f18\u5148\u7ea7\u6700\u9ad8\n\u4e8c\u7ea7\uff1afile:application.yml\n\u4e09\u7ea7:classpath:config/application.yml\n\u56db\u7ea7\uff1aclasspath:application.yml            \u4f18\u5148\u7ea7\u6700\u4f4e\n")),(0,n.kt)("h4",{id:"\u6574\u5408mybatisplus"},"\u6574\u5408mybatisplus"),(0,n.kt)("h5",{id:"\u5b9a\u4e49domain\u5b9e\u4f53\u7c7b\u5b9a\u4e49\u6570\u636e\u5c42\u63a5\u53e3\u4f7f\u5176\u7ee7\u627fbasemapper\u5b9e\u4f53\u7c7b\u540d\u5e76\u6dfb\u52a0\u6ce8\u89e3mapper\u5373\u53ef\u5728\u6d4b\u8bd5\u7c7b\u4e2d\u6dfb\u52a0\u67e5\u627e\u8bed\u53e5"},"\u5b9a\u4e49domain\u5b9e\u4f53\u7c7b\uff0c\u5b9a\u4e49\u6570\u636e\u5c42\u63a5\u53e3\uff0c\u4f7f\u5176\u7ee7\u627fBaseMapper<\u5b9e\u4f53\u7c7b\u540d>,\u5e76\u6dfb\u52a0\u6ce8\u89e3@Mapper\t\uff0c\u5373\u53ef\u5728\u6d4b\u8bd5\u7c7b\u4e2d\u6dfb\u52a0\u67e5\u627e\u8bed\u53e5"),(0,n.kt)("h4",{id:"\u6761\u4ef6\u67e5\u8be2"},"\u6761\u4ef6\u67e5\u8be2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u67e5\u8be2\u6761\u4ef6",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"lambda \u683c\u5f0f")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"QueryWrapper<User> qw=QueryWrapper<User>();\nqw.lambda().lt(User::getAge,65).ge(User::getAge,18)\nList<User> userList=userDao.selectList(qw);\nSystem.out.println(userList);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6295\u5f71 \uff08\u7ed3\u679c\u5305\u542b\u6a21\u578b\u7c7b\u4e2d\u672a\u5b9a\u4e49\u7684\u5c5e\u6027\uff09")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'QueryWrapper<User> qm=new QueryWrapper<User>();\nqm.select("count(*) as nums,gender");\nqm.groupBy("gender");\nList<Map<String,Object>> maps=userDao.selectMaps(qm);\nSystem.out.println(userList);\n')),(0,n.kt)("h5",{id:"\u5b57\u6bb5\u5c04\u548c\u8868\u540d\u6620\u5c04\u5173\u7cfb\u53ef\u4ee5\u901a\u8fc7tabfild\u548ctablename\u6765\u4fee\u6539"},"\u5b57\u6bb5\u5c04\u548c\u8868\u540d\u6620\u5c04\u5173\u7cfb\u53ef\u4ee5\u901a\u8fc7@TabFild()\u548c@TableName\u6765\u4fee\u6539"))}m.isMDXComponent=!0}}]);
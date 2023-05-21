"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[704],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>b});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,b=u["".concat(c,".").concat(d)]||u[d]||g[d]||o;return r?t.createElement(b,i(i({ref:n},p),{},{components:r})):t.createElement(b,i({ref:n},p))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5300:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="springMVC",s={unversionedId:"tutorial-JAVA/Spring-MVC",id:"tutorial-JAVA/Spring-MVC",title:"springMVC",description:"spring mvc\u6280\u672f\u4e0eservlet\u6280\u672f\u529f\u80fd\u7b49\u540c\uff0c\u5747\u5c5e\u4e8eweb\u5c42\u5f00\u53d1\u6280\u672f",source:"@site/docs/tutorial-JAVA/Spring-MVC.mdx",sourceDirName:"tutorial-JAVA",slug:"/tutorial-JAVA/Spring-MVC",permalink:"/docs/tutorial-JAVA/Spring-MVC",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Spring",permalink:"/docs/tutorial-JAVA/Spring"},next:{title:"Mybatis",permalink:"/docs/tutorial-JAVA/Mybatis"}},c={},l=[{value:"spring mvc\u6280\u672f\u4e0eservlet\u6280\u672f\u529f\u80fd\u7b49\u540c\uff0c\u5747\u5c5e\u4e8eweb\u5c42\u5f00\u53d1\u6280\u672f",id:"spring-mvc\u6280\u672f\u4e0eservlet\u6280\u672f\u529f\u80fd\u7b49\u540c\u5747\u5c5e\u4e8eweb\u5c42\u5f00\u53d1\u6280\u672f",level:6}],p={toc:l},u="wrapper";function g(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"springmvc"},"springMVC"),(0,a.kt)("h6",{id:"spring-mvc\u6280\u672f\u4e0eservlet\u6280\u672f\u529f\u80fd\u7b49\u540c\u5747\u5c5e\u4e8eweb\u5c42\u5f00\u53d1\u6280\u672f"},"spring mvc\u6280\u672f\u4e0eservlet\u6280\u672f\u529f\u80fd\u7b49\u540c\uff0c\u5747\u5c5e\u4e8eweb\u5c42\u5f00\u53d1\u6280\u672f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Controller//\u5c06\u8be5\u7c7b\u4ea4\u7ed9spring\u5bb9\u5668\npublic class UserController{\n@RequestMapping("/save") //\u8bbe\u7f6e\u8bbf\u95ee\u8def\u52b2\n@ResponseBody    //\u8bbe\u7f6e\u8bf7\u6c42\u4f53\npublic String save(){\nreturn "{json\u6570\u636e}"\n}\n}\n//\u521d\u59cb\u5316spring mvc\u73af\u5883\n@Configuration\n@ComponentScan("\u5305")\npublic class springMvcConfig{}\n\n//\u521d\u59cb\u5316servlet\u5bb9\u5668\uff0c\u52a0\u8f7dmvc\u73af\u5883\uff0c\u5e76\u8bbe\u7f6espring mvc\u6280\u672f\u5904\u7406\u7684\u8bf7\u6c42\npublic  class ServletContainersInitConfig extends AbstractDispatcherServletInitializer{\n    protected  webApplicationContext  createServletApplicationContext(){\n        AnnotationConfigWebApplocationContext ctx=new AnnotationConfigWebApplocationContext();\n        ctx.register(springMvcConfig.class);//\u6ce8\u518csmvc\u914d\u7f6e\u6587\u4ef6\n        return ctx;\n    }\n    protected String[] getServletMapping(){\n        return new string[]{"/"}  //\u8bbe\u7f6e\u62e6\u622a\u8def\u5f84\n    }\n    protected WebAPPlicationContext createRootApplicationContext(){\n        return null;\n    }\n}\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6392\u9664\u4e00\u4e9b\u6307\u5b9a\u7684bean  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'\u666e\u901a\u53c2\u6570\u7684\u4f20\u9012;\u76f4\u63a5\u5728\u63a5\u6536\u4f53\u65b9\u6cd5\u540e\u7684\u5f62\u53c2\u5217\u8868\u91cc\u586b\u5199\u5373\u53ef\uff0c\u51fa\u73b0\u4e2d\u6587\u4e71\u7801\u95ee\u9898\u53ea\u9700\u8981\u5728servlet\u5bb9\u5668\u4e2d\u6dfb\u52a0\u5b57\u7b26\u7f16\u7801\u8fc7\u6ee4\u5668\u5373\u53ef, getServletFilter( ) ,\u4f7f\u7528@RequestParm("name")\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u524d\u540e\u7aef\u7684\u7ed1\u5b9a\u53c2\u6570')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u666e\u901apojo\u7c7b\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5199\u5728\u5f62\u53c2\u5217\u8868\u5373\u53ef\uff08\u5217\u8868\u7c7b\u4e00\u4e00\u5bf9\u5e94\uff09\uff0c\u5f15\u7528pojo\u7c7b\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7c7b\u540d.\u5c5e\u6027\u540d\u4f20\u9012\u8bbe\u7f6ejson\u683c\u5f0f\u7684\u6570\u636e\u8fd4\u56de\uff0c\u5bfc\u5165jackson-databind\u5750\u6807\u5373\u53ef\uff0cspringmvcconfig\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u6ce8\u89e3EnableWebMvc\u540c\u65f6\u53c2\u6570\u5728\u8bf7\u6c42\u4f53\u4e2d\uff0c\u9700\u8981\u6dfb\u52a0@RequestBody")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Rest\u98ce\u683c,\u901a\u8fc7\u6539\u53d8\u8bf7\u6c42\u65b9\u5f0f\u6765\u786e\u5b9a\u540e\u53f0\u8c03\u7528\u7684\u64cd\u4f5c\u65b9\u5f0f\uff0c\u4f8b\u5982put\u4fee\u6539\u66f4\u65b0\u3002\u3002\u7528Rest\u98ce\u683c\u5bf9\u8d44\u6e90\u8fdb\u884c\u8bbf\u95ee\u79f0\u4e3aRestful"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//springConfig\n@Configuration\n@ComponentScan({"org.example.service"})\n@PropertySource("jdbc.properties")  //\u914d\u7f6e\u8d44\u6e90\u6620\u5c04\u8def\u5f84\n@Import({jdbcConfig.class, MybatisConfig.class}) //\u5c06\u53e6\u5916\u4e24\u4e2a\u6587\u4ef6\u5bfc\u5165\n@EnableTransactionManagement  //\u5f00\u542f\u4e8b\u52a1\u7ba1\u7406\npublic class SpringConfig {\n}\n\n\n//mybatisConfig\npublic class MybatisConfig {\n    @Bean //\u52a0\u5165\u5230spring\u5bb9\u5668\u4e2d\n    public SqlSessionFactoryBean sessionFactoryBean(DataSource dataSource){\n        SqlSessionFactoryBean sqlSessionFactoryBean=new SqlSessionFactoryBean();//\u83b7\u53d6sqlSessionFactoryBean\u5bf9\u8c61\n        sqlSessionFactoryBean.setDataSource(dataSource);  //\u8bbe\u7f6e\u6570\u636e\u6e90\n        sqlSessionFactoryBean.setTypeAliasesPackage("org.example.domain");  //\u8bbe\u7f6e\u522b\u540d\n        return sqlSessionFactoryBean;\n    }\n    @Bean\n    public MapperScannerConfigurer mapperScannerConfigurer(){\n        MapperScannerConfigurer msc=new MapperScannerConfigurer();\n        msc.setBasePackage("org.example.dao");   //\u8bbe\u7f6e\u6620\u5c04\u6e90\n        return msc;\n    }\n}\n\n\n//jdbc properties\njdbc.driver=com.mysql.jdbc.Driver\njdbc.url=jdbc:mysql://localhost:3306/mybatis\njdbc.username=root\njdbc.password=1025\n\n//jdbcConfig\n\npublic class jdbcConfig {\n    @Value("${jdbc.driver}")\n    private String driver;\n    @Value("${jdbc.url}")\n    private String url;\n    @Value("${jdbc.username}")\n    private String username;\n    @Value("${jdbc.password}")\n    private String password;\n\n    @Bean\npublic DataSource dataSource(){\n        //druid\u50cf\u76f8\u5f53\u4e8e\u4e00\u4e2a\u8fde\u63a5\u6c60\uff0c\u53ef\u4ee5\u521b\u5efa\u4e0e\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u8fde\u63a5,\u83b7\u5f97\u6570\u636e\u6e90\n        DruidDataSource dataSource=new DruidDataSource();\n        dataSource.setDriverClassName(driver);\n        dataSource.setUrl(url);\n        dataSource.setUsername(username);\n        dataSource.setPassword(password);\n    return dataSource;\n    }\n    @Bean\n    public PlatformTransactionManager transactionManager(DataSource dataSource){\n        DataSourceTransactionManager ds=new DataSourceTransactionManager();\n        ds.setDataSource(dataSource);   //\u5c06\u6570\u636e\u6e90\u4e8b\u52a1\u7ba1\u7406\u5e73\u53f0\u4ea4\u7ed9spring\n        return ds;\n    }\n}\n\n\n//springMvcConfig\n\n@Configuration\n@ComponentScan("org.example.controller")\n@EnableWebMvc  //\u5f00\u542fweb\npublic class SpringMvcConfig {\n}  \n\n\n\n //servletConfig\n    public class ServletConfig extends AbstractAnnotationConfigDispatcherServletInitializer {\n    @Override\n    protected Class<?>[] getRootConfigClasses() {\n        return new Class[]{SpringConfig.class};//root,\u914d\u7f6espringconfig\n    }\n\n    @Override\n    protected Class<?>[] getServletConfigClasses() {\n        return new Class[]{SpringMvcConfig.class};//web\u5bb9\u5668,\u914d\u7f6ewebmvcConfig\n    }\n\n    @Override\n    protected String[] getServletMappings() {\n        return new String[]{"/"};//\u8bbe\u7f6e\u62e6\u622a\u8def\u52b2\n    }\n}\n\n\n')),(0,a.kt)("p",null,"\u8868\u73b0\u5c42\u6570\u636e\u6a21\u578b\u7684\u5b9a\u5236\u9700\u8981\u524d\u540e\u7aef\u4e1a\u52a1\u7684\u9700\u8981\u6765\u5b9a\uff0c\u7ed3\u679c\u53ef\u4ee5\u5c01\u88c5\u5728\u4e00\u4e2a\u7279\u5b9a\u7684\u5bf9\u8c61\uff08Result\uff09"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f02\u5e38\u5904\u7406\uff1a\u5b9a\u4e49\u7cfb\u7edf\u7ea7\u5f02\u5e38\u548c\u4e1a\u52a1\u7ea7\u5f02\u5e38\u5904\u7406\uff0c\u5206\u522b\u6355\u83b7\u540e\u901a\u8fc7\u4e0d\u540c\u7684\u5904\u7406\uff0c\u5b9a\u4e49\u72b6\u6001\u7801")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u62e6\u622a\u5668\u548c\u8fc7\u6ee4\u5668\u7684\u533a\u522b\uff1aFilter\u5c5e\u4e8eServlet\u6280\u672f\uff0cInterceptor\u5c5e\u4e8espringMVC\u6280\u672f\uff0cfilter\u5bf9\u6240\u6709\u8bbf\u95ee\u8fdb\u884c\u589e\u5f3a\uff0cInterceptor\u4ec5\u9488\u5bf9spring Mvc\u6280\u672f\u8fdb\u884c\u589e\u5f3a \uff0c\u5728controler\u7c7b\u4e0b\u521b\u5efa\u4e00\u4e2aHandlerInterceptor\u63a5\u53e3\uff0c\u901a\u8fc7\u91cd\u5199\u5176\u4e2d\u7684\u65b9\u6cd5\uff0c\u5e76\u4e3a\u8be5\u7c7b\u8bbe\u7f6e\u62e6\u622a\u8def\u7ecf\uff08\u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\u7c7b\u7ee7\u627fwebMvcConfigurationSupport,\u8fd4\u56de\u503c\u4e3aspringMvcSupport\uff09")))}g.isMDXComponent=!0}}]);
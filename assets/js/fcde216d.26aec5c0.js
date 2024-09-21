"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={description:"Project Compilation"},l="Project compilation",s={unversionedId:"tool_manager/tools/quartus/runs",id:"tool_manager/tools/quartus/runs",title:"Project compilation",description:"Project Compilation",source:"@site/docs/11-tool_manager/08-tools/01-quartus/03-runs.md",sourceDirName:"11-tool_manager/08-tools/01-quartus",slug:"/tool_manager/tools/quartus/runs",permalink:"/terosHDLdoc/docs/tool_manager/tools/quartus/runs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/11-tool_manager/08-tools/01-quartus/03-runs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Project Compilation"},sidebar:"tutorialSidebar",previous:{title:"Project creation",permalink:"/terosHDLdoc/docs/tool_manager/tools/quartus/project"},next:{title:"Timing Report",permalink:"/terosHDLdoc/docs/tool_manager/tools/quartus/timing"}},i={},c=[{value:"Tasks manager",id:"tasks-manager",level:2},{value:"Logs and results",id:"logs-and-results",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-compilation"},"Project compilation"),(0,o.kt)("p",null,"After adding a project, you need to select it as the current active project and choose a top level. The selected project/top level has a green tick icon:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quartus",src:r(5803).Z,width:"2483",height:"1590"}))),(0,o.kt)("p",null,"You can add sources either from the Intel\xae Quartus\xae application or from TerosHDL (",(0,o.kt)("a",{parentName:"p",href:"/terosHDLdoc/docs/tool_manager/started#adding-sources"},"go to the section"),")."),(0,o.kt)("h2",{id:"tasks-manager"},"Tasks manager"),(0,o.kt)("p",null,"When the current active project is of the Intel\xae Quartus\xae type, TerosHDL loads it in the task manager. Clicking on any of them will start their execution.\nYou will be able to see in real time the percentage completed, the elapsed time, and the final result."),(0,o.kt)("p",null,"Additionally, with the stop button, you can halt the current task, and by clicking on the trash can icon, you can clear the entire project."),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quartus",src:r(7004).Z,width:"2643",height:"1590"}))),(0,o.kt)("h2",{id:"logs-and-results"},"Logs and results"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you want to see the ",(0,o.kt)("em",{parentName:"p"},"Log Tabl"),"e first you have to open ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"TEROSHDL: LOG REPORT"))," view.")),(0,o.kt)("p",null,"When the task has concluded, you can open the results. There are three types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Log table ",(0,o.kt)("strong",{parentName:"li"},"(1)"),": loads the log message table in a webview. ",(0,o.kt)("strong",{parentName:"li"},"If you click on a message with a location, the editor will take you to the corresponding file and line. You can filter by log level.")),(0,o.kt)("li",{parentName:"ul"},"Plain text logs ",(0,o.kt)("strong",{parentName:"li"},"(2)"),": includes reports, log messages, etc."),(0,o.kt)("li",{parentName:"ul"},"Timing Analyzer ",(0,o.kt)("strong",{parentName:"li"},"(3)"),": opens the timing analyzer.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quartus",src:r(3463).Z,width:"3075",height:"1742"}))))}p.isMDXComponent=!0},3463:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/result-c63f80166ffc7c4e1b8d63267be597c3.png"},7004:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/run-ac83355822d372ce62b25348a90cc0dd.png"},5803:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/select_project-501bf304259cd0747ab90dbd745ca71a.png"}}]);
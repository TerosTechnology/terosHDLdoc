"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[6679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={description:"Getting started"},i="Getting started",l={unversionedId:"tool_manager/started",id:"tool_manager/started",title:"Getting started",description:"Getting started",source:"@site/docs/11-tool_manager/01-started.md",sourceDirName:"11-tool_manager",slug:"/tool_manager/started",permalink:"/terosHDLdoc/docs/tool_manager/started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/11-tool_manager/01-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Getting started"},sidebar:"tutorialSidebar",previous:{title:"Tool manager",permalink:"/terosHDLdoc/docs/category/tool-manager"},next:{title:"Project view",permalink:"/terosHDLdoc/docs/tool_manager/project"}},s={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Project creation",id:"project-creation",level:2},{value:"Adding sources",id:"adding-sources",level:2},{value:"Running your tool",id:"running-your-tool",level:2},{value:"Cleaning your project",id:"cleaning-your-project",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"To run a tool in TerosHDL, you need to first select it in the Tools section of the General tab in the TerosHDL configuration menu."),(0,o.kt)("p",null,"In the Tools section, you will see a list of available tools that can be run in TerosHDL. To select a tool, simply click on its name in the list. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Views",src:n(4879).Z,width:"1397",height:"845"})),(0,o.kt)("h2",{id:"project-creation"},"Project creation"),(0,o.kt)("p",null,"In TerosHDL, you have several options for creating and loading projects. You can create an empty project, load an existing project, or load a project from a VUnit run.py file or example project."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'To create an empty project, simply click on the "Add project" button in the TerosHDL project view and select ',(0,o.kt)("inlineCode",{parentName:"p"},"Empty project"),". This will create a new project with no files or libraries.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To load an existing project select ",(0,o.kt)("inlineCode",{parentName:"p"},"Load project from EDAM"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'To load a project from a VUnit run.py file, simply click on the "Load project from VUnit". This will open a file explorer where you can browse to the location of the run.py file. TerosHDL will automatically load the project based on the information in the run.py file.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Finally, you can also load a project from an example project. This will open a list of example projects that you can choose from. Once you select an example project, TerosHDL will load it into the TerosHDL workspace."))),(0,o.kt)("p",null,"Regardless of how you choose to create or load a project, once it is loaded into TerosHDL, you can start working on it by adding files, running simulations, and generating waveforms."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Views",src:n(2100).Z,width:"1652",height:"845"})),(0,o.kt)("h2",{id:"adding-sources"},"Adding sources"),(0,o.kt)("p",null,"Click you your project (you can see the ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," at the end of the name)."),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Views",src:n(3619).Z,width:"1471",height:"510"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Action"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"From browser"),(0,o.kt)("td",{parentName:"tr",align:null},"Select files from browser.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"From CSV"),(0,o.kt)("td",{parentName:"tr",align:null},"Add files from a CSV list")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"From VUnit"),(0,o.kt)("td",{parentName:"tr",align:null},"Add files from a ",(0,o.kt)("a",{parentName:"td",href:"http://vunit.github.io/"}," VUnit ")," run.py"))))),(0,o.kt)("p",null,"The accepted CSV format is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"file_0.sv\nfile_1.vhd\nfile_2.vhd\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"file_1.vhd, lib_0\nfile_2.vhd\nfile_3.vhd, lib_0\n")),(0,o.kt)("h2",{id:"running-your-tool"},"Running your tool"),(0,o.kt)("p",null,"In the TerosHDL Sources View select your top level file. When you select a file as top level in the project you can see (current) at the end of the name."),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Views",src:n(6393).Z,width:"629",height:"575"}))),(0,o.kt)("p",null,"In the TerosHDL Run View click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Play"),' button. You will see the message "TerosHDL: tool running" in the left bottom corner. And the live log in ',(0,o.kt)("inlineCode",{parentName:"p"},"Output >> TerosHDL: Tool Manager"),"."),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Views",src:n(4035).Z,width:"1312",height:"888"}))),(0,o.kt)("p",null,"Once a simulation or implementation has finished running in TerosHDL, the user can navigate through the generated artifacts. When the user clicks on a report, a webview will be opened showing the report. When the user clicks on a waveform, the waveform viewer will be opened."),(0,o.kt)("p",null,"In addition to navigating through the generated artifacts, users can also check the file created by TerosHDL to execute the project in the Summary section."),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Views",src:n(5158).Z,width:"1312",height:"997"}))),(0,o.kt)("h2",{id:"cleaning-your-project"},"Cleaning your project"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Only supported if you select Raptor Design Suite")),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Run view",src:n(5510).Z,width:"1296",height:"816"})," ")))}d.isMDXComponent=!0},4879:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/config-f0dd67e9d2936b4cf863e766367cb564.png"},5158:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/all-47604a02ab24d7151a84b5389a70639f.png"},2100:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add-4d0894e3df55bdd9a2dd97bddece4866.png"},4035:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/all-a10851ecabef050e1d607a4b15ba284c.png"},3619:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add-cee1b6f24e21619856f5043330c82d89.png"},6393:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/toplevel-be2106a8d494cab213d59df863c00ef5.png"},5510:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clean-9215e3c5f1b41c1a85da8649d18f9131.png"}}]);
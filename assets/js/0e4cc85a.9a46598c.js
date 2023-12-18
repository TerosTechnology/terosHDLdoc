"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[1168],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=l(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,i(i({ref:e},c),{},{components:n})):r.createElement(g,i({ref:e},c))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u[p]="string"==typeof t?t:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3960:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={description:"Quartus Simulation"},i="Quartus Simulation",u={unversionedId:"tool_manager/tools/quartus/simulation",id:"tool_manager/tools/quartus/simulation",title:"Quartus Simulation",description:"Quartus Simulation",source:"@site/docs/11-tool_manager/08-tools/01-quartus/03-simulation.md",sourceDirName:"11-tool_manager/08-tools/01-quartus",slug:"/tool_manager/tools/quartus/simulation",permalink:"/terosHDLdoc/docs/next/tool_manager/tools/quartus/simulation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/11-tool_manager/08-tools/01-quartus/03-simulation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Quartus Simulation"},sidebar:"tutorialSidebar",previous:{title:"Project compilation",permalink:"/terosHDLdoc/docs/next/tool_manager/tools/quartus/runs"},next:{title:"Raptor",permalink:"/terosHDLdoc/docs/next/tool_manager/tools/raptor"}},s={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Running a simulation",id:"running-a-simulation",level:2}],c={toc:l};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quartus-simulation"},"Quartus Simulation"),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Set the mode in which Quartus will run the simulation: Batch mode or GUI."),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Quartus",src:n(1842).Z,width:"1474",height:"853"}))),(0,a.kt)("h2",{id:"running-a-simulation"},"Running a simulation"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Before to run a simulation you have to execute the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Analysis & Elaboration"))," task.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the top level testbench. ")),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Quartus",src:n(8978).Z,width:"1474",height:"853"}))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Run the test.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Quartus",src:n(9657).Z,width:"1256",height:"857"}))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"If you are running the simulation in batch mode you can check the results in the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Testbench - Output"))," view.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Quartus",src:n(8372).Z,width:"1256",height:"857"}))))}p.isMDXComponent=!0},8372:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/simulation_output-7b71ab9c85158440b47d4dc3da0b554a.png"},9657:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/simulation_run-bd091734c63203a8dfbfda50dfd1a5d8.png"},1842:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/simulation_settings-311a5d2930fd4ea40d7499a58a661e55.png"},8978:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/testbench_toplevel-40caf9a1fd2b4edc0ba018ad846c1acb.png"}}]);
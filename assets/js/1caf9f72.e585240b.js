"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[8477],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={description:"Getting Started"},i="Getting Started",c={unversionedId:"documenter/getting_started",id:"documenter/getting_started",title:"Getting Started",description:"Getting Started",source:"@site/docs/08-documenter/01-getting_started.md",sourceDirName:"08-documenter",slug:"/documenter/getting_started",permalink:"/teroshdl-docusaurus-doc/docs/documenter/getting_started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/08-documenter/01-getting_started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Documenter",permalink:"/teroshdl-docusaurus-doc/docs/category/documenter"},next:{title:"Verilog/SV elements",permalink:"/teroshdl-docusaurus-doc/docs/documenter/verilog_elements"}},l={},s=[{value:"Tutorial",id:"tutorial",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"tutorial"},"Tutorial"),(0,o.kt)("p",null,"You have ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TerosTechnology/teroshdl-examples/tree/main/documenter/examples"},"some examples"),". Or you can add a project with all the samples from the TerosHDL project manager using ",(0,o.kt)("a",{parentName:"p",href:"/teroshdl-docusaurus-doc/docs/tool_manager/project#adding-a-project"},"Load Example")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"A special symbol can be configured to identify the comments to be extracted from the HDL file. The special symbol must follow the comment characters of the language that is being used."),(0,o.kt)("p",null,'By default TerosHDL uses "!" as symbol but you can configure it in: ',(0,o.kt)("inlineCode",{parentName:"p"},"TerosHDL >> Configuration >> Documenter >> General")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vhdl"},"-- Other comment not included\n--! This is a description\n--! of the entity.\nentity counter is\nport (\n    clk: in std_logic; --! Clock comment\n    out_data: out std_logic --! Description **port comment**\n);\nend counter;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-verilog"},"// This is a\n// license header\n//! This is a description\n//! of the module.\nmodule flipflop (q,qbar,clk);\n        output reg q; //! Port 0\n        output qbar; //! Port 1\n        input clk; //! Clock\n")))}d.isMDXComponent=!0}}]);
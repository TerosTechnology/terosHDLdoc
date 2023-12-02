"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[1220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,v=m["".concat(d,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={description:"Wavedrom"},i="WaveDrom",l={unversionedId:"documenter/wavedrom",id:"documenter/wavedrom",title:"WaveDrom",description:"Wavedrom",source:"@site/docs/08-documenter/05-wavedrom.md",sourceDirName:"08-documenter",slug:"/documenter/wavedrom",permalink:"/terosHDLdoc/docs/next/documenter/wavedrom",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/08-documenter/05-wavedrom.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Wavedrom"},sidebar:"tutorialSidebar",previous:{title:"Virtual Bus",permalink:"/terosHDLdoc/docs/next/documenter/virtual_bus"},next:{title:"State Machine Viewer",permalink:"/terosHDLdoc/docs/next/category/state-machine-viewer"}},d={},s=[{value:"Adding WaveDrom in design",id:"adding-wavedrom-in-design",level:2},{value:"adding Bitfield",id:"adding-bitfield",level:2}],c={toc:s};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wavedrom"},"WaveDrom"),(0,a.kt)("p",null,'WaveDrom is a JavaScript application. WaveJSON is a format that describes Digital Timing Diagrams. WaveDrom renders the diagrams directly inside the browser. Element "signal" is an array of WaveLanes. Each WaveLane has two mandatory fields: "name" and "wave".'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Entire syntax for WaveDrom can be found in this ",(0,a.kt)("a",{parentName:"p",href:"https://wavedrom.com/tutorial.html"},"link"))),(0,a.kt)("h2",{id:"adding-wavedrom-in-design"},"Adding WaveDrom in design"),(0,a.kt)("p",null,"The documenter detects WaveDrom using the same comment recognition as any other element."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"WaveDrom will only be detected on the head of the file.")),(0,a.kt)("p",null,"lets look at a basic example in ",(0,a.kt)("strong",{parentName:"p"},"verilog")," for adding wavedrom in your documentation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-verilog"},'//! { signal: [\n//!  { name: "clk",  wave: "P......" },\n//!  { name: "bus",  wave: "x.==.=x", data: ["head", "body", "tail", "data"] },\n//!  { name: "wire", wave: "0.1..0." }\n//! ],\n//!  head:{\n//!     text:\'WaveDrom example\',\n//!     tick:0,\n//!     every:2\n//!   }}\n')),(0,a.kt)("p",null,"and its resulting wavedrom in documentation:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("i",null,"Image 1: WaveDrom Example "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example Problem",src:n(8578).Z,width:"520",height:"342"})," ")),(0,a.kt)("h2",{id:"adding-bitfield"},"adding Bitfield"),(0,a.kt)("p",null,"Bitfield is an extension for Wavedrom which allows to write breakdowns of registers for every bit "),(0,a.kt)("p",null,"lets look on a example using ",(0,a.kt)("strong",{parentName:"p"},"VHDL")," of a bitfield"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vhdl"},'--! {reg: [\n--!    { "name": "IPO",   "bits": 8, "attr": "RO" },\n--!    {                  "bits": 7 },\n--!     { "name": "BRK",   "bits": 5, "attr": "RW", "type": 4 },\n--!     { "name": "CPK",   "bits": 1 },\n--!     { "name": "Clear", "bits": 3 },\n--!     { "bits": 8 }\n--!]}\n')),(0,a.kt)("p",null,"and its resulting bitfield in documentation:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("i",null,"Image 2: Bitfield Example "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example Problem",src:n(1261).Z,width:"1041",height:"219"})," ")))}m.isMDXComponent=!0},1261:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bitfield-example-b4783aecdc8957e76a7aa5439a8001de.png"},8578:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wavedrom-example-f9c1a4d668586add092623440ccb230a.png"}}]);
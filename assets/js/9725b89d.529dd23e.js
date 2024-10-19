"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[8417],{8324:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(4848),a=i(8453);const r={description:"Wavedrom"},d="WaveDrom",s={id:"guides/documenter/wavedrom",title:"WaveDrom",description:"Wavedrom",source:"@site/docs/06-guides/05-documenter/05-wavedrom.md",sourceDirName:"06-guides/05-documenter",slug:"/guides/documenter/wavedrom",permalink:"/docs/guides/documenter/wavedrom",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-guides/05-documenter/05-wavedrom.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Wavedrom"},sidebar:"tutorialSidebar",previous:{title:"Virtual Bus",permalink:"/docs/guides/documenter/virtual_bus"},next:{title:"Code Formatting",permalink:"/docs/guides/formatter"}},o={},c=[{value:"Adding WaveDrom in design",id:"adding-wavedrom-in-design",level:2},{value:"adding Bitfield",id:"adding-bitfield",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"wavedrom",children:"WaveDrom"})}),"\n",(0,t.jsx)(n.p,{children:'WaveDrom is a JavaScript application. WaveJSON is a format that describes Digital Timing Diagrams. WaveDrom renders the diagrams directly inside the browser. Element "signal" is an array of WaveLanes. Each WaveLane has two mandatory fields: "name" and "wave".'}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Entire syntax for WaveDrom can be found in this ",(0,t.jsx)(n.a,{href:"https://wavedrom.com/tutorial.html",children:"link"})]})}),"\n",(0,t.jsx)(n.h2,{id:"adding-wavedrom-in-design",children:"Adding WaveDrom in design"}),"\n",(0,t.jsx)(n.p,{children:"The documenter detects WaveDrom using the same comment recognition as any other element."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"WaveDrom will only be detected on the head of the file."})}),"\n",(0,t.jsxs)(n.p,{children:["lets look at a basic example in ",(0,t.jsx)(n.strong,{children:"verilog"})," for adding wavedrom in your documentation:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:'//! { signal: [\n//!  { name: "clk",  wave: "P......" },\n//!  { name: "bus",  wave: "x.==.=x", data: ["head", "body", "tail", "data"] },\n//!  { name: "wire", wave: "0.1..0." }\n//! ],\n//!  head:{\n//!     text:\'WaveDrom example\',\n//!     tick:0,\n//!     every:2\n//!   }}\n'})}),"\n",(0,t.jsx)(n.p,{children:"and its resulting wavedrom in documentation:"}),"\n",(0,t.jsxs)("p",{align:"center",children:[(0,t.jsx)("i",{children:"Image 1: WaveDrom Example "}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Example Problem",src:i(2676).A+"",width:"520",height:"342"})})]}),"\n",(0,t.jsx)(n.h2,{id:"adding-bitfield",children:"adding Bitfield"}),"\n",(0,t.jsx)(n.p,{children:"Bitfield is an extension for Wavedrom which allows to write breakdowns of registers for every bit"}),"\n",(0,t.jsxs)(n.p,{children:["lets look on a example using ",(0,t.jsx)(n.strong,{children:"VHDL"})," of a bitfield"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vhdl",children:'--! {reg: [\n--!    { "name": "IPO",   "bits": 8, "attr": "RO" },\n--!    {                  "bits": 7 },\n--!     { "name": "BRK",   "bits": 5, "attr": "RW", "type": 4 },\n--!     { "name": "CPK",   "bits": 1 },\n--!     { "name": "Clear", "bits": 3 },\n--!     { "bits": 8 }\n--!]}\n'})}),"\n",(0,t.jsx)(n.p,{children:"and its resulting bitfield in documentation:"}),"\n",(0,t.jsxs)("p",{align:"center",children:[(0,t.jsx)("i",{children:"Image 2: Bitfield Example "}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Example Problem",src:i(4742).A+"",width:"1041",height:"219"})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4742:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/bitfield-example-b4783aecdc8957e76a7aa5439a8001de.png"},2676:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/wavedrom-example-f9c1a4d668586add092623440ccb230a.png"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>s});var t=i(6540);const a={},r=t.createContext(a);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
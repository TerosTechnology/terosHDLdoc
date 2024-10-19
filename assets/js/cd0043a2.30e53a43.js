"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[7924],{1550:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(4848),t=n(8453);const s={description:"The linter provides real-time feedback to detect and highlight errors in your HDL code.",id:"linter"},o="Linting (errors checking)",l={id:"guides/linter",title:"Linting (errors checking)",description:"The linter provides real-time feedback to detect and highlight errors in your HDL code.",source:"@site/docs/06-guides/02-linter.md",sourceDirName:"06-guides",slug:"/guides/linter",permalink:"/docs/guides/linter",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-guides/02-linter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"The linter provides real-time feedback to detect and highlight errors in your HDL code.",id:"linter"},sidebar:"tutorialSidebar",previous:{title:"Other basic features",permalink:"/docs/guides/editor/other"},next:{title:"Linting (style checking)",permalink:"/docs/guides/style"}},d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Checking errors",id:"checking-errors",level:2}];function h(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"linting-errors-checking",children:"Linting (errors checking)"})}),"\n",(0,i.jsx)(r.p,{children:"TerosHDL checks your code for potential errors, bugs, and stylistic issues, helping you to write code that is more readable, maintainable, and error-free."}),"\n",(0,i.jsx)(r.p,{children:"Overall, using TerosHDL linting in VSCode can help you write better code by catching errors and enforcing style guidelines, saving you time and reducing the risk of bugs and maintenance issues down the line."}),"\n",(0,i.jsxs)(r.p,{children:["TerosHDL supports the following tools as ",(0,i.jsx)("b",{children:"VHDL"})," linters:"]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Tool"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"VHDL-LS"}),(0,i.jsx)(r.td,{children:"Built-in linter, you don't need extra installation"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"GHDL"}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Modelsim"}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Vivado (xhdl)"}),(0,i.jsx)(r.td,{})]})]})]})}),"\n",(0,i.jsxs)(r.p,{children:["TerosHDL supports the following tools as ",(0,i.jsx)("b",{children:"Verilog/SystemVerilog"})," linters:"]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Tool"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Icarus"}),(0,i.jsx)(r.td,{children:"iverilog"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Modelsim"}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Verilator"}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Vivado (xvlog)"}),(0,i.jsx)(r.td,{})]})]})]})}),"\n",(0,i.jsxs)(r.admonition,{type:"danger",children:[(0,i.jsx)(r.p,{children:"Currently TerosHDL linter has a limitation in that it only analyzes the current file you are working on and does not take into account other files in your project. This means that if there is a dependency or module that is used in other files, the linter cannot analyze them to find issues or errors."}),(0,i.jsx)(r.p,{children:"Only VHDL-LS for VHDL supports multiple files."})]}),"\n",(0,i.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(r.p,{children:["You need to install the linter (Vivado, GHDL...) and configure the path in: ",(0,i.jsx)(r.code,{children:"TerosHDL configuration >> Tools >> Tool name >> Installation path"})," Yo need to set the directory where the binary is located."]}),"\n",(0,i.jsxs)(r.p,{children:["Under the configuration menu, you'll find ",(0,i.jsx)("i",{children:"Linter Settings"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["TerosHDL allows you to pass arguments for each linter tool. E.g: ",(0,i.jsx)(r.code,{children:"--std=08 --ieee=synopsys"})]}),"\n",(0,i.jsx)(r.h2,{id:"checking-errors",children:"Checking errors"}),"\n",(0,i.jsx)(r.p,{children:"Once configuration was performed correctly, TerosHDL will route all errors from your chosen linter to VSCode built in error system."}),"\n",(0,i.jsx)(r.p,{children:"Errors detected will be shown with red squigglies."}),"\n",(0,i.jsx)(r.p,{children:"Hovering over the error will show the linters reported issue:"}),"\n",(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("i",{children:"Image 1: Example Error in Code"}),(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Example Error",src:n(7778).A+"",width:"605",height:"390"})})]}),"\n",(0,i.jsxs)(r.p,{children:["You can also see all of the errors in all of the currently open files under the ",(0,i.jsx)("i",{children:"Problems"})," tab:"]}),"\n",(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("i",{children:"Image 2: Example Error in Problems"}),(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Example Error",src:n(2113).A+"",width:"1009",height:"237"})})]})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7778:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/linter-error-example-f213022e478aa45f4765058d041a33e8.png"},2113:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/linter-problems-f40686bae8471f78e157416af530e88a.png"},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var i=n(6540);const t={},s=i.createContext(t);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);
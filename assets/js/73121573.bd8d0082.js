"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[5844],{2212:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>A,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(4848),n=t(8453);const r={description:"using the schematic viewer"},o="Usage",c={id:"guides/schematic_viewer/usage",title:"Usage",description:"using the schematic viewer",source:"@site/docs/06-guides/08-schematic_viewer/02-usage.md",sourceDirName:"06-guides/08-schematic_viewer",slug:"/guides/schematic_viewer/usage",permalink:"/docs/guides/schematic_viewer/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-guides/08-schematic_viewer/02-usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"using the schematic viewer"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/guides/schematic_viewer/installation"},next:{title:"External Tools Integration",permalink:"/docs/external_tools/"}},a={},d=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Usage report",id:"usage-report",level:2},{value:"Custom yosys command",id:"custom-yosys-command",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"usage",children:"Usage"})}),"\n",(0,i.jsx)(s.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,i.jsx)(s.p,{children:'To view the schematic for the current file you have open, click "Netlist viewer" on the top right of the window:'}),"\n",(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("i",{children:"Image 1: Netlist viewer button "}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Netlist viewer button",src:t(2252).A+"",width:"342",height:"143"})})]}),"\n",(0,i.jsx)(s.p,{children:"This will open a new window with the current schematic of the design."}),"\n",(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("i",{children:"Image 2: Opened schematic "}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Opened schematic",src:t(9513).A+"",width:"1058",height:"848"})})]}),"\n",(0,i.jsx)(s.p,{children:"as long as the schematic viewer is opened, any changes done in the file will automatically update the schematic."}),"\n",(0,i.jsx)(s.h2,{id:"usage-report",children:"Usage report"}),"\n",(0,i.jsx)(s.p,{children:'yosys also output the utilization of cells used to create this schematic, you can view the results under the "Output" section of VScode.'}),"\n",(0,i.jsx)(s.p,{children:"if the design failed to synthesize, you can view the issues in this window as well."}),"\n",(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("i",{children:"Image 3: Usage report "}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Usage report",src:t(4342).A+"",width:"721",height:"507"})})]}),"\n",(0,i.jsx)(s.h2,{id:"custom-yosys-command",children:"Custom yosys command"}),"\n",(0,i.jsx)(s.p,{children:"You can also modify the command sent to yosys for synthesis, this can be done in the configuration menu of TerosHDL"}),"\n",(0,i.jsx)(s.p,{children:"The default command for verilog is:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"read_verilog -sv {CURRENTFILE}; proc; opt; write_json teroshdl_yosys_output.json; stat\n"})}),"\n",(0,i.jsx)(s.p,{children:"And for vhdl is:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"ghdl --std=08 -fsynopsys {CURRENTFILE} -e; proc; opt; write_json teroshdl_yosys_output.json; stat\n"})}),"\n",(0,i.jsx)(s.p,{children:"One example you can use is to map the schematic to a technology map."}),"\n",(0,i.jsxs)(s.p,{children:["This can be done by adding ",(0,i.jsx)(s.code,{children:"synth"})," to the yosys command, we now get the following schematic for the example shown previously.\nhere, yosys implemented the design using logic primitives rather than RTL."]}),"\n",(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("i",{children:"Image 4: Opened schematic post synthesis "}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Opened schematic post synthesis",src:t(722).A+"",width:"990",height:"614"})})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["you can find additional commands in the yosys documentation in this ",(0,i.jsx)(s.a,{href:"https://yosyshq.readthedocs.io/projects/yosys/en/latest/",children:"link"})]})})]})}function A(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9513:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/schemtatic-viewer-window-45d9056212107d243a24fdd1459d45a9.png"},722:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/schemtic-post-synth-558582036c07bc96afb3eb3a4c5a0ff3.png"},4342:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/usage-report-31924953744847e96b9772809f33086d.png"},2252:(e,s,t)=>{t.d(s,{A:()=>i});const i="data:image/png;base64,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"},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var i=t(6540);const n={},r=i.createContext(n);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);
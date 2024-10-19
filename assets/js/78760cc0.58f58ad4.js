"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[1759],{9039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=n(4848),o=n(8453),i=n(6025);const s={description:"TerosHDL Walkthrough",id:"TerosHDL Walkthrough"},c="Walkthrough",l={id:"getting_started/TerosHDL Walkthrough",title:"Walkthrough",description:"TerosHDL Walkthrough",source:"@site/docs/03-getting_started/02-walkthrough.md",sourceDirName:"03-getting_started",slug:"/getting_started/TerosHDL Walkthrough",permalink:"/terosHDLdoc/docs/getting_started/TerosHDL Walkthrough",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-getting_started/02-walkthrough.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"TerosHDL Walkthrough",id:"TerosHDL Walkthrough"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/terosHDLdoc/docs/getting_started/configuration"},next:{title:"Setting up a Project",permalink:"/terosHDLdoc/docs/project_configuration/"}},d={},a=[{value:"1. TerosHDL Sidebar",id:"1-teroshdl-sidebar",level:2},{value:"2. Editor View",id:"2-editor-view",level:2},{value:"3. Log Console",id:"3-log-console",level:2},{value:"4. Outline",id:"4-outline",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"walkthrough",children:"Walkthrough"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#1-teroshdl-sidebar",children:"TerosHDL Sidebar"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#2-editor-view",children:"Editor Commands"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#3-log-console",children:"Log console"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#4-outline",children:"Outline"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)("img",{src:(0,i.Ay)("/img/gettingStarted/walkthrough.png")}),";"]}),"\n",(0,r.jsx)(t.h2,{id:"1-teroshdl-sidebar",children:"1. TerosHDL Sidebar"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/terosHDLdoc/docs/project_configuration/project",children:"Projects"}),": Create a new project, import an existing one, select the current project..."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/terosHDLdoc/docs/project_configuration/sources",children:"Files"}),": Add, import, delete... files and libraries."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/terosHDLdoc/docs/project_configuration/hierarchy",children:"Hierarchy"}),": Shows the hierarchy and dependencies between the various modules or files in the project, allowing you to understand the structure of the design."]}),"\n",(0,r.jsx)(t.li,{children:"[Testbenches]:"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/terosHDLdoc/docs/project_configuration/watcher",children:"Watchers"}),":"]}),"\n",(0,r.jsx)(t.li,{children:"[Tasks]: Tasks you can perform in a project: Open the working directory, run a test, view results..."}),"\n",(0,r.jsx)(t.li,{children:"[IP Catalog]: IP catalog for Quartus projects."}),"\n",(0,r.jsx)(t.li,{children:"[Testbenches - Output]: Test and compilations results."}),"\n",(0,r.jsx)(t.li,{children:"[Configuration]: Open the settings menu, view documentation, check TerosHDL settings..."}),"\n"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)("img",{src:(0,i.Ay)("/img/gettingStarted/sidebar.png")}),";"]})}),"\n",(0,r.jsx)(t.h2,{id:"2-editor-view",children:"2. Editor View"}),"\n",(0,r.jsx)(t.p,{children:"When you open an HDL file (VHDL/Verilog/SV), the icons for TerosHDL commands will appear\nin the top right corner of the editor:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/terosHDLdoc/docs/guides/formatter",children:"Code Formatting"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/terosHDLdoc/docs/guides/documenter/getting_started",children:"Auto Documentation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/terosHDLdoc/docs/guides/schematic_viewer/installation",children:"Schematic Viewer"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/terosHDLdoc/docs/guides/state_machine_viewer/usage",children:"State Machine Viewer"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/terosHDLdoc/docs/guides/templates",children:"Template Generator: testbenches, entity..."})}),"\n"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)("img",{src:(0,i.Ay)("/img/gettingStarted/editor.png")}),";"]})}),"\n",(0,r.jsx)(t.h2,{id:"3-log-console",children:"3. Log Console"}),"\n",(0,r.jsxs)(t.p,{children:["In TerosHDL, you can access the log console by using the Output panel. To open the Output panel,\ngo to the View menu, select Output, or use the shortcut ",(0,r.jsx)("kbd",{children:"Ctrl + Shift + U"})," on\nWindows and Linux, or ",(0,r.jsx)("kbd",{children:"Cmd + Shift + U"})," on macOS. Once the Output panel is open, you\ncan select different types of log outputs from the dropdown menu at the right-hand side\nof the panel:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"TerosHDL: Debug"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"TerosHDL: Global"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"TerosHDL: Tool Manager"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"4-outline",children:"4. Outline"}),"\n",(0,r.jsx)(t.p,{children:"The Outline view in TerosHDL is a powerful tool that provides a hierarchical overview of the symbols in your code file.\nIt displays a structured tree view of all the ports, entities, and other significant elements present in the file.\nThis feature helps developers quickly navigate through complex files and understand the structure of their code at a glance."}),"\n",(0,r.jsx)(t.p,{children:"You can access the Outline view from the Explorer pane or activate it using the command palette. The symbols in the\nOutline are organized in the order they appear in the code, and you can click on any symbol to jump directly to its\nlocation in the file."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
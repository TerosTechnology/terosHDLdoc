"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[575],{3929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=r(4848),s=r(8453);const i={},o="Watcher",c={id:"project_configuration/watcher",title:"Watcher",description:"---",source:"@site/docs/04-project_configuration/05-watcher.md",sourceDirName:"04-project_configuration",slug:"/project_configuration/watcher",permalink:"/terosHDLdoc/docs/project_configuration/watcher",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-project_configuration/05-watcher.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hierarchy",permalink:"/terosHDLdoc/docs/project_configuration/hierarchy"},next:{title:"Manual Compilation Order",permalink:"/terosHDLdoc/docs/project_configuration/manual_compilation_order"}},a={},h=[{value:"description: Watcher",id:"description-watcher",level:2},{value:"Summary of a Watcher&#39;s Role:",id:"summary-of-a-watchers-role",level:3}];function l(e){const t={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"watcher",children:"Watcher"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"description-watcher",children:"description: Watcher"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.strong,{children:"Watcher"})," in the context of this discussion about VUnit projects in TerosHDL is a feature that monitors specific files (like ",(0,n.jsx)(t.code,{children:"run.py"}),") for changes and updates relevant views in the VSCode extension automatically."]}),"\n",(0,n.jsx)(t.p,{children:"Here\u2019s a breakdown:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Purpose"}),":",(0,n.jsx)(t.br,{}),"\n","A Watcher is used to keep track of source files, like ",(0,n.jsx)(t.code,{children:"run.py"}),", that define the project\u2019s structure (e.g., testbenches, file hierarchies). When you add ",(0,n.jsx)(t.code,{children:"run.py"})," as a Watcher, TerosHDL will automatically update the hierarchy view as the file changes."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Behavior"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["When you add ",(0,n.jsx)(t.code,{children:"run.py"})," as a ",(0,n.jsx)(t.strong,{children:"Source"})," in TerosHDL, you can ",(0,n.jsx)(t.strong,{children:"run your tests"}),' from the "Run" pane, but you won\u2019t see the file hierarchy in the hierarchy pane.']}),"\n",(0,n.jsxs)(t.li,{children:["When you add ",(0,n.jsx)(t.code,{children:"run.py"})," as a ",(0,n.jsx)(t.strong,{children:"Watcher"}),", you can ",(0,n.jsx)(t.strong,{children:"see the hierarchy"}),' in the hierarchy pane, but you won\u2019t be able to run tests directly from the "Run" pane.']}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Limitation"}),":",(0,n.jsx)(t.br,{}),"\n","The current implementation splits these two functionalities (running tests and seeing hierarchy) between Sources and Watchers. The contributor acknowledges this is confusing and suggests it would be better to have a specific ",(0,n.jsx)(t.strong,{children:"VUnit project type"})," that integrates both features."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"summary-of-a-watchers-role",children:"Summary of a Watcher's Role:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A Watcher automatically tracks file changes."}),"\n",(0,n.jsx)(t.li,{children:"It updates the hierarchy view in real time."}),"\n",(0,n.jsxs)(t.li,{children:["It does ",(0,n.jsx)(t.strong,{children:"not"}),' allow running tests directly from the "Run" pane.']}),"\n",(0,n.jsx)(t.li,{children:"It's best used when you need to keep your hierarchy view up to date as your project files change."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This feature is especially helpful when working with dynamic project structures like those managed by VUnit, where the test hierarchy and file dependencies can change frequently."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
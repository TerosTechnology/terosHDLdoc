"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[9810],{3628:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=o(4848),r=o(8453);const i={description:"Raptor"},s="Raptor",l={id:"external_tools/raptor",title:"Raptor",description:"Raptor",source:"@site/docs/11-external_tools/03-raptor.md",sourceDirName:"11-external_tools",slug:"/external_tools/raptor",permalink:"/terosHDLdoc/docs/external_tools/raptor",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/11-external_tools/03-raptor.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Raptor"},sidebar:"tutorialSidebar",previous:{title:"Quartus Simulation",permalink:"/terosHDLdoc/docs/external_tools/quartus/simulation"},next:{title:"Tutorials",permalink:"/terosHDLdoc/docs/category/tutorials"}},a={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Running an implentation",id:"running-an-implentation",level:2},{value:"Running a simulation",id:"running-a-simulation",level:2},{value:"Running a Raptor project sample",id:"running-a-raptor-project-sample",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"raptor",children:"Raptor"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"TerosHDL is compatible with Raptor 2023.04 (Ubuntu)"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terosHDLdoc/docs/external_tools/run",children:"Configure Raptor as your tool."})}),"\n",(0,t.jsxs)(n.li,{children:["Configure your Raptor binary directory in the ",(0,t.jsx)(n.a,{href:"/terosHDLdoc/docs/external_tools/run",children:"TerosHDL configuration"}),": ",(0,t.jsx)(n.code,{children:"TerosHDL >> Configuration >> Tools >> Raptor Design Suite >> Installation path"}),". E.g: ",(0,t.jsx)(n.code,{children:"/opt/RapidSilicon/Raptor/2023.04/bin"})]}),"\n",(0,t.jsxs)(n.li,{children:["Configure your GTKwave binary path: ",(0,t.jsx)(n.code,{children:"TerosHDL >> Configuration >> Tools >> General >> GTKWave"}),". E.g: ",(0,t.jsx)(n.code,{children:"/opt/RapidSilicon/Raptor/2023.04/bin/gtkwave/bin"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-an-implentation",children:"Running an implentation"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terosHDLdoc/docs/project_configuration/project#creating-and-importing-projects",children:"Create an empty project."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terosHDLdoc/docs/project_configuration/sources#adding-sources-to-a-project",children:"Select the project and add your sources."})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Don't add the testbenches as source. You need to configure your testbench paths in the Raptor configuration menu."})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terosHDLdoc/docs/project_configuration/sources#selecting-the-toplevel",children:"Select the top level and run the implementation."})}),"\n",(0,t.jsxs)(n.li,{children:["Navigate through the generated artifacts:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Summary: TCL project file."}),"\n",(0,t.jsx)(n.li,{children:"Routing, Place... reports."}),"\n",(0,t.jsx)(n.li,{children:"Simulation waveforms."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If, in the outputs view, you click in ",(0,t.jsx)(n.code,{children:"Summary >> Build folder"})," TerosHDL will open your Raptor project folder."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-a-simulation",children:"Running a simulation"}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["In the Raptor configuration (",(0,t.jsx)(n.code,{children:"TerosHDL >> Configuration >> Tools >> Raptor Design Suite"}),") select ",(0,t.jsx)(n.em,{children:"RTL simulation"}),", ",(0,t.jsx)(n.em,{children:"Simulate Gate"}),"..."]}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Views",src:o(4071).A+"",width:"1980",height:"1100"})})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Create a new empty project."}),"\n",(0,t.jsx)(n.li,{children:"Select the project."}),"\n",(0,t.jsx)(n.li,{children:"Add your desing sources and constraints files."}),"\n",(0,t.jsxs)(n.li,{children:["Configure your top testbench path in: ",(0,t.jsx)(n.code,{children:"TerosHDL >> Configuration >> Tools >> Raptor Design Suite >> Simulation top level path"}),". E.g: ",(0,t.jsx)(n.code,{children:"/home/carlos/rapidsilicon/tcl_examples/counter_vhdl/testbench.vhd"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Configure other testbench sources in: ",(0,t.jsx)(n.code,{children:"TerosHDL >> Configuration >> Tools >> Raptor Design Suite >> Other simulation sources"}),". E.g: ",(0,t.jsx)(n.code,{children:"/home/carlos/rapidsilicon/tcl_examples/counter_vhdl/testbench.vhd, /home/carlos/rapidsilicon/tcl_examples/counter_vhdl/other_testbench.vhd"}),". If you want to add more than one source you need to put a comma: ",(0,t.jsx)(n.code,{children:"/source/one.v, /source/two.v"})]}),"\n",(0,t.jsx)(n.li,{children:"Run Raptor"}),"\n",(0,t.jsx)(n.li,{children:"Open your waveform from the Output View."}),"\n",(0,t.jsxs)(n.li,{children:["If, in the outputs view, you click in ",(0,t.jsx)(n.code,{children:"Summary >> Build folder"})," TerosHDL will open your Raptor project folder."]}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Views",src:o(6010).A+"",width:"421",height:"614"})})}),"\n",(0,t.jsx)(n.h2,{id:"running-a-raptor-project-sample",children:"Running a Raptor project sample"}),"\n",(0,t.jsxs)(n.p,{children:["You can add a Raptor project sample from ",(0,t.jsx)(n.a,{href:"/terosHDLdoc/docs/project_configuration/project#creating-and-importing-projects",children:"the TerosHDL menu"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"raptor_counter"}),"\n",(0,t.jsx)(n.li,{children:"raptor_counter_vhdl"}),"\n",(0,t.jsx)(n.li,{children:"AES_DECRYPT"}),"\n",(0,t.jsx)(n.li,{children:"raptor_and2_gemini"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"After this you need to configure the Tool Manager and Raptor."})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4071:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/config-a0a094d4c74e29b06ee67bd2f03f090e.png"},6010:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/output-41a3598bfa4099d978bf2b616e5f94eb.png"},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(6540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
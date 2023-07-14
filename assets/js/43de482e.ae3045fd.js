"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[3362],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(o),d=n,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return o?r.createElement(g,i(i({ref:t},c),{},{components:o})):r.createElement(g,i({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8788:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={description:"Raptor"},i="Raptor",l={unversionedId:"tool_manager/tools/raptor",id:"tool_manager/tools/raptor",title:"Raptor",description:"Raptor",source:"@site/docs/11-tool_manager/07-tools/01-raptor.md",sourceDirName:"11-tool_manager/07-tools",slug:"/tool_manager/tools/raptor",permalink:"/terosHDLdoc/docs/tool_manager/tools/raptor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/11-tool_manager/07-tools/01-raptor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Raptor"},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/terosHDLdoc/docs/category/tools"},next:{title:"Tutorials",permalink:"/terosHDLdoc/docs/category/tutorials"}},p={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Running an implentation",id:"running-an-implentation",level:2},{value:"Running a simulation",id:"running-a-simulation",level:2},{value:"Running a Raptor project sample",id:"running-a-raptor-project-sample",level:2},{value:"Cleaning your project stages",id:"cleaning-your-project-stages",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"raptor"},"Raptor"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"TerosHDL is compatible with Raptor 2023.04 (Ubuntu)")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/terosHDLdoc/docs/tool_manager/started#configuration"},"Configure Raptor as your tool.")),(0,n.kt)("li",{parentName:"ol"},"Configure your Raptor binary directory in the ",(0,n.kt)("a",{parentName:"li",href:"/terosHDLdoc/docs/getting_started/views#configuration-menu"},"TerosHDL configuration"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"TerosHDL >> Configuration >> Tools >> Raptor Design Suite >> Installation path"),". E.g: ",(0,n.kt)("inlineCode",{parentName:"li"},"/opt/RapidSilicon/Raptor/2023.04/bin")),(0,n.kt)("li",{parentName:"ol"},"Configure your GTKwave binary path: ",(0,n.kt)("inlineCode",{parentName:"li"},"TerosHDL >> Configuration >> Tools >> General >> GTKWave"),". E.g: ",(0,n.kt)("inlineCode",{parentName:"li"},"/opt/RapidSilicon/Raptor/2023.04/bin/gtkwave/bin"))),(0,n.kt)("h2",{id:"running-an-implentation"},"Running an implentation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/terosHDLdoc/docs/tool_manager/started#project-creation"},"Create an empty project.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/terosHDLdoc/docs/tool_manager/started#adding-sources"},"Select the project and add your sources."))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Don't add the testbenches as source. You need to configure your testbench paths in the Raptor configuration menu.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/terosHDLdoc/docs/tool_manager/started#running-your-tool"},"Select the top level and run the implementation.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/terosHDLdoc/docs/tool_manager/started#running-your-tool"},"Navigate through the generated artifacts"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Summary: TCL project file."),(0,n.kt)("li",{parentName:"ul"},"Routing, Place... reports."),(0,n.kt)("li",{parentName:"ul"},"Simulation waveforms."))),(0,n.kt)("li",{parentName:"ol"},"If, in the outputs view, you click in ",(0,n.kt)("inlineCode",{parentName:"li"},"Summary >> Build folder")," TerosHDL will open your Raptor project folder.")),(0,n.kt)("h2",{id:"running-a-simulation"},"Running a simulation"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"In the Raptor configuration (",(0,n.kt)("inlineCode",{parentName:"li"},"TerosHDL >> Configuration >> Tools >> Raptor Design Suite"),") select ",(0,n.kt)("em",{parentName:"li"},"RTL simulation"),", ",(0,n.kt)("em",{parentName:"li"},"Simulate Gate"),"...")),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Views",src:o(4298).Z,width:"1980",height:"1100"}))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Create a new empty project."),(0,n.kt)("li",{parentName:"ol"},"Select the project."),(0,n.kt)("li",{parentName:"ol"},"Add your desing sources and constraints files."),(0,n.kt)("li",{parentName:"ol"},"Configure your top testbench path in: ",(0,n.kt)("inlineCode",{parentName:"li"},"TerosHDL >> Configuration >> Tools >> Raptor Design Suite >> Simulation top level path"),". E.g: ",(0,n.kt)("inlineCode",{parentName:"li"},"/home/carlos/rapidsilicon/tcl_examples/counter_vhdl/testbench.vhd"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure other testbench sources in: ",(0,n.kt)("inlineCode",{parentName:"li"},"TerosHDL >> Configuration >> Tools >> Raptor Design Suite >> Other simulation sources"),". E.g: ",(0,n.kt)("inlineCode",{parentName:"li"},"/home/carlos/rapidsilicon/tcl_examples/counter_vhdl/testbench.vhd, /home/carlos/rapidsilicon/tcl_examples/counter_vhdl/other_testbench.vhd"),". If you want to add more than one source you need to put a comma: ",(0,n.kt)("inlineCode",{parentName:"li"},"/source/one.v, /source/two.v")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/terosHDLdoc/docs/tool_manager/started#running-your-tool"},"Run Raptor")),(0,n.kt)("li",{parentName:"ol"},"Open your waveform from the Output View."),(0,n.kt)("li",{parentName:"ol"},"If, in the outputs view, you click in ",(0,n.kt)("inlineCode",{parentName:"li"},"Summary >> Build folder")," TerosHDL will open your Raptor project folder.")),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Views",src:o(6434).Z,width:"421",height:"614"}))),(0,n.kt)("h2",{id:"running-a-raptor-project-sample"},"Running a Raptor project sample"),(0,n.kt)("p",null,"You can add a Raptor project sample from ",(0,n.kt)("a",{parentName:"p",href:"/terosHDLdoc/docs/tool_manager/started#project-creation"},"the TerosHDL menu"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"raptor_counter"),(0,n.kt)("li",{parentName:"ul"},"raptor_counter_vhdl"),(0,n.kt)("li",{parentName:"ul"},"AES_DECRYPT"),(0,n.kt)("li",{parentName:"ul"},"raptor_and2_gemini")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"After this you need to configure the ",(0,n.kt)("a",{parentName:"p",href:"/terosHDLdoc/docs/tool_manager/started#configuration"},"Tool Manager")," and ",(0,n.kt)("a",{parentName:"p",href:"#configuration"},"Raptor"),".")),(0,n.kt)("h2",{id:"cleaning-your-project-stages"},"Cleaning your project stages"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/terosHDLdoc/docs/tool_manager/started#cleaning-your-project"},"Clean your project"),"."))}u.isMDXComponent=!0},4298:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/config-a0a094d4c74e29b06ee67bd2f03f090e.png"},6434:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/output-41a3598bfa4099d978bf2b616e5f94eb.png"}}]);
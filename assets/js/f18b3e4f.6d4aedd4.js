"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[2637],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(a),s=n,g=c["".concat(d,".").concat(s)]||c[s]||m[s]||l;return a?r.createElement(g,i(i({ref:e},u),{},{components:a})):r.createElement(g,i({ref:e},u))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[c]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},559:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={description:"Source view"},i="Source view",o={unversionedId:"tool_manager/source",id:"tool_manager/source",title:"Source view",description:"Source view",source:"@site/docs/11-tool_manager/03-source.md",sourceDirName:"11-tool_manager",slug:"/tool_manager/source",permalink:"/terosHDLdoc/docs/next/tool_manager/source",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/11-tool_manager/03-source.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Source view"},sidebar:"tutorialSidebar",previous:{title:"Project view",permalink:"/terosHDLdoc/docs/next/tool_manager/project"},next:{title:"Run view",permalink:"/terosHDLdoc/docs/next/tool_manager/run"}},d={},p=[{value:"Adding source",id:"adding-source",level:2},{value:"Source configuration",id:"source-configuration",level:2},{value:"Adding library",id:"adding-library",level:2},{value:"Adding source to library",id:"adding-source-to-library",level:2},{value:"Deleting source/library",id:"deleting-sourcelibrary",level:2},{value:"Setting project toplevel file",id:"setting-project-toplevel-file",level:2},{value:"Sources added manually vs automated",id:"sources-added-manually-vs-automated",level:2}],u={toc:p};function c(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"source-view"},"Source view"),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Project view",src:a(4478).Z,width:"581",height:"495"})," ")),(0,n.kt)("h2",{id:"adding-source"},"Adding source"),(0,n.kt)("p",{align:"center"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Action"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"From browser"),(0,n.kt)("td",{parentName:"tr",align:null},"Select files from browser.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"From CSV"),(0,n.kt)("td",{parentName:"tr",align:null},"Add files from a CSV list")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"From VUnit"),(0,n.kt)("td",{parentName:"tr",align:null},"Add files from a ",(0,n.kt)("a",{parentName:"td",href:"http://vunit.github.io/"}," VUnit ")," run.py"))))),(0,n.kt)("p",null,"The accepted CSV format is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"file_0.sv\nfile_1.vhd\nfile_2.vhd\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"file_1.vhd, lib_0\nfile_2.vhd\nfile_3.vhd, lib_0\n")),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Project view",src:a(3619).Z,width:"1471",height:"510"})," ")),(0,n.kt)("h2",{id:"source-configuration"},"Source configuration"),(0,n.kt)("p",null,"You can configure the properties of a project source. You can set the file type, language version, and type."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Languages"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"vhdlSource"),(0,n.kt)("td",{parentName:"tr",align:null},"VHDL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"verilogSource"),(0,n.kt)("td",{parentName:"tr",align:null},"Verilog")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"systemVerilogSource"),(0,n.kt)("td",{parentName:"tr",align:null},"SystemVerilog")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cSource"),(0,n.kt)("td",{parentName:"tr",align:null},"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cppSource"),(0,n.kt)("td",{parentName:"tr",align:null},"C++")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"python"),(0,n.kt)("td",{parentName:"tr",align:null},"Python")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"veribleLintRules"),(0,n.kt)("td",{parentName:"tr",align:null},"Verible Linter Rules")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tclSource"),(0,n.kt)("td",{parentName:"tr",align:null},"TCL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"xdc"),(0,n.kt)("td",{parentName:"tr",align:null},"Xilinx Vivado constraint file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sdc"),(0,n.kt)("td",{parentName:"tr",align:null},"Constraints File")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pin"),(0,n.kt)("td",{parentName:"tr",align:null},"Pin declaration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"xci"),(0,n.kt)("td",{parentName:"tr",align:null},"Xilinx Vivado IP file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sbyConfigTemplate"),(0,n.kt)("td",{parentName:"tr",align:null},"SymbiYosys")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"osvvmProject"),(0,n.kt)("td",{parentName:"tr",align:null},"OSVVM Project")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"QIP"),(0,n.kt)("td",{parentName:"tr",align:null},"Intel Quartus IP file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UCF"),(0,n.kt)("td",{parentName:"tr",align:null},"Xilinx ISE constraint file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IP"),(0,n.kt)("td",{parentName:"tr",align:null},"IP declaration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"QSYS"),(0,n.kt)("td",{parentName:"tr",align:null},"Quartus IP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"none"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Languages"),(0,n.kt)("th",{parentName:"tr",align:null},"Versions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VHDL"),(0,n.kt)("td",{parentName:"tr",align:null},"2008, 2000, 93")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Verilog/SV"),(0,n.kt)("td",{parentName:"tr",align:null},"2005, 2000")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Source Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Versions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Simulation"),(0,n.kt)("td",{parentName:"tr",align:null},"Testbenches")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Synthesis"),(0,n.kt)("td",{parentName:"tr",align:null},"Synthesizable Sources")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"Not specified")))),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Project view",src:a(7340).Z,width:"1178",height:"891"})," ")),(0,n.kt)("h2",{id:"adding-library"},"Adding library"),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Project view",src:a(3619).Z,width:"1471",height:"510"})," ")),(0,n.kt)("h2",{id:"adding-source-to-library"},"Adding source to library"),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Project view",src:a(4951).Z,width:"562",height:"511"})," ")),(0,n.kt)("h2",{id:"deleting-sourcelibrary"},"Deleting source/library"),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Project view",src:a(533).Z,width:"599",height:"478"})," ")),(0,n.kt)("h2",{id:"setting-project-toplevel-file"},"Setting project toplevel file"),(0,n.kt)("p",null,"When you select a file as toplevel in the project you can see ",(0,n.kt)("inlineCode",{parentName:"p"},"(current)")," at the end of the name."),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Project view",src:a(7813).Z,width:"629",height:"575"})," ")),(0,n.kt)("h2",{id:"sources-added-manually-vs-automated"},"Sources added manually vs automated"))}c.isMDXComponent=!0},3619:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/add-cee1b6f24e21619856f5043330c82d89.png"},4951:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/add_to_lib-70adcb4dc01f73b705306c7b5f93a0f2.png"},533:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/delete-5c0f09c004d9849f3111df27b159a0d5.png"},4478:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/general-3301820a2ecf1e92eed1fd31ecc31ac3.png"},7340:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/sourceConfiguration-5105cb3f922a4131845847e0147d635c.png"},7813:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/toplevel-be2106a8d494cab213d59df863c00ef5.png"}}]);
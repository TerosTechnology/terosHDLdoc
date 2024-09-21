"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[7841],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8879:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={description:"Virtual Bus"},o="Virtual Bus",l={unversionedId:"documenter/virtual_bus",id:"documenter/virtual_bus",title:"Virtual Bus",description:"Virtual Bus",source:"@site/docs/08-documenter/04-virtual_bus.md",sourceDirName:"08-documenter",slug:"/documenter/virtual_bus",permalink:"/terosHDLdoc/docs/documenter/virtual_bus",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/08-documenter/04-virtual_bus.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Virtual Bus"},sidebar:"tutorialSidebar",previous:{title:"VHDL elements",permalink:"/terosHDLdoc/docs/documenter/vhdl_elements"},next:{title:"WaveDrom",permalink:"/terosHDLdoc/docs/documenter/wavedrom"}},u={},s=[{value:"Virtual Bus Syntax",id:"virtual-bus-syntax",level:2}],c={toc:s};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"virtual-bus"},"Virtual Bus"),(0,a.kt)("p",null,"Virtual bus allows you to create additional documentation sections of groups of signals which are related."),(0,a.kt)("p",null,"Each virtual bus you'll define will create a new table like this:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("i",null,"Image 1: Virtual bus Example "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example Virtual Bus",src:r(9184).Z,width:"978",height:"319"})," ")),(0,a.kt)("p",null,"Which was generated by the following verilog code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-verilog"},"module virtualbus (\n    //! @virtualbus m00_axi4_stream @dir in\n    //! tdata of stream\n    input [7:0] m00_tdata,\n    //! valid of stream\n    input   m00_tvalid,\n    //! id of current message\n    input [3:0] m00_tid,\n    //! destination of packet\n    input [3:0] m00_tdest,\n    //! this device is ready to receive\n    output reg m00_tready,\n    //! @end\n\n    input clk,\n    input rstn\n);\n\nendmodule\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"by default, the documenter will use ",(0,a.kt)("inlineCode",{parentName:"p"},"--! ")," (in VHDL) and ",(0,a.kt)("inlineCode",{parentName:"p"},"//!")," (in Verilog) to recognize things to document.")),(0,a.kt)("h2",{id:"virtual-bus-syntax"},"Virtual Bus Syntax"),(0,a.kt)("p",null,"The syntax for the virtual bus is as follows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To start a virtual bus, begin the group with ",(0,a.kt)("inlineCode",{parentName:"p"},"//! @virtualbus BUSNAME")," and close the group with ",(0,a.kt)("inlineCode",{parentName:"p"},"//! @end"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"after the BUSNAME, you can add a description for the virtual bus.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To choose the direction of the virtual bus, add ",(0,a.kt)("inlineCode",{parentName:"p"}," @dir in")," or ",(0,a.kt)("inlineCode",{parentName:"p"}," @dir out")," respectively")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you don't want the signals to be grouped in the block diagram, you can add ",(0,a.kt)("inlineCode",{parentName:"p"},"@keepports"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"you can add description to each port in the virtual bus either Above or Inline with the port."))))}p.isMDXComponent=!0},9184:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/virtual-bus-example-5f4977d883ac84ffed38e497e675f816.png"}}]);
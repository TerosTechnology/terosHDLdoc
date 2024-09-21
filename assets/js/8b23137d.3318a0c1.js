"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[9328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(y,r(r({ref:t},u),{},{components:n})):o.createElement(y,r({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={description:"setup of schematic viewer"},r="Getting started",s={unversionedId:"schematic_viewer/installation",id:"schematic_viewer/installation",title:"Getting started",description:"setup of schematic viewer",source:"@site/docs/10-schematic_viewer/01-installation.md",sourceDirName:"10-schematic_viewer",slug:"/schematic_viewer/installation",permalink:"/terosHDLdoc/docs/schematic_viewer/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/10-schematic_viewer/01-installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"setup of schematic viewer"},sidebar:"tutorialSidebar",previous:{title:"Schematic Viewer",permalink:"/terosHDLdoc/docs/category/schematic-viewer"},next:{title:"Usage",permalink:"/terosHDLdoc/docs/schematic_viewer/usage"}},l={},c=[{value:"Linux/Mac/Windows",id:"linuxmacwindows",level:2},{value:"Standalone",id:"standalone",level:2},{value:"Verilog",id:"verilog",level:3},{value:"VHDL",id:"vhdl",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"TerosHDL supports a basic visualization of the current file you have open. TerosHDL uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/YosysHQ/yosys"},"yosys"),", which is an open source hdl synth tool."),(0,a.kt)("p",null,"The following section describes how to get your environment ready for using the schematic viewer."),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"linuxmacwindows"},"Linux/Mac/Windows"),(0,a.kt)("p",null,"TerosHDL suggests ",(0,a.kt)("inlineCode",{parentName:"p"},"OSS CAD Suite"),", which is a prebuilt collection of tools which also includes Yosys + VHDL support.\nYou can download ",(0,a.kt)("inlineCode",{parentName:"p"},"OSS CAD Suite")," by following this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/YosysHQ/oss-cad-suite-build?tab=readme-ov-file#installation"},"link")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'TerosHDL expects the tools to be available in the PATH variable, ensure you add the "bin" folder of the ',(0,a.kt)("inlineCode",{parentName:"p"},"OSS CAD Suite")," to your operating system PATH variable. In other case you need to configure your Yosys installation path in: ",(0,a.kt)("inlineCode",{parentName:"p"},"TerosHDL Configuration >> Tools >> Yosys >> Installation Path"))),(0,a.kt)("h2",{id:"standalone"},"Standalone"),(0,a.kt)("p",null,"TerosHDL includes a WebAssembly version of Yosys for Verilog/SV. You can select it in: ",(0,a.kt)("inlineCode",{parentName:"p"},"TerosHDL Configuration >> Schematic Viewer >> General >> Backend >> Standalone")," and you don't need to install anything."),(0,a.kt)("h3",{id:"verilog"},"Verilog"),(0,a.kt)("p",null,"If you plan to only use verilog in your designs, you can use yowasp-yosys, which is a distribution of yosys running as an executable."),(0,a.kt)("p",null,"You only need to run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install yowasp-yosys\n")),(0,a.kt)("p",null,"To use yowasp-yosys, select ",(0,a.kt)("strong",{parentName:"p"},"YOWASP")," in the configuration menu: ",(0,a.kt)("inlineCode",{parentName:"p"},"TerosHDL Configuration >> Schematic Viewer >> General >> Backend")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you are using Windows add ",(0,a.kt)("inlineCode",{parentName:"p"},"yowasp-yosys")," to the System Path. For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Users\\xxx\\AppData\\Local\\Packages\\PythonSoftwareFoundation.Python.3.7_qbz5n2kfra8p0\\LocalCache\\local-packages\\Python37\\Scripts"))),(0,a.kt)("p",null,"As alternative you can install Yosys using ",(0,a.kt)("inlineCode",{parentName:"p"},"OSS CAD Suite"),": ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/YosysHQ/oss-cad-suite-build?tab=readme-ov-file#installation"},"https://github.com/YosysHQ/oss-cad-suite-build?tab=readme-ov-file#installation")),(0,a.kt)("h3",{id:"vhdl"},"VHDL"),(0,a.kt)("p",null,"Yosys was natively designed to work with verilog and thus an additional plugin is required to support VHDL."),(0,a.kt)("p",null,"To use yosys+ghdl, select ",(0,a.kt)("strong",{parentName:"p"},"GHDL + Yosys")," in the configuration menu."),(0,a.kt)("p",null,"You can install Yosys+GHDL using ",(0,a.kt)("inlineCode",{parentName:"p"},"OSS CAD Suite"),": ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/YosysHQ/oss-cad-suite-build?tab=readme-ov-file#installation"},"https://github.com/YosysHQ/oss-cad-suite-build?tab=readme-ov-file#installation")))}p.isMDXComponent=!0}}]);
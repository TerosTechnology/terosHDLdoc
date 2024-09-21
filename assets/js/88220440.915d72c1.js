"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[9113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=d(n),u=i,m=f["".concat(c,".").concat(u)]||f[u]||p[u]||r;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),i=(n(7294),n(3905));const r={description:"Go to definition"},a="Go to definition",l={unversionedId:"editor/go_to_definition",id:"editor/go_to_definition",title:"Go to definition",description:"Go to definition",source:"@site/docs/03-editor/03-go_to_definition.md",sourceDirName:"03-editor",slug:"/editor/go_to_definition",permalink:"/terosHDLdoc/docs/editor/go_to_definition",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-editor/03-go_to_definition.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Go to definition"},sidebar:"tutorialSidebar",previous:{title:"Code highlighting (syntax coloring)",permalink:"/terosHDLdoc/docs/editor/syntaxt"},next:{title:"Hover",permalink:"/terosHDLdoc/docs/editor/hover"}},c={},d=[],s={toc:d};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"go-to-definition"},"Go to definition"),(0,i.kt)("p",null,"Go to Definition allows HDL designers to quickly navigate to the location in the code where a particular function, variable, or other element is defined. This feature is especially useful when working with large codebases or unfamiliar code, where it may be difficult to manually search for the definition of a specific element."),(0,i.kt)("p",null,"When a designer selects an element in the code editor, TerosHDL analyzes the code and navigates to the location where that element is defined. This may involve jumping to another file, function, or module, depending on the structure of the code."),(0,i.kt)("p",null,"Go to Definition can be triggered in a variety of ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can go to the definition of a symbol by pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"F12")),(0,i.kt)("li",{parentName:"ul"},"You can jump to the definition with ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl+Click")," or open the definition to the side with ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl+Alt+Click"))),(0,i.kt)("p",null,"Overall, Go to Definition is a powerful tool that can save developers a significant amount of time and effort when working with complex code. It helps developers navigate and understand the structure of the codebase more efficiently, which can ultimately lead to faster and more effective coding."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Jumping between files only supported in VHDL")),(0,i.kt)("p",{align:"center"},(0,i.kt)("i",null,"Image 1: Go to definition Verilog Example "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example Problem",src:n(8223).Z,width:"1190",height:"808"})," ")),(0,i.kt)("p",{align:"center"},(0,i.kt)("i",null,"Image 2: Go to definition Verilog Example "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example Problem",src:n(4404).Z,width:"1190",height:"808"})," ")))}f.isMDXComponent=!0},8223:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/go_to_definition_verilog-de342cb5446fce515a784237ec323ffd.gif"},4404:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/go_to_definition_vhdl-979bfbc29b5421076e0c5771281fb4f4.gif"}}]);
"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[2637],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={description:"Source view"},l="Source view",i={unversionedId:"tool_manager/source",id:"tool_manager/source",title:"Source view",description:"Source view",source:"@site/docs/11-tool_manager/03-source.md",sourceDirName:"11-tool_manager",slug:"/tool_manager/source",permalink:"/terosHDLdoc/docs/tool_manager/source",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/11-tool_manager/03-source.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Source view"},sidebar:"tutorialSidebar",previous:{title:"Project view",permalink:"/terosHDLdoc/docs/tool_manager/project"},next:{title:"Run view",permalink:"/terosHDLdoc/docs/tool_manager/run"}},c={},d=[{value:"Adding source",id:"adding-source",level:2},{value:"Adding library",id:"adding-library",level:2},{value:"Adding source to library",id:"adding-source-to-library",level:2},{value:"Deleting source/library",id:"deleting-sourcelibrary",level:2},{value:"Setting project toplevel file",id:"setting-project-toplevel-file",level:2},{value:"Sources added manually vs automated",id:"sources-added-manually-vs-automated",level:2}],s={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"source-view"},"Source view"),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project view",src:r(4478).Z,width:"581",height:"495"})," ")),(0,a.kt)("h2",{id:"adding-source"},"Adding source"),(0,a.kt)("p",{align:"center"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Action"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"From browser"),(0,a.kt)("td",{parentName:"tr",align:null},"Select files from browser.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"From CSV"),(0,a.kt)("td",{parentName:"tr",align:null},"Add files from a CSV list")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"From VUnit"),(0,a.kt)("td",{parentName:"tr",align:null},"Add files from a ",(0,a.kt)("a",{parentName:"td",href:"http://vunit.github.io/"}," VUnit ")," run.py"))))),(0,a.kt)("p",null,"The accepted CSV format is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"file_0.sv\nfile_1.vhd\nfile_2.vhd\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"file_1.vhd, lib_0\nfile_2.vhd\nfile_3.vhd, lib_0\n")),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project view",src:r(3619).Z,width:"1471",height:"510"})," ")),(0,a.kt)("h2",{id:"adding-library"},"Adding library"),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project view",src:r(3619).Z,width:"1471",height:"510"})," ")),(0,a.kt)("h2",{id:"adding-source-to-library"},"Adding source to library"),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project view",src:r(4951).Z,width:"562",height:"511"})," ")),(0,a.kt)("h2",{id:"deleting-sourcelibrary"},"Deleting source/library"),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project view",src:r(533).Z,width:"599",height:"478"})," ")),(0,a.kt)("h2",{id:"setting-project-toplevel-file"},"Setting project toplevel file"),(0,a.kt)("p",null,"When you select a file as toplevel in the project you can see ",(0,a.kt)("inlineCode",{parentName:"p"},"(current)")," at the end of the name."),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project view",src:r(6393).Z,width:"629",height:"575"})," ")),(0,a.kt)("h2",{id:"sources-added-manually-vs-automated"},"Sources added manually vs automated"))}u.isMDXComponent=!0},3619:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add-cee1b6f24e21619856f5043330c82d89.png"},4951:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add_to_lib-70adcb4dc01f73b705306c7b5f93a0f2.png"},533:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/delete-5c0f09c004d9849f3111df27b159a0d5.png"},4478:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/general-3301820a2ecf1e92eed1fd31ecc31ac3.png"},6393:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/toplevel-be2106a8d494cab213d59df863c00ef5.png"}}]);
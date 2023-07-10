"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[949],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),u=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(r),c=a,k=m["".concat(d,".").concat(c)]||m[c]||p[c]||l;return r?n.createElement(k,o(o({ref:e},s),{},{components:r})):n.createElement(k,o({ref:e},s))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5673:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={description:"Stutter mode."},o="Stutter mode",i={unversionedId:"editor/shutter_mode",id:"editor/shutter_mode",title:"Stutter mode",description:"Stutter mode.",source:"@site/docs/03-editor/07.shutter_mode.md",sourceDirName:"03-editor",slug:"/editor/shutter_mode",permalink:"/teroshdl-docusaurus-doc/docs/editor/shutter_mode",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-editor/07.shutter_mode.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Stutter mode."},sidebar:"tutorialSidebar",previous:{title:"Autocomplete and snippets",permalink:"/teroshdl-docusaurus-doc/docs/editor/snippets"},next:{title:"Outline",permalink:"/teroshdl-docusaurus-doc/docs/editor/outline"}},d={},u=[{value:"VHDL",id:"vhdl",level:2},{value:"Delimiter Shortcuts",id:"delimiter-shortcuts",level:3},{value:"Bracket Shortcuts",id:"bracket-shortcuts",level:3},{value:"Comment Shortcuts",id:"comment-shortcuts",level:3},{value:"SV/Verilog",id:"svverilog",level:2},{value:"Comment Shortcuts",id:"comment-shortcuts-1",level:3}],s={toc:u};function m(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stutter-mode"},"Stutter mode"),(0,a.kt)("p",null,"This feature provides shortcuts to cumbersome syntax elements via multiple presses of certain keys. This optional feature is disabled by default, and can be turned on for Operators, Brackets and Comments as per the following subsections. In order for this to work, you must also set ",(0,a.kt)("inlineCode",{parentName:"p"},'"editor.formatOnType": true')," to enable live replacement of text as you type."),(0,a.kt)("p",null,"Both delimiter and bracket shortcut groups only apply outside of comments."),(0,a.kt)("h2",{id:"vhdl"},"VHDL"),(0,a.kt)("h3",{id:"delimiter-shortcuts"},"Delimiter Shortcuts"),(0,a.kt)("p",null,"Enable via ",(0,a.kt)("inlineCode",{parentName:"p"},"TerosHDL config menu >> Editor >> General >> Stutter Delimiter Shortcuts"),"."),(0,a.kt)("p",{align:"center"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Shortcut"),(0,a.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"''"),(0,a.kt)("td",{parentName:"tr",align:null},'"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},";;"),(0,a.kt)("td",{parentName:"tr",align:null},":")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},";;;"),(0,a.kt)("td",{parentName:"tr",align:null},":=")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".."),(0,a.kt)("td",{parentName:"tr",align:null},"=>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},",,"),(0,a.kt)("td",{parentName:"tr",align:null},"<="))))),(0,a.kt)("p",null,'For all operator replacements (i.e. except "), spaces will be added either side of the replacement if not already present.'),(0,a.kt)("p",{align:"center"},(0,a.kt)("i",null,"Image 1: Delimiter "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example Problem",src:r(5008).Z,width:"1630",height:"1416"})," ")),(0,a.kt)("h3",{id:"bracket-shortcuts"},"Bracket Shortcuts"),(0,a.kt)("p",null,"Enable via ",(0,a.kt)("inlineCode",{parentName:"p"},"TerosHDL config menu >> Editor >> General >> Stutter Bracket Shortcuts"),'. Note: These replacements are compatible with "editor.autoClosingBrackets": true, so long as the corresponding close bracket shortcut is also used as this will overwrite the incorrect suggestion.'),(0,a.kt)("p",{align:"center"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Shortcut"),(0,a.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"["),(0,a.kt)("td",{parentName:"tr",align:null},"(")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[["),(0,a.kt)("td",{parentName:"tr",align:null},"]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"]"),(0,a.kt)("td",{parentName:"tr",align:null},")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"]]"),(0,a.kt)("td",{parentName:"tr",align:null},"]"))))),(0,a.kt)("h3",{id:"comment-shortcuts"},"Comment Shortcuts"),(0,a.kt)("p",null,"Enable via ",(0,a.kt)("inlineCode",{parentName:"p"},"TerosHDL config menu >> Editor >> General >> Stutter Comment Shortcuts"),": true."),(0,a.kt)("p",{align:"center"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Shortcut"),(0,a.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"---"),(0,a.kt)("td",{parentName:"tr",align:null},"Line separator, defined by ",(0,a.kt)("inlineCode",{parentName:"td"},"TerosHDL config menu >> Editor >> General >> Stutter Block Width"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"----"),(0,a.kt)("td",{parentName:"tr",align:null},"Display comment (surrounded by line separators)"))))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"An enter keypress at the end of a line that contains a non-empty comment will continue the comment on the next line. This can be cancelled by pressing enter again.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("i",null,"Image 1: Comment "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example Problem",src:r(2663).Z,width:"1630",height:"1416"})," ")),(0,a.kt)("h2",{id:"svverilog"},"SV/Verilog"),(0,a.kt)("h3",{id:"comment-shortcuts-1"},"Comment Shortcuts"),(0,a.kt)("p",null,"Enable via ",(0,a.kt)("inlineCode",{parentName:"p"},"TerosHDL config menu >> Editor >> General >> Stutter Comment Shortcuts"),": true."),(0,a.kt)("p",{align:"center"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Shortcut"),(0,a.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"---"),(0,a.kt)("td",{parentName:"tr",align:null},"Line separator, defined by ",(0,a.kt)("inlineCode",{parentName:"td"},"TerosHDL config menu >> Editor >> General >> Stutter Block Width"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"----"),(0,a.kt)("td",{parentName:"tr",align:null},"Display comment (surrounded by line separators)"))))))}m.isMDXComponent=!0},2663:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/stutter_comment-4d76ccb38c85a5b06ace039dadf8ffd7.gif"},5008:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/stutter_delimiter-207c38c5cbeecaddccd633d98ec6f67e.gif"}}]);
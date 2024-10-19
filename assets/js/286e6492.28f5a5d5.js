"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[313],{3240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(4848),i=t(8453),s=t(1470),l=t(9365);const a={description:"VHDL with open source tools",id:"tutorial_vhdl"},o="VHDL simulation with open source tools",c={id:"tutorials/tutorial_vhdl",title:"VHDL simulation with open source tools",description:"VHDL with open source tools",source:"@site/docs/13-tutorials/01-vhdl.md",sourceDirName:"13-tutorials",slug:"/tutorials/tutorial_vhdl",permalink:"/terosHDLdoc/docs/tutorials/tutorial_vhdl",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/13-tutorials/01-vhdl.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"VHDL with open source tools",id:"tutorial_vhdl"},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/terosHDLdoc/docs/category/tutorials"},next:{title:"Development: backend",permalink:"/terosHDLdoc/docs/development"}},d={},u=[{value:"Requirements",id:"requirements",level:2},{value:"GHDL installation",id:"ghdl-installation",level:2},{value:"TerosHDL configuration",id:"teroshdl-configuration",level:2},{value:"Adding an example project",id:"adding-an-example-project",level:2},{value:"Running simulation",id:"running-simulation",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"vhdl-simulation-with-open-source-tools",children:"VHDL simulation with open source tools"})}),"\n",(0,r.jsx)(n.p,{children:"In this tutorial I will show you how to simulate your VHDL designs with TerosHDL and GHDL."}),"\n",(0,r.jsx)(n.p,{children:"GHDL is an open-source compiler and simulator for the VHDL hardware description language. It allows designers to simulate and test digital circuit designs written in VHDL, which is commonly used in the development of electronic systems."}),"\n",(0,r.jsx)(n.p,{children:"GHDL is a command-line tool that supports VHDL-87, VHDL-93, VHDL-2002, and VHDL-2008 standards. It is designed to be highly portable and can run on a variety of platforms, including Windows, Linux, and macOS."}),"\n",(0,r.jsx)(n.p,{children:"One of the key benefits of GHDL is that it can be used for both compilation and simulation. It can compile VHDL code into executable files that can be run on a simulator or FPGA, and it can also simulate the behavior of a digital circuit design, allowing designers to verify their designs before they are implemented in hardware."}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.p,{children:["Follow all the steps to install ",(0,r.jsx)(n.a,{href:"/terosHDLdoc/docs/installation_checklist/installation",children:"TerosHDL and the requirements"})]}),"\n",(0,r.jsx)(n.h2,{id:"ghdl-installation",children:"GHDL installation"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"windows",label:"Windows",default:!0,children:(0,r.jsx)("ul",{children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Install MinGW by downloading and running the MinGW installer from the MinGW website (",(0,r.jsx)("a",{href:"http://www.mingw.org/",children:(0,r.jsx)(n.a,{href:"http://www.mingw.org/",children:"http://www.mingw.org/"})}),"). Follow the prompts to install MinGW to a directory on your computer, such as ",(0,r.jsxs)("code",{children:["C",":MinGW"]}),".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.li,{children:["Open the terminal or command prompt and type: ",(0,r.jsx)("code",{children:"pacman -S mingw-w64-x86_64-ghdl"})]}),"\n"]})})}),(0,r.jsx)(l.A,{value:"linux",label:"Linux",children:(0,r.jsxs)(n.p,{children:["Open a terminal window by pressing ",(0,r.jsx)("code",{children:"Ctrl + Alt + T"}),' or searching for "Terminal" in the applications menu.. Type: ',(0,r.jsx)("code",{children:"sudo apt install ghdl"})]})}),(0,r.jsx)(l.A,{value:"mac",label:"Mac",children:(0,r.jsx)("ul",{children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open a terminal window by going to Applications > Utilities > Terminal.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.li,{children:["Install Xcode, which includes Make, by running the following command: ",(0,r.jsx)("code",{children:"xcode-select"}),". This will prompt you to install the Xcode Command Line Tools, which includes Make.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.li,{children:["Install Homebrew by running the following command in a Terminal window: ",(0,r.jsxs)("code",{children:['/bin/bash -c "$(curl -fsSL ',(0,r.jsx)(n.a,{href:"https://raw.githubusercontent.com/Homebrew/install/master/install.sh",children:"https://raw.githubusercontent.com/Homebrew/install/master/install.sh"}),')"']}),".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.li,{children:["Install GHDL by running the following command in a Terminal window: ",(0,r.jsx)("code",{children:"brew install ghdl"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),"\n"]})})})]}),"\n",(0,r.jsx)(n.h2,{id:"teroshdl-configuration",children:"TerosHDL configuration"}),"\n",(0,r.jsx)(n.p,{children:"Select GHDL as tool:"}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Config",src:t(464).A+"",width:"1459",height:"795"})})}),"\n",(0,r.jsx)(n.p,{children:"Configure your GHDL installation path:"}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Config",src:t(5028).A+"",width:"1459",height:"795"})})}),"\n",(0,r.jsx)(n.h2,{id:"adding-an-example-project",children:"Adding an example project"}),"\n",(0,r.jsxs)(n.p,{children:["Select: ",(0,r.jsx)(n.code,{children:"Load an example project -> GHDL"})]}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Config",src:t(3361).A+"",width:"1652",height:"845"})})}),"\n",(0,r.jsx)(n.h2,{id:"running-simulation",children:"Running simulation"}),"\n",(0,r.jsxs)(n.p,{children:["In sources view select ",(0,r.jsx)(n.code,{children:"half_adder_tb.vhd"})," as top level. You will see ",(0,r.jsx)(n.em,{children:"(current)"})," message in the file."]}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Config",src:t(9202).A+"",width:"543",height:"300"})})}),"\n",(0,r.jsx)(n.p,{children:"Run the test and check the output:"}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Output",src:t(5241).A+"",width:"1348",height:"457"})})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(8215);const i={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(6540),i=t(8215),s=t(3104),l=t(6347),a=t(205),o=t(7485),c=t(1682),d=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),b=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),i=a[t].value;i!==r&&(c(n),l(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(w,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},3361:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/add-4d0894e3df55bdd9a2dd97bddece4866.png"},5028:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/config_ghdl-d7d41f96d9f84010dddcf73320fdcc30.png"},464:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/config_manager-60e7b01fd2daae79d2f47aeffe875af4.png"},5241:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/output-9dcc564ef2218eb062c9ee4ffe97081b.png"},9202:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/select-b13c09ccc73cf8d9e25adb9c2518d9dc.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(6540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
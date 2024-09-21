"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[5938],{3743:(A,e,t)=>{t.d(e,{Z:()=>b});var n=t(7462),a=t(7294),r=t(6668);function l(A){const e=A.map((A=>({...A,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);e.forEach(((A,e)=>{const n=t.slice(2,A.level);A.parentIndex=Math.max(...n),t[A.level]=e}));const n=[];return e.forEach((A=>{const{parentIndex:t,...a}=A;t>=0?e[t].children.push(a):n.push(a)})),n}function o(A){let{toc:e,minHeadingLevel:t,maxHeadingLevel:n}=A;return e.flatMap((A=>{const e=o({toc:A.children,minHeadingLevel:t,maxHeadingLevel:n});return function(A){return A.level>=t&&A.level<=n}(A)?[{...A,children:e}]:e}))}function d(A){const e=A.getBoundingClientRect();return e.top===e.bottom?d(A.parentNode):e}function s(A,e){let{anchorTopOffset:t}=e;const n=A.find((A=>d(A).top>=t));if(n){return function(A){return A.top>0&&A.bottom<window.innerHeight/2}(d(n))?n:A[A.indexOf(n)-1]??null}return A[A.length-1]??null}function u(){const A=(0,a.useRef)(0),{navbar:{hideOnScroll:e}}=(0,r.L)();return(0,a.useEffect)((()=>{A.current=e?0:document.querySelector(".navbar").clientHeight}),[e]),A}function c(A){const e=(0,a.useRef)(void 0),t=u();(0,a.useEffect)((()=>{if(!A)return()=>{};const{linkClassName:n,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:l}=A;function o(){const A=function(A){return Array.from(document.getElementsByClassName(A))}(n),o=function(A){let{minHeadingLevel:e,maxHeadingLevel:t}=A;const n=[];for(let a=e;a<=t;a+=1)n.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),d=s(o,{anchorTopOffset:t.current}),u=A.find((A=>d&&d.id===function(A){return decodeURIComponent(A.href.substring(A.href.indexOf("#")+1))}(A)));A.forEach((A=>{!function(A,t){t?(e.current&&e.current!==A&&e.current.classList.remove(a),A.classList.add(a),e.current=A):A.classList.remove(a)}(A,A===u)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[A,t])}function m(A){let{toc:e,className:t,linkClassName:n,isChild:r}=A;return e.length?a.createElement("ul",{className:r?void 0:t},e.map((A=>a.createElement("li",{key:A.id},a.createElement("a",{href:`#${A.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:A.value}}),a.createElement(m,{isChild:!0,toc:A.children,className:t,linkClassName:n}))))):null}const i=a.memo(m);function b(A){let{toc:e,className:t="table-of-contents table-of-contents__left-border",linkClassName:d="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:u,maxHeadingLevel:m,...b}=A;const f=(0,r.L)(),p=u??f.tableOfContents.minHeadingLevel,v=m??f.tableOfContents.maxHeadingLevel,g=function(A){let{toc:e,minHeadingLevel:t,maxHeadingLevel:n}=A;return(0,a.useMemo)((()=>o({toc:l(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:e,minHeadingLevel:p,maxHeadingLevel:v});return c((0,a.useMemo)((()=>{if(d&&s)return{linkClassName:d,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:v}}),[d,s,p,v])),a.createElement(i,(0,n.Z)({toc:g,className:t,linkClassName:d},b))}},5162:(A,e,t)=>{t.d(e,{Z:()=>l});var n=t(7294),a=t(6010);const r="tabItem_Ymn6";function l(A){let{children:e,hidden:t,className:l}=A;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:t},e)}},5488:(A,e,t)=>{t.d(e,{Z:()=>i});var n=t(7462),a=t(7294),r=t(6010),l=t(2389),o=t(7392),d=t(7094),s=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(A){const{lazy:e,block:t,defaultValue:l,values:m,groupId:i,className:b}=A,f=a.Children.map(A.children,(A=>{if((0,a.isValidElement)(A)&&"value"in A.props)return A;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof A.type?A.type:A.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),p=m??f.map((A=>{let{props:{value:e,label:t,attributes:n}}=A;return{value:e,label:t,attributes:n}})),v=(0,o.l)(p,((A,e)=>A.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((A=>A.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??f.find((A=>A.props.default))?.props.value??f[0].props.value;if(null!==g&&!p.some((A=>A.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${p.map((A=>A.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:X}=(0,d.U)(),[h,C]=(0,a.useState)(g),q=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=i){const A=N[i];null!=A&&A!==h&&p.some((e=>e.value===A))&&C(A)}const w=A=>{const e=A.currentTarget,t=q.indexOf(e),n=p[t].value;n!==h&&(x(e),C(n),null!=i&&X(i,String(n)))},L=A=>{let e=null;switch(A.key){case"Enter":w(A);break;case"ArrowRight":{const t=q.indexOf(A.currentTarget)+1;e=q[t]??q[0];break}case"ArrowLeft":{const t=q.indexOf(A.currentTarget)-1;e=q[t]??q[q.length-1];break}}e?.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},b)},p.map((A=>{let{value:e,label:t,attributes:l}=A;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,key:e,ref:A=>q.push(A),onKeyDown:L,onClick:w},l,{className:(0,r.Z)("tabs__item",c,l?.className,{"tabs__item--active":h===e})}),t??e)}))),e?(0,a.cloneElement)(f.filter((A=>A.props.value===h))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((A,e)=>(0,a.cloneElement)(A,{key:e,hidden:A.props.value!==h})))))}function i(A){const e=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(e)},A))}},5611:(A,e,t)=>{t.r(e),t.d(e,{CreateAll:()=>q,Hdl:()=>h,assets:()=>X,contentTitle:()=>g,default:()=>L,frontMatter:()=>v,metadata:()=>N,toc:()=>x,verilog_elements:()=>C});var n=t(7462),a=t(7294),r=t(3905),l=t(5488),o=t(5162),d=t(814);const s="//! @title mymodule design\n//! @author terosHDL\nmodule mymodule #(\n    parameter PARAM1 = 1024 //! number of bytes in fifo\n)(\n    output reg [PARAM1-1:0] data, \n    input clk, //! 300Mhz Clock\n    input rstn\n);\n    \nendmodule",u=t.p+"assets/images/module-ffb6a053f68cf68a1056b6c563468c62.png",c=t.p+"assets/images/port-cfa92d03d24c7417b8a2bc5d4021347d.png",m=t.p+"assets/images/parameter-219aff3d61813a84e8424e3b38d2911b.png",i=t.p+"assets/images/const-c485728550614ffecac790ea4ff38dd9.png",b=t.p+"assets/images/always-efa0af3aae3a28db31f5a924ef0989ff.png",f=t.p+"assets/images/functions-3c3d052657d363391516d72d39fa6303.png",p=t.p+"assets/images/typedef-4463b491c4838c92f1d034032e2c7034.png";t(3743);const v={description:"SV/Verilog elements"},g="Verilog/SV elements",N={unversionedId:"documenter/verilog_elements",id:"documenter/verilog_elements",title:"Verilog/SV elements",description:"SV/Verilog elements",source:"@site/docs/08-documenter/02-verilog_elements.mdx",sourceDirName:"08-documenter",slug:"/documenter/verilog_elements",permalink:"/terosHDLdoc/docs/documenter/verilog_elements",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/08-documenter/02-verilog_elements.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"SV/Verilog elements"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/terosHDLdoc/docs/documenter/getting_started"},next:{title:"VHDL elements",permalink:"/terosHDLdoc/docs/documenter/vhdl_elements"}},X={},h=A=>{let{name:e,children:t,image:n,id:a}=A;return(0,r.kt)("div",null,(0,r.kt)("h2",{id:a,toc:x}," ",e," "),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)(d.Z,{language:"verilog",mdxType:"CodeBlock"},t)),(0,r.kt)(o.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,r.kt)("img",{src:n,alt:"Documentation result"}))))},C=[{name:"Module",code:s,impath:u},{name:"Ports",code:s,impath:c},{name:"Parameters",code:s,impath:m},{name:"Constants",code:"module myconsts ();\n\nlocalparam SN=11223344; //! SN for this node\n    \nendmodule",impath:i},{name:"Always",code:"module alwaysmod (\n    input clk,\n    input rstn\n);\n    \nalways @(posedge clk or negedge rstn) begin: myproc\n    \nend\nendmodule",impath:b},{name:"Instances",code:"module tb_mytb(\n    input clk,\n    input rstn\n);\n\nmymodule dut(\n    .rstn (rstn),\n    .clk (clk)\n);\n\n\nendmodule\n",impath:"data:image/png;base64,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"},{name:"Functions",code:"module funcs ;\n\nfunction reg[1:0] myfunc(input a,b);\n\n    myfunc = {a,b};\nendfunction\n\n\nendmodule\n\n",impath:f},{name:"Typedefs",code:"//! AXI-4 Stream\ntypedef struct packed {  \n    logic [7:0] data;\n    logic [0:0] valid;\n    logic [0:0] clk;\n} mystruct;\n    \n",impath:p}],q=A=>{let{elements:e}=A;return(0,r.kt)(a.Fragment,null,e.map((A=>{let e={value:A.name,id:A.name.toLowerCase(),level:3};return null==x.find((A=>A.id==e.id))&&x.push(e),(0,r.kt)(h,{name:A.name,image:A.impath,children:A.code,id:A.name.toLowerCase(),mdxType:"Hdl"})})))},x=[{value:"Supported labels",id:"supported-labels",level:2}],w={Hdl:h,verilog_elements:C,CreateAll:q,toc:x};function L(A){let{components:e,...t}=A;return(0,r.kt)("wrapper",(0,n.Z)({},w,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"verilogsv-elements"},"Verilog/SV elements"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"by default, the documenter will use ",(0,r.kt)("inlineCode",{parentName:"p"},"//! ")," to recognize things to document.")),(0,r.kt)("h2",{id:"supported-labels"},"Supported labels"),(0,r.kt)("p",null,"Here are the following labels supported by the documenter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Module Description"),(0,r.kt)("li",{parentName:"ul"},"Ports"),(0,r.kt)("li",{parentName:"ul"},"Parameters"),(0,r.kt)("li",{parentName:"ul"},"Constants"),(0,r.kt)("li",{parentName:"ul"},"Registers / Wires"),(0,r.kt)("li",{parentName:"ul"},"Always Block"),(0,r.kt)("li",{parentName:"ul"},"Instances"),(0,r.kt)("li",{parentName:"ul"},"Functions"),(0,r.kt)("li",{parentName:"ul"},"Typedefs")),(0,r.kt)(q,{elements:C,mdxType:"CreateAll"}))}L.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[2383],{4549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=t(4848),i=t(8453);const a={},r="Examples",d={id:"guides/state_machine_viewer/examples",title:"Examples",description:"VHDL",source:"@site/docs/06-guides/07-state_machine_viewer/02-examples.md",sourceDirName:"06-guides/07-state_machine_viewer",slug:"/guides/state_machine_viewer/examples",permalink:"/docs/guides/state_machine_viewer/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-guides/07-state_machine_viewer/02-examples.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/guides/state_machine_viewer/usage"},next:{title:"Getting started",permalink:"/docs/guides/schematic_viewer/installation"}},l={},c=[{value:"VHDL",id:"vhdl",level:2},{value:"Verilog",id:"verilog",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"examples",children:"Examples"})}),"\n",(0,s.jsx)(n.h2,{id:"vhdl",children:"VHDL"}),"\n",(0,s.jsx)(n.p,{children:"Lets Look at the following VHDL:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-vhdl",children:"library ieee;\nuse ieee.std_logic_1164.all;\nuse ieee.numeric_std.all;\n\nentity vhdl_sm is\n    port (\n        clk   : in std_logic;\n        reset : in std_logic;\n        \n    );\nend entity vhdl_sm;\n\narchitecture rtl of vhdl_sm is\ntype sm_t is (IDLE,PUSH_A,PUSH_B,CRC); --! My State machine\nsignal state : sm_t;\nsignal next_state : sm_t;    \n\nsignal push_a_done;\nsignal push_b_done;\nsignal new_data;\nsignal crc_done;\n\nbegin\n\nincr_sm_proc: process (clk,rstn)\nbegin\n    if (rstn = '0') then\n        state <= IDLE;\n    elsif rising_edge(clk) then\n       state <= next_state; \n    end if;\nend process;\n\n\nsm_proc: process(all)\nbegin\n    case state is\n        when IDLE =>\n            if (new_data = '1') then\n                next_state <= PUSH_A;\n            end if;\n        when PUSH_A =>\n            if (push_a_done='1') then\n                next_state <= PUSH_B;\n            elsif (push_a_done='1' and push_b_done='1') then\n                next_state <= CRC;\n            end if;\n        when PUSH_B =>\n            if (push_b_done='1') then\n                next_state <= PUSH_A;\n            end if;\n        when CRC =>\n            next_state <= IDLE;\n        when others =>\n            next_state <= IDLE;\n    end case;\nend process;\nend architecture;\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will correspond with the following state machine diagram:"}),"\n",(0,s.jsxs)("p",{align:"center",children:[(0,s.jsx)("i",{children:"Image 1: State Machine In VHDL "}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"State Machine Example",src:t(6777).A+"",width:"973",height:"502"})})]}),"\n",(0,s.jsx)(n.h2,{id:"verilog",children:"Verilog"}),"\n",(0,s.jsx)(n.p,{children:"We can also do the same with verilog:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-verilog",children:"module verilog_sm (\n    input clk,\n    input rstn\n);\n\nwire push_a_done;\nwire push_b_done;\nwire new_data;\nwire crc_done;\n\ntypedef enum logic[1:0] {IDLE,PUSH_A,PUSH_B,CRC} state_t;\nstate_t state;\nstate_t nextstate;\n\nalways @(posedge clk or negedge rstn) begin\n    if (~rstn) begin\n        state <= IDLE;\n    end\n    else begin\n        state <= nextstate;\n    end\nend\n\nalways_comb begin\n    case (state)\n        IDLE: if(new_data) nextstate = PUSH_A;\n        PUSH_A: begin\n            if(push_a_done) nextstate = PUSH_B;\n            else if (push_a_done&push_b_done) nextstate = CRC;\n        end\n        PUSH_B: if(push_b_done) nextstate = PUSH_A;\n        CRC: nextstate= IDLE;\n        default: nextstate = state;\n    endcase\nend\nendmodule\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will correspond with the following state machine diagram:"}),"\n",(0,s.jsxs)("p",{align:"center",children:[(0,s.jsx)("i",{children:"Image 2: State Machine In Verilog "}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"State Machine Example",src:t(9187).A+"",width:"974",height:"691"})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},9187:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/verilog-sm-b2eaa05435bc3da9e325ed9711e5d2f9.png"},6777:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/vhdl-sm-48a2b83161ee138080e3639dc119705c.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
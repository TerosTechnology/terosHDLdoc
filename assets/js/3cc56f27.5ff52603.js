"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[2270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={description:"Basic features."},a="Other basic features",l={unversionedId:"editor/other",id:"version-5.0.0/editor/other",title:"Other basic features",description:"Basic features.",source:"@site/versioned_docs/version-5.0.0/03-editor/12.other.md",sourceDirName:"03-editor",slug:"/editor/other",permalink:"/terosHDLdoc/docs/editor/other",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-5.0.0/03-editor/12.other.md",tags:[],version:"5.0.0",sidebarPosition:12,frontMatter:{description:"Basic features."},sidebar:"tutorialSidebar",previous:{title:"Basic Library completion",permalink:"/terosHDLdoc/docs/editor/library_completion"},next:{title:"Linting (errors checking)",permalink:"/terosHDLdoc/docs/errors_checking"}},s={},c=[{value:"Add parentheses or create a string",id:"add-parentheses-or-create-a-string",level:2},{value:"Block commenting",id:"block-commenting",level:2},{value:"Column (box) selection",id:"column-box-selection",level:2},{value:"Show hidden characters",id:"show-hidden-characters",level:2},{value:"Side by side editing",id:"side-by-side-editing",level:2},{value:"Copy line up / down",id:"copy-line-up--down",level:2},{value:"Move lines",id:"move-lines",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"other-basic-features"},"Other basic features"),(0,i.kt)("h2",{id:"add-parentheses-or-create-a-string"},"Add parentheses or create a string"),(0,i.kt)("p",null,'Auto close parentheses is a feature that automatically inserts a closing parenthesis ")" whenever you type an opening parenthesis "(". This can save you time and reduce errors when writing code that requires a lot of parentheses, such as function calls and conditional statements.'),(0,i.kt)("p",null,"To use auto close parentheses in VSCode, you need to ensure that the feature is enabled in your settings. To check if the feature is enabled:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Open VSCode and go to the "Settings" by clicking on the gear icon on the bottom left corner of the window.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'In the search bar at the top of the settings page, type "auto closing brackets".')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Under the "Editor: Auto Closing Brackets" setting, make sure the checkbox is selected for "Brackets" and "Parentheses".')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the checkbox is not selected, click on it to enable auto close parentheses."))),(0,i.kt)("p",null,'Once you have enabled auto close parentheses, you can start using the feature by simply typing an opening parenthesis "(" followed by any arguments or values required. The closing parenthesis ")" will be automatically inserted by VSCode. If you need to type a closing parenthesis without the auto close feature, you can press the ")" key twice.'),(0,i.kt)("h2",{id:"block-commenting"},"Block commenting"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select the code that you want to comment out. You can do this by clicking and dragging the cursor over the lines of code or by holding down the "Shift" key and using the arrow keys to highlight the desired text.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Once you have selected the code, press "Ctrl" + "/". This will add two forward slashes "//" to the beginning of each line, commenting out the code.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'If you want to use block commenting instead of line commenting, press "Shift" + "Alt" + "A" (Windows/Linux) or "Shift" + "Option" + "A" (Mac). This will add a block comment to the beginning and end of the selected code, using the appropriate syntax for the programming language you are using.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'To remove the block comment, simply select the code and press "Shift" + "Alt" + "A" (Windows/Linux) or "Shift" + "Option" + "A" (Mac) again. This will remove the block comment from the code.'))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note that the exact key bindings for commenting may vary depending on your operating system and keyboard layout. If the above key bindings do not work for you, you can check the Visual Studio Code documentation or keyboard shortcuts settings to find the appropriate key bindings for your system.")),(0,i.kt)("h2",{id:"column-box-selection"},"Column (box) selection"),(0,i.kt)("p",null,"You can select blocks of text by holding ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift+Alt")," (",(0,i.kt)("inlineCode",{parentName:"p"},"Shift+Option")," on macOS) while you drag your mouse. A separate cursor will be added to the end of each selected line."),(0,i.kt)("p",{align:"center"},(0,i.kt)("i",null,"Image 1: column selection "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example Problem",src:n(3583).Z,width:"601",height:"266"})," ")),(0,i.kt)("h2",{id:"show-hidden-characters"},"Show hidden characters"),(0,i.kt)("p",null,"Sometimes you may also need to display hidden characters - such as spaces or tabs - in the code editor:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Solution 1:")),(0,i.kt)("p",null,"The fastest way is to press ",(0,i.kt)("inlineCode",{parentName:"p"},"F1")," and type ",(0,i.kt)("inlineCode",{parentName:"p"},"Toggle Render Whitespace")," in the input field that appears. Hint, if you just type ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," that might be enough. Select the option and toggle the value by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," . "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Solution 2:")),(0,i.kt)("p",null,"Open the settings panel. File --\x3e Preferences -> Settings In the search box, type ",(0,i.kt)("inlineCode",{parentName:"p"},"render whitespace"),". Then select the all option if you want to see the tabs and spaces everywhere."),(0,i.kt)("h2",{id:"side-by-side-editing"},"Side by side editing"),(0,i.kt)("p",null,"Keyboard Shortcut: ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+\\")),(0,i.kt)("p",null,"You can also drag and drop editors to create new editor groups and move editors between groups."),(0,i.kt)("p",{align:"center"},(0,i.kt)("i",null,"Image 2: Side by side editing "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example Problem",src:n(4429).Z,width:"1680",height:"1050"})," ")),(0,i.kt)("h2",{id:"copy-line-up--down"},"Copy line up / down"),(0,i.kt)("p",null,"Keyboard Shortcut: ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+Alt+Up")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+Alt+Down")),(0,i.kt)("p",{align:"center"},(0,i.kt)("i",null,"Image 3: copy lines "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example Problem",src:n(2496).Z,width:"777",height:"210"}))),(0,i.kt)("h2",{id:"move-lines"},"Move lines"),(0,i.kt)("p",null,"To move a line of code up or down in Visual Studio Code first go to the line you want to move and then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ALT + \u2191 or ALT + \u2193")," . You can also move up or down multiple lines at once by selecting the lines first and then using the keyboard shortcut."),(0,i.kt)("p",{align:"center"},(0,i.kt)("i",null,"Image 4: move lines "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example Problem",src:n(5659).Z,width:"1039",height:"1003"}))))}p.isMDXComponent=!0},3583:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/column-6c4649c5ecf7ffdbb6cca57fa9cf0101.gif"},2496:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/copy-dbf07d07ccaf6a6e2a924f69ab93f7a0.gif"},5659:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/move-4f68c280b0d082e31f5814d3f666b655.gif"},4429:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/side-66e03491baca7a4b5eda3639c33dce28.gif"}}]);
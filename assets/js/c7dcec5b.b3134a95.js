"use strict";(self.webpackChunkteroshdl_doc=self.webpackChunkteroshdl_doc||[]).push([[5326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||a;return n?l.createElement(m,i(i({ref:t},u),{},{components:n})):l.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:o,i[1]=r;for(var d=2;d<a;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(7294),o=n(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var l=n(7462),o=n(7294),a=n(6010),i=n(2389),r=n(7392),s=n(7094),d=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:h,className:m}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??k.map((e=>{let{props:{value:t,label:n,attributes:l}}=e;return{value:t,label:n,attributes:l}})),b=(0,r.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[g,T]=(0,o.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=h){const e=v[h];null!=e&&e!==g&&y.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=x.indexOf(t),l=y[n].value;l!==g&&(C(t),T(l),null!=h&&w(h,String(l)))},V=e=>{let t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},m)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,l.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>x.push(e),onKeyDown:V,onClick:S},i,{className:(0,a.Z)("tabs__item",c,i?.className,{"tabs__item--active":g===t})}),n??t)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function h(e){const t=(0,i.Z)();return o.createElement(p,(0,l.Z)({key:String(t)},e))}},5240:(e,t,n)=>{n.r(t),n.d(t,{PATH:()=>p,assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var l=n(7462),o=(n(7294),n(3905)),a=n(5488),i=n(5162);const r={description:"Linux"},s="Installation",d={unversionedId:"getting_started/installation",id:"getting_started/installation",title:"Installation",description:"Linux",source:"@site/docs/02-getting_started/01-installation.md",sourceDirName:"02-getting_started",slug:"/getting_started/installation",permalink:"/teroshdl-docusaurus-doc/docs/getting_started/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-getting_started/01-installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Linux"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/teroshdl-docusaurus-doc/docs/category/getting-started"},next:{title:"Configuration",permalink:"/teroshdl-docusaurus-doc/docs/getting_started/configuration"}},u={},c=[{value:"Requirements",id:"requirements",level:2},{value:"VSCodium/VSCode",id:"vscodiumvscode",level:3},{value:"Python3",id:"python3",level:3},{value:"Python3 package dependencies",id:"python3-package-dependencies",level:3},{value:"Make",id:"make",level:3},{value:"TerosHDL installation",id:"teroshdl-installation",level:2},{value:"From market",id:"from-market",level:3},{value:"TerosHDL beta version: from VSIX",id:"teroshdl-beta-version-from-vsix",level:3},{value:"Validating Installation",id:"validating-installation",level:2}],p="${PATH}",h={toc:c,PATH:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,l.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"TerosHDL can be installed in VSCodium or VSCode. As open source alternative of VSCode we recommend ",(0,o.kt)("strong",{parentName:"p"},"VSCodium"),". But it works in both with the same functionalities."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Before installing TerosHDL, you need to install some dependencies, which are software packages or libraries that the IDE relies on to function properly."),(0,o.kt)("h3",{id:"vscodiumvscode"},"VSCodium/VSCode"),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://vscodium.com/#install"},"VSCodium")," or ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"VSCode")),(0,o.kt)("h3",{id:"python3"},"Python3"),(0,o.kt)("p",null,"Install Python3"),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"windows_s",label:"Windows Standalone",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,"1. Go to the Python website and download the latest version of Python3 for Windows: ",(0,o.kt)("a",{href:"https://www.python.org/downloads/windows"},"https://www.python.org/downloads/windows"),(0,o.kt)("br",null),(0,o.kt)("br",null),'2. Run the downloaded file and follow the installation wizard. During the installation, make sure to check the box "Add Python 3.x to PATH" so that you can run Python and pip from any command prompt.',(0,o.kt)("br",null),(0,o.kt)("br",null),"3. Once Python is installed, open a command prompt by pressing Win+R and typing cmd, then press Enter.",(0,o.kt)("br",null),(0,o.kt)("br",null),"4. Type python --version in the command prompt and press Enter. This should display the version of Python you just installed.",(0,o.kt)("br",null),(0,o.kt)("br",null),"5. Next, you need to install pip, the package installer for Python. Download the get-pip.py script from ",(0,o.kt)("a",{href:"https://bootstrap.pypa.io/get-pip.py"},"https://bootstrap.pypa.io/get-pip.py"),(0,o.kt)("br",null),(0,o.kt)("br",null),"6. Open a command prompt and navigate to the folder where you saved the get-pip.py script.",(0,o.kt)("br",null),(0,o.kt)("br",null),"7. Type python ",(0,o.kt)("code",null,"get-pip.py")," and press Enter. This will install pip on your system.",(0,o.kt)("br",null),(0,o.kt)("br",null),"8. To verify that pip is installed correctly, type ",(0,o.kt)("code",null,"pip --version")," in the command prompt and press Enter. This should display the version of pip you just installed.",(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)(i.Z,{value:"windows_a",label:"Windows Anaconda/Venv",mdxType:"TabItem"},"After Installing anaconda from this ",(0,o.kt)("a",{href:"https://www.anaconda.com"},"link"),", you'll need to make sure that windows is configured correctly to find anaconda as your python provider. make sure you install anaconda for all users!",(0,o.kt)("ul",null,'1.click windows and search for "Edit the system enviorment variables"',(0,o.kt)("br",null),(0,o.kt)("br",null),'2.under "System Variables", find ',(0,o.kt)("code",null,"Path")," and click edit",(0,o.kt)("br",null),(0,o.kt)("br",null),"3.click new and add the anaconda path (By default, it should be ",(0,o.kt)("code",null,"C:\\ProgramData\\anaconda3\\"),")",(0,o.kt)("br",null),(0,o.kt)("br",null),'4.click ok and test correct python was choosen, you can do this by opening command prompt and writing python, you should see a python prompt with "Anaconda" mentioned.'),"Now, lets create a virtual enviorment and connect it to teroshdl",(0,o.kt)("ul",null,"1.in a folder you want the virtual enviorment to be installed, open command prompt",(0,o.kt)("br",null),(0,o.kt)("br",null),"2.write the following command ",(0,o.kt)("code",null,"python -m venv venv"),", this will create a folder named venv where the new virtual python enviorment will be located",(0,o.kt)("br",null),(0,o.kt)("br",null),'3.next, we will use the command prompt to "Activate" the virtual enviorment, we do this to install packages in the virtual enviorment, you do this by writing the following command: ',(0,o.kt)("code",null,"venv\\Scripts\\activate.bat"),", if you see (venv) before the command prompt the virtual enviorment has been activated correctly.",(0,o.kt)("br",null),(0,o.kt)("br",null),"4.now we will install the required python packages for teroshdl, we will do this by typing ",(0,o.kt)("code",null,"pip install teroshdl")," ",(0,o.kt)("b",null,"in the virtual enviorment command prompt!"),(0,o.kt)("br",null),(0,o.kt)("br",null)),"now that we install teroshdl packages, we can direct teroshdl to this virtual enviorment",(0,o.kt)("ul",null,"1.in vscode, open configuration menu of teroshdl",(0,o.kt)("br",null),(0,o.kt)("br",null),"2.under general you should see ",(0,o.kt)("b",null,"python3 binary path"),", under this textbox write the path to the virtual enviorment binary. For example, ",(0,o.kt)("code",null,"C:/tools/venv/Scripts/python3.exe"),(0,o.kt)("br",null),(0,o.kt)("br",null),"3.after this, teroshdl will use the virtual enviorment as its python tool.",(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("ul",null,'1. Open a terminal window by pressing Ctrl + Alt + T or searching for "Terminal" in the applications menu.',(0,o.kt)("br",null),(0,o.kt)("br",null),"3. Update the package list to ensure you have the latest version of the package manager by running the following command: ",(0,o.kt)("code",null,"sudo apt update"),(0,o.kt)("br",null),(0,o.kt)("br",null),"4. Install Python 3 by running the following command: ",(0,o.kt)("code",null,"sudo apt install python3"),(0,o.kt)("br",null),(0,o.kt)("br",null),"5. Verify that Python 3 is installed by running the following command: ",(0,o.kt)("code",null,"python3 --version"),(0,o.kt)("br",null),(0,o.kt)("br",null),"6. This should display the version of Python 3 that was installed.",(0,o.kt)("br",null),(0,o.kt)("br",null),"7. Install pip, the package installer for Python, by running the following command: ",(0,o.kt)("code",null,"sudo apt install python3-pip"),(0,o.kt)("br",null),(0,o.kt)("br",null),"8. Verify that pip is installed by running the following command: ",(0,o.kt)("code",null,"pip3 --version"),(0,o.kt)("br",null),(0,o.kt)("br",null),"9. This should display the version of pip that was installed.",(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)(i.Z,{value:"mac",label:"Mac",mdxType:"TabItem"},(0,o.kt)("ul",null,"1. Open a web browser and go to the Python website: ",(0,o.kt)("a",{href:"https://www.python.org/downloads/"},"https://www.python.org/downloads/"),(0,o.kt)("br",null),(0,o.kt)("br",null),'2. Download the latest version of Python3 for macOS by clicking on the "Download Python 3.x.x" button. Make sure to download the version that matches your system architecture (Intel or Apple Silicon).',(0,o.kt)("br",null),(0,o.kt)("br",null),'3. Once the download is complete, open the downloaded file and follow the installation wizard. During the installation, make sure to check the box "Install pip" so that you can easily install Python packages.',(0,o.kt)("br",null),(0,o.kt)("br",null),"4. To verify that Python and pip are installed correctly, open a Terminal window by going to Applications > Utilities > Terminal. Type ",(0,o.kt)("code",null,"python3 --version")," and press Enter. This should display the version of Python you just installed. Then, type ",(0,o.kt)("code",null,"pip3 --version")," and press Enter. This should display the version of pip you just installed.",(0,o.kt)("br",null),(0,o.kt)("br",null),"5. If you want to use Python and pip without typing the ",(0,o.kt)("code",null,"python3")," and ",(0,o.kt)("code",null,"pip3")," commands, you can add them to your system path by adding the following lines to your shell configuration file (usually either ",(0,o.kt)("code",null,"~/.bashrc")," or ",(0,o.kt)("code",null,"~/.zshrc"),"):",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("code",null,'export PATH="/Library/Frameworks/Python.framework/Versions/3.X/bin:',p,'"')))),(0,o.kt)("h3",{id:"python3-package-dependencies"},"Python3 package dependencies"),(0,o.kt)("p",null,"Install Python package dependencies:"),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},"Open a command prompt by pressing the ",(0,o.kt)("code",null,"Windows")," key and ",(0,o.kt)("code",null,"R")," key at the same time, then type ",(0,o.kt)("code",null,"cmd")," and hit ",(0,o.kt)("code",null,"Enter"),". Type: ",(0,o.kt)("code",null,"pip install teroshdl")),(0,o.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},"Open a terminal window by pressing ",(0,o.kt)("code",null,"Ctrl + Alt + T"),' or searching for "Terminal" in the applications menu.. Type: ',(0,o.kt)("code",null,"sudo pip3 install teroshdl")),(0,o.kt)(i.Z,{value:"mac",label:"Mac",mdxType:"TabItem"},"Open a terminal window by going to Applications > Utilities > Terminal. Type: ",(0,o.kt)("code",null,"sudo pip install teroshdl"))),(0,o.kt)("h3",{id:"make"},"Make"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You don't need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"Make")," if you are using Raptor.")),(0,o.kt)("p",null,"Install ",(0,o.kt)("strong",{parentName:"p"},"make")," in your system:"),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},"Make is a Unix-based utility and is not included in Windows by default. However, you can install Make on Windows using the following steps:",(0,o.kt)("br",null),(0,o.kt)("br",null),"1. Install a Unix-like environment such as Cygwin on your Windows system. This environment provide a Unix-like terminal and command-line tools, including Make. ",(0,o.kt)("br",null),"Download and run the Cygwin installer from the official website (",(0,o.kt)("a",{href:"https://cygwin.com/install.html"},"https://cygwin.com/install.html"),"). During the installation process, select the packages you want to install, including Make, from the package list. 2. Once you have installed a Unix-like environment, open the terminal or command prompt provided by that environment.",(0,o.kt)("br",null),(0,o.kt)("br",null),"3. Verify that Make has been installed by running the following command: ",(0,o.kt)("code",null,"make -v"),". This should display the version of Make installed on your system.",(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},"Open a terminal window by pressing ",(0,o.kt)("code",null,"Ctrl + Alt + T"),' or searching for "Terminal" in the applications menu.. Type: ',(0,o.kt)("code",null,"sudo apt install make")),(0,o.kt)(i.Z,{value:"mac",label:"Mac",mdxType:"TabItem"},(0,o.kt)("ul",null,"1. Open a terminal window by going to Applications > Utilities > Terminal.",(0,o.kt)("br",null),(0,o.kt)("br",null),"2. Install Xcode, which includes Make, by running the following command: ",(0,o.kt)("code",null,"xcode-select"),". This will prompt you to install the Xcode Command Line Tools, which includes Make.",(0,o.kt)("br",null),(0,o.kt)("br",null),"3. Verify that Make has been installed by running the following command: ",(0,o.kt)("code",null,"make -v"),". This should display the version of Make installed on your system.",(0,o.kt)("br",null),(0,o.kt)("br",null)))),(0,o.kt)("h2",{id:"teroshdl-installation"},"TerosHDL installation"),(0,o.kt)("h3",{id:"from-market"},"From market"),(0,o.kt)("p",null,"TerosHDL is present in ",(0,o.kt)("a",{parentName:"p",href:"https://open-vsx.org/extension/teros-technology/teroshdl"},"VSCodium market")," and ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=teros-technology.teroshdl"},"VSCode market"),". "),(0,o.kt)("p",null,"The VSX market for VSCodium is a marketplace for VSCode extensions that are compatible with VSCodium, which is a free and open-source version of VSCode that is built from the same source code but without the Microsoft branding, telemetry, and licensing restrictions."),(0,o.kt)("p",null,"To access the market for VSCodium/VSCode, you can follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open VS Code."),(0,o.kt)("li",{parentName:"ol"},"Click on the Extensions icon on the left-hand side of the window, or press ",(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl+Shift+X")," (Windows, Linux) or ",(0,o.kt)("inlineCode",{parentName:"li"},"Cmd+Shift+X")," (macOS) to open the Extensions view."),(0,o.kt)("li",{parentName:"ol"},'In the search bar at the top of the Extensions view, type the name of the extension you want to install. Alternatively, you can browse for extensions by clicking on the "Explore" or "Extensions" tabs.'),(0,o.kt)("li",{parentName:"ol"},'Once you have found the extension you want to install, click on the "Install" button next to its name.'),(0,o.kt)("li",{parentName:"ol"},'Wait for the extension to download and install. You can monitor the progress in the "Notifications" area at the bottom-right corner of the window.'),(0,o.kt)("li",{parentName:"ol"},'After the extension is installed, you may need to reload the editor for the changes to take effect. If so, you\'ll see a "Reload" button appear next to the extension in the Extensions view. Click on it to reload the editor.'),(0,o.kt)("li",{parentName:"ol"},"Once the editor has reloaded, the installed extension should be available for use.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"VSCodium",src:n(1750).Z,width:"1134",height:"450"})," ")),(0,o.kt)("h3",{id:"teroshdl-beta-version-from-vsix"},"TerosHDL beta version: from VSIX"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended to install TerosHDL from the market.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the VSIX TerosHDL release from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/TerosTechnology/vscode-terosHDL/releases"},"https://github.com/TerosTechnology/vscode-terosHDL/releases")),(0,o.kt)("li",{parentName:"ol"},"Open VSCodium/VSCode and click on the Extensions icon on the left-hand side of the window."),(0,o.kt)("li",{parentName:"ol"},'Click on the three dots icon on the top right-hand corner of the Extensions pane and select "Install from VSIX..." from the dropdown menu.'),(0,o.kt)("li",{parentName:"ol"},"Navigate to the directory where the VSIX file is located and select it. Alternatively, you can drag and drop the VSIX file onto the Extensions pane."),(0,o.kt)("li",{parentName:"ol"},'VSCodium/VSCode will install the extension and prompt you to reload the editor. Click on the "Reload Now" button to reload VSCodium/VSCode.'),(0,o.kt)("li",{parentName:"ol"},"Once VSCodium/VSCode has reloaded, the installed extension should be available for use.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"VSCodium",src:n(6044).Z,width:"960",height:"604"})," ")),(0,o.kt)("h2",{id:"validating-installation"},"Validating Installation"),(0,o.kt)("p",null,"You can validate terosHDL dependecies are installed correctly by using the ",(0,o.kt)("i",null,"Check Dependecies"),", you can find the button in teroshdl under ",(0,o.kt)("b",null,"Actions")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Check Depencies result",src:n(4365).Z,width:"1267",height:"400"})))}m.isMDXComponent=!0},4365:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/check-dep-2d127a04fece11cec1bb6ad080f4d594.png"},1750:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/market-f1029c5228ccc755c7742deccfffc6be.png"},6044:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/vscodium_vsix-072c48f0d18237963f40e0d2449a3108.png"}}]);
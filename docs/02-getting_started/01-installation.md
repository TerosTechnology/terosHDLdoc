---
description: Linux
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const PATH = '${PATH}'

# Installation

TerosHDL can be installed in VSCodium or VSCode. As open source alternative of VSCode we recommend **VSCodium**. But it works in both with the same functionalities.

## Requirements

Before installing TerosHDL, you need to install some dependencies, which are software packages or libraries that the IDE relies on to function properly.

### VSCodium/VSCode

Install [VSCodium](https://vscodium.com/#install) or [VSCode](https://code.visualstudio.com/download)

### Python3

Install Python3

<Tabs>
    <TabItem value="windows_s" label="Windows Standalone" default>
      <ul>
        1. Go to the Python website and download the latest version of Python3 for Windows: <a href="https://www.python.org/downloads/windows">https://www.python.org/downloads/windows</a><br /><br />
        2. Run the downloaded file and follow the installation wizard. During the installation, make sure to check the box "Add Python 3.x to PATH" so that you can run Python and pip from any command prompt.<br /><br />
        3. Once Python is installed, open a command prompt by pressing Win+R and typing cmd, then press Enter.<br /><br />
        4. Type python --version in the command prompt and press Enter. This should display the version of Python you just installed.<br /><br />
        5. Next, you need to install pip, the package installer for Python. Download the get-pip.py script from <a href="https://bootstrap.pypa.io/get-pip.py">https://bootstrap.pypa.io/get-pip.py</a><br /><br />
        6. Open a command prompt and navigate to the folder where you saved the get-pip.py script.<br /><br />
        7. Type python <code>get-pip.py</code> and press Enter. This will install pip on your system.<br /><br />
        8. To verify that pip is installed correctly, type <code>pip --version</code> in the command prompt and press Enter. This should display the version of pip you just installed.<br /><br />
      </ul>
      </TabItem>
    <TabItem value="windows_a" label="Windows Anaconda/Venv">
        After Installing anaconda from this <a href="https://www.anaconda.com">link</a>, you'll need to make sure that windows is configured correctly to find anaconda as your python provider.
        make sure you install anaconda for all users!
      <ul>
        1.click windows and search for "Edit the system enviorment variables"<br /><br />
        2.under "System Variables", find <code>Path</code> and click edit<br /><br />
        3.click new and add the anaconda path (By default, it should be <code>C:\ProgramData\anaconda3\</code>)<br /><br />
        4.click ok and test correct python was choosen, you can do this by opening command prompt and writing python, you should see a python prompt with "Anaconda" mentioned.
      </ul>
        Now, lets create a virtual enviorment and connect it to teroshdl
      <ul>
        1.in a folder you want the virtual enviorment to be installed, open command prompt<br /><br />
        2.write the following command <code>python -m venv venv</code>, this will create a folder named venv where the new virtual python enviorment will be located<br /><br />
        3.next, we will use the command prompt to "Activate" the virtual enviorment, we do this to install packages in the virtual enviorment, you do this by writing the following command: <code>venv\Scripts\activate.bat</code>, if you see (venv) before the command prompt the virtual enviorment has been activated correctly.<br /><br />
        4.now we will install the required python packages for teroshdl, we will do this by typing <code>pip install teroshdl</code> <b>in the virtual enviorment command prompt!</b><br /><br />
      </ul>
      now that we install teroshdl packages, we can direct teroshdl to this virtual enviorment
      <ul>
        1.in vscode, open configuration menu of teroshdl<br/><br/>
        2.under general you should see <b>python3 binary path</b>, under this textbox write the path to the virtual enviorment binary. For example, <code>C:/tools/venv/Scripts/python3.exe</code><br/><br/>
        3.after this, teroshdl will use the virtual enviorment as its python tool.<br/><br/>
      </ul>
  </TabItem>
    <TabItem value="linux" label="Linux">
      <ul>
        1. Open a terminal window by pressing Ctrl + Alt + T or searching for "Terminal" in the applications menu.<br /><br />
        3. Update the package list to ensure you have the latest version of the package manager by running the following command: <code>sudo apt update</code><br /><br />
        4. Install Python 3 by running the following command: <code>sudo apt install python3</code><br /><br />
        5. Verify that Python 3 is installed by running the following command: <code>python3 --version</code><br /><br />
        6. This should display the version of Python 3 that was installed.<br /><br />
        7. Install pip, the package installer for Python, by running the following command: <code>sudo apt install python3-pip</code><br /><br />
        8. Verify that pip is installed by running the following command: <code>pip3 --version</code><br /><br />
        9. This should display the version of pip that was installed.<br /><br />
      </ul>
    </TabItem>
    <TabItem value="mac" label="Mac">
      <ul>
          1. Open a web browser and go to the Python website: <a href="https://www.python.org/downloads/">https://www.python.org/downloads/</a><br /><br />
          2. Download the latest version of Python3 for macOS by clicking on the "Download Python 3.x.x" button. Make sure to download the version that matches your system architecture (Intel or Apple Silicon).<br /><br />
          3. Once the download is complete, open the downloaded file and follow the installation wizard. During the installation, make sure to check the box "Install pip" so that you can easily install Python packages.<br /><br />
          4. To verify that Python and pip are installed correctly, open a Terminal window by going to Applications > Utilities > Terminal. Type <code>python3 --version</code> and press Enter. This should display the version of Python you just installed. Then, type <code>pip3 --version</code> and press Enter. This should display the version of pip you just installed.<br /><br />
          5. If you want to use Python and pip without typing the <code>python3</code> and <code>pip3</code> commands, you can add them to your system path by adding the following lines to your shell configuration file (usually either <code>~/.bashrc</code> or <code>~/.zshrc</code>):<br /><br />
          <code>export PATH="/Library/Frameworks/Python.framework/Versions/3.X/bin:{PATH}"</code>
      </ul>
    </TabItem>
</Tabs>

### Python3 package dependencies

Install Python package dependencies:


<Tabs>
    <TabItem value="windows" label="Windows" default>
      Open a command prompt by pressing the <code>Windows</code> key and <code>R</code> key at the same time, then type <code>cmd</code> and hit <code>Enter</code>. Type: <code>pip install teroshdl</code>
    </TabItem>
    <TabItem value="linux" label="Linux">
      Open a terminal window by pressing <code>Ctrl + Alt + T</code> or searching for "Terminal" in the applications menu.. Type: <code>sudo pip3 install teroshdl</code>
    </TabItem>
    <TabItem value="mac" label="Mac">
      Open a terminal window by going to Applications > Utilities > Terminal. Type: <code>sudo pip install teroshdl</code>
    </TabItem>
</Tabs>


### Make

:::caution

You don't need to install `Make` if you are using Raptor.

:::

Install **make** in your system:

<Tabs>
    <TabItem value="windows" label="Windows" default>
      Make is a Unix-based utility and is not included in Windows by default. However, you can install Make on Windows using the following steps:<br /><br />
      1. Install a Unix-like environment such as Cygwin on your Windows system. This environment provide a Unix-like terminal and command-line tools, including Make. <br />Download and run the Cygwin installer from the official website (<a href="https://cygwin.com/install.html">https://cygwin.com/install.html</a>). During the installation process, select the packages you want to install, including Make, from the package list.
      2. Once you have installed a Unix-like environment, open the terminal or command prompt provided by that environment.<br /><br />
      3. Verify that Make has been installed by running the following command: <code>make -v</code>. This should display the version of Make installed on your system.<br /><br />
    </TabItem>
    <TabItem value="linux" label="Linux">
      Open a terminal window by pressing <code>Ctrl + Alt + T</code> or searching for "Terminal" in the applications menu.. Type: <code>sudo apt install make</code>
    </TabItem>
    <TabItem value="mac" label="Mac">
      <ul>
          1. Open a terminal window by going to Applications > Utilities > Terminal.<br /><br />
          2. Install Xcode, which includes Make, by running the following command: <code>xcode-select</code>. This will prompt you to install the Xcode Command Line Tools, which includes Make.<br /><br />
          3. Verify that Make has been installed by running the following command: <code>make -v</code>. This should display the version of Make installed on your system.<br /><br />
      </ul>
    </TabItem>
</Tabs>

## TerosHDL installation

### From market

TerosHDL is present in [VSCodium market](https://open-vsx.org/extension/teros-technology/teroshdl) and [VSCode market](https://marketplace.visualstudio.com/items?itemName=teros-technology.teroshdl). 

The VSX market for VSCodium is a marketplace for VSCode extensions that are compatible with VSCodium, which is a free and open-source version of VSCode that is built from the same source code but without the Microsoft branding, telemetry, and licensing restrictions.

To access the market for VSCodium/VSCode, you can follow these steps:

1. Open VS Code.
2. Click on the Extensions icon on the left-hand side of the window, or press `Ctrl+Shift+X` (Windows, Linux) or `Cmd+Shift+X` (macOS) to open the Extensions view.
3. In the search bar at the top of the Extensions view, type the name of the extension you want to install. Alternatively, you can browse for extensions by clicking on the "Explore" or "Extensions" tabs.
4. Once you have found the extension you want to install, click on the "Install" button next to its name.
5. Wait for the extension to download and install. You can monitor the progress in the "Notifications" area at the bottom-right corner of the window.
6. After the extension is installed, you may need to reload the editor for the changes to take effect. If so, you'll see a "Reload" button appear next to the extension in the Extensions view. Click on it to reload the editor.
7. Once the editor has reloaded, the installed extension should be available for use.

<p align="center">

![VSCodium](/img/market.png) 
</p>

### TerosHDL beta version: from VSIX

:::caution

It is recommended to install TerosHDL from the market.

:::

1. Download the VSIX TerosHDL release from [https://github.com/TerosTechnology/vscode-terosHDL/releases](https://github.com/TerosTechnology/vscode-terosHDL/releases)
1. Open VSCodium/VSCode and click on the Extensions icon on the left-hand side of the window.
2. Click on the three dots icon on the top right-hand corner of the Extensions pane and select "Install from VSIX..." from the dropdown menu.
3. Navigate to the directory where the VSIX file is located and select it. Alternatively, you can drag and drop the VSIX file onto the Extensions pane.
4. VSCodium/VSCode will install the extension and prompt you to reload the editor. Click on the "Reload Now" button to reload VSCodium/VSCode.
5. Once VSCodium/VSCode has reloaded, the installed extension should be available for use.

<p align="center">

![VSCodium](/img/vscodium_vsix.png) 
</p>


## Validating Installation 

You can validate terosHDL dependecies are installed correctly by using the <i>Check Dependecies</i>, you can find the button in teroshdl under <b>Actions</b>

![Check Depencies result](/img/check-dep.png)
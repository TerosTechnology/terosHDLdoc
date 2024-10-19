---
description: Installation Checklist
id: installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const PATH = '${PATH}'
import Mermaid from '@theme/Mermaid';

# Prerequisites

TerosHDL can be installed in VSCodium or VSCode. As open source alternative of VSCode we recommend **VSCodium**. But it works in both with the same functionalities.

Here you can see a diagram of how to install the requirements to use TerosHDL with all its functionalities:

<Mermaid
  value={`
  graph LR
      A(Install VSCode/VSCodium) --> N(Configure Python)
      N --> B[1. Install Python3]
      N --> D(2. Add Python3 to System Path)
      N --> C(3. Install Python3 packages)
      A --> F[Install make]
      A --> G[Install EDA tools]
      C --> e1(vunit-hdl)
      C --> e2(edalize)
      C --> e3(yowasp-yosys)
      C --> e4(cocotb)
      style e1 stroke-dasharray: 5 5
      style e2 stroke-dasharray: 5 5
      style e3 stroke-dasharray: 5 5
      style e4 stroke-dasharray: 5 5
    `}
/>


Before installing TerosHDL, you need to install some dependencies, which are software packages or libraries that the IDE relies on to function properly.

1. [VSCodicum/VSCode](#1-vscodiumvscode)
2. [Python3](#2-python3)
3. [Python3 packages](#3-python3-package-dependencies)
4. [make](#4-make)
5. [EDA Tools](#5-eda-tools)

## 1. VSCodium/VSCode

Install [VSCodium](https://vscodium.com/#install) or [VSCode](https://code.visualstudio.com/download).

## 2. Python3

Install Python3 in your OS:


<details>
<summary>Windows Standalone</summary>
1. Go to the Python website and download the latest version of Python3 for Windows: <a href="https://www.python.org/downloads/windows">https://www.python.org/downloads/windows</a>

2. Run the downloaded file and follow the installation wizard. During the installation, make sure to check the box "Add Python 3.x to PATH" so that you can run Python and pip from any command prompt.

3. Once Python is installed, open a command prompt by pressing <kbd>Win+R</kbd> and typing cmd, then press <kbd>Enter</kbd>.

4. Type <code>python --version</code> in the command prompt and press <kbd>Enter</kbd>. This should display the version of Python you just installed.

5. Next, you need to install pip, the package installer for Python. Download the <code>get-pip.py</code> script from <a href="https://bootstrap.pypa.io/get-pip.py">https://bootstrap.pypa.io/get-pip.py</a>

6. Open a command prompt and navigate to the folder where you saved the <code>get-pip.py</code> script.

7. Type python <code>get-pip.py</code> and press <kbd>Enter</kbd>. This will install pip on your system.

8. To verify that pip is installed correctly, type <code>pip --version</code> in the command prompt and press Enter. This should display the version of pip you just installed.
</details>

<details>
<summary>Windows Anaconda</summary>


1. Click windows and search for "Edit the system enviorment variables"
2. Under "System Variables", find <code>Path</code> and click edit
3. Click new and add the anaconda path (By default, it should be <code>C:\\ProgramData\\anaconda3\\</code>)
4. Click ok and test correct python was choosen, you can do this by opening command prompt and writing python, 
you should see a python prompt with "Anaconda" mentioned.

Now, lets create a virtual enviorment and connect it to TerosHDL:

1. In a folder you want the virtual enviorment to be installed, open command prompt
2. write the following command <code>python -m venv venv</code>, this will create a folder named venv where the new virtual python enviorment will be located
3. Next, we will use the command prompt to "Activate" the virtual enviorment, we do this to install packages in the virtual enviorment, you do this by writing the following command: <code>venv\Scripts\activate.bat</code>, if you see (venv) before the command prompt the virtual enviorment has been activated correctly.
4. Now we will install the required python packages for teroshdl, we will do this by typing <code>pip install teroshdl</code>in the virtual enviorment command prompt!

</details>

<details>
<summary>Linux</summary>

1. Open a terminal window by pressing <kbd>Ctrl + Alt + T</kbd> or searching for "Terminal" in the applications menu.<br /><br />
3. Update the package list to ensure you have the latest version of the package manager by running the following command: <code>sudo apt update</code><br /><br />
4. Install Python 3 by running the following command: <code>sudo apt install python3</code><br /><br />
5. Verify that Python 3 is installed by running the following command: <code>python3 --version</code><br /><br />
6. This should display the version of Python 3 that was installed.<br /><br />
7. Install pip, the package installer for Python, by running the following command: <code>sudo apt install python3-pip</code><br /><br />
8. Verify that pip is installed by running the following command: <code>pip3 --version</code><br /><br />
9. This should display the version of pip that was installed.<br /><br />
</details>

<details>
<summary>Mac</summary>
1. Open a web browser and go to the Python website: <a href="https://www.python.org/downloads/">https://www.python.org/downloads/</a><br /><br />
2. Download the latest version of Python3 for macOS by clicking on the "Download Python 3.x.x" button. Make sure to download the version that matches your system architecture (Intel or Apple Silicon).<br /><br />
3. Once the download is complete, open the downloaded file and follow the installation wizard. During the installation, make sure to check the box "Install pip" so that you can easily install Python packages.<br /><br />
4. To verify that Python and pip are installed correctly, open a Terminal window by going to Applications > Utilities > Terminal. Type <code>python3 --version</code> and press <kbd>Enter</kbd>. This should display the version of Python you just installed. Then, type <code>pip3 --version</code> and press <kbd>Enter</kbd>. This should display the version of pip you just installed.<br /><br />
5. If you want to use Python and pip without typing the <code>python3</code> and <code>pip3</code> commands, you can add them to your system path by adding the following lines to your shell configuration file (usually either <code>\~/.bashrc</code> or <code>~/.zshrc</code>):<br /><br />
<code>export PATH="/Library/Frameworks/Python.framework/Versions/3.X/bin:{PATH}"</code>
</details>


## 3. Python3 package dependencies

export const pythonDependencies = [
  { name: "vunit-hdl", description: "VUnit is an open source unit testing framework for VHDL/SystemVerilog." },
  { name: "edalize", description: "Python Library for interacting with EDA tools." },
  { name: "yowasp-yosys", description: "This package provides Yosys binaries built for WebAssembly."},
  { name: "cocotb", description: "COroutine based COsimulation TestBench environment for verifying VHDL and SystemVerilog RTL using Python. (optional)"},
];
export const libraryNames = pythonDependencies.map(lib => lib.name).join(' ');

Install Python package dependencies:

<ul>
  {pythonDependencies.map((lib, index) => (
    <li key={index}>
      <code>{lib.name}</code>: {lib.description}
    </li>
  ))}
</ul>

<Tabs>
    <TabItem value="windows" label="Windows" default>
      Open a command prompt by pressing the <kbd>Windows</kbd> key and <code>R</code> key at the same time, then type <code>cmd</code> and hit <kbd>Enter</kbd>. Type: <code>pip install {libraryNames}</code>
    </TabItem>
    <TabItem value="linux" label="Linux">
      Open a terminal window by pressing <kbd>Ctrl + Alt + T</kbd> or searching for "Terminal" in the applications menu.. Type: <code>sudo pip install {libraryNames}</code>
    </TabItem>
    <TabItem value="mac" label="Mac">
      Open a terminal window by going to Applications > Utilities > Terminal. Type: <code>sudo pip install {libraryNames}</code>
    </TabItem>
</Tabs>


## 4. Make

:::info

To make sure that TerosHDL is getting your Make binary correctly you need to configure the installation directory in `TerosHDL configuration menu >> General >> Make installation directory`

:::

Install **make** in your system:

<Tabs>
    <TabItem value="windows" label="Windows" default>
    <div>
      <ol>
        <li>Open a Command Prompt or PowerShell with administrative privileges.</li>
        <ul>
          <li>Press <kbd>Win</kbd> + <kbd>X</kbd> and select "Windows Terminal (Admin)" or "Command Prompt (Admin)."</li>
          <li>For PowerShell, right-click the Start button, choose "Windows PowerShell (Admin)."</li>
        </ul>
        <li>Ensure you have Chocolatey installed. If not, you can install it by running the following command:</li>
        <pre>
          <code>
            Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
          </code>
        </pre>
        <li>Once Chocolatey is installed, you can install make by running the following command:</li>
        <pre>
          <code>
            choco install make
          </code>
        </pre>
        <li>Chocolatey will handle the installation process, including any dependencies make requires.</li>
        <li>After the installation is complete, you can verify that make is installed by checking its version with this command:</li>
        <pre>
          <code>
            make --version
          </code>
        </pre>
      </ol>
    </div>
    </TabItem>
    <TabItem value="windows_alternative" label="Windows (alternative method)" default>
      Make is a Unix-based utility and is not included in Windows by default. However, you can install Make on Windows using the following steps:<br /><br />
      1. Install a Unix-like environment such as Cygwin on your Windows system. This environment provide a Unix-like terminal and command-line tools, including Make. <br />Download and run the Cygwin installer from the official website (<a href="https://cygwin.com/install.html">https://cygwin.com/install.html</a>). During the installation process, select the packages you want to install, including Make, from the package list.
      2. Once you have installed a Unix-like environment, open the terminal or command prompt provided by that environment.<br /><br />
      3. Verify that Make has been installed by running the following command: <code>make -v</code>. This should display the version of Make installed on your system.<br /><br />
    </TabItem>
    <TabItem value="linux" label="Linux">
      Open a terminal window by pressing <kbd>Ctrl + Alt + T</kbd> or searching for "Terminal" in the applications menu.. Type: <code>sudo apt install make</code>
    </TabItem>
    <TabItem value="mac" label="Mac">
      <ul>
          1. Open a terminal window by going to Applications > Utilities > Terminal.<br /><br />
          2. Install Xcode, which includes Make, by running the following command: <code>xcode-select</code>. This will prompt you to install the Xcode Command Line Tools, which includes Make.<br /><br />
          3. Verify that Make has been installed by running the following command: <code>make -v</code>. This should display the version of Make installed on your system.<br /><br />
      </ul>
    </TabItem>
</Tabs>

## 5. EDA tools

:::warning

To use the Verilog/SystemVerilog linter (error checking), you need to install: Vivado, ModelSim, Icarus, or Verilator.

:::

Install your favorite tools: Quartus Pro, ModelSim, Yosys, GHDL, Vivado... For open-source tools, we recommend 
downloading OSS CAD Suite (https://github.com/YosysHQ/oss-cad-suite-build/releases). OSS CAD Suite is a binary software 
distribution for a number of open source software used in digital logic design. You will find tools for RTL synthesis, 
formal hardware verification, place & route, FPGA programming, and testing with support for HDLs like Verilog, 
Migen, and Amaranth.

After that, you only need to configure the path to the binaries.
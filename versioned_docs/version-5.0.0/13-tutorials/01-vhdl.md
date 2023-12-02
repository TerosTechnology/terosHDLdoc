---
description: VHDL with open source tools
id: tutorial_vhdl
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# VHDL simulation with open source tools

In this tutorial I will show you how to simulate your VHDL designs with TerosHDL and GHDL.

GHDL is an open-source compiler and simulator for the VHDL hardware description language. It allows designers to simulate and test digital circuit designs written in VHDL, which is commonly used in the development of electronic systems.

GHDL is a command-line tool that supports VHDL-87, VHDL-93, VHDL-2002, and VHDL-2008 standards. It is designed to be highly portable and can run on a variety of platforms, including Windows, Linux, and macOS.

One of the key benefits of GHDL is that it can be used for both compilation and simulation. It can compile VHDL code into executable files that can be run on a simulator or FPGA, and it can also simulate the behavior of a digital circuit design, allowing designers to verify their designs before they are implemented in hardware.

## Requirements

Follow all the steps to install [TerosHDL and the requirements](../02-getting_started/01-installation.md)

## GHDL installation

<Tabs>
    <TabItem value="windows" label="Windows" default>
      <ul>
        1. Install MinGW by downloading and running the MinGW installer from the MinGW website (<a href="http://www.mingw.org/">http://www.mingw.org/</a>). Follow the prompts to install MinGW to a directory on your computer, such as <code>C:MinGW</code>.<br /><br />
        2. Open the terminal or command prompt and type: <code>pacman -S mingw-w64-x86_64-ghdl</code>
      </ul>
    </TabItem>
    <TabItem value="linux" label="Linux">
      Open a terminal window by pressing <code>Ctrl + Alt + T</code> or searching for "Terminal" in the applications menu.. Type: <code>sudo apt install ghdl</code>
    </TabItem>
    <TabItem value="mac" label="Mac">
      <ul>
          1. Open a terminal window by going to Applications > Utilities > Terminal.<br /><br />
          2. Install Xcode, which includes Make, by running the following command: <code>xcode-select</code>. This will prompt you to install the Xcode Command Line Tools, which includes Make.<br /><br />
          3. Install Homebrew by running the following command in a Terminal window: <code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"</code>.<br /><br />
          4. Install GHDL by running the following command in a Terminal window: <code>brew install ghdl</code><br /><br />
      </ul>
    </TabItem>
</Tabs>

## TerosHDL configuration

Select GHDL as tool:

<p align="center">

![Config](/img/tutorial/ghdl/config_manager.png) 
</p>

Configure your GHDL installation path:

<p align="center">

![Config](/img/tutorial/ghdl/config_ghdl.png) 
</p>

## Adding an example project 

Select: `Load an example project -> GHDL`

<p align="center">

![Config](/img/tool_manager/project/add.png) 
</p>


## Running simulation

In sources view select `half_adder_tb.vhd` as top level. You will see *(current)* message in the file.

<p align="center">

![Config](/img/tutorial/ghdl/select.png) 
</p>

Run the test and check the output:

<p align="center">

![Output](/img/tutorial/ghdl/output.png) 
</p>


---
description: Linting (style checking)
id: style_checking
---

# Linting (style checking)

TerosHDL analyzes your code to ensure that it conforms to a set of pre-defined style rules or guidelines. In other words, it checks your code for style violations and suggests changes to bring it in line with the specified style rules.

TerosHDL supports the following tools as <b>VHDL</b> style linters:
* [VSG](https://github.com/jeremiah-c-leary/vhdl-style-guide#installation)

TerosHDL supports the following tools as <b>Verilog/SystemVerilog</b> style linters:
* [Verible](https://github.com/chipsalliance/verible#installation-1)


## Configuration

You need to install the linter (Verible...) and configure the path in: `TerosHDL configuration -> Tools -> Tool name -> Installation path` Yo need to set the directory where the binary is located. E.g. for Verible: `/home/carlos/Downloads/verible-v0.0-3253-gf85c768c/bin`

Under the configuration menu, you'll find <i>Linter Settings</i>.

TerosHDL allows you to pass arguments for each linter tool. E.g: `--rules="enum-name-style,+line-length=length:80,-no-tabs"`

## Checking errors
Once configuration was performed correctly, TerosHDL will route all errors from your chosen style-checker to VScode's built in error system.


Problems detected will be shown with yellows squigglies.

Hovering over the error will show the linters reported issue:


<p align="center">
<i>Image 1: Example Problem in Code</i>

![Example Problem](/img/stylechecker/verible-warning-inline.png) 
</p>

You can also see all of the errors in all of the currently open files under the <i>Problems</i> tab:
<p align="center">
<i>Image 2: Example Problem in Problems</i>

![Example Problem](/img/stylechecker/verible-warning-problems.png) 
</p>


We can also see examples of this in VSG:
<p align="center">
<i>Image 3: VSG Problem in Problems</i>

![Example Problem](/img/stylechecker/vsg-warning-problems.png) 
</p>
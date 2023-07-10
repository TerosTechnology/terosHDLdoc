---
description: Linting (errors checking)
id: errors_checking
---

# Linting (errors checking)

TerosHDL checks your code for potential errors, bugs, and stylistic issues, helping you to write code that is more readable, maintainable, and error-free. 

Overall, using TerosHDL linting in VSCode can help you write better code by catching errors and enforcing style guidelines, saving you time and reducing the risk of bugs and maintenance issues down the line.

TerosHDL supports the following tools as <b>VHDL</b> linters:
* VHDL-LS: **built-in linter, you don't need extra installation**
* GHDL
* Modelsim
* Vivado (xhdl)

TerosHDL supports the following tools as <b>Verilog/SystemVerilog</b> linters:
* Icarus (iverilog)
* Modelsim
* Verilator
* Vivado (xvlog)


:::danger

Currently TerosHDL linter has a limitation in that it only analyzes the current file you are working on and does not take into account other files in your project. This means that if there is a dependency or module that is used in other files, the linter cannot analyze them to find issues or errors.

Only VHDL-LS for VHDL supports multiple files.

:::

## Configuration

You need to install the linter (Vivado, GHDL...) and configure the path in: `TerosHDL configuration >> Tools >> Tool name >> Installation path` Yo need to set the directory where the binary is located.

Under the configuration menu, you'll find <i>Linter Settings</i>.

TerosHDL allows you to pass arguments for each linter tool. E.g: `--std=08 --ieee=synopsys`

## Checking errors
Once configuration was performed correctly, TerosHDL will route all errors from your chosen linter to VSCode built in error system.

Errors detected will be shown with red squigglies.

Hovering over the error will show the linters reported issue:

<p align="center">
<i>Image 1: Example Error in Code</i>

![Example Error](/img/linter/linter-error-example.png) 
</p>

You can also see all of the errors in all of the currently open files under the <i>Problems</i> tab:
<p align="center">
<i>Image 2: Example Error in Problems</i>

![Example Error](/img/linter/linter-problems.png) 
</p>
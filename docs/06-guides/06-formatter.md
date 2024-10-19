---
description: It ensures clean and consistent code structure by automatically adjusting it according to best practices.
id: formatter
---

# Code Formatting

TerosHDL restructures source code to comply with a specific code style. This can include formatting code indentation, line spacing, bracket placement, and other elements to make the code more readable and consistent.

The main goal of a code formatter is to enhance the clarity and maintainability of code by enforcing a consistent coding style across a project or team. Code formatters are commonly used in software development to improve code quality, readability, and maintainability, and to reduce the time and effort required for code reviews and maintenance.

TerosHDL supports the following tools as `VHDL` formatters:
* ***Standalone***: built-in formatter, you don't need extra installation.
* ***VSG***: it needs Python3.

TerosHDL supports the following tools as `Verilog/SystemVerilog` formatters:
* ***iStyle***: built-in formatter, you don't need extra installation.
* ***s3sv***: it needs Python3.
* ***Verible***

## Configuration

### General

In `TerosHDL Configuration >> Formatter >> Tool name` you can configure each tool. In `TerosHDL Configuration >> Formatter` you can select the tool backend.

### Verible

The Verible tool suite includes a code formatter, which automatically reformats HDL code to conform to a specific style guide or coding standard, as well as a code linter, which identifies and reports issues with HDL code that violate recommended coding practices.

Verible is designed to help developers improve the quality and consistency of their HDL code, while also reducing the time and effort required for manual code reviews and maintenance.

1. Download the Verible formatter from the GitHub repository or from the official website.
2. Extract the downloaded file to a folder of your choice.
3. Add the folder containing the Verible formatter executable to your system's PATH environment variable.
4. Verify the installation by opening a command prompt and running the command verible-verilog-format --help. This should display the help message for the Verible formatter.

:::note

Alternatively you can configure the Verible binary path in: `TerosHDL configuration >> Tools >> Verible >> Installation path`. E.g: `/home/carlos/Downloads/verible-v0.0-3253-gf85c768c/bin`

:::

### VSG

VHDL Style Guide (VSG) provides coding style guide enforcement for VHDL code. [Check the full documentation.](https://vhdl-style-guide.readthedocs.io/en/latest/index.html)

1. [Install and configure Python3](../02-installation_checklist/01-prerequisites.md#2-python3).
3. Install VSG: `pip install vsg`

### s3sv

1. [Install and configure Python3](../02-installation_checklist/01-prerequisites.md#2-python3).

## Code formatting

### From command menu

1. Open the file that you want to format.
2. Open the Command Palette by pressing <kbd>Ctrl + Shift + P</kbd> on Windows or Linux, or <kbd>Command + Shift + P</kbd> on Mac.
3. Type "Format Document" in the Command Palette and select it. This will format the entire document. 

### Using command shortcuts

1. Open the file that you want to format.
2. Press <kbd>Shift + Alt + F</kbd> on Windows/Linux or <kbd>Shift + Option + F</kbd> on Mac to format the entire document.

### From TerosHDL editor button

<p align="center">

![Code formatting](/img/formatter.png) 
</p>




---
description: Go to definition
---

# Go to definition

Go to Definition allows HDL designers to quickly navigate to the location in the code where a particular function, variable, or other element is defined. This feature is especially useful when working with large codebases or unfamiliar code, where it may be difficult to manually search for the definition of a specific element.

When a designer selects an element in the code editor, TerosHDL analyzes the code and navigates to the location where that element is defined. This may involve jumping to another file, function, or module, depending on the structure of the code.

Go to Definition can be triggered in a variety of ways:

- You can go to the definition of a symbol by pressing `F12`
- You can jump to the definition with `Ctrl+Click` or open the definition to the side with `Ctrl+Alt+Click`

Overall, Go to Definition is a powerful tool that can save developers a significant amount of time and effort when working with complex code. It helps developers navigate and understand the structure of the codebase more efficiently, which can ultimately lead to faster and more effective coding.


:::caution

Jumping between files only supported in VHDL

:::


<p align="center">
<i>Image 1: Go to definition Verilog Example </i>

![Example Problem](/img/editor/go_to_definition_verilog.gif) 
</p>


<p align="center">
<i>Image 2: Go to definition Verilog Example </i>

![Example Problem](/img/editor/go_to_definition_vhdl.gif) 
</p>
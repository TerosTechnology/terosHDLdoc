---
description: using the schematic viewer
---
# Usage

## Basic usage 

To view the schematic for the current file you have open, click "Netlist viewer" on the top right of the window:

<p align="center">
<i>Image 1: Netlist viewer button </i>

![Netlist viewer button](/img/schematic_viewer/viewer-button.png)  
</p>

This will open a new window with the current schematic of the design.


<p align="center">
<i>Image 2: Opened schematic </i>

![Opened schematic](/img/schematic_viewer/schemtatic-viewer-window.png)  
</p>


as long as the schematic viewer is opened, any changes done in the file will automatically update the schematic.


## Usage report
yosys also output the utilization of cells used to create this schematic, you can view the results under the "Output" section of VScode.

if the design failed to synthesize, you can view the issues in this window as well.

<p align="center">
<i>Image 3: Usage report </i>

![Usage report](/img/schematic_viewer/usage-report.png)  
</p>


## Custom yosys command

You can also modify the command sent to yosys for synthesis, this can be done in the configuration menu of TerosHDL

The default command for verilog is:
```
read_verilog -sv {CURRENTFILE}; proc; opt; write_json teroshdl_yosys_output.json; stat
```

And for vhdl is:

```
ghdl --std=08 -fsynopsys {CURRENTFILE} -e; proc; opt; write_json teroshdl_yosys_output.json; stat
```


One example you can use is to map the schematic to a technology map.

This can be done by adding ```synth``` to the yosys command, we now get the following schematic for the example shown previously.
here, yosys implemented the design using logic primitives rather than RTL.


<p align="center">
<i>Image 4: Opened schematic post synthesis </i>

![Opened schematic post synthesis](/img/schematic_viewer/schemtic-post-synth.png)  
</p>




:::note
you can find additional commands in the yosys documentation in this [link](https://yosyshq.readthedocs.io/projects/yosys/en/latest/)
:::


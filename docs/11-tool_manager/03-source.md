---
description: Source view
---

# Source view

<p align="center">

![Project view](/img/tool_manager/source/general.png) 
</p>

## Adding source

<p align="center">

| Action           | Description                                                                                    |
|------------------|------------------------------------------------------------------------------------------------|
| From browser     | Select files from browser.                                                                     |
| From CSV         | Add files from a CSV list                                                                      |
| From VUnit       | Add files from a [ VUnit ]( http://vunit.github.io/ ) run.py                                   |
</p>

The accepted CSV format is as follows:

```
file_0.sv
file_1.vhd
file_2.vhd
```

or

```
file_1.vhd, lib_0
file_2.vhd
file_3.vhd, lib_0
```

<p align="center">

![Project view](/img/tool_manager/source/add.png) 
</p>

## Source configuration

You can configure the properties of a project source. You can set the file type, language version, and type.

| Languages            | Description                         |
|----------------------|-------------------------------------|
| vhdlSource           | VHDL                                |                  
| verilogSource        | Verilog                             |   
| systemVerilogSource  | SystemVerilog                       |               
| cSource              | C                                   |               
| cppSource            | C++                                 |                 
| python               | Python                              |                    
| veribleLintRules     | Verible Linter Rules                |         
| tclSource            | TCL                                 |                 
| xdc                  | Xilinx Vivado constraint file       |                  
| sdc                  | Constraints File                    |     
| pin                  | Pin declaration                     |    
| xci                  | Xilinx Vivado IP file               |          
| sbyConfigTemplate    | SymbiYosys                          |                        
| osvvmProject         | OSVVM Project                       |  
| QIP                  | Intel Quartus IP file               |                       
| UCF                  | Xilinx ISE constraint file          |                            
| IP                   | IP declaration                      |                            
| QSYS                 | Quartus IP                          |                        
| none                 |                                     |   


| Languages            | Versions       |
|----------------------|----------------|
| VHDL                 | 2008, 2000, 93 |
| Verilog/SV           | 2005, 2000     |

| Source Type          | Versions               |
|----------------------|------------------------|
| Simulation           | Testbenches            |
| Synthesis            | Synthesizable Sources  |
| None                 | Not specified          |


<p align="center">

![Project view](/img/tool_manager/source/sourceConfiguration.png) 
</p>

## Adding library

<p align="center">

![Project view](/img/tool_manager/source/add.png) 
</p>

## Adding source to library

<p align="center">

![Project view](/img/tool_manager/source/add_to_lib.png) 
</p>

## Deleting source/library

<p align="center">

![Project view](/img/tool_manager/source/delete.png) 
</p>

## Setting project toplevel file

When you select a file as toplevel in the project you can see `(current)` at the end of the name.

<p align="center">

![Project view](/img/tool_manager/source/toplevel.png) 
</p>

## Sources added manually vs automated

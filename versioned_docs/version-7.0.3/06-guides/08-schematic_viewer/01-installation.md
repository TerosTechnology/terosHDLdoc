---
description: setup of schematic viewer
---

# Getting started

TerosHDL supports a basic visualization of the current file you have open. TerosHDL uses [yosys](https://github.com/YosysHQ/yosys), which is an open source hdl synth tool.

The following section describes how to get your environment ready for using the schematic viewer.


# Installation

## Linux/Mac/Windows

TerosHDL suggests `OSS CAD Suite`, which is a prebuilt collection of tools which also includes Yosys + VHDL support.
You can download `OSS CAD Suite` by following this [link](https://github.com/YosysHQ/oss-cad-suite-build?tab=readme-ov-file#installation)

:::note
TerosHDL expects the tools to be available in the PATH variable, ensure you add the "bin" folder of the `OSS CAD Suite` to your operating system PATH variable. In other case you need to configure your Yosys installation path in: `TerosHDL Configuration >> Tools >> Yosys >> Installation Path`
:::

## Standalone

TerosHDL includes a WebAssembly version of Yosys for Verilog/SV. You can select it in: `TerosHDL Configuration >> Schematic Viewer >> General >> Backend >> Standalone` and you don't need to install anything.

### Verilog
If you plan to only use verilog in your designs, you can use yowasp-yosys, which is a distribution of yosys running as an executable.

You only need to run the following command:

```
pip install yowasp-yosys
```

To use yowasp-yosys, select **YOWASP** in the configuration menu: `TerosHDL Configuration >> Schematic Viewer >> General >> Backend`


:::note
If you are using Windows add `yowasp-yosys` to the System Path. For example: `C:\Users\xxx\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.7_qbz5n2kfra8p0\LocalCache\local-packages\Python37\Scripts`
:::

As alternative you can install Yosys using `OSS CAD Suite`: https://github.com/YosysHQ/oss-cad-suite-build?tab=readme-ov-file#installation

### VHDL
Yosys was natively designed to work with verilog and thus an additional plugin is required to support VHDL.

To use yosys+ghdl, select **GHDL + Yosys** in the configuration menu.

You can install Yosys+GHDL using `OSS CAD Suite`: https://github.com/YosysHQ/oss-cad-suite-build?tab=readme-ov-file#installation
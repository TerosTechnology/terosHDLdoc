.. _configuration_netlist:

Configuration
=============

You need to install **Yosys** or **YoWASP**.

- **YoWASP**: works in Linux, MacOS and Windows. It supports Verilog and partially System Verilog. The installation is easier, but the first load is slower: ``pip install yowasp-yosys``
- **Yosys**: It supports Verilog and partially System Verilog. https://github.com/YosysHQ/yosys
- **GHDL + Yosys**: It supports VHDL, Verilog and partially System Verilog. Hard to install: https://github.com/ghdl/ghdl-yosys-plugin 
A short way to install it: https://github.com/YosysHQ/fpga-toolchain#installation

.. important::

    It's recommended to use YoWASP if you aren't an expert user.


Open TerosHDL configuration panel and configure the schematic viewer:

.. image:: images/configuration.png
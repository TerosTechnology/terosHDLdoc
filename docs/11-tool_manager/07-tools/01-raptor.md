---
description: Raptor
---

# Raptor

:::caution

TerosHDL is compatible with Raptor 2023.04

:::


## Configuration

1. [Configure Raptor as your tool.](../01-started.md#configuration)
2. Configure your Raptor binary directory in the [TerosHDL configuration](../../02-getting_started/03-views.md#configuration-menu): `TerosHDL >> Configuration >> Tools >> Raptor Design Suite >> Installation path`. E.g: `/opt/RapidSilicon/Raptor/2023.04/bin`
3. Configure your GTKwave binary path: `TerosHDL >> Configuration >> Tools >> General >> GTKWave`. E.g: `/opt/RapidSilicon/Raptor/2023.04/bin/gtkwave/bin`

## Running an implentation

1. [Create an empty project.](../01-started.md#project-creation)
2. [Select the project and add your sources.](../01-started.md#adding-sources)

:::caution

Don't add the testbenches as source. You need to configure your testbench paths in the Raptor configuration menu.

:::

3. [Select the top level and run the implementation.](../01-started.md#running-your-tool)
4. [Navigate through the generated artifacts](../01-started.md#running-your-tool):
    - Summary: TCL project file.
    - Routing, Place... reports.
    - Simulation waveforms.
5. If, in the outputs view, you click in `Summary >> Build folder` TerosHDL will open your Raptor project folder.

## Running a simulation

2. In the Raptor configuration (`TerosHDL >> Configuration >> Tools >> Raptor Design Suite`) select *RTL simulation*, *Simulate Gate*...

<p align="center">

![Views](/img/tool_manager/tools/raptor/config.png)
</p>


3. Create a new empty project.
4. Select the project.
5. Add your desing sources and constraints files.
6. Configure your top testbench path in: `TerosHDL >> Configuration >> Tools >> Raptor Design Suite >> Simulation top level path`. E.g: `/home/carlos/rapidsilicon/tcl_examples/counter_vhdl/testbench.vhd`.
6. Configure other testbench sources in: `TerosHDL >> Configuration >> Tools >> Raptor Design Suite >> Other simulation sources`. E.g: `/home/carlos/rapidsilicon/tcl_examples/counter_vhdl/testbench.vhd, /home/carlos/rapidsilicon/tcl_examples/counter_vhdl/other_testbench.vhd`. If you want to add more than one source you need to put a comma: `/source/one.v, /source/two.v`
7. [Run Raptor](../01-started.md#running-your-tool)
8. Open your waveform from the Output View.
9. If, in the outputs view, you click in `Summary >> Build folder` TerosHDL will open your Raptor project folder.

<p align="center">

![Views](/img/tool_manager/tools/raptor/output.png)
</p>


## Running a Raptor project sample

You can add a Raptor project sample from [the TerosHDL menu](../01-started.md#project-creation):

- raptor_counter
- raptor_counter_vhdl
- AES_DECRYPT
- raptor_and2_gemini

:::info

After this you need to configure the [Tool Manager](../01-started.md#configuration) and [Raptor](#configuration).

:::

## Cleaning your project stages

[Clean your project](../01-started.md#cleaning-your-project).


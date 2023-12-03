---
description: Quartus
---

# Intel Quartus Prime

TerosHDL provides a comprehensive development experience with Intel® Quartus® Prime Pro.

<p align="center">

![Quartus](/img/tool_manager/tools/quartus/diagram.svg)
</p>

## Configuration

:::caution

Currently TerosHDL configuration menu is not available for Intel@ Quartus@ projects.

:::

TerosHDL will use the following environment variables (in order) to search for the Intel@ Quartus@ installation path:

1. `QUARTUS_ROOTDIR`. E.g: `/home/carlos/intelFPGA_pro/23.3/quartus`
2. `QSYS_ROOTDIR`. E.g: `/home/carlos/intelFPGA_pro/23.3/qsys/bin`
3. If both environment variables are empty TerosHDL will use the System Path.

## Project creation

To fully leverage the potential of Intel® Quartus® integration with TerosHDL, you need to create a Quartus®-type project. This can be achieved by either creating a new project or adding an existing one.

In both cases, once added to TerosHDL, all changes will be reflected when you open the Intel® Quartus® application.

### New Intel Quartus project

When you create a new project from scratch in TerosHDL, it will prompt you for the directory where the project will be saved, the name of the new project, the device family, and the device. The last two are based on the devices installed on your PC.

<p align="center">

![Quartus](/img/tool_manager/tools/quartus/new_project.png)
</p>

### Loading an Intel Quartus project

<p align="center">

![Quartus](/img/tool_manager/tools/quartus/new_project.png)
</p>

## Managing a project

After adding a project, you need to select it as the current active project and choose a top level. The selected project/top level has a green tick icon:

<p align="center">

![Quartus](/img/tool_manager/tools/quartus/select_project.png)
</p>

You can add sources either from the Intel® Quartus® application or from TerosHDL ([go to the section](../01-started.md#adding-sources)).

## Tasks manager

When the current active project is of the Intel® Quartus® type, TerosHDL loads it in the task manager. Clicking on any of them will start their execution.
You will be able to see in real time the percentage completed, the elapsed time, and the final result.

Additionally, with the stop button, you can halt the current task, and by clicking on the trash can icon, you can clear the entire project.

<p align="center">

![Quartus](/img/tool_manager/tools/quartus/run.png)
</p>

## Logs and results

:::caution

If you want to see the *Log Tabl*e first you have to open ***TEROSHDL: LOG REPORT*** view.

:::

When the task has concluded, you can open the results. There are three types:

- Log table **(1)**: loads the log message table in a webview. If you click on a message with a location, the editor will take you to the corresponding file and line. You can filter by log level.
- Plain text logs **(2)**: includes reports, log messages, etc.
- Timing Analyzer **(3)**: opens the timing analyzer.

<p align="center">

![Quartus](/img/tool_manager/tools/quartus/result.png)
</p>
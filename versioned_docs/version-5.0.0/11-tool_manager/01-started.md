---
description: Getting started
---

# Getting started

## Configuration

To run a tool in TerosHDL, you need to first select it in the Tools section of the General tab in the TerosHDL configuration menu.

In the Tools section, you will see a list of available tools that can be run in TerosHDL. To select a tool, simply click on its name in the list. 

![Views](/img/tool_manager/config.png)

## Project creation

In TerosHDL, you have several options for creating and loading projects. You can create an empty project, load an existing project, or load a project from a VUnit run.py file or example project.

- To create an empty project, simply click on the "Add project" button in the TerosHDL project view and select `Empty project`. This will create a new project with no files or libraries.

- To load an existing project select `Load project from EDAM`.

- To load a project from a VUnit run.py file, simply click on the "Load project from VUnit". This will open a file explorer where you can browse to the location of the run.py file. TerosHDL will automatically load the project based on the information in the run.py file.

- Finally, you can also load a project from an example project. This will open a list of example projects that you can choose from. Once you select an example project, TerosHDL will load it into the TerosHDL workspace.

Regardless of how you choose to create or load a project, once it is loaded into TerosHDL, you can start working on it by adding files, running simulations, and generating waveforms.

![Views](/img/tool_manager/project/add.png)

## Adding sources

Click you your project (you can see the `current` at the end of the name).

<p align="center">

![Views](/img/tool_manager/source/add.png)


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

## Running your tool

In the TerosHDL Sources View select your top level file. When you select a file as top level in the project you can see (current) at the end of the name.

<p align="center">

![Views](/img/tool_manager/source/toplevel.png)
</p>


In the TerosHDL Run View click on `Play` button. You will see the message "TerosHDL: tool running" in the left bottom corner. And the live log in `Output >> TerosHDL: Tool Manager`.


<p align="center">

![Views](/img/tool_manager/run/all.png)
</p>

Once a simulation or implementation has finished running in TerosHDL, the user can navigate through the generated artifacts. When the user clicks on a report, a webview will be opened showing the report. When the user clicks on a waveform, the waveform viewer will be opened.

In addition to navigating through the generated artifacts, users can also check the file created by TerosHDL to execute the project in the Summary section.

<p align="center">

![Views](/img/tool_manager/output/all.png)
</p>


## Cleaning your project

:::info

Only supported if you select Raptor Design Suite

:::


<p align="center">

![Run view](/img/tool_manager/tools/raptor/clean.png) 
</p>

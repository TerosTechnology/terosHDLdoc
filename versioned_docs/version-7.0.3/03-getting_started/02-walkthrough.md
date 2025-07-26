---
description: TerosHDL Walkthrough
id: TerosHDL Walkthrough
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Walkthrough

1. [TerosHDL Sidebar](#1-teroshdl-sidebar)
2. [Editor Commands](#2-editor-view)
3. [Log console](#3-log-console)
4. [Outline](#4-outline)


<img src={useBaseUrl('/img/gettingStarted/walkthrough.png')} />;

## 1. TerosHDL Sidebar

- [Projects](../04-project_configuration/02-project.md): Create a new project, import an existing one, select the current project...
- [Files](../04-project_configuration/03-sources.md): Add, import, delete... files and libraries.
- [Hierarchy](../04-project_configuration/04-hierarchy.md): Shows the hierarchy and dependencies between the various modules or files in the project, allowing you to understand the structure of the design.
- [Testbenches]: 
- [Watchers](../04-project_configuration/05-watcher.md):
- [Tasks]: Tasks you can perform in a project: Open the working directory, run a test, view results...
- [IP Catalog]: IP catalog for Quartus projects.
- [Testbenches - Output]: Test and compilations results.
- [Configuration]: Open the settings menu, view documentation, check TerosHDL settings...

<center>
<img src={useBaseUrl('/img/gettingStarted/sidebar.png')} />;
</center>

## 2. Editor View

When you open an HDL file (VHDL/Verilog/SV), the icons for TerosHDL commands will appear 
in the top right corner of the editor:

1. [Code Formatting](../06-guides/06-formatter.md)
2. [Auto Documentation](../06-guides/05-documenter/01-getting_started.md)
3. [Schematic Viewer](../06-guides/08-schematic_viewer/01-installation.md)
4. [State Machine Viewer](../06-guides/07-state_machine_viewer/01-usage.md)
5. [Template Generator: testbenches, entity...](../06-guides/04-templates.md)

<center>
<img src={useBaseUrl('/img/gettingStarted/editor.png')} />;
</center>

## 3. Log Console

In TerosHDL, you can access the log console by using the Output panel. To open the Output panel, 
go to the View menu, select Output, or use the shortcut <kbd>Ctrl + Shift + U</kbd> on 
Windows and Linux, or <kbd>Cmd + Shift + U</kbd> on macOS. Once the Output panel is open, you 
can select different types of log outputs from the dropdown menu at the right-hand side 
of the panel:

- `TerosHDL: Debug`
- `TerosHDL: Global`
- `TerosHDL: Tool Manager`

## 4. Outline

The Outline view in TerosHDL is a powerful tool that provides a hierarchical overview of the symbols in your code file. 
It displays a structured tree view of all the ports, entities, and other significant elements present in the file. 
This feature helps developers quickly navigate through complex files and understand the structure of their code at a glance.

You can access the Outline view from the Explorer pane or activate it using the command palette. The symbols in the 
Outline are organized in the order they appear in the code, and you can click on any symbol to jump directly to its 
location in the file.


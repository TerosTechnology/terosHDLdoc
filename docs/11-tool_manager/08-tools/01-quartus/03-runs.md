---
description: Getting started
---

# Project compilation

After adding a project, you need to select it as the current active project and choose a top level. The selected project/top level has a green tick icon:

<p align="center">

![Quartus](/img/tool_manager/tools/quartus/select_project.png)
</p>

You can add sources either from the Intel® Quartus® application or from TerosHDL ([go to the section](../../01-started.md#adding-sources)).

## Tasks manager

When the current active project is of the Intel® Quartus® type, TerosHDL loads it in the task manager. Clicking on any of them will start their execution.
You will be able to see in real time the percentage completed, the elapsed time, and the final result.

Additionally, with the stop button, you can halt the current task, and by clicking on the trash can icon, you can clear the entire project.

<p align="center">

![Quartus](/img/tool_manager/tools/quartus/run.png)
</p>

## Logs and results

:::info

If you want to see the *Log Tabl*e first you have to open ***TEROSHDL: LOG REPORT*** view.

:::

When the task has concluded, you can open the results. There are three types:

- Log table **(1)**: loads the log message table in a webview. **If you click on a message with a location, the editor will take you to the corresponding file and line. You can filter by log level.**
- Plain text logs **(2)**: includes reports, log messages, etc.
- Timing Analyzer **(3)**: opens the timing analyzer.

<p align="center">

![Quartus](/img/tool_manager/tools/quartus/result.png)
</p>
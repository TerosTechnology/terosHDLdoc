---
description: Getting started
---

# Getting started

TerosHDL provides a comprehensive development experience with Intel® Quartus® Prime Pro.

<p align="center">

![Quartus](/img/tool_manager/tools/quartus/diagram.svg)
</p>

# Configuration

## Quartus@ installation path

As first option TerosHDL will try to get the Intel@ Quartus@ path from your settings:

1. ```TerosHDL Settings >> Tools >> Quartus >> Installation Path```

If it doesn't work TerosHDL will use the following environment variables (in order) to search for the Intel@ Quartus@ installation path:

2. `QUARTUS_ROOTDIR`. E.g: `/home/carlos/intelFPGA_pro/23.3/quartus`
3. `QSYS_ROOTDIR`. E.g: `/home/carlos/intelFPGA_pro/23.3/qsys/bin`
4. If both environment variables are empty TerosHDL will use the System Path.

## Quartus@ configuration

### Project settings

<p align="center">

![Quartus](/img/tool_manager/tools/quartus/settings.png)
</p>

### Project device

<p align="center">

![Quartus](/img/tool_manager/tools/quartus/device.png)
</p>



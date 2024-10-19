---
description: Project Sources
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sources and libraries

TerosHDL projects are composed of files, which are hierarchically organized into libraries. There are different ways to add files to a TerosHDL project, which will be detailed below.

Once you have added your files/libraries to the project, you must select the toplevel. This allows TerosHDL to compute the hierarchy, dependency diagram, and it will be useful for external tools.

Additionally, your current project and files will be used for the error checker (linter).

## Adding sources to a project

<center>
<img src={useBaseUrl('/img/projectConfiguration/sources.png')} />;
</center>

<center>
| Action                                   | Description                                             |
|------------------------------------------|---------------------------------------------------------|
| Browser                                  | Select files from explorer |
| Load from list of files                            | Load list of files files into the project (see above)          |
| Load from VUnit run.py                   | Load files from a VUnit run.py   |
| Add all HDL files from a directory and subdirectories | Add all HDL files recursively from a directory         |
| Add all files from a directory           | Add all files from a directory                          |
</center>

:::info

The CSV format (list of files) is:

```
library, file path relative to the CSV or absolute
library, file path relative to the CSV or absolute
```

For example:

```
file_0.sv
file_1.vhd
file_2.vhd
```

or

```
lib_0, file_1.vhd
file_2.vhd
lib_0, file_3.vhd
```

:::


## Adding libraries to a project

Click on the add button, select library, and enter the name. Then, you can add files to your library:

<center>
<img src={useBaseUrl('/img/projectConfiguration/library.png')} />;
</center>

## Selecting the toplevel

Select the top level of your project so that TerosHDL can compute the hierarchy. Additionally, this top level will be 
used when you run an external tool:

<center>
<img src={useBaseUrl('/img/projectConfiguration/toplevel.png')} />;
</center>

## Removing files and libraries

## Exporting a project


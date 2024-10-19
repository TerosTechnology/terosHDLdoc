---
description: TerosHDL projects
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Creating and Importing Projects

TerosHDL allows multiple ways to create a project: empty project, load from Quartus®, from a previously saved project, 
and more. Here is a summary table with all the options:

<center>
<img src={useBaseUrl('/img/projectConfiguration/import.png')} />;
</center>

| Action                                    | Description of the Action                                 |
|-------------------------------------------|-----------------------------------------------------------|
| Create an empty Generic project           | Create a new project with a generic setup.                |
| Create an empty Intel® Quartus® Prime project | Create a new project specifically for Intel® Quartus® Prime environment. |
| Load an existing Intel® Quartus® Prime project | Open an existing project that was created in the Intel® Quartus® Prime environment. |
| Load project from JSON EDAM               | Import project settings and configurations from a JSON EDAM file. |
| Load project from YAML EDAM               | Import project settings and configurations from a YAML EDAM file. |
| Load project from VUnit run.py            | Import a project that is set up using a VUnit run.py script. |
| Load an example project                   | Open a pre-configured example project provided within TerosHDL. |
| Create an empty TL-Verilog project        | Start a new project with a setup for TL-Verilog development. |
| Load an existing TL-Verilog project       | Open a previously created TL-Verilog project. |

# Managing a Project

Once you have created or loaded a project, you must select it as the current project in TerosHDL. The selected
project will be highlighted in green.

<center>
<img src={useBaseUrl('/img/projectConfiguration/select.png')} />;
</center>

Now you will be able to change project settings, rename it, or delete it.

<center>
<img src={useBaseUrl('/img/projectConfiguration/manage.png')} />;
</center>

.. _documenter:

Documenter
==========

Features
--------

The supported elements of the languages are represented in the following table:

=====================    ================= =============
 Element                  Verilog/SV         VHDL 
=====================    ================= ============= 
  FSM                     Yes               Yes      
  Diagram                 Yes               Yes  
  Description             Yes               Yes
  Ports                   Yes               Yes
  Parameters/Generics     Yes               Yes  
  Constants               Yes               Yes
  Typedef/Type            Yes               Yes
  Signals                 Yes               Yes
  Always/process          Yes               Yes
  Instantiations          Yes               Yes
=====================    ================= =============

Some elements can be avoided in documentation, or documented only if a comment hs been added.


Special comment symbols
-----------------------

A special symbol can be configured to identify the coments to be extracted 
from the HDL file. The special symbol must follow the comment characters of
the language that is being used. By default the special character is ``!``

The comments support MarkDown so it can be used to add some style
to the documentation (links, tables,etc).

Example:

.. code-block:: vhdl

    --! This is a description
    --! of the entity.
    entity counter is
    port (
        clk: in std_logic; --! Clock comment
        out_data: out std_logic --! Description **port comment**
    );
    end counter;

Go to the :doc:`documenter configuration section <../configuration/documenter>` for more information.

Documenting files
-----------------

**General rules:**

- The comments without the special character will not be part of the generated documentation.
- The description text and Wavedrom & bitfield diagrams must be described before the module declaration.
- Multiline comments are allowed in the lines above a declaration.
- If there are multilines and inline comments. Inline comments have priority.
- MarkDown are allowed inside the comments. MarkDown tables, links, label or html coded embedded in the comments will be processed by the documenter.

.. image:: images/documenting_files.png

Wavedrom
~~~~~~~~

TerosHDL supports WaveJSON format in the module description.
The format describes digital timing diagrams.
You can learn more about it in the `wavedrom tutorial`_. 

.. image:: images/wavedrom_example.png

Bitfield
~~~~~~~~

TerosHDL can also parse data descriptions in the same way that wavedrom.
You can learn more about `bitfield`_.

.. image:: images/bitfield_example.png

Doxygen support
~~~~~~~~~~~~~~~

Doxygen commands are parsed by the documenter.

Group ports
~~~~~~~~~~~

It's possible to group ports into buses to simplify the diagram and the ports table.

All the ports between ``--! @virtualbus```and ``--! @end`` will be grouped in the diagram and the ports table
Optional arguments: ``--! @virtualbus [name_of_interface] @dir [in/out] @keepports  [comment]``

``@dir`` selects to virtualbus direction, possible values in/out.
``@keepports`` keeps the description of the pors in the table instead of group together in a bus.

.. image:: images/group_ports.png

Usage instructions
-------------------

1. Open a VHDL/Verilog file and click the documenter button.

.. image:: images/sample_documenter_select.png

2. TerosHDL will open a preview of the generated documentation.

.. image:: images/sample_documenter_viewer.png

3. Select what to show and the verbosity of the documentation. It is possible to document everything, just the elements that are being comented or nothing for each documentation section available.

4. Export the generated documentation to PDF, MarkDown, HTML or SVG diagrams.

5. Every time the file is edited and saved, the preview will update the documentation automatically.

.. _wavedrom tutorial: https://wavedrom.com/tutorial.html
.. _bitfield: https://observablehq.com/collection/@drom/bitfield

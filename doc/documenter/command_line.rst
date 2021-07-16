.. _command_line_documenter:

Command line
============

There is a documenter command line version. It's very useful to use it in your continuous integration workflow.

Installation
------------

.. code-block:: console

    > npm install -g teroshdl


Input format
------------

The avaiable input formats of the CL TerosHDL documenter are:
    * Individual HDL file.
    * Directory: with the --recursive argument it will include the HDL files in the directory and subdirectories.
    * CSV
    * EDAM
  
Ussage
------

In this example TerosHDL CL will generate the documentation for all HDL files in the directory surf and subdirectories. 
The output path is ./sample and the output format HTML. It will include:

    * Finite state machines (--fsm).
    * Dependency graph (--dep).
    * Constants an types (-c all).
    * Only commented signals (-s only_commented).
    * Process/always (-p all).
    * Only commented functions (--functions only_commented).


.. code-block:: console

    > teroshdl-hdl-documenter -i ./surf/ --recursive -o html --dep --fsm -s only_commented -c all -p all --functions only_commented --outpath ./sample

Examples
--------
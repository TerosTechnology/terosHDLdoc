---
description: Getting Started
---

# Getting Started

## Tutorial

You have [some examples](https://github.com/TerosTechnology/teroshdl-examples/tree/main/documenter/examples). Or you can add a project with all the samples from the TerosHDL project manager using [Load Example](../11-tool_manager/02-project.md#adding-a-project)

## Configuration

A special symbol can be configured to identify the comments to be extracted from the HDL file. The special symbol must follow the comment characters of the language that is being used.

By default TerosHDL uses "!" as symbol but you can configure it in: ``TerosHDL >> Configuration >> Documenter >> General``


```vhdl
-- Other comment not included
--! This is a description
--! of the entity.
entity counter is
port (
    clk: in std_logic; --! Clock comment
    out_data: out std_logic --! Description **port comment**
);
end counter;
```


```verilog
// This is a
// license header
//! This is a description
//! of the module.
module flipflop (q,qbar,clk);
        output reg q; //! Port 0
        output qbar; //! Port 1
        input clk; //! Clock
```
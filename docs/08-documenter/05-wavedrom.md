---
description: Wavedrom
---

# WaveDrom

WaveDrom is a JavaScript application. WaveJSON is a format that describes Digital Timing Diagrams. WaveDrom renders the diagrams directly inside the browser. Element "signal" is an array of WaveLanes. Each WaveLane has two mandatory fields: "name" and "wave".


:::note
Entire syntax for WaveDrom can be found in this [link](https://wavedrom.com/tutorial.html)
:::

## Adding WaveDrom in design
The documenter detects WaveDrom using the same comment recognition as any other element.

:::note
WaveDrom will only be detected on the head of the file.
:::


lets look at a basic example in **verilog** for adding wavedrom in your documentation:

```verilog
//! { signal: [
//!  { name: "clk",  wave: "P......" },
//!  { name: "bus",  wave: "x.==.=x", data: ["head", "body", "tail", "data"] },
//!  { name: "wire", wave: "0.1..0." }
//! ],
//!  head:{
//!     text:'WaveDrom example',
//!     tick:0,
//!     every:2
//!   }}
```

and its resulting wavedrom in documentation:
<p align="center">
<i>Image 1: WaveDrom Example </i>

![Example Problem](/img/documenter/wavedrom-example.png) 
</p>


## adding Bitfield
Bitfield is an extension for Wavedrom which allows to write breakdowns of registers for every bit 

lets look on a example using **VHDL** of a bitfield

```vhdl
--! {reg: [
--!    { "name": "IPO",   "bits": 8, "attr": "RO" },
--!    {                  "bits": 7 },
--!     { "name": "BRK",   "bits": 5, "attr": "RW", "type": 4 },
--!     { "name": "CPK",   "bits": 1 },
--!     { "name": "Clear", "bits": 3 },
--!     { "bits": 8 }
--!]}
```
and its resulting bitfield in documentation:

<p align="center">
<i>Image 2: Bitfield Example </i>

![Example Problem](/img/documenter/bitfield-example.png) 
</p>

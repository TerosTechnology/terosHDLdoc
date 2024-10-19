---
description: Manual Compilation Order
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Manual Compilation Order

Normally, it is not necessary to configure a manual compilation order, as TerosHDL calculates it automatically. 
However, in some complex projects, it is necessary.

You can create a .csv file with the list of files and libraries in their compilation order. [The format is defined 
in the sources section](./03-sources.md#adding-sources-to-a-project)

Then, configure the path to this file in `Configuration >> Tools >> Path to manual compilation order`.
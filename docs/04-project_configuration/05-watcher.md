# Watcher
---
description: Watcher
---
A **Watcher** in the context of this discussion about VUnit projects in TerosHDL is a feature that monitors specific files (like `run.py`) for changes and updates relevant views in the VSCode extension automatically.

Here’s a breakdown:

1. **Purpose**:  
   A Watcher is used to keep track of source files, like `run.py`, that define the project’s structure (e.g., testbenches, file hierarchies). When you add `run.py` as a Watcher, TerosHDL will automatically update the hierarchy view as the file changes.

2. **Behavior**:  
   - When you add `run.py` as a **Source** in TerosHDL, you can **run your tests** from the "Run" pane, but you won’t see the file hierarchy in the hierarchy pane.
   - When you add `run.py` as a **Watcher**, you can **see the hierarchy** in the hierarchy pane, but you won’t be able to run tests directly from the "Run" pane.

3. **Limitation**:  
   The current implementation splits these two functionalities (running tests and seeing hierarchy) between Sources and Watchers. The contributor acknowledges this is confusing and suggests it would be better to have a specific **VUnit project type** that integrates both features.

### Summary of a Watcher's Role:
- A Watcher automatically tracks file changes.
- It updates the hierarchy view in real time.
- It does **not** allow running tests directly from the "Run" pane.
- It's best used when you need to keep your hierarchy view up to date as your project files change.

This feature is especially helpful when working with dynamic project structures like those managed by VUnit, where the test hierarchy and file dependencies can change frequently.

# -*- coding: utf-8 -*-

import sys, re
from os.path import abspath
from pathlib import Path
from json import dump, loads

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
sys.path.insert(0, abspath('.'))


# -- Project information -----------------------------------------------------

project = 'TerosHDL'
copyright = '2020, Ismael Perez Rojo, Carlos Alberto Ruiz Naranjo, Alfredo Saez'
author = 'Ismael Perez Rojo, Carlos Alberto Ruiz Naranjo, Alfredo Saez'

# The full version, including alpha/beta/rc tags
release = '0.1.0'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------

html_theme_options = {
    'home_breadcrumbs': False,
    'vcs_pageview_mode': 'blob',
    "style_nav_header_background": "#ffffff",
     "logo_only": True,
}

html_context = {}
ctx = Path(__file__).resolve().parent / 'context.json'
if ctx.is_file():
    html_context.update(loads(ctx.open('r').read()))

html_theme_path = ["."]
html_theme = "_theme"

html_logo_path = ["img_logo"]

html_logo = str(Path(html_logo_path[0]) / "logo.png")

html_favicon = str(Path(html_logo_path[0]) / "logo.ico")

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
#html_static_path = ['_static']

# Output file base name for HTML help builder.
htmlhelp_basename = 'TerosHDLdoc'

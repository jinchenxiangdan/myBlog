---
title: python_import_files
date: 1969-12-31 17:00:00
permalink: /pages/2b4dbe/
categories:
  - zh
  - studyingnotes
tags:
  - 
---
# Python import files from different directories

Python is a object-oriented language like java, so we could use a file to represent an object or something else. When we want to import files in Python, there are 3 cases that we need to concern and know how to deal with it.

Supposed we have a runner program in file `runner.py` and an `Add` class file in file `test.py`

## 0x01: When `runner.py` and `test.py` are under same directory

you can import the class directly by file name. However, you need to ignore the `.py` suffix/postfix. like below:

```python
# 1: import whole file
import test
# 2: import specific portion
from test import Add
```

then you are free to use it.

## 0x10: When `test.py` is under `runner.py`'s child's directory

Supposed the directory name is `test` as well
In this case you can import the class by `import [directory]/[filename(without suffix)]` and below is my example:

```python
# 1: import whole file
import test.test as aa
# 2: import specific portion
from test.test import Add

```

## 0x11: When `test.py` is under parrent directory of `runner.py`

In this case, you need to import `sys` and append/insert the current directory info to `sys.path` at run time.


```python
# add system path at run-time
import sys
########### The path MUST be absolute path ###############
sys.path.append('absolute/path/to/your/file')
# 1: import specific method 
from my_print import test_my_print as print
# 2: import whole file
import my_print
```

In fact, you can handle every import cases in this way, but we don't have to change the `sys.path` for case `0x01` and `0x10`.

*The runable [source code](https://github.com/jinchenxiangdan/Notes/tree/master/python_import) could help your figure it out better.*

<Valine></Valine>
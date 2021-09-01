---
title: duplicate-file-checking
date: 1969-12-31 17:00:00
permalink: /pages/2918c1/
categories:
  - datascience
tags:
  - 
---


# Duplicate Files Checker

## How to determine same file
Generally, we use checksum of files to check if files are same or not. We usually use MD5 or SHA256 to get checksum of files. On Ubuntu, we could use command `hd5sum` or `sha256sum`.
::: tip
There is no perfect hash function yet, which means collision may happen during hashing. 
:::

When using these commands, you have to notice that the two files could be determined as same file only all content are same. 

## How to store and compare different files 

### store and compare content
Usually, a directory contains lots of files, and we want to compare them to check if they are same. My goal is checking about 2 millions files, I cannot use data structure like Tree. In this case, I am using HashTable to store the checksum and its filename. They separately are Key and Value.

### store and compare filename
To compare the filename in different folders, the fastest way is still hashing. I used another hash table to store the filename as key and it's absolute path as value. To link these two hash tables, the value of the content hash table is also the key of the filename hash table. 

## How to loop directories
In this step, different programming language has different method to implement it. But the algorithm is same, which is using recursion to loop the subdirectories and files. The example pseudo code is shown below. 

``` python
check_duplicate(path):
    
    for files in list_files:
        # check duplicate
    for folder in list_directories:
        check_duplicate(path_to_folder)

```

The complete run-able code is on [github](https://github.com/jinchenxiangdan/Tools/blob/master/DuplicateFileChecker/duplicate_file_checker.py)


## REFERENCES

[Data Integrity Checksums](https://www.versity.com/blog/data-integrity-checksums)


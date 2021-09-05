---
title: Vuepress build got permission denied
date: 2021-01-31 17:00:00
permalink: /pages/765a92/
categories: 
  - studyingnotes
tags: 
  - Vuepress
sidebar: auto
---
# npm RACCES: permission denied

When I run `npm run deploy` to deploy my blog, the error "Error: EACCES: permission denied" shows up. However, it doesn't recommend to run as super user. To resolve it, there is **two** ways to do it.

### Option 1: Change the permission to npm's default directory.

Firstly, using `npm config get prefix`  to get the npm directory. If it just `/usr`, switch to option 2.

Then using command `sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}` to add premissions to user for only npm directories.

### Option 2: Change npm's default directory to another directory

1. Make a directory for global installations:

    `mkdir ~/.npm-global`

2. Configure npm to use the new directory path:

    `npm config set prefix '~/.npm-global'`

3. Open or create a `~/.profile` file and add this line:

    `export PATH=~/.npm-global/bin:$PATH`

4. Back on command line, update your system variables:

    `source ~/.profile`

To do a test, you could just download a package globally without using `sudo`

`npm install node-g.raphael --save`


#### If you are using  MacOS, then you could use `brew install node` to reinstall nodejs. Homebrew would set things up with correct permissions.


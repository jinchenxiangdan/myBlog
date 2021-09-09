---
title: Set up and configure Vuepress on Windows 10
date: 2019-12-31 17:00:00
permalink: /pages/da95d7/
categories: 
  - notes
tags: 
  - Vuepress
sidebar: auto
---
# Set up and configure Vuepress on Windows 10

To set up Vuepress as your blog, it is very easy on MacOS. You can just follow the [official guide](https://vuepress.vuejs.org/guide/).

However, the guide doesn't cover environment setting up well on Windows 10. After several days studying, I find a way to successfully setup.

## 0x01 : Install nodejs and Vuepress
I suggest to use [winget](https://github.com/microsoft/winget-cli) to install nodejs.
Open PowerShell and type `winget install nodejs`. The winget tool might ask you more specific like which version do you want and give you a list. You could use `winget install [software ID]` to choose specific version that you want.

After you done installation of nodejs, you now can follow the [official guide](https://vuepress.vuejs.org/guide/).

## 0x10 configure bash and github
To use bash on Windows, you need to [install subsystem for linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10). After this, you need to config git on the subsystem. Right now, you are good to go.

::: notes

The reason of that you need to configure subsystem is the script would run a bash script. When Windows is trying to run bash script, it would call the bash shell of subsystem. Thus, the script is going to use git from you subsystem not Windows even you running deploy command on PowerShell.

:::

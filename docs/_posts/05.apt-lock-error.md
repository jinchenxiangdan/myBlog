---
title: APT package Management Lock error
date: 2019-02-02 17:00:00
permalink: /pages/330607/
categories: 
  - studyingnotes
tags: 
  - apt
  - Ubuntu
sidebar: auto
---
# Could not get Lock error


When using Ubuntu, we contact with apt package management tool every day. However, sometimes we may encounter the problem `Could not get lock...(11: Resource temporarily unavailable)`

When we encounter this problem, we need to check if the system is updating, or the apt is running somewhere. If it is, just wait until the process done. Or else, we could use other methods to resolve the apt multithread errors.

```shell
Error: $ E: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), is another process using it?
```

1: usually this happens due to some process is using APT package management tool.

Method :
`rm /var/lib/dpkg/lock-frontend`
`sudo dpkg --configure -a`

The first method would fix the problem for you in most cases. But my case was a bit different. I was updating my system and accidentally closed the terminal. For that reason, there were no processes running apt, but it still showed me the error.

In this case, I just use
`sudo rm /var/lib/dpkg/lock`
to remove the lock file.

Then apt could be used right now

REFERENCE:
    https://itsfoss.com/could-not-get-lock-error/

<Valine></Valine>

---
title: Git notify permission denies when pushing
date: 2019-10-31 17:00:00
permalink: /pages/5074b5/
categories: 
  - studyingnotes
tags: 
  - Git
sidebar: auto
---
# Git notify permission denies when pushing
<hr>

When wer are using `git push`, and got: 
```
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
```
There are two causes reasones:
1. Haven't set up git
2. Haven't set up SSH connection

## Setting up Git
### Method One：
Using `git config` to config Git
```shell
$ git config --global user.name "Username"
$ git config --global user.email email@example.com
```
These two commands are used for config user name and email information. `--global ` represents it is a global configuration.

### Method Two：
You can use editor to config Git
1. If you want to config git globally，open ```/etc/gitconfig```，and add:


```js
[user]
    name = Username
    email = YourEmail
```
2. If you only want to change one user's setting, just edit```~/.gitconfig```.

If you want to know more about git, please check [Git Official Website](https://git-scm.com/book/zh/v2)。
## Setting up GitHub SSH connection
  1. You need to generate a SSH key. Open terminal and type:
  ```shell
  $ ssh-keygen -t rsa -C "YourEmail"
  ```
You can use all settings as default.

1. After that, you could get a SSH public key and private key。（Default under:```~/.ssh/```. Then，copy file```id_rsa.pub``` that is under that folder.
2. Click GitHub avatar，click "Settings"
3. On the side bar，click “SSH and GPG keys” -> "Add SSH key"
4. Paste the public key file and save。

::: note

If it's still not working, or it's not working after reboot. Run `ssh-add [private_key_file_path]`. If you got error `Could not open a connection to your authentication agent.`, please check [this article](https://jinchenxiangdan.github.io/studyingnotes/ssh-add-failed.html).

:::


Environment：

```bash


                 -/+:.          
                :++++.          OS: 64bit Mac OS X 10.14.5 18F132
               /+++/.           Kernel: x86_64 Darwin 18.6.0
       .:-::- .+/:-``.::-       Uptime: 3d 16h 35m
    .:/++++++/::::/++++++/:`    Packages: 48
  .:///////////////////////:`   Shell: zsh 5.6.2
  ////////////////////////`     Resolution: 2880x1800
 -+++++++++++++++++++++++`      DE: Aqua
 /++++++++++++++++++++++/       WM: Quartz Compositor
 /sssssssssssssssssssssss.      WM Theme: Blue
 :ssssssssssssssssssssssss-     CPU: Intel Core i7-4770HQ @ 2.20GHz
  osssssssssssssssssssssssso/`  GPU: Intel Iris Pro
  `syyyyyyyyyyyyyyyyyyyyyyyy+`  RAM: 8462MiB / 16384MiB
   `ossssssssssssssssssssss/
     :ooooooooooooooooooo+.
      `:+oo+/:-..-:/+o+/-

```
</div>
Reference：
 - [GitHub Guide](https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account)

 - [CSDN](https://blog.csdn.net/sinat_33909283/article/details/78273976)

 - [Git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)




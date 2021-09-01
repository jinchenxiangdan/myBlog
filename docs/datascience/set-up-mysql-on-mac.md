---
title: set-up-mysql-on-mac
date: 1969-12-31 17:00:00
permalink: /pages/2a573c/
categories:
  - datascience
tags:
  - 
---
# MySQL installation and configuration

## MacOS

### Installation

On MacOS, you could easy install MySQL using [brew](https://brew.sh/).

To install it, just type:
```bash
brew install mysql
```

### Configuration

After the installation done, to start mysql server, type

```bash
brew services start mysql
```
Since we used brew services start mysql to start MySQL, your Mac will re-start it at reboot. You can run:

```bash
brew services stop mysql
```
to stop this from happening, and also to immediately stop MySQL. If you don't want it run in **daemon mode** (that’s what we call programs that always run in the background and restart when the computer is restarted), you could avoid it by running:

```bash
mysql.server start		# start server
mysql.server stop			# stop server
```

In this case, it won't run when your computer reboot.

Now, you can connect to the server using this command:

```bash
mysql -u root -p			# run mysql as root and passward mode
```



::: warning

We are connected using the `root` user, which should only be used for administration purposes. Day to day use of a database should be done using a normal user.

:::

### Adding users

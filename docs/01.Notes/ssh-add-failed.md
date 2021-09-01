---
title: ssh-add-failed
date: 1969-12-31 17:00:00
permalink: /pages/ef351d/
categories:
  - studyingnotes
tags:
  - 
---
# ssh-add failed

## Problem
If you got error message `Could not open a connection to your authentication agent.` when you are using command `ssh-add`. The reason is SSH private-keys are usually stored encrypted on the computers they are stored on. A pass-phrase is used to decrypt them when they are to be used. Since most people use SSH public-private key-pairs to get around typing in passwords all the time, the ssh-agentdaemon exists to store decrypted private-keys you plan on using in a given session. The thing most people get tripped up on when using ssh-agent is that what the program outputs, some borne or csh shell commands, needs to be run. It may look like ssh-agent has set some variables for you, but it has in fact done no such thing. If you call ssh-add without processing ssh-agent’s output, it will complain it is unable to open a connection to your authentication agent.

## Resolution
The most straightforward way to run ssh-agent on the command line is as follows:

``` bash
eval ssh-agent
```
After doing this, calls to ssh-add should succeed without error.

<Valine></Valine>

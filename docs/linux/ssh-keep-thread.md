# Keep runnning thread when lost connection of SSH

::: tip Note

When SSH connection is broken, the progarm running on cloud would be stoped.

:::

## Reason

When a user using SSH to connect to a server, there would be a new sesion generated. Most of command would running under the session. When SSH connection is end, the session would be end, and the process under that session would be ended. 

## The way to run even you lost SSH connection.

### Method 1: [nohup]([nohup - Wikipedia](https://en.wikipedia.org/wiki/Nohup))

```bash
nohup Command [ Arg … ] [　& ]
```

Using nohub could run a process ignore the end signal. 

### Method 2: [Screen]([How To Use Linux Screen | Linuxize](https://linuxize.com/post/how-to-use-linux-screen/))

```bash
screen
# using this command to open a new screen, it would generate another session and won't end even you lost ssh connection.
```

- To show the screen you opened, using `screen -ls`
- To detach from Linux Screen Session, using `Ctrl+a` `d`. The program running in the screen session will continue to run after you detach from the session.
- To resume your screen session use the following command: `screen -r [screen-id]`


# Git 提示push的时候没有权限
<hr>

当我们用git push 的时候，git 报错
```
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
```
这种情况一般来说有可能是两个原因引起的
1. 没有设置git
2. 没有设置远程SSH连接

## 设置Git
### 方式一：
你可以用git config来配置 Git
```shell
$ git config --global user.name "Username"
$ git config --global user.email email@example.com
```
这两步分别是配置用户名和用户邮箱，而``` --global ``` 意味着全局设置。

### 方式二：
你可以直接用编辑器来配置 Git
1. 如果想要全局配置git，直接打开```/etc/gitconfig```，然后直接添加


```js
[user]
    name = Username
    email = YourEmail
```
2. 如果只是针对一个用户，那么就直接编辑```~/.gitconfig```即可。

想要了解更多关于git的内容，请参考[git官方文档](https://git-scm.com/book/zh/v2)。
## 设置Github的SSH远程连接
  1. 首先你先要生成一个SSH key。打开终端，输入
  ```shell
  $ ssh-keygen -t rsa -C "YourEmail"
  ```
此间，终端会询问设置密码与保存位置，一路回车遍好。（个人感觉自己的电脑也不需要设置密码，ssh key还是保存到默认位置。以后要用的时候就不比担心忘记储存位置。）

1. 经过以上步骤，一个专属于你自己的密钥就生成好了。（注：系统默认位置```~/.ssh/```）。接下来，直接复制在此目录中的```id_rsa.pub```文件，准备保存到Github的设置中。

3. 点击自己Github的头像，选择"Settings"进入设置

4. 在侧边栏，点击“SSH and GPG keys” -> "Add SSH key"

5. 保存之前复制的文件，保存，然后遍配置成功了。

注： 如果还是不行，或者关机之后就不行的话，运行```ssh-add [file_path]```这里的file_path是你的私钥的绝对路径.


运行环境：
<div style="line-height:1" >


```

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
参考：

 - [Github Guide](https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account)

 - [CSDN](https://blog.csdn.net/sinat_33909283/article/details/78273976)

 - [Git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

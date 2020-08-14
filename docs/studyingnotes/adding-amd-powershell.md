# Adding your own command to PowerShell	



### Step 1: Check the profile location

under PowerShell, type `$PROFILE` to get the location. It usually shows something like `C:\Users\username\...\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`.

### Step 2: Edit that file to add your own command.

For example, you installed a software *Typora* and want to add command `typora` to open it. In the profile file, just add `set-alias typora "{$YourSoftwareLocation}\Typora\Typora.exe"`.  After that, you need to close and open PowerShell again. Then you can use `typora` to open Typora or even use it edit a file.
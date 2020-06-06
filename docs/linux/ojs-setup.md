# Setting up OJS([Open Journal Systems]([https://pkp.sfu.ca/ojs/])) on Ubuntu 18.04





## 1: Download

PKP(public knowledge project) offers an official link to [download](https://pkp.sfu.ca/ojs/ojs_download/) OJS. In this case, we are going to install OJS3.1.2-1. Then you can use Archive Manager to decompress and extract the files to the directory you want. 



## 2: Installation 



The OJS requires:

* PHP >= 7.0
* MySQL >= 4.1 or PostgreSQL >= 9.1.5
* Apache >= 1.3.2x or >= 2.0.4x or Microsoft IIS 6

In this case, I am using 

```shell
PHP 7.2.24-0ubuntu0.18.04.1 (cli) (built: Oct 28 2019 12:07:07) ( NTS )
mysql  Ver 14.14 Distrib 5.7.28, for Linux (x86_64) using  EditLine wrapper
Apache/2.4.29 (Ubuntu)
```

1. creating a folder to store the OJS uploaded files. In this step, It is recommended that this directory be placed in a non-web-accessible location.

2. use `chmod` to set these files writeable:

   - `config.inc.php` (optional -- if not writable you will be prompted
     to manually overwrite this file during installation)
   - `public`
   - `cache`
   - `[the file you just created]`

   If you want to know more about chmod, run `man chomod` to read the guide. **chmod 777 is NOT recommended in this step!** 

3. move the folder to your web server working space and open your terminal and make sure the working directory is OJS directory. Then run command `php tools/install.php` to install it. During this step, just type the informations from console. If you want to change them after installation, you could directly edit the file `config.inc.php` to change or set additional configuration settings. 

4. install or update the dependencies by running command

    ```shell
   npm install
   npm run build
    ```

5. run the server as localhost:

   `php -S localhost:8000  `

6. Then you can access it using your browser by accessing this address: http://localhost:8000

## Run OJS with public IP
To run OJS with public IP, you need to install OJS to apache2 folder and configure it. [How to configure apache2 with OJS?]()

## 3: Problems I've met



- [**Solved**] [*SMTP mail setting*] After I set up SMTP mail configuration, and when a user done a submission, the server notify "There was a problem sending an email message.". And I checked the terminal, it shows "Invalid address:  (From): root@localhost". And the same time, I got email notifying me  a unsafe log in was denied. 
  - For Gmail, just turn on "Allow less secure apps" from [here](https://myaccount.google.com/security#activity).

Due to ( it's not safety because we directly store email account information into a text file), we are going to use local mail server. In this case, I am using [Postfix](http://www.postfix.org/) as my mail server. Check [here]() to see how to set up. 

- [**Solved**] [*PHP mail() setting*] According to we are using mail() to send mails so we just comment the smtp commands, and remove account informations for safety. However, in this case, I still got the notification that telling me the email cannot be sent after a submission. I've checked the log of Ubuntu mail server and php mail log. There are no any error informations. 

  - I've checked the [PKP Community Forum](https://forum.pkp.sfu.ca) and got answer that set `allow_envelope_sender` `force_default_envelope_sender` and  `force_dmarc_compliant_from` On and uncomment. However, It doesn't work for me. 

  - I've checked the php function mail(), and add `-f` after sendmail setting in file `php.ini`, this command set the envelope sender address.  

    ::: tip

    When using `-f` after `sendmail_path` in `php.ini`, the mail() function will use the parameter after -f as sender email, or else, it will use `$additional_parameters` to send mail.

    :::

    Then I could get email but the server still notifies user that there was a problem sending an email message. 

  - [Solution] Then I've checked the [PHP Documentation - mail()](https://www.php.net/manual/en/function.mail.php) again. and finally, I found the mail() function doesn't support capital  characters in a email address. However, it support a email address with special punctuation symbols like `-` . So an email lie `Example@domain.com` doesn't work, but `example-two@domain.com` is a valid email address for this function.  But by default. the `default_envelope_sender` has capital characters. The OJS mail system works perfectly after I change it to valid email address. 

- [**Solved**] [PHP Fatal errors] It's not efficient if you only install PHP. Other than that, you need to install `php-xml`, `php-mysql`(If you are going to use MySQL) and `php-mbstring`. 
  - [Solution] You could use command `sudo apt install php-mbstring php-xml php-mysql` on debain based system. 

- [**Solved**] [Cannot log in database(MySQL)] If you are going to use MySQL 8.0+ you need to set MySQL to use MySQL native password to login.
  - [Solution] using root member to log in your database and type `'ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`

## REFERENCES

- [PKP Community Forum](https://forum.pkp.sfu.ca)

- [PHP Documentation - mail()](https://www.php.net/manual/en/function.mail.php)
- [Postfix Documentation](http://www.postfix.org/documentation.html)

- [Set Up a Mail Server on Ubuntu 18.04](https://www.hostinger.com/tutorials/how-to-install-and-setup-mail-server-on-ubuntu/)




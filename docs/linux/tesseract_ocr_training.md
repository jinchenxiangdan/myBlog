# Training Tesseract OCR under Ubuntu 19.04

## What is tesseract 
Tesseract is a open source [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) (Optical Character Recognition) engine developed by Google since 2006. Tesseract supports more than 100 languages. In my opinion, it is the best OCR engine right now. 



However, the accuracy of recognizing Simple Chinese word is not good enough to directly be used. Thus, I decide to train it and check if the training wroks.

**If you are new to tesseract, please check [this](https://github.com/tesseract-ocr/tesseract) out**

## Environment 
For me, I am using tesseract 4.0.0 and running on Ubuntu 19.04. This below is the [screenfetch](https://github.com/KittyKatt/screenFetch) of my system.
```bash
                         ./+o+-       
                  yyyyy- -yyyyyy+      OS: Ubuntu 19.04 disco
               ://+//////-yyyyyyo      Kernel: x86_64 Linux 5.0.0-36-generic
           .++ .:/++++++/-.+sss/`      Uptime: 4d 7h 14m
         .:++o:  /++++++++/:--:/-      Packages: 2204
        o:+o+:++.`..```.-/oo+++++/     Shell: bash 5.0.3
       .:+o:+o/.          `+sssoo+/    Resolution: 1920x1080
  .++/+:+oo+o:`             /sssooo.   DE: GNOME 
 /+++//+:`oo+o               /::--:.   WM: GNOME Shell
 \+/+o+++`o++o               ++////.   WM Theme: Adwaita
  .++.o+++oo+:`             /dddhhh.   GTK Theme: Yaru [GTK2/3]
       .+.o+oo:.          `oddhhhh+    Icon Theme: Yaru
        \+.++o+o``-````.:ohdhhhhh+     Font: Ubuntu 11
         `:o+++ `ohhhhhhhhyo++os:      CPU: Intel Core i7-4700HQ @ 8x 3.4GHz [52.0°C]
           .o:`.syhhhhhhh/.oo++o`      GPU: NVE6
               /osyyyyyyo++ooo+++/     RAM: 4551MiB / 7891MiB
                   ````` +oo+++o\:    
                          `oo++.     

```

## Sequences

### 1. Install training tools
Due to we are going to train tesseract, running this command to make sure your system has this tools 
```shell
sudo apt install libicu-dev libpango1.0-dev libcairo2-dev
sudo apt install libtesseract-dev 
```

For training, However did you install tesseract, you **MUST** clone the [source code](https://github.com/tesseract-ocr/tesseract) to your computer. 
```
# if you want to clone it to your current directory/tesseract, just run
git clone https://github.com/tesseract-ocr/tesseract.git
```

After you get the source code, then run `./autogen.sh` to create 'configure' script. then you can directly run `./configure` to check wether you can build training tools. If everything is correct, then you would see something like “Training tools can be built and installed with...”



## 3. Test before training

## References

- [Tesseract Source Code](https://github.com/tesseract-ocr/tesseract)
- [Tesseract Training](https://github.com/tesseract-ocr/tesseract/wiki/TrainingTesseract)


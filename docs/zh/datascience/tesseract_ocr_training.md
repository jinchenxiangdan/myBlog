# Training Tesseract OCR under Ubuntu 19.04

## What is tesseract
Tesseract is a open source [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) (Optical Character Recognition) engine developed by Google since 2006. Tesseract supports more than 100 languages. In my opinion, it is the best OCR engine right now.



However, the accuracy of recognizing Simple Chinese word is not good enough to directly be used. Thus, I decide to train it and check if the training wroks.

**If you are new to tesseract, please check [this](https://github.com/tesseract-ocr/tesseract) out**

## Environment
For me, I am using tesseract 4.0.0 and running on Ubuntu 19.04. This below is the [screenfetch](https://github.com/KittyKatt/screenFetch) of my system.
```
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



### 2. Test before training

#### data
The data was chose 500 images(char00001.png-char00500.png) from [wordly-ocr/chars](https://github.com/mrychlik/worldly-ocr/tree/master/ChineseCharHarvesting/Chars). Then I used the merge tool in JTessBoxEditor to merge these 500 images into one tiff image. After merging, the tiff has 500 pages and each page contains one tiff image.

Due to the images' meta data doesn't includes dpi information. I used preview on Mac to check the images DPI is 72.
#### Using tesseract generate BOX files

Open terminal and type in `tesseract [lang].[fontname].exp[num].tif [lang].[fontname].exp[num] -l [language] batch.nochop makebox`.

#### tesseract testing with different trained data (chi_tra & chi_tra_vert)


*tesseract testing with different dpi*
First, I've test tesseract by `tesseract chi_tra.testfont.exp0.tif chi_tra.testfont.exp0 -l chi_tra batch.nochop makebox` then copy the box file to desktop. In this case, tesseract cannot find dpi information from metadata, so it just automatically set the dpi is 70. Secondly, I test tesseract with dpi info 72 by command `tesseract chi_tra.testfont.exp0.tif chi_tra.testfont.exp0 -l chi_tra -dpi 72 batch.nochop makebox`, and copy it to desktop. However, I checked the file by `diff` and the two files are same. The accuracy is 128/500 = 25.6%






*testing chi_tra_vert with different rotating in dpi 72(90 degrees & 270 degrees)*
I used the same way to test the outputs with different trained data. In this case, the output is different. Through the statistics, I surprisingly found the accuracy is 0/500 (0%). However, the interesting thing is, it recognized the character "一" to be number "1". Thus, I think I could rotate the image to get another testing.

However, the rotating is not lossless. Through the statistics, the accuracy of clockwise rotate 90 degrees is 6/500 (1.2%). accuracy of anti-clockwise rotate 90 is 237/500 (47.7%).
### 3. Training


#### Adjust/Correct data by using [JTessBoxEditor](http://vietocr.sourceforge.net/training.html)
Using JTessBoxEditor's *Merge Tiff* to merge multiple images to one, or convert images to '.tiff' format.

the output tif name format should be: [lang].[fontname].exp[num].tif. In this case, num could be any number.

Using JTessBoxEditor's *Merge Tiff* to merge multiple images to one, or convert images to '.tiff' format.

the output tif name format should be: [lang].[fontname].exp[num].tif. In this case, num could be any number.

#### Generate font property file
`echo font 0 0 0 0 0 >font_properties`
the properties separately mean: font name, italic bold fixed serif fraktur

#### Generate .tr training file
`tesseract chi_tra_my.font.exp0.tif chi_tra_my.font.exp0 --psm 8 --dpi 72 nobatch box.train`

#### Generate unicharset file
`unicharset_extractor chi_tra_my.font.exp0.box`
After this step, the file ‘unicharset’ will be generated.

unicharset format:
	The first line of a unicharset file contains the number of unichars in the file. The first such line contains a placeholder reserved for the space character. Each unichar is referred to within Tesseract by its Unichar ID, which is the line number (minus 1) within the unicharset file.

#### Generate “shape” file
  `shapeclustering -F font_properties -U unicharset -O chi_tra_my.unicharset chi_tra_my.font.exp0.tr `
  After this step, it would generate “shapetable” and “chi_tra_my.unicharset” files.

####  Generate poly character signature files
  `mftraining -F font_properties -U unicharset -O chi_tra_my.unicharset chi_tra_my.font.exp0.tr `
This step would generate ‘inttemp’ and ‘pffmtable’

####  Generate character normalization signature file
  ` cntraining chi_tra_my.font.exp0.tr `

#### Rename inttemp, pffmtable, shapetable and normproto files to [lang].***

  ```
  mv inttemp chi_tra_my.inttemp
  mv pffmtable chi_tra_my.pffmtable
  mv shapetable chi_tra_my.shapetable
  mv normproto chi_tra_my.normproto
  ```

#### Combine those files to be trained data
`combine_tessdata chi_tra_my.`

This step would generate the file 'chi_tra_my.traineddata'

### test my trained data
Because the auto-generated box file doesn’t have information for a few pages. When training with box files, an error will happen. To avoid it, I need to manually add information in the box file.

After adding the corrected information on the empty pages, I generated another box file.

`tesseract chi_tra_my.font.exp0.tif -l chi_tra_my --psm 8 --dpi 72 batch.nochop makebox`

Through statistics, the accuracy is 435/500 = 87%




## References

- [Tesseract Source Code](https://github.com/tesseract-ocr/tesseract)
- [Tesseract Training](https://github.com/tesseract-ocr/tesseract/wiki/TrainingTesseract)

<Valine></Valine>

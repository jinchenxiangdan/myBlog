---
title: python-modify-range-variable-in-for-loop
date: 1969-12-31 17:00:00
permalink: /pages/38e5af/
categories:
  - studyingnotes
tags:
  - 
---
# Python modify range variable in for loop

When I want to done a job like below, I noticed that python doesn't support modify range variable like java or c code.

```python
# It supposed to be infinity loop
for i in range(5):
    print('i:', i)
    i-=1
'''
output:
i: 0
i: 1
i: 2
i: 3
i: 4
'''
 ```

 The reason it Python doesn't care about the currenet value of i. It runs like linked list, and using `next` to iterate and finish the loop. Thus, this method doesn't support by Python. To do something like that, we can use a while loop like below.

 ```python
 i = 0
 while (i < 5):
   print('i:',i)
   i+=1
   if (i==2):
     i+=2
'''
output:
i: 0
i: 1
i: 4
'''
 ```

<Valine></Valine>

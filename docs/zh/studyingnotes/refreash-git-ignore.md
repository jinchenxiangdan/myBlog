# .gitignore 没有效果

有时候虽然 `.gitignore` 文件是正确的，但是它也没有起到我们想要的效果。发生这种情况的原因就是文件还没有添加到repository里边。对于一些在`.gitignore`文件之前就已经改变的文件， git还是会追踪。使用以下代码可以清除git的缓存，然后重新添加文件到索引。

``` bash
git rm -rf --cached .   # remove cache
git add .               # add contents to the index
```

然后你的`.gitignore`文件就对所有文件生效了。

<Valine></Valine>

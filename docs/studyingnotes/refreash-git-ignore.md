# .gitignore does't work

Sometimes `.gitignore` files don't work even though they're correct. The reason Git ignores files is that they are not added to the repository. If you added a file that you want to ignore before, it will be tracked by Git, and any skipping matching rules will be skipped. Git does this because the file is already part of the repository.

Thus, you need to use this command below to clean the cache and re-add every files into the index.
``` bash
git rm -rf --cached .   # remove cache
git add .               # add contents to the index
```

Then, your git should be good to go.

<Valine></Valine>

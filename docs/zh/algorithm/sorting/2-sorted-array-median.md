
# 寻找两个升序数组的中位数

## 题目：
```
DIFFICULTY：hard

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity

should be O(log (m+n)).You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

### 分析
在看到这道题目的时候我脑海里的第一反应是
[多路外部并归排序](https://en.wikipedia.org/wiki/K-way_merge_algorithm).
但是因为这里全部都是升序的数组，而且没有限制数列的大小，所以问题远没有那么复杂。


#### 解法一：常规思路

现有的思路是：
1. 这里我们可以直接用并归排序的后半部分直接来融合这两个数组
2. 然后我们再去寻找中位数

这里我们直接用[并归排序]()「注：把关于排序的博客也更新出来，然后链接到自己的博客」
来直接合并这两个数组。然后我们再直接求这组有序数组的中位数。

虽然这个方法看起来也是比较简单，但是运算时间是线性的。我们还可以进一步优化一下。

#### 解法二：二分查找

To be continue...

如果想看全部源码，请移步到作者的[Github的LeetCode篇](https://github.com/jinchenxiangdan/LeetCodeAnswers/blob/master/src/LeetCode4.java).

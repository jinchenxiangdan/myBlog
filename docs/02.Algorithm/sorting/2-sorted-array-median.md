---
title: 2-sorted-array-median
date: 1969-12-31 17:00:00
permalink: /pages/6afdca/
categories:
  - algorithm
  - sorting
tags:
  - 
---

# 寻找两个升序数组的中位数

## 题目：
::: tip Problem
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
:::

### 分析
在看到这道题目的时候我脑海里的第一反应是
[多路外部并归排序](https://en.wikipedia.org/wiki/K-way_merge_algorithm).
但是因为这里全部都是升序的数组，而且没有限制数列的大小，所以问题远没有那么复杂。



#### 解法一：常规思路

general intuition behind that solution in simple terms.
现有的思路是：
1. 这里我们可以直接用实现并归排序的后半部分直接来融合这两个数组
2. 然后我们再去寻找中位数


这里我们直接用[并归排序](https://www.geeksforgeeks.org/merge-sort/)「注：把关于
排序的博客也更新出来，然后链接到自己的博客」来直接合并这两个数组。
然后我们再直接求这组有序数组的中位数。

虽然这个方法看起来也是比较简单，但是运算时间是线性的。我们还可以进一步优化一下。因为我们这里是先排序，然后再进行查找。但是对于已经排序完毕的数组，我们并不需要知道后半部分的数据遍可以求出来中位数。因此，在我们常规思路中，第一部使用的并归有一半的步骤是多余的。

所以此方法经过改良以后便可以是并归一半数据，然后就求解中位数。不过此方法的运行时间依然是线性的。

#### 解法二：二分查找

在[LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2481/Share-my-O(log(min(mn))-solution-with-explanation)看到有人对中位数进行了统计学的定义。不过我感觉应该把原定义改进一下，变为*“将集合划分为两个相等长度的子集，一个子集内的总和总是**大于等于**另一个子集。”*

比如我们有两个数组(偶数情况)
```
A:[a, c, e, g]
B:[b, d, f, h]
```

设想一下，不考虑其中一个数组的头或尾是中位数的情况，我们最后找到中位数时原来的两个数组会被分成四份。两份是已经合并的两个数组的部分，两份是剩下的两个数组的部分。此时，对于每个数组都有一个明显的分解线，而且每个分界线都有左右两个数据。
```
A:[a, c | e, g]
B:[b, d | f, h]
```
此时中位数等于```(max(c,d) + max(e,f))/2```

如果两个数组的总长度是奇数的话，


To be continue...

如果想看全部源码，请移步到作者的[Github的LeetCode篇](https://github.com/jinchenxiangdan/LeetCodeAnswers/blob/master/src/LeetCode4.java).

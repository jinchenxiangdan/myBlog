---
title: enumeration
date: 1969-12-31 17:00:00
permalink: /pages/7bd452/
categories:
  - algorithm
  - other
tags:
  - 
---
# Enumeration

## Problems that could be resloved

If we want to get all possible combination/consequences.

## backtrack

:::tip Example
Given a set of distinct integers, nums, return all possible subsets (the power set).

```python
# example
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

:::

We should set the modle like below

```python
result = []
def backtrack(list,path):
    if basecase:
        result.add(path)
        return
    for item in list:
        make_decision
        backtrack(list,path)
        undo_decision

```

Apporaching with repeatly selecting and undo, we can enumerate all possible outputs. This below is an example of solution.

```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        # sort first
        nums.sort()
        out = []
        backtrack(nums, out, [], 0)
        return out

        def backtrack(nums: List[int], out: List[List[int]], curr: List[int], start: int):
            # basecase: in this case, we want to get every output
            out.append(curr)
            for i in range(start, len(nums)):
                # make decision
                curr.append(nums[i])
                # recursive
                backtrack(nums, out, curr, start+1)
                # undo decision
                curr.pop()

```

## REFERENCES

[LeetCode-subsets](https://leetcode.com/problems/subsets/)

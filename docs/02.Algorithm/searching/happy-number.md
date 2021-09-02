---
title: happy-number
date: 1969-12-31 17:00:00
permalink: /pages/754ff6/
categories:
  - algorithm
  - searching
tags:
  - 
---
# Happy Number Checker

## What is a Happy Number?

In number theory, a *b-happy number* is a natural number in a given number base *b* that eventually reaches 1 when iterated over the perfect digital invariant function for p=2. Those numbers that do not end in 1 are b-unhappy numbers (or b-sad numbers).

For instance, the number 19 is a happy number because

$1^2 + 9^2 = 82$

$8^2 + 2^2 = 68$
$6^2 + 8^2 = 100$
$1^2 + 0^2 + 0^2 = 1$

# However, 20 is not happy number
$2^2 + 0^2 = 4$
$4^2       = 16$
$1^2 + 6^2 = 37$
...
and it won't stop




## Programming
This is tricky because if a number is not happy number, the checker would be running forever and won't stop. In this case, I just think
the number be happy number if we compute over 1000 times and the answer is still not equal to zero.

Due to we want to get the square of each bit, so we could use operator `%` to handle this.



## REFERENCES

[wikipedia](https://en.wikipedia.org/wiki/Happy_number)

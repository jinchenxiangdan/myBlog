---
title: Learning Feedforward Nerual Network Through XOR
date: 2020-10-28 17:00:00
categories:
  - studyingnotes
tags:
  - Data Science
  - Machine Learning
  - Neural Network
---

# Learning Feedforward Nerual Network Through XOR

To getting more clear about Feedforward Nerual Network, we work on a sample XOR example. In this case, we are going to find a function $$f(x; \theta)$$ to match the true model $f^*$.

In this simple example, we will not be concerned with statistical generalization.

First, we treat this problem as a linear regression problem, and using Mean squared error (MSE) lose function. Assume our model is $f(x;w,b)=x^\top w+b$. We could use normal equation to minimalize lost. In this case, we got $w=0$ and $b=\frac{1}{2}$ when the lost is minimal, and the output of this mode would be $\frac{1}{2}$ all the time. We know the output is not correct. We want to get 1 when two inputs are different, we want to get 0 when two inputs are the same.  The pictures below shown why linear model cannot represent XOR problem.

![XOR prob]()




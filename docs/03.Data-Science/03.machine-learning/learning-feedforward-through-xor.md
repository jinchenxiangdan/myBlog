---
title: Learning Feedforward Nerual Network Through XOR
date: 2020-10-28 17:00:00
categories: 
  - studyingnotes
tags: 
  - Data Science
  - Machine Learning
  - Neural Network
permalink: /pages/1de17f/
---

# Learning Feedforward Neural Network Through XOR

To getting more clear about Feedforward Nerual Network, we work on a sample XOR example. In this case, we are going to find a function $$f(x; \theta)$$ to match the true model $f^*$.

In this simple example, we will not be concerned with statistical generalization.

First, we treat this problem as a linear regression problem, and using Mean squared error (MSE) lose function. Assume our model is $f(x;w,b)=x^\top w+b$. We could use normal equation to minimalize lost. In this case, we got $w=0$ and $b=\frac{1}{2}$ when the lost is minimal, and the output of this mode would be $\frac{1}{2}$ all the time. We know the output is not correct. We want to get 1 when two inputs are different, we want to get 0 when two inputs are the same.  The pictures below shown why linear model cannot represent XOR problem.

If we introduce a simple FNN with one hidden layer, the problem could be solved.The latest model is $f(x;W,c,w,b)=f^{(2)}(f^{(1)(x)})$ where $h=f^{(1)}(x;W,c)$ and $y=f^{(2)}(h;w,b)$. Due to $f^{(2)}$ is a linear function, then $f^{(1)}$ cannot be linear because the output would be linear. And we know linear output is incorrect. Clearly, we must use a nonlinear function to describe the features. Most neural networks do so using an aﬃne transformation controlled by learned parameters, followed by a ﬁxed nonlinear function called an activation function. We use that strategy here, by deﬁning $\mathbf{h}=g(\mathbf{W}^\top+c)$, where $\mathbf{W}$ provides the weights of a linear transformation and $c$ is biases. 

Previously, to describe a linear regression model, we used a vector of weights and a scalar bias parameter to describe an aﬃne transformation from an input vector to an output scalar. Now, we describe $\mathbf{h}$ an aﬃne transformation from a vector $\mathbf{x}$ to a vector $\mathbf{h}$, so an entire vector of bias parameters is needed. The activation function $g$ is typically chosen to be a function that is applied element-wise, with $$h_i=g(x^\top\mathbf{W}_{:,i}+c_i)$$. In modern neural networks, the default recommendation is to use the **rectified linear unit**, or ReLU, defined by the activation function $g(z) = max\{0, z\}$.

![XOR prob](https://github.com/jinchenxiangdan/myBlog/blob/master/docs/.vuepress/public/images/xor-prob.png?raw=true)

We can now specify our complete network as

$$f(x;W,c,w,b)=w^\top max\{0, W^\top x+c\}+b$$

And we can then specify a solution to the XOR problem, let 
$$
W=
\left[
 \begin{matrix}
	1 & 1  \\
	1 & 1
  \end{matrix}
  \right]
$$

$$
c=
\left[
 \begin{matrix}
	0  \\
	-1
  \end{matrix}
  \right]
$$

$$
w=
\left[
 \begin{matrix}
	1  \\
	-2
  \end{matrix}
  \right]
$$

and $b = 0$.

## How this model handle inputs

Let input $X=\left[\begin{matrix}0 &0 \\ 0 & 1 \\ 1 & 0 \\ 1 & 1\end{matrix}\right]$, each raw represents a position. The first step of NN is multiply weight matrix, so
$$
XW=
\left[
\begin{matrix}
0 & 0 \\
1 & 1 \\
1 & 1 \\
2 & 2
\end{matrix}
\right]
$$
Then, adding bias $c$, the output is 
$$
\left[
 \begin{matrix}
	0  & -1\\
	1 & 0\\
	1 & 0\\
	2 & 1
  \end{matrix}
  \right]
$$
After applying rectified linear transformation, we got
$$
\left[
 \begin{matrix}
	0  & 0\\
	1 & 0\\
	1 & 0\\
	2 & 1
  \end{matrix}
  \right]
$$
At the end, we finish with multiplying by the weight vector $w$. the output would be
$$
\left[
 \begin{matrix}
	0  \\
	1 \\
	1 \\
	0
  \end{matrix}
  \right]
$$
And the output is correct to every inputs.
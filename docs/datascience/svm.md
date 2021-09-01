---
title: svm
date: 1969-12-31 17:00:00
permalink: /pages/ed59cd/
categories:
  - datascience
tags:
  - 
---
# Support Vector Machines Fundation



## Terminology and Concepts

Each point can be shown in a vector space. Supposed we have a data show below

```json
{
    // Monica
    Height: 155, // in cm
    Weight: 120, // in lbs
    Age: 25
}
```

And the vector would be like below

<img src="../.vuepress/public/images/svm_example.png" style="zoom:67%;" />

### Terminology

#### Vector

Vector is rooted in origin. Coordinates of target are used to describe the vector. Usually, vector described as a column vector.

#### Vector Adding

$$
\begin{bmatrix}
1 \\ 2 \\ 3
\end{bmatrix}
+
\begin{bmatrix}
10 \\ 15 \\ 20
\end{bmatrix}
=
\begin{bmatrix}
11 \\ 17 \\ 23
\end{bmatrix}
$$

#### Length of vector

$$
|\vec{p}| = \sqrt{p_1^2+p_2^2+...+p_n^2}
$$

#### Negative of a vector

#### Vector translation





#### Decision boundary

#### Similarity between vectors

- Can be defined with the 'doc product' (inner product). Usually normalization should be done before this step.
    $$
    \vec{a}\cdot\vec{b}=
    \begin{bmatrix}
    a_1,a_2,...,a_n
    \end{bmatrix}
    \begin{bmatrix}
    b_1\\b_2\\...\\b_n
    \end{bmatrix}
    =\sum_{i=1}^n a_i b_i=a_1b_1+...+a_nb_n
    $$
    
- Cosine Similarity
    $$
    cos(\gamma)=\frac{\vec{a}\times \vec{b}}{|\vec{a}|\times|\vec{b}|}
    $$
    
- Orthogonal

    $\vec{w}$ is normal vector = orthogonal to $\vec{x}$

    ![image-20210301130027160](..\.vuepress\public\images\orthogonal.png)

    ### Linear decision functions 

    Drawing a line between the two groups. Once the line is known, can be used to classify new data points. $\vec{w}$ and $\vec{x}$ are perpendicular, so the two vectors could represent a surface as well. The surface would be the classifier of this dataset. 

![image-20210301131303942](..\.vuepress\public\images\linear_decision_function.png)

We use $cos(\gamma)$ to classify the data. If $cos(\gamma)\leq 90°$ it will be positive. Or else, it will be negative.

![image-20210301131515604](..\.vuepress\public\images\linear_decision_function2.png)



#### Algorithm

1. Calculate the centroid(mean) of 2 classes in training set.

    $n_+$ = count of all + data points.

    $n_-$ = count of all - data points.

    $\vec{c_+}=\sum \vec{x_i}$

    $\vec{c_-}=\sum \vec{x_i}$

    

2. construct weight vector $\vec{w}$

    $\vec{w}=\vec{c_+}-\vec{c_-}$

3. compute average of $\vec{c_+}$ and $\vec{c_-}$

    $\vec{c}=\frac{1}{2}(\vec{c_+}+\vec{c_-})$

    ![image-20210301132843218](..\.vuepress\public\images\svm_learning_algorithm.png)

    Then we have enough info to construct the decision surface

4. Construct decision boundary

    translate weight vector $\vec{w}$ so that it is rooted in vector $\vec{c}$. Then construct a line perpendicular to weight vector $\vec{w}$ and through  $\vec{c}$ 



#### Maximum-margin Classifiers

Maximum-margin Classifier will be the best classifier. 






















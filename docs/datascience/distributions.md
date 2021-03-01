# Distributions

In probability theory and statistics, a probability distribution is the mathematical function that gives the probabilities of occurrence of different possible outcomes for an experiment. It is a mathematical description of a random phenomenon in terms of its sample space and the probabilities of events (subsets of the sample space). Every distribution has a [PDF(Probability density function)]([Probability density function - Wikipedia](https://en.wikipedia.org/wiki/Probability_density_function)) and [CDF(cumulative distribution function)]([Cumulative distribution function - Wikipedia](https://en.wikipedia.org/wiki/Cumulative_distribution_function)). A density function is improper if it cannot be normalized. 

## Normalized distribution && Unnormalized distribution



## Bernoulli Distribution
Bernoulli experiments have two outcomes, 1: success and 0: failure. Random sampling from set $X$, success probability is $p$. The distribution function is $p^{x}(1-p)^{1-x}$ where $x\in (0,1)$. It also could be write as
$$
\begin{equation}
P(x) = \begin{cases}
  1 - p & x = 0 \\
  p & x = 1
  \end{cases}
\end{equation}
$$
In this case, the sum of probability must be 1.
## Uniform Distribution
An example of Uniform distribution is dicing. When you throw a dice, the output would be one index form [1,6], and every outcome has same probability. A Uniform distribution has two attributes, a and b, where a is minimum outcome and b is maximum outcome. A standard Uniform distribution function would be
$$
f(x) = \begin{cases}
  1 & 0 \leq x \leq 1 \\
  0 & otherwise
\end{cases}
$$
## Binominal Distribution
A binomial distribution can be thought of as simply the probability of a SUCCESS or FAILURE outcome in an experiment or survey that is repeated multiple times. In this case, we assume a random variable, $X$ means the times you could win a game. $X$ could be any number. In this game, you only have two possible outcome: Win or Lose. Each game are independent, which means the probability of each game doesn't get impact by others.
A binomial distribution function is
$$
P(x)= \frac{n!}{(n-x)!x!}p^{x}q^{n-x}
$$
, where n is the number of experiments, p is the probability of experiment success (eg. you throw a dice and got the number you want). q = 1-p. The mean of the binomial distribution would be $\mu = n * p$ and the variance of it would be $Var(x)=n* p *q$.
### Criteria
1. The number of observations or trials is fixed.
2. Each observation or trial is independent.
3. The probability of success (tails, heads, fail or pass) is exactly the same from one trial to another.

## Normal Distribution
The Data of normal distribution can be "distributed" (spread out) in different ways. It can be spread out more on the left, on the right, or be all jumbled up. But there are many cases where the data tends to be around a central value with no bias left or right, and it gets close to a "Normal Distribution". ![image-20210228172744878](..\.vuepress\public\images\normal_distribution)

## Poisson Distribution

The Poisson distribution is used to model the number of events occurring within a given time interval. The formula for the Poisson probability mass function is
$$
f(k,\lambda)=Pr(X=k)=\frac{\lambda^{k}e^{-\lambda}}{k!}
$$
where $\lambda$ is the shape parameter which indicates the average number of events in the given time interval. $e$ is Euler's number, $k$ is the number of the occurrences, and $k!$ is the factorial of k.

## Gamma Distribution

In [probability theory](https://en.wikipedia.org/wiki/Probability_theory) and [statistics](https://en.wikipedia.org/wiki/Statistics), the **gamma distribution** is a two-[parameter](https://en.wikipedia.org/wiki/Statistical_parameter) family of continuous [probability distributions](https://en.wikipedia.org/wiki/Probability_distribution). The [exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution), [Erlang distribution](https://en.wikipedia.org/wiki/Erlang_distribution), and [chi-square distribution](https://en.wikipedia.org/wiki/Chi-square_distribution) are special cases of the gamma distribution. 

These are the PDF and CDF of gamma distribution.

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Gamma_distribution_pdf.svg" width="800" height="400" title="PDF">

<center>PDF</center>

<img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Gamma_distribution_cdf.svg" width="800" height="400">

<center>CDF</center>

## Beta Distribution

This distribution represents a family of probabilities and is a versatile way to represent outcomes for percentages or proportions. For instance, there is a baseball player, and we hope to be able to predict his baseball batting rate this season. You may directly calculate the baseball batting rate by dividing the number of hits by the number of battings, but if the baseball player only hits once and also hits, then his batting rate is 100%, which is obviously Is unreasonable, so we generate a $\alpha$ and $\beta$ to reduce the impact of the new observed data. In this case, we could assume that  $\alpha$ and $\beta$ is 81 and 219 respectively. Then the beta distribution mean would be 81/(81+219)=0.27. The baseball player win another batting, then the mean of the beta distribution become to (81+1)/(81+219+1)=0.2724. The outcome is reasonable.

The formula for Beta distribution is 
$$
\frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha, \beta)}
$$
Where $B(\alpha, \beta)= \frac {Gamma(\alpha)Gamma(\beta)}{Gamma(\alpha+\beta)}$

## Cauchy Distribution

The Cauchy distribution, or the Lorentzian distribution, is a continuous probability distribution that is the ratio of two independent normally distributed random variables if the denominator distribution has mean zero. It is a “pathological” distribution, i.e. both its expected value and its variance are undefined.

**Cauchy distribution doesn't have mean, variance, or skewness.**

Below are PDF(left) and CDF(right) of Cauchy distribution. Green line shown the standard Cauchy distribution.

![image-20210228175225962](../.vuepress\public\images\cauchy_distribution)



### REFERENCES

[1.3.6.6.17. Beta Distribution (nist.gov)](https://www.itl.nist.gov/div898/handbook/eda/section3/eda366h.htm)

[如何理解「共轭分布」？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/26638720))

[柯西分布——正态分布的兄弟 - Alexander - 博客园 (cnblogs.com)](https://www.cnblogs.com/bnuvincent/p/4902697.html)

[Cauchy distribution - Wikipedia](https://en.wikipedia.org/wiki/Cauchy_distribution)

[Gamma distribution - Wikipedia](https://en.wikipedia.org/wiki/Gamma_distribution)
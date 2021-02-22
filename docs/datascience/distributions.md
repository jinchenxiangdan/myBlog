# Distributions

<!-- ## Bernoulli Distribution
## Uniform Distribution
## Binominal Distribution
## Normal Distribution
## Possion Distribution
## Beta Distribution
## Cauchy Distribution -->


## Bernoulli Distribution
Bernoulli expirement have two outcomes, 1: success and 0: failure. Random sampling from set $X$, success probability is $p$. The distribution function is $p^{x}(1-p)^{1-x}$ where $x\in (0,1)$. It also could be write as
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
  1 & 0 \seq x \seq 1 \\
  0 & otherwise
\end{cases}
\begin{equation}
    F_x(x) =    \begin{cases}
        \frac{1}{15} + \frac{1}{15} + \frac{2}{15} + \frac{1}{15} &x = 1 \\
        \frac{1}{10} + \frac{1}{10} + \frac{1}{5}  + \frac{1}{10} &x = 2 \\
        \frac{1}{30} + \frac{1}{30} + 0            + \frac{1}{10} &x = 3
                \end{cases}
            = \begin{cases}
        \frac{1}{3}  &x = 1 \\
        \frac{1}{2}  &x = 2 \\
        \frac{1}{6}  &x = 3
                \end{cases}
\end{equation}
$$
## Binominal Distribution
A binomial distribution can be thought of as simply the probability of a SUCCESS or FAILURE outcome in an experiment or survey that is repeated multiple times. In this case, we assume a random variable, $X$ means the times you could win a game. $X$ could be any number.In this game, you only have two possible outcome: Win or Lose. Each game are independent, which means the probability of each game doesn't get impact by others.
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
## Possion Distribution
## Beta Distribution
## Cauchy Distribution

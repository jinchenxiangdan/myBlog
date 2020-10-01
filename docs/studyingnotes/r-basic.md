# Fundation of R

## Basic data types of R

- Numberic (Decimal values like 62.4, 3.14, etc.)
- Integer (Integer like 3, 4, etc.)
- Complex (k <- 1 + 2i where i is NOT defined)
- Logical (TRUE or FALSE)
- Character (Strings like "character" or "3.14")

## Data Structures of R

- vector (a <- c(2,3,4))
- list (a <- list(2, "3", c(2,3)) )
- array (a <- array(vector1, vector2), dim=c(3,3,2), could be traded as multi dimension matrix)
- matrix
- data.frame
- Factor

![Data Structures of R]()

### Vector

Code examples

```r
# create a new vector
new_vector <- c(2,3,4,5,6,7,8,9)
# if it has a string, then other values could be conveted 
# to string
convert_vector <- c(2,3,"test")     # "2" "3" "test"
# select by index (starting from 1)
new_vector[2]       # 3
# select by range 1 to 3 and INCLUDE 1 and 3
new_vector[1:3]     # 2 3 4
# vector calculation
new_vector - 1      # 1 2 3 4 5 6 7 8
# But original vector doesn't change
new_vector          # 2 3 4 5 6 7 8 9
# you can use functions to handle with it
rev(new_vector)
order(new_vector)
# ALERT: The functions doesn't change the oriangle vector. 
# It alway return a new one.
```

### List

Code examples

``` r
#
# create a new list, you can add lots of type in it, even a function
#
new_list <- list("google", c(2,3,4), 2, 3, 3.14)
# you can name each row, this way could be made a map
names(new_list) <- c("name1", "name2", "name3", "name4", "name5")
#
# add an item to list
#
new_list[6] <- c("test", 2)
#
# remove an item from list
#
new_list["name1"] <- NULL
#
# converting list to vector
#
new_vector <- unlist(new_list)
#
# merge lists
#
merged_list <- c(list1, list2)
```

### Array

Code examples

``` r
#
# create a new array and set dimensin's name
#
vector1 <- c(5,9,3)
vector2 <- c(10,11,12,13,14,15)
column.names <- c("COL1","COL2","COL3")
row.names <- c("ROW1","ROW2","ROW3")
matrix.names <- c("Matrix1","Matrix2")
new_array <- array(c(vector1, vector2), dim = c(3,3,2), dimnames = list(row.names, column.names, matrix.names))

#
# get value by index
#
new_array[3,,2]
# output:
#       COL1 COL2 COL3
#          3   12   15
new_array[3,1,2]
# output:
#   [1] 3
new_array[,,2]
# output
#        COL1 COL2 COL3
#   ROW1    5   10   13
#   ROW2    9   11   14
#   ROW3    3   12   15
```

### Matrix

Matrix is a two dimensional data sturcture, where elements are arranged in rows and columns. It can be though as combination of two or more vectors of same data type.
The syntax of it is `matrix(data, nrow, ncol, byrow = FALSE)` where *data* is a vector; *nrow*, *ncol* is numeirc; and *byrow* is a Logical.

``` r
#
# creating a matrix
#
new_matrix <- matrix(c(1:10), nrow = 5, byrow = TRUE)
new_matrix
# output:
#     [,1] [,2]
#[1,]    1    2
#[2,]    3    4
#[3,]    5    6
#[4,]    7    8
#[5,]    9   10
new_matrix <- matrix(c(1:10), nrow = 5, byrow = FALSE)
new_matrix
# output:
#      [,1] [,2]
# [1,]    1    6
# [2,]    2    7
# [3,]    3    8
# [4,]    4    9
# [5,]    5   10

################################################################################################################
# !!: When creating a Matrix, you need to make sure the nrow * ncol is exactly equal to the size of the Matrix #
################################################################################################################

#
# creating a matrix with row and col names
#
rownames = c("row1", "row2", "row3", "row4")
colnames = c("col1", "col2", "col3")
new_matrx <- matrix(c(3:14), nrow = 4, byrow = TRUE, dimnames = list(rownames, colnames))
new_matrx
# output:
#      col1 col2 col3
# row1    3    4    5
# row2    6    7    8
# row3    9   10   11
# row4   12   13   14

#
# updating values methods are same as the methods in List
#

#
# using rbind() or cbind() could add a row or colum respectively to a matrix
#
vector1 <- c(1,2,3)
vector2 <- c(1,2,3)
new_matrix <- rbind(vector1, vector2)
new_matrix
#         [,1] [,2] [,3]
# vector1    1    2    3
# vector2    1    2    3
new_matrix <- cbind(vector1, vector2)
new_matrix
#      vector1 vector2
# [1,]       1       1
# [2,]       2       2
# [3,]       3       3

#
# using t() could get transpose of a matrix
#
new_matrix <- matrix( c(2,6,5,1,10,4), nrow = 2,ncol = 3,byrow = TRUE)
new_matrix
#      [,1] [,2] [,3]
# [1,]    2    6    5
# [2,]    1   10    4
print(t(new_matrix))
#      [,1] [,2]
# [1,]    2    1
# [2,]    6   10
# [3,]    5    4

```

### Factor

Factor is a data sturcture that can only contain predefined set of values. Factor are usefull when we want to deal with limited set of values for variable, in this case we must define the possible values beforehand and all of the distinct are terme as levels. It could be created by using `factor(data, levels=lData)` where data is a vector and levels is a vector which ontains all of the factor levels(a set).

``` r
#
# creating a factor
#
new_factor <- factor(c("man", "woman", "man"))
new_factor
# output:
# [1] man woman man
# Levels: man woman

#
# It could be used a lable to simplify the typing. However, when using labels, using levels to map values is recommended
#
new_factor <- factor(c("m", "w", "m"), levels = c("m", "w"), labels=c("man", "woman"))
new_factor
# output:
# [1] man   woman man  
# Levels: man woman

#
# get value
#
new_factor[c(1,3)]
# man woman man
new_factor[1]
# man
```

### Dataframe

Data Frame is a data structure that contain list of vectors that is of equal length. Vectors in a data frame can be different data types. It can be created by `data.frame(df, ...)`.

``` r
# creating a data frame by combine multiple vectors
a <- c(2, 4, 6)
b <- c("aaa", "bbb", "ccc")
c <- c(TRUE, FALSE, TRUE)
new_data_frame <- data.frame(a, b, c)
print(new_data_frame)
# output:
#   a   b     c
# 1 2 aaa  TRUE
# 2 4 bbb FALSE
# 3 6 ccc  TRUE

#
# get val from data.frame
#
new_data_frame[1,2]
# "aaa"
new_data_frame[1,]
#   a   b    c
# 1 2 aaa TRUE

#
# modify data frame
#
new_data_frame[1,2] <- "new_val"

#
# Data frame can also be combined by rbind() and cbind()
#

```

## Differences between similar data structures in R

### List && Vector

**Vector**: All elements must be of the same type.

**List**: It can contains differenct types.

### Matrix && DataFrames

**Matrix**: Is a special kind of vector. It's a homogeneous collection of data sets which is arranged in a two dimensional rectangular organisation. It is created using a vector input. It has a fixed number of rows and columns. You can perform many arithmetic operations on R matrix like – addition, subtraction, multiplication, and divisions.

Usage: Economics, Math, study of surveys, plotting graphs, probablity and statistics.

**DataFrames**: It is used for storing data tables. It can contain multiple data types in multiple columns called fields. It is a list of vector of equal length. It is a generalized form of a matrix. It is like a table in excel sheets. It has column and row names. The name of rows are unique with no empty columns. The data stored must be numeric, character or factor type. DataFrames are heterogeneous.

Usage: fit statistics formula, processing data.

## REFERENCE

- [W3adda](https://www.w3adda.com/r-tutorial)
- [RUNOOB](https://www.runoob.com/r)
- [R-Documentation](https://www.r-project.org/other-docs.html)
- [Programcreek](https://www.programcreek.com/2014/01/vector-array-list-and-data-frame-in-r/)

<Valine></Valine>

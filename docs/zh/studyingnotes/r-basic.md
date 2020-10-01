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
# create a new list, you can add lots of type in it, even a function
new_list <- list("google", c(2,3,4), 2, 3, 3.14)
# you can name each row, this way could be made a map
names(new_list) <- c("name1", "name2", "name3", "name4", "name5")
# add an item to list
new_list[6] <- c("test", 2)
# remove an item from list
new_list["name1"] <- NULL
# converting list to vector
new_vector <- unlist(new_list)
# merge lists
merged_list <- c(list1, list2)
```

### Array

Code examples

``` r
# create a new array and set dimensin's name
vector1 <- c(5,9,3)
vector2 <- c(10,11,12,13,14,15)
column.names <- c("COL1","COL2","COL3")
row.names <- c("ROW1","ROW2","ROW3")
matrix.names <- c("Matrix1","Matrix2")
new_array <- array(c(vector1, vector2), dim = c(3,3,2), dimnames = list(row.names, column.names, matrix.names))

# get value by index
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

### Factor

### Dataframe

## Differences between similar data structures in R

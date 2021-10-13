# Big O: Analysis of Algorithm Efficiency

Big O is used to describe the worst case scenario for a particular algorithm, based on time and space.

1. Running Time
    * The amount of time that a function needs to complete.

2. Memory Space
    * The amount of memory resources that a function utilizes to store data and instructions. How many places in memory will be set aside in the course of the algorithm.

_____

## Overview

### Input Size

The size of the parameter values that are read by the algorithm.

 Does not simply refer to the number of parameters that an algorithm reads.

 It takes the **size** of each parameter value into account as well.

 > we will use the letter n to refer to the Input Size value.

The higher the n, the more likely there will be an increase to Running time and Memory Space.

### Units of Measurement

#### Running Time

To evaluate a function for Time & Space complexity, we need a way to measure each of these factors.

1. The time in milliseconds from the start of a function until it ends

2. The number of operations that are executed.

3. The number of Basic Operations that are exectured.

#### Memory Space

1. The space needed to hold the code for the algorithm.

2. The amount of space needed to hold the input data.

3. The amount of space needed to hold the output data.

4. The amount of space needed to hold working space during the calculation

***Space Complexity and Time Complexity are measured differently and should be analyzed separately.***

### Orders of Growth

![Orders of Growth](https://i.imgur.com/pWK4VSP.png)

**Constant**
No matter what inputs are thrown at our algorithm, it always uses the same amount of time or space. The number **1** is used to represent a constant value. This number is rounded down to **1**, to represent our estimate of complexity that is independant of **n**.

**Logarithmic**
Represents a function that sees a decrease in the rate of complexity growth, the greater our value of n.

Ex. Binary Search- As **n** grows, we can eliminate more values in the input. We are chopping our input in half as Search is called in the algorithm.

**Linear**
The size of our inputs **n** will directly determine the amount of Space used and Time length.

**Linearithmic**
Describes a growth rate of **n** by **lgn**. Represents complexity that grows with **n** ***but also by*** **lgn**.

**Quadratic**
Complexity growing at a rate of **input size n** *multiplied* by **n**.

**Cubic**
Typically just a higher degree of what makes the quadratic complexity grow at a high rate.

**Exponential**
Very rapidly growing complexity, so that whatever the input size **n** is, we are performing the same number of iterative or recursize loops as **n**.

Ex. Fibonacci Sequence

**Factorial**
Means our **space and time** requirements grow extremely fast.

_____

## Best Case, Worst Case, and Average Case

_____

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

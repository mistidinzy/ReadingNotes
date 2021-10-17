# Big O Notation

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> **401**: [Home](401home.md)
|
[PreWork](401/preworkRM.md)
|
[Reading](401/ReadingRM.md)
|
[Class Notes](401/ClassRM.md)
|
[DSA Code Challenges](https://mistidinzy.github.io/data-structures-and-algorithms/)

_____

Big O notation is used to describe the performance of complexity of an algorithm.

It specifically describes the worst-case performance of an algorithm, as the size of the problem grows.

It can be used to describe the execution time required, or the space (memory, etc.) used by an algorithm.

Big-O notation is important in understanding how algorithms scale, and for comparing the relative performance of two algorithms.

## O(1) - "Constant" Big O

An algorithm that will always execute in the same time regardless of the size of the input data set.

## O(N)

Describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.

## O(N²)

Represents an algorithm whose performance is directly proportional to the square of the size of the input data set.

## O(2^N)

Denotes an algorithm whose growth doubles with each addition to the input data set.

## O(L * n)

_____

![Big O Graph](https://i.imgur.com/l93HkjJ.jpg)

_____

## Logarithms

## Binary Search

**Technique used to search sorted data sets.**

Selects the middle element of the data set, (the median).<br>
Compares it to a target value.
If the values match, it will return “success”.<br>
If target is higher, it will take the upper half of the data set, and perform the same operation against it.<br>
And same thing if the target value is lower than the probe element, it will perform the operation against the lower half of the data set.<br>
This type of algorithm is called O(log N).<br>
This technique is more efficient because it essentially cuts the data set in half, until it can no longer split the data. A data set containing 1,000 items, can take 3 seconds to complete with this method.

_____

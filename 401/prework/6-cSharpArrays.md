# C\# Sharp Arrays

The ***Array*** data structure is a way to store multiple variables of the same data type within one object.

An array can be single-dimensional, multidimensional, or jagged. These dimensions and the length of each dimension are established when the array is created.

Arrays are "zero indexed". This means the order of elements within the array starts at 0, not 1.

[ 0, 1, 2, 3 ]

[ a, b , c , d ]

To reference ***a*** in this array, you would use 0 as its position in the index.

## Arrays as Objects

In C\#, arrays are objects.

**Array** is the abstract base type of all array types.

You can use any properties and class members that **Array** has.

The **Array** class provides many useful methods and properties for sorting, searching and copying arrays.

[See More About the Array Class Here](https://docs.microsoft.com/en-us/dotnet/api/system.array?view=net-5.0)

_____

## Single-Dimensional Arrays

You can create a single-dimensional array by using the ***new*** operator, specifying the array element type and the number of elements within the array.

Example:

``` C#
int[] array = new int[5];
```

## Multidimensional Arrays

Array can also have more than one dimension. This means it could have several rows and columns.

Example:

``` C#
int[,] array = new int[4, 2];
```

## Jagged Arrays

A ***jagged*** array is an array whose elements within are additional arrays.

It's an array of arrays. Arrayception.

Example:

``` C#
int[][] jaggedArray = new int[3][];
```

## Using foreach with Arrays

The **foreach** statement provides a simple way to iterate through the elements within an array.

With single-dimensional arrays, foreach will process the elements in increasing index order, starting with **index 0** and ending with **index Length -1**.

Example:

``` C#
int[] numbers = { 4, 5, 6, 1, 2, 3, -2, -1, 0 };
foreach (int i in numbers)
{
    System.Console.Write("{0} ", i);
}
// Output: 4 5 6 1 2 3 -2 -1 0
```

## Passing Arrays as Arguments

Arrays can be passed as arguments to methods (functions) by referencing them in the method's parameters.

Example:

```C#
int[] theArray = { 1, 3, 5, 7, 9 };
PrintArray(theArray);
```

This example utilizes a single-dimensional array, but a multidimensional array can be passed in this way as well.

_____

🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)
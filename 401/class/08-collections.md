# Class 08 - Collections

_____

## Enumumeration

> An enumerator is a thing that knows how to move through an array.

An ***enumeration*** type (or enum type) is a value type defined by a set of named constants of the underlying integral numeric type.

To define an enumeration type, use the **enum** keyword and specify the names of enum members:

```C#
enum Season
{
  Spring,
  Summer,
  Autumn,
  Winter
}
```

Count starts at 0, if you do not specify a value.

_____

## IEnumerator

### Supports a simple iteration over a non-generic collection

## IEnumerable

### Exposes an enumerator, which supports a simple iteration over a non-generic collection

### GetEnumerator()

Returns an enumerator that iterates through a collection.

_____

## Collections

> A grouping of objects.

There are two ways to group objects:

1. Creating arrays of objects
2. Creating a *collection* of objects.

Arrays are most useful for creating and working with a **fixed** number of strongly typed objects.

> **Collections provide a more flexible way to work with groups of objects.**

For some collections, you can assign a key to any object that you put into the collection so that you can quickly retrieve the object by using the key.

> ‼️ A collection is a class, so you must declare an instance of the class before you can add elements to that collection ‼️

### Generics

> I would like C# to enforce for me that I can only make a library **that ***only*** has the same type of thing in it.**

Generics are classes, structures, interfaces, and methods that have **placeholders** (type parameters) for one or more of the types that they store or use.

A generic collection class might use a type parameter as a placeholder for the type of objects that it stores.

[**Advantages & Disadvantages of Generics**](https://docs.microsoft.com/en-us/dotnet/standard/generics/#advantages-and-disadvantages-of-generics)

### IList

_____

## 🏡 [**Home**](0-classhome.md)

### [401 Home](https://mistidinzy.github.io/ReadingNotes/401/401home.html)

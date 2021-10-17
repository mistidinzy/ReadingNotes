# "Intro to C#"

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

C# (Pronounced "See Sharp")<br>
It is an object-oriented, type-safe ***programming language***.

Enables devs to build apps that run in .NET. <br>
**.NET** is a virtual execution system.

[C\# Version History](https://bit.ly/2ZSUYOz)

There have been 13 total versions of C# so far, with C# version 9.0 being most current version at the time this is written (Oct 2021).

____

## C\# Key Organizational Concepts

## programs

> Programs declare types, which contain members and can be organized into namespaces.

## namespaces

> Namespaces provide a hierarchical means of organizing C# programs and libraries. Namespaces contain ***types*** and other namespaces.

## types

> Classes, structs, and interfaces are examples of types.

## members

> Fields, methods, properties, and events are examples of members.

## assemblies

> When C# programs are compiled, they're physically packaged into assemblies.

```C#
using System;

class Hello 
{
  static void Main()
  {
    Console.WriteLine("Hello World!");
  }
}
```

_____

## Keywords

using

> using (statement) - defines a scope at the end of which an object will be disposed.
>
> using (directive) - creates an alias for a namespace, or imports types defined in other namespaces.

System

> Contains several "types" such as the Console class.

type

> A type defines the structure and behavior of any data in C#. The two kinds of types in C# are reference types and value types. These are both further divided into several other sub-types.

[Class](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes)

> A class is a data structure that combines state (fields) and actions (methods and other function members) in a single unit. A class provides a definition for instances of the class, also known as objects.

[Methods](https://docs.microsoft.com/en-us/dotnet/csharp/methods)

> A method is a code block that contains a series of statements.
>
>The "Main" method is the entry point for every C# application.

_____

## References

[A tour of the C# Language](https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/)

_____

# Class 01 - C# Basics

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> **401**: [Home](https://mistidinzy.github.io/ReadingNotes/401home.html)
|
[PreWork](https://mistidinzy.github.io/ReadingNotes/401/preworkRM.html)
|
[Reading](https://mistidinzy.github.io/ReadingNotes/401/ReadingRM.html)
|
[Class Notes](https://mistidinzy.github.io/ReadingNotes/401/ClassRM.html)
|
[DSA Code Challenges](https://mistidinzy.github.io/data-structures-and-algorithms/)

_____

## **What is C#**

Where did it come from?
  Currently on C# 9.0
    Updates to the language are always in the works to make it better

## **What is .NET**

  Runtime that interprets IL compiled from a C# program into something that can run in the browser.
  (**note**: JavaScript is the only language that can run directly in the browser [HTML & CSS don't count])

  .NET Framework is Windows only.
  .NET Core is Open Source, Cross-Platform

### **What is ASP .NET**

Way to make web pages with .NET
Active Server Pages that is only on .NET Framework
Old & busted, tied to .NET Framework

### **What is ASP .NET Core**

Same thing but better, with zero code in common with ASP .NET
xPlatform

## **C# - Why do we use it?**

* Dynamically Typed
  * Type checking occurs at Run time (JavaScript)
  * When writing program, we don't know what data type a variable.

*vs.*

* Statically Typed - Static Type Checking
  * Type checking occurs at compile time (C#)
  * Checks that you have given it a valid program, before it even tries to run it.

(**note**: VS "build" is when the code is compiled)

* Object Oriented

### CLR Common Language Runtime

Standard way to turn IL into running program

Managed code - referring to memory
Packaged into an assembly in the form of an executable file ().exe) or library (.dll)
When the CLR loads an assembly, it converts to IL into the native code of the machine.

_____

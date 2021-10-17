# Object Oriented Principles

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

## Inheritance

Inheritance is one of the three primary characteristics of object-oriented programming.

Inheritence enables you to create new classes that can reuse, extend, and modify the behavior defined in a *base class* (or parent class).

The classes that inherit from the base, (or the children) are called the *derived class*.

A derived class can only have one direct base class.

However, inheritance is *transitive*.

So, if **Class C**  is derived from **Class B**, which is derived from **Class A**, then **Class C** will inherit the members declared in *both* **Class A** and **Class B**.

When you define a class, which will derive from another class, the derived class will gain all of the members of that base class.
***Except*** for its constructors and finalizers.

_____

## Abstract

The ***abstract*** keyword enables you to create classes and class members that are incomplete and must be implemented in a derived class.

An abstract class cannot be instantiated.

The purpose of an abstract class is to provide a common definition of a base class that multiple derived classes can share.

A class library may define an abstract class that is used as a parameter to many of its functions, and require programmers using that library to provide their own implementation of the class by creating a derived class.

Abstract classes may also define abstract ***methods***.

*Example:*

```C#
public abstract class A
{
    public abstract void DoWork(int i);
}
```

## Sealed

The ***sealed*** keyword enables you to prevent the inheritance of a class or certain class members that were previously marked as *virtual*.

*Example:*

```C#
public sealed class D
{
    // Class members here.
}
```

A sealed class cannot be used as a base class. For this reason, it cannot also be an abstract class. Sealed classes prevent derivation.

(*Derivation*: Find definition here)

Because they cannot be used as a base class, some run-time optimizations can make calling sealed class members slightly faster.

<!-- Note To Self: Translate this -->
A method, indexer, property or event, on a derived class that is overriding a virtual member of the base class can declare that member as sealed.

_____

## Polymorphism

## OOP Principles

## C\# in a Nutshell - Chapter 3

_____

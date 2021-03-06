# Class 07 - Interfaces

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> **401**: [Home](https://bit.ly/3EcMrF6)
|
[PreWork](https://bit.ly/3jzkAa1)
|
[Reading](https://bit.ly/3b8DLDc)
|
[Class Notes](https://bit.ly/3Eglbpb)
|
[DSA Code Challenges](https://bit.ly/3GjNoNG)
>

---

## Interfaces

> **A way for classes to say, "I have this capability."**

**Interfaces** are traditionally used on more than one class, or better yet, have the ability to be used on more than one class.

> ***Interfaces tell a class what it can do, versus inheritance, which tells a class what it has.***

Most commonly, in the development world, when working across teams, your team will receive an interface that must be implemented in your code.

The interface defines what exactly this other team is expecting, and it is your job to define the functionality for each of those methods and properties.

### Why do you need interfaces?

Sometimes you need to group your objects together based on the things they can do rather than the classes they inherit from.

> Give me a list of animals **vs.** Give me a list of things that **can lay eggs**

That is where interfaces come in.

Interfaces let us work with any class that can do the job.

Any class that implements an interface must promise to 'fulfill it's obligations' or the compiler will get upset.

Think of interfaces like 'actions' or 'protocols' that can be implemented on other classes

An interface contains definitions for a group of related functionalities that a non-abstract class or a struct must implement.

An interface may not declare instance data such as fields, auto-implemented properties or property-like events.

### Interface keyword

* IDisposable
* IEnumerable
* IEquatable

> Interface names begin with a capital I
>
> Public by default
>
> Cannot contain instance fields, instance constructors or finalizers

## Implementation

```C#
class Football : Sport, IHasTeams {...}

↓

interface IHasTeams
{
  int TeamCount { get; }
  
  string [] TeamNames { get; set; }
}
```

Interfaces vs Inheritance

* Review inheritance
  * no multiple inheritance

* Review Polymorphism

* Implementing an interface
  * naming conventions
  * properties
  * methods

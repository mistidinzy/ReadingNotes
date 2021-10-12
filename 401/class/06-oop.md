# Class 06 - Lecture - Object Oriented Principles

## Inheritance

Inheritance is the process by which one class takes on the attributes, and methods, of another.
Newly formed classes are called ***child classes***.

Classes that the *child classes* are derived from are called ***parent classes***.

C# only supports single inheritance. So only one class's behavior can be pssed onto a derived class. This is the most common type of inheritance amongst programming languages.

⭐️ *If you create a constructor with required parameters in the BASE class, then you will have to call that constructor in each of its child classes. Not recommended.* ⭐️

_____

## Abstraction - Not Actually OOP

Abstract classes cannot be instantiated.

Abstract methods must be overriden.

Abstraction is very common in non-object oriented languages, so it is not exclusive to object-oriented principles.

The **abstract** keyword in C# doesn't actually have much to do with abstraction.

***abstract***

* Is Game an outdoor game or indoor?
* Single player or multiplayer?
* Is it a card or dice game?

Abstract is for things where you don't have enough information to just make one (an instance of the class).

It lets you represent something that is vague.

Opposite of an abstract class is a concrete class. If you can make a new thing of the class, then it is concrete.

_____

## Polymorphism

*Poly* means many.

*Morph* means to change.

Within polymorphism, we want the ability to change the inherited behavior of a specific class.

We want to be able to target specific types of classes. Classes that are derived from specific classes.

Polymorphism also helps us target any and all classes that implement specific interfaces.

The ability to **override** an abstract or virtual method is polymorphism.

Override parent behavior in the children.

**virtual** means you ***may*** override, but you don't have to.

_____

## Encapsulation

The process of hiding implementation details from the user (**User in this context = a programmer using this code/class**).

It is the act of hiding methods and attributes that should not be exposed to unauthorized classes or methods.

Examples of encapsulation are **public**, **private** and **protected**. These are called access modifiers.

Public - Everyone has access.

Private - Only the class has access to it.

Protected - The class and any of its derived children have access.
Any child class that inherits/extends from me ***can*** access this.

Encapsulate the code where we see how *something* actually works,
and make it so they can only interact with the *something* in very specific ways that don't involve the foundational code.

_____

## 🏡 [**Home**](0-classhome.md)

### [401 Home](https://mistidinzy.github.io/ReadingNotes/401/401home.html)

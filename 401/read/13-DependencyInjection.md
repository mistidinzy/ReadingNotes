# Read: Dependency Injection & Repository Design Pattern

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

## Dependency Injection

A **dependency** is an object that another object depends on.

**Dependency Injection** is an easy way to create loosely coupled components.

Which means that ***components will take in the functionality*** defined by interfaces, without having any first-hand knowledge of which implementation classes are being use.

Dependency Injection makes it easier to change that behavior of an app, by changing the components which implement the interface which define the app's features.

---

[ELI5 - Dependency Injection](https://medium.com/@kmar.ayush/eli5-dependency-injection-379a234976c7)

---

## The Repository Pattern

**Repositories** are classes or components that encapsulate the logic required to access data sources.

A repository ***encapsulates a set of objects stored in the database*** and operations that can be performed on them.

The repository pattern is a well-documented way of working with a data source.

The repository pattern makes it easier to test your application with unit tests.

> **A Repository mediates between the domain and data mapping layers, acting like an in-memory domain object collection.**

[Repository - by Edward Hieatt and Rob Mee](https://martinfowler.com/eaaCatalog/repository.html)

Objects can be added to and removed from the Repository, as they can from a simple collection of objects,

and the mapping code encapsulated by the Repository will carry out the appropriate operations behind the scenes.

---

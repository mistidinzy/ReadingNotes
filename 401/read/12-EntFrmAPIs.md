# Entity Framework and APIs

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> **401**: [Home](/c401home.md)
|
[PreWork](/401/PreworkRM.md)
|
[Reading](/401/ReadingRM.md)
|
[Class Notes](/401/ClassRM.md)
|
[DSA Code Challenges](https://mistidinzy.github.io/data-structures-and-algorithms/)
>

---

## Entity Framework Core

EF Core is a lightweight, open source and cross-platform version of the Entity Framework data access technology.

With EF Core, data access is performed using a **model**.

## The Model

A model is made up of **entity classes**, and a **context object** that represents a session with the database.

EF supports the following model development approaches:

* Generate a model from an existing database.
* Hand code a model to match the database.
* Use **EF Migrations** to create a database from the model, which allows the database to evolve as the model changes.

## Data Seeding

Data seeding is the process of populating a database with an initial set of data.

* To add entities that have a relationship, the foreign key values need to be specified.

* If the entity type has any properties in shadow state, then an anonymous class can be used to provide the values.

---
# Databases

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

**Database**: A collection of related data.

**Data**: A collection of facts and figures, which can be processed to produce information.

## DBMS

A **database management system** stores data in such a way that it becomes easier to retrieve, manipulate and produce information.

A modern **DBMS** has the following characteristics:

* Real-world entity

* Relation-based tables

* Isolation of data and application.

* Less redundancy

* Consistency

* Query Language

* ACID properties
  * Atomicity
  * Consistency
  * Isolation
  * Durability

* Multiuser and Concurrent Access

* Multiple views

* Security

---

## Users

A typical database management system has users with different rights and permissions, who use it for different purposes.

Some users retrieve data and some back it up.

The users of a DBMS can be broadly categorized as follows:

**Administrators**:

* Administrators maintain the DBMS.
* They are responsible for looking after its usage and by whom it should be used.
* They create access profiles for users and apply limitations to maintain isolation and force security.
* Administrators also look after DBMS resources like system license, required tools, and other software and hardware related maintenance.

**Designers**:

* Designers are the group of people who actually work on the designing part of the database.
* They keep a close watch on what data should be kept and in what format.
* They identify and design the whole set of entities, relations, constraints, and views.

**End Users**:

* End users are those who actually reap the benefits of having a DBMS.
* End users can range from simple viewers who pay attention to the logs or market rates, to sophisticated users such as business analysts.

---

Two kinds of Databases:

## **Relational**

* SQL server

"I have a table that has rows and columns."
Made up of tables and relationships to other tables.

Table will have some kind of key called **primary key** that identifies the row.

Biggest downside of relational databases is that ***you have to describe the schema***.

The upside is we know exactly what is in the schema.

The performance implications: maintaining these relationships is slower.

## **Non-Relational**

* Mongo
* No SQL
  * Search specific databases
  * Graph databases
  * Time series databases

---

## Representation

* 1:1
  * For every one book, there should be one cover
* Many:Many
* 1:Many
  * One book might have many authors, and one author probably writes many books
  * One book might be many different genres
* Many:1

---

## Keys

### Primary Key

* A unique identifier for a specific table, usually named **Id.**

### Foreign Key

* A reference to some other tables primary key.

* Often used to join tables together.
  * "Go get me the Books ***and*** their Authors."

### Composite Keys

* A combination of columns that uniquely identify a table

**Join Table**: A table that sits between two other tables. Joins two of their columns, next to each other.

* Combines the two ids; Book Id and Author Id

Can use a composite key to represent when you want to combine info, but want to prevent duplicates.

---

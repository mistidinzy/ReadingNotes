# Class 09 - LINQ & Delegates

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

[Delegates](/401/class/09a-delegates.md)

Learning Objectives

* Students will be able to successfully write LINQ queries against a collection to extract data.
* Students will understand the use of a Lambda statement and how to join them with LINQ queries.

Lecture Outline

1. Review Collections
2. Create a collection
    * Add data to the collection
    * Iterate through the collection
3. What is an easier way to iterate through a collection?

_____

## What Is LINQ?

* Language Integrated Query

### 1. Imperative vs Declarative

* What is Imperative
  * Foreach Loop
* What is Declarative
  * LINQ statement

### 2. What is a 'query'?

* A query is an expression that, when enumerated, transforms sequences with query operators.
* The standard query operators are implemented as extension methods, so we can call 'WHERE' directly onto names.

_____

### Query Expressions

```C#
string[] names = { "Tom", "Dick", "Harry" };

IEnumerable<string> filteredNames = from n in names
                                    where n.Contains("a")
                                    select n;

IEnumerable<string> filteredNames = System.Linq.Enumerable.Where(names, n => n.Length >= 4);

foreach (string n in filteredNames){Console.WriteLine (n);}
```

_____

## Lambda Statements

```C#
n => n.Length >= 4
```

```C#
IEnumerable<string> filtered = names.Where(n => n.Contains("a"));
IEnumerable<string> sorted = filtered.OrderBy(n => n.Length);
IEnumerable<string> finalQuery = sorted.Select(n => n.ToUpper());


foreach (string name in filtered)
    Console.Write (name + "|");        // Harry|Mary|Jay|

Console.WriteLine();
foreach (string name in sorted)
    Console.Write (name + "|");        // Jay|Mary|Harry|

Console.WriteLine();
foreach (string name in finalQuery)
    Console.Write (name + "|");        // JAY|MARY|HARRY|
```

## Anonymous Types & Anonymous Objects

> An anonymous type is specified through a **var** type:

```C#
var filteredNames = names.Where (n => n.Length >= 4);
```

> An anonymous object is an object that is a "modified" object that is the result from a LINQ search:

```C#
var bookAuthorCollection = from b in books
                           select new {
                             Book: b,
                             Author: b.Authors[0]
                           };

foreach (var x in bookAuthorCollection)
    Console.WriteLine("Book title - {0}, First author {1}", x.Book.Title, x.Author.FirstName);
```

_____

# Entity Framework and APIs

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/) | [**401 Home**](https://bit.ly/3EcMrF6)

---

## Entity Framework Core

EF Core is a lightweight, open source and cross-platform version of the Entity Framework data access technology.

Both *LINQ to SQL (L2S)* and E*ntity Framework* are LINQ-enabled, object-relational mappers.

The main difference is that EF allows for stronger decoupling between the database schema and the classes that you query.

EF lets you use any class to represent data. However, a class is not enough on its own. You also need a way to describe the **Entity Data Model (EDM)**

## The Model

With EF Core, data access is performed using a **model**.

A model is made up of **entity classes**, and a **context object** that represents a session with the database.

EF supports the following model development approaches:

* Generate a model from an existing database.
* Hand code a model to match the database.
* Use **EF Migrations** to create a database from the model, which allows the database to evolve as the model changes.

### The *Conceptual Model*

* Describes the EDM in isolation of the database

### The *Store Model*

* Describes the database schema

### The *Mapping*

* Describes how the conceptual model maps to the store

---

### Inheritance

**Table per hierarchy**: A single table maps to a whole class hierarchy.

**Table per type**: A single table maps to one type.

**Table per concrete type**: A separate table maps to each concrete type.

---

## Data Seeding

Data seeding is the process of populating a database with an initial set of data.

* To add entities that have a relationship, the foreign key values need to be specified.

* If the entity type has any properties in shadow state, then an anonymous class can be used to provide the values.

---

## Querying

You can retrieve instances of your entity classes from the database by using LINQ (Language Integrated Query).

Example:

```C#
using (var db = new BloggingContext())
{
    var blogs = db.Blogs
        .Where(b => b.Rating > 3)
        .OrderBy(b => b.Url)
        .ToList();
}
```

Data is created, deleted, and modified using instances of your entity classes.

Example:

```C#
using (var db = new BloggingContext())
{
    var blog = new Blog { Url = "http://sample.com" };
    db.Blogs.Add(blog);
    db.SaveChanges();
}
```

---

### **To create the model**

Define a **context class** and the entity classes that make up the model.

Example:

```C#
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace EFGetStarted
{
    public class BloggingContext : DbContext
    {
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }

        public string DbPath { get; private set; }

        public BloggingContext()
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = $"{path}{System.IO.Path.DirectorySeparatorChar}blogging.db";
        }

        // The following configures EF to create a Sqlite database file in the
        // special "local" folder for your platform.
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite($"Data Source={DbPath}");
    }

    public class Blog
    {
        public int BlogId { get; set; }
        public string Url { get; set; }

        public List<Post> Posts { get; } = new List<Post>();
    }

    public class Post
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }

        public int BlogId { get; set; }
        public Blog Blog { get; set; }
    }
}
```

**EF Core can also reverse engineer a model from an existing database.**

> ‼️ This application intentionally keeps things simple for clarity. ‼️
>
> ‼️ Connection strings should not be stored in the code for production applications. ‼️
>
> ‼️ You may also want to split each C# class into its own file. ‼️

# Compare Javascript Map to Linq Select Where - 10/14

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> **401**: [Home](/401home.md)
|
[PreWork](/401/PreworkRM.md)
|
[Reading](/401/ReadingRM.md)
|
[Class Notes](/401/ClassRM.md)
|
[DSA Code Challenges](https://mistidinzy.github.io/data-structures-and-algorithms/)
>

_____

```C#
//////// CONVERT EACH THING ////////////

// JS
let books = [ { ... }, { ... }];
let titles = books.map(book => book.title);

// C# LINQ
IEnumerable<Book> books = .....;
books.Select(book => book.Title);

Func<Book, string>

////////// FILTER THE THINGS ///////////////
// JS
let newBooks = books.filter(book => book.year > 2010);

// C# LINQ
books.Where(book => book.Year > 2010);

Func<Book, bool>      // filter Books
bool Func(Book book);

books.Where((book, i) => book.Year > 2010);

Func<Book, int, bool> // filter Books with index

Where(IEnumerable<Book> seq, Predicate<Book> predicate);
```
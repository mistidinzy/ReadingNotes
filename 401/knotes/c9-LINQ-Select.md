# Compare Javascript Map to Linq Select Where - 10/14

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
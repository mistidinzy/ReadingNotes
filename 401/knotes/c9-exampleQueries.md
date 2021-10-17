# Example Queries - 10/14

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
var neigh = features
  .Select(f => f.neighborhood)

var notNull = 
  neigh.Where(n => n != null);

var distinct = notNull
  .Distinct();

var sortedDistinct =
  distinct
    .OrderBy(n => n);
```

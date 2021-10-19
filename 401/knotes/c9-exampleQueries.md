# Example Queries - 10/14

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

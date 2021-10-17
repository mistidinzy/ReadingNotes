# Example Queries - 10/14

🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)
|
[**401: Home**](https://mistidinzy.github.io/ReadingNotes/401/401home.html)

---

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

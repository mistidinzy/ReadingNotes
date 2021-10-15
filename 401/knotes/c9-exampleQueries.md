# Example Queries - 10/14

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

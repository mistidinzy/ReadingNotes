# Lab08 - Backpack - Starter Code - 10/14

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
class Backpack<T> : IBag<T>
{
  List<T> items = new List<T>();

  void Pack(T item) {
    items.Add(item);
  }

  // TODO: Unpack()
}
```

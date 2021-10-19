# Lab08 - Backpack - Starter Code - 10/14

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
class Backpack<T> : IBag<T>
{
  List<T> items = new List<T>();

  void Pack(T item) {
    items.Add(item);
  }

  // TODO: Unpack()
}
```

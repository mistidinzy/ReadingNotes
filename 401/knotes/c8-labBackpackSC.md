# Lab08 - Backpack - Starter Code - 10/14

🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)
|
[**401: Home**](https://mistidinzy.github.io/ReadingNotes/401/401home.html)

---

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

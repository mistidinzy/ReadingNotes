# DSA Review - Animal Shelter

## Something About Like So

```C#
class Animal { string Type { get; } }
shelter.Enqueue(new Animal { Type = "dog" });


class AnimalShelter {

Stack s1 = new();
Stack s2 = new();

enqueue(Animal a)
{
  s1.Push(a);
}

dequeue(string type)
{
  while(!s1.IsEmpty)
    s2.Push(s1.Pop());

  Animal result = null;
  while (!s2.IsEmpty())
  {
    var next = s2.Pop();
    // If we haven't seen the right Type &&
    // This next one is the right type
    if (result = null && next.Type == type)
    {
      result = next;
    }
    else
    {
       s1.Push(next);
    }
  }
  return result;
}
}
```

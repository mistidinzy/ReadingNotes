# Class 10 - Review + Stacks & Queues

## 🏡 [**Home**](0-classhome.md)

_____

## Review

### Code Challenge 09 - Reversing a Linked List

* Last node needs to point to previous
* Until head points to last node

* Need to keep track of Previous and Next, so we can continue iterating without losing those nodes.

```C#
current = head;
previous = null;

while (current != null)
{
  null = current.Next;
  current.Next = previous;

  previous = current;
  current = null;
} 

Head = previous;
```
_____

## Stacks & Queues

### What is a stack

> A stack is a data structure that consists of Nodes.
>
> Each Node references the next Node in the stack, but does not reference its previous.

### FILO

A stack is a class of data structures that all act the same way.

*Abstract data structure*:

* **First In, Last Out**
* **Last In, First Out**

In a stack you can only access the most recently added thing. 

The first thing that went in, is the last thing that will come out and vice versa. 

Literally means a stack (ie. a stack of plates).

Useful when you really only need to care about what the last thing that happened was.

_____

## Terminology

***Push*** - Nodes or items that are put into the stack are pushed.

***Pop*** - Removes the last element of an array.

***Top*** - This is the top of the stack, this is the thing that you would pop.

***Peek*** - Peek is the method you use to view the value of the top Node in the stack without removing it. Only the top.

***IsEmpty*** - Returns true when stack is empty otherwise returns false. 

Stack overflow is when we have used up all of our available memory when calling functions.

_____

**The pseudocode for pushing a value onto a stack**

**node = new Node**

**node.next <-- top**

> Pop O(1) - Pop is a constant time operation.

> Peek, Push and IsEmpty are also O(1) constant time.

_____

## Queues

### What is a Queue? 

> A queue is also a data structure that consists of Nodes.
>

**First In, First Out**

**Last In, Last Out**

_____

***Enqueue*** - Nodes or items that are added to the queue.

***Dequeue*** - Nodes or items that are removed from the queue. If called when the queue is empty, an exception will be raised.

***Front*** - This is the front/first Node of the queue.

***Rear*** - This is the rear/last Node of the queue.

***Peek*** - When you peek at the first Node of the queue to view its value. If called when the queue is empty, an exception will be raised.

***IsEmpty*** - Returns true when queue is empty, otherwise will return false.

_____

When you dequeue an item from the queue, you are removing the front item.

Peeking looks at the front.

IsEmpty is also looking at the front.

> The main difference between stacks and queues is: are we inserting a new Node at **the beginning** or **the end?**

_____

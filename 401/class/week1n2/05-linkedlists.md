# Class 05 - Linked Lists

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> **401**: [Home](https://bit.ly/3EcMrF6)
|
[PreWork](https://bit.ly/3jzkAa1)
|
[Reading](https://bit.ly/3b8DLDc)
|
[Class Notes](https://bit.ly/3Eglbpb)
|
[DSA Code Challenges](https://bit.ly/3GjNoNG)
>

---

## Traversing through a Linked List

Linked lists **can't** do **Random Access Memory**

## MOST IMPORTANT ABOUT LINKED LISTS

⭐️ THE BEST WAY TO MOVE THROUGH A LINKED LIST. ⭐️

⭐️ ⭐️ ⭐️ current = current.next; ⭐️ ⭐️ ⭐️

⭐️ Instead of foreach or for loops, the best way to move through a Linked List is with a **while** loop. (ie. While ***current*** is NOT *null* {xyz}). ⭐️

⭐️ Equivalent of **i++** with linked list is **Current = Current.Next** ⭐️

```C#

public 

```

---

![Traversal Pseudo Code]()

![Traversal Example Explanation](/images/linkedlist2.png)

---

## Linked List - Traversal - Big O

The Big O of ***time*** for **Includes** would be **O(n)**.

This is because, at its worse case, the node we are looking for will be the very last node in the linked list.

**n** represents the number of nodes in the linked list.

The Big O of ***space*** for **Includes** would be **O(1)**.

This is because there is no additional space being used than what is already given to us with the linked list input.

---

## Adding a Node

* Make new node
* Set value on the new node
* Next for new node is the old head
* Make new head is now the new node
* Make new node point to the rest of the list

**Time**: O(1) ✦ **Space**: O(1)

---

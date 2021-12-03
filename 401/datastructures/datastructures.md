# Data Structures

## **Array**

- A string of values
- Represented with an "Index" position, which starts at 0.

      [1, 2, 3, 4, 5] Values in the Array
      |0, 1, 2, 3, 4| Index position in the Array

- Mostly fixed length
  - Except in JS
    - Typically considered a "List" in other languages

### Big O

- O(1) Length
- O(1) Random Access [i]
- O(n) add (if too small)

### Traversal

- For Loop

      for(i=0; i < array.length; i++)
      {
        DSS
      }

### Common Challenges

- Reverse an Array
- Find the Sum

---

## **Object**

    let Object =
          {
            [One, Two, Three],
            [Four, Five, Six],
            [Seven], [Eight], [Nine]
          };

- Classes w/Props & Methods
- Generic JS "Object"
  - Typically a "HashTable" in other languages

### Big O

### Common Challenges

---

## **Linked List**

### Has

- Node
- Head Node
- Node has a Next
- Tail

      Head    Tail
        ↓       ↓
       (1)→(2)→(3)


### Big O

- O(n) Length
- O(n) Random Access
- O(1) First
- O(1) Insert at Head

### Traversal

    current = head;

    while (current != null)
    {
      current = current.next
    }

### Common Challenges

---

## **Stack**

### Has

- Top
- Bottom

### ⭐️ First In: Last Out (FILO)

        Top → A
              ↓
              B
              ↓
     Bottom → C

Stack can:

- Push()
- Pop()
- Peek()

### Big O

### Traversal

### Common Challenges

---

## **Queue**

### Has

- Front
- Rear

### ⭐️ First In: First Out (FIFO)

    Rear    Front
      ↓       ↓
    →(C)→(B)→(A)→

Queue can:

- Enqueue();
- Dequeue();
- Peek();

### Big O

### Traversal

### Common Challenges

---

## **Tree**

### Has

- Nodes
- Root Node
- Node has a value
- Node has a Left child and a Right child

### Three types of Trees:

### **Binary Tree**

- Has two children

### **K-ary Tree**

- Can have no children or more than 2 children

### **Binary Search Tree**

- Inherits all of the abilities of the binary tree but then adds rules for how it can be set up:
  - Less goes on the left side of the root
  - More goes on the right side of the root
- O(log n)

### Traversal

- **Depth-First**
  - Done with Recursion (uses the call stack)
    - "Look at me, then look at my left side & then my right side"
  - PreOrder
  - InOrder
  - PostOrder

or

- **Breadth-First**
  - Done with a Queue
    - "Look at me, then look at all of my children"
      - PreOrder
      - InOrder
      - PostOrder

### Common Challenges

- Insertion Sort
- Quick Sort
- Merge Sort

---

## **Hashtable**

### Has

- **Key**, which is put through a **Hash** function
- Which gives it a **Hash**
- Which then goes into a **Bucket**.

      Key → Hash → Bucket

### **HashTable/HashMap/Dictionary**

- **Key** → **Value**

### **HashSet**

- **Key** only

### Big O

- O(1) Contains(uses key to check for a value)
- O(1) Get(key)

### Traversal

### Common Challenges

---

## **Graph**

### Has

- Vertex/Node
- Neighbor
- Edge
- Weight

### 2 ways to store/represent a Graph

- Adjacency List
- Adjacency Matrix

### Big O

### Traversal

### Common Challenges

---

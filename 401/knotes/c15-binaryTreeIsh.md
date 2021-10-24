# Binary Tree Starter Code...ish

``` C#
1. New folder called Trees in DataStructures project

2. New class in `Trees/Node.cs`

   class Node<T> {
       // Optional: constructor with (T value)
       public T Value { get; set; }
       public Node<T> Left {get;set;}
       public Node<T> Right {get;set;}
   }

3. New class in `Trees/BinaryTree.cs` 

   class BinaryTree<T> {
       public Node<T> Root {get;set;}

       public IEnumerable<T> PreOrder() {
           // Option 1
           return PreOrder(Root);

           List<T> results = new List<T>();
           PreOrder(Root, results);
           return results;
       }

       // Option 1
       private IEnumerable<T> PreOrder(Node root) { /* use yield return */ }

       // Option 2
       private IEnumerable<T> PreOrder(Node root, List<T> results) { }

       // InOrder() + PostOrder()
   }

4. New class in `Trees/BinarySearchTree.cs`

   class BinarySearchTree : BinaryTree<int>
   {
       void Add(int value) { ... }
       bool Contains(int value) { ... }
   }

   // Stretch goal
   class BinarySearchTree<T> : BinaryTree<T>
       where T : IComparable<T>
   {
       void Add(T value) { ... }
       bool Contains(T value) { ... }
   }
```

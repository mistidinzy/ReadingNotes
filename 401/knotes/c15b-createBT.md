# Create Binary Tree

``` C#
var t = new BinaryTree();
t.Root = new Node("A");

t.Root.Left = new Node("B");
t.Root.Left.Left = new Node("D");
t.Root.Left.Right = new Node("E");

t.Root.Right = new Node("C");
t.Root.Right.Left = new Node("F");
t.Root.Right.Right = null; // redundant
```

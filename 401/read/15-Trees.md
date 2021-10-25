# Data Structure - Trees

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

## Trees

[Computational Fairytales - Trees](http://computationaltales.blogspot.com/2011/05/binary-search-trees-and-speck-spider.html)

A *tree* is a data structure similar to a linked list.

But instead of each Node simply pointing to the next Node, each one points to a multiple number of other nodes.

Tree is an example of a "non-linear" data structure.

Trees help store data in a way that represents the structure's heirarchical nature.

---

## Terminology

* **Root** - the Root of a tree is the node which has no parents. There can only be one root node in a tree.

* **Node** - the Node is a component which may contain its own values, and references to other nodes.

* **Leaf** - a Leaf is a node that does not have any children nodes.

* Children of the same parent are called **Siblings**.

* **Level** - the Level of a tree is where you find a set of nodes which are all at one same depth of the tree. The root node is at level zero.

* **Depth** - the Depth of a node is the length of how far away it is from the Root.

* **Height** - the Height of a node is the length of how far away it is from the deepest node that doesn't have any children (Leaf), at the bottom of the tree.

* **Edge** - the Edge in a tree is the link between a parent and child node.

* **Node Size** - the size of a node is the number of descendants it has, including itself. If a node has two child nodes, the size is 3.

* **K** - A number that specifies the maximum number of children any node may have in a k-ary tree. In a binary tree, k = 2.

* **Left** - A reference to one child node, in a binary tree.

* **Right** - A reference to the other child node, in a binary tree.

---

![Tree structure diagram](https://i.imgur.com/6OJl3fU.png)

---

## Binary Trees

> A tree where each node only has up to two children is called a ***Binary Tree***. An empty tree is technically also a valid binary tree.
>
> If each node has exactly zero or exactly two children, then it is a ***strict binary tree***.
>
> If each node has exactly two children and all leaf nodes are at the same level, this is called a ***full binary tree***.

## Binary Search Trees

> In Binary Search Trees, Nodes are organized where all values that are smaller than the **root**, are placed to the left, and all larger values are placed to the right.

## K-ary Trees

> If Nodes are allowed to have more than two children nodes, the tree that contains them is called a **K-ary Tree**. We use K to refer to the maximum number of children that each Node is able to have.

---

## Traversing Trees

There are two categories of traversals when it comes to Trees:

* Depth First
* Breadth First

---

## PreOrder Traversal

* Visit the root
* Traverse the left subtree
* Traverse the right subtree

## InOrder Traversal

* Traverse the left subtree
* Visit the root
* Traverse the right subtree

## PostOrder Traversal

* Visit the left subtree
* Visit the right subtree
* Visit the root

---

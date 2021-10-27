# Tree Max

```c#
// Option 1:

public int TreeMax1(Tree<int> tree)
{
   return tree.PreOrder().Max();
}

// Option 2:
public int TreeMax2(Tree<int> tree)
{
    if (tree.Root == null) throw ...;

    int max = tree.Root.Value;
    foreach(var n in tree.PreOrder()) {
       if (n > max) max = n;
    }
    return max;
}

// Option 3: actually traverse

public int TreeMax3(Tree<int> tree)
{
    return NodeMax3(tree.Root);
}

private int NodeMax3(Node<int> node)
{
    int max = node.Value;

    if (node.Left != null) {
        int leftMax = NodeMax3(node.Left);
        if (leftMax > max) max = leftMax;
    }

    if (node.Right != null) {
        int rightMax = NodeMax3(node.Right);
        if (rightMax > max) max = rightMax;
    }

    return max;
}

```

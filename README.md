# Binary Search Trees

[Check the assignment here!](https://www.theodinproject.com/lessons/javascript-binary-search-trees)

## Specifications

1. Build a `Node class / factory`. It should have an attribute for the data it stores as well as its left and right children.

1. Build a `Tree class / factory` which accepts an array when initialized. The _Tree class_ should have a root attribute which uses _the return value_ of `buildTree` which you’ll write next.

1. Write a `buildTree function` which takes an array of data _(e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])_ and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The `buildTree` function should return the level-0 root node.

1. Write an `insert` and `delete` functions which accepts a value to insert/delete (you’ll have to deal with several cases for delete such as when a node has children or not). If you need additional resources, check out these two articles on inserting and deleting, or this video with several visual examples.

1. Write a `find` function which accepts a value and returns the node with the given value.

1. Write a `levelOrder` function which accepts another function as a parameter. `levelOrder` should traverse the tree in breadth-first level order and provide each node as the argument to the provided function. This function can be implemented using either iteration or recursion (try implementing both!). The method should return an array of values if no function is given.

1. Write `inorder`, `preorder`, and `postorder` functions that accept a function parameter. Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. The functions should return an array of values if no function is given.

1. Write a `height` function which accepts a node and returns its height. Height is defined as the number of edges in longest path from a given node to a leaf node.

1. Write a `depth` function which accepts a node and returns its depth. Depth is defined as the number of edges in path from a given node to the tree’s root node.

1. Write a `isBalanced` function which checks if the tree is balanced. A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.

1. Write a `rebalance` function which rebalances an unbalanced tree.

### Tie it all together

1. Write a simple driver script that does the following:
    1. Create a binary search tree from an array of random numbers. You can create a function if you want that returns an array of random numbers each time you call it.
    1. Confirm that the tree is balanced by calling `isBalanced`
    1. Print out all elements in level, pre, post, and in order
    1. Unbalance the tree by adding several numbers > 100
    1. Confirm that the tree is unbalanced by calling `isBalanced`
    1. Balance the tree by calling `rebalance`
    1. Confirm that the tree is balanced by calling `isBalanced`
    1. Print out all elements in level, pre, post, and in order

## How to test it?

You can do it by using the _node_ command

```
node script.js
```

### Improvements that can be done

I would like to add tests for this project, although I'm just starting to learn how to use them, in the future I can come back to improve it!

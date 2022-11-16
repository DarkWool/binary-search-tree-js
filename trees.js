class Node {
    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(data) {
        this.data = data;
        this.root = this.buildTree();
    }

    // Recursive approach
    insert(value, node = this.root) {
        // Compare if the value already exists, on that case don't insert a new node
        if (value === node.data) return;

        if (value < node.data) {
            // Smaller values to the left
            if (node.left == null) node.left = new Node(value);
            else this.insert(value, node.left);
            return;
        }

        // Greater values to the right
        if (node.right == null) node.right = new Node(value);
        else this.insert(value, node.right);
    }

    // Iterative approach (not used but tested)
    insertIt(value) {
        let node = this.root;
        while (node.data != value) {
            // Compare if the value already exists, on that case don't insert a new node
            if (value === node.data) return;

            if (value < node.data) {
                // Smaller values to the left
                if (node.left == null) node.left = new Node(value);
                else node = node.left;
            } else {
                // Greater values to the right
                if (node.right == null) node.right = new Node(value);
                else node = node.right;
            }
        }
    }

    delete(value, node = this.root) {
        // Base case
        if (node == null) return null;

        (value < node.data) ?
            node.left = this.delete(value, node.left) :
            node.right = this.delete(value, node.right);

        if (value === node.data) {
            // Delete leaf node (no children node)
            if (node.left == null && node.right == null) return null;
            else if (node.left && node.right) {
                // Delete node with both children
                let successor = node.right;

                if (successor.left != null) {
                    let parent;
                    while (successor.left != null) {
                        parent = successor;
                        successor = successor.left;
                    }
                    parent.left = successor.right;
                    successor.right = node.right;
                }

                successor.left = node.left;
                return successor;
            }

            // Delete node with only one child
            return (node.left != null) ? node.left : node.right;
        }

        return node;
    }

    // Recursive approach
    find(value, node = this.root) {
        if (node == null) return null;
        else if (value === node.data) return node;
        
        // If value is lower than the current node search on the left branch
        return (value < node.data) ?
            this.find(value, node.left) :
            this.find(value, node.right);
    }

    // Iterative approach (not used but tested)
    findIt(value) {
        if (value == null) return null;

        let currNode = this.root;
        while (currNode != null) {
            if (value === currNode.data) return currNode;
            
            currNode = (value < currNode.data) ? currNode.left : currNode.right;
        }

        return null;
    }

    // Recursive approach
    levelOrder(callback, queue = [], node = this.root) {
        // If root is null then simply return
        if (node == null) return [];

        // Push the children of the current node onto the queue
        if (node.left != null) queue.push(node.left);
        if (node.right != null) queue.push(node.right);

        let cbResult;
        if (callback) cbResult = callback(node);
        else cbResult = node.data;
        
        const dequeued = queue.shift() || null;
        const nextNode = this.levelOrder(callback, queue, dequeued);

        return [cbResult, ...nextNode];
    }

    // Iterative approach
    levelOrderIt(callback) {
        if (this.root == null) return;

        let node = this.root;
        const results = [];
        const queue = [];

        while (node != null) {
            // Push the children of the current node onto the queue
            if (node.left != null) queue.push(node.left);
            if (node.right != null) queue.push(node.right);
            
            if (callback) results.push(callback(node));
            else results.push(node.data);

            // Get a new node from the queue
            node = queue.shift();
        }

        return results;
    }

    preorder(callback, node = this.root) {
        if (node == null) return [];
        
        let arr = [];
        if (callback) arr.push(callback(node));
        else arr.push(node.data);

        arr.push(...this.preorder(callback, node.left));
        arr.push(...this.preorder(callback, node.right));

        return arr;
    }

    inorder(callback, node = this.root) {
        if (node == null) return [];

        let arr = [];
        arr.push(...this.inorder(callback, node.left));
        
        if (callback) arr.push(callback(node));
        else arr.push(node.data);

        arr.push(...this.inorder(callback, node.right));

        return arr;
    }

    postorder(callback, node = this.root) {
        if (node == null) return [];

        let arr = [];
        arr.push(...this.postorder(callback, node.left));
        arr.push(...this.postorder(callback, node.right));
        
        if (callback) arr.push(callback(node));
        else arr.push(node.data);

        return arr;
    }

    height(node) {
        // Base case
        if (node == null) return 0;

        // Recursive call for left and right subtrees if they are not null
        let leftHeight = 0;
        let rightHeight = 0;
        if (node.left) leftHeight = 1 + this.height(node.left);
        if (node.right) rightHeight = 1 + this.height(node.right);
        return (leftHeight > rightHeight) ? leftHeight : rightHeight;
    }

    depth(node) {
        if (node == null) return null;

        let depth = 0;
        let currNode = this.root;

        while (currNode != null) {
            if (node.data === currNode.data) return depth;

            currNode = (node.data < currNode.data) ? currNode.left : currNode.right;
            depth++;
        }
    }

    // Recursive approach for depth (not used but tested)
    depthRec(node, currNode = this.root) {
        if (node == null) return null;
        else if (node.data === currNode.data) return 0;

        // Start from the root node and keep searching till you find the node
        let depth = (node.data < currNode.data) ?
            this.depthRec(node, currNode.left) :
            this.depthRec(node, currNode.right);
        if (depth !== null) ++depth;
        
        return depth;
    }

    isBalanced() {
        let leftHeight = 0;
        let rightHeight = 0;
        if (this.root.left) leftHeight = 1 + this.height(this.root.left);
        if (this.root.right) rightHeight = 1 + this.height(this.root.right);

        return (Math.abs(leftHeight - rightHeight) < 2) ? true : false;
    }

    rebalance() {
        const treeData = this.inorder();
        this.data = treeData;
        this.root = this.buildTree();
    }

    buildTree(start = 0, end = this.data.length - 1) {
        if (start > end) return null;
        
        const mid = Math.floor((start + end) / 2);
        const root = new Node(this.data[mid]);
        root.left = this.buildTree(start, mid - 1);
        root.right = this.buildTree(mid + 1, end);

        return root;
    }
}


// Utility functions
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}


export { Tree, prettyPrint };
import { Tree, prettyPrint } from "./trees.js";

// Basic test
const tree = new Tree(createRandomArray(30));
console.log(`Is tree balanced?  ${tree.isBalanced()}`);
printAllOrders(tree);

prettyPrint(tree.root);

for (let i = 0; i < 10; i++) {
    const int = getRandomInt(101, 1000);
    tree.insert(int);
}

prettyPrint(tree.root);

console.log(`Is tree balanced after adding numbers?  ${tree.isBalanced()}`);
tree.rebalance();
console.log(`Is tree balanced after calling .rebalance()?  ${tree.isBalanced()}`);

prettyPrint(tree.root);
printAllOrders(tree);


// Utility functions
function mergeSort(list) {
    // Base case
    let listLen = list.length;
	if (listLen === 1) return list;

    // Recursive case
    // Divide the list in 2 (left and right) till you have arrays of length 1
	const leftHalf = mergeSort(list.slice(0, listLen / 2));
    const rightHalf = mergeSort(list.slice(listLen / 2));
    
    // Restart the array now that you don't need it
    list = [];
    
    // Merge both halves and sort them on the fly
	let i = 0, j = 0;
    while (i < leftHalf.length && j < rightHalf.length) {
        (leftHalf[i] < rightHalf[j]) ? list.push(leftHalf[i++]) : list.push(rightHalf[j++]);
    }

    // When one list is empty just copy the rest of the other one
	list = (i === leftHalf.length) ? list.concat(rightHalf.slice(j)) : list.concat(leftHalf.slice(i));
	return list;
}

/*
    Creates a random array with determined length but it removes 
    duplicates, so the length can be different than the one passed
    in as an argument, this function also sorts the array.
    The returned value is ready to be used to create a BST.
*/
function createRandomArray(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = getRandomInt(0, 100);
    }

    // Remove duplicates and sort them
    arr = mergeSort([...new Set(arr)]);

    return arr;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function printAllOrders(tree) {
    console.log("--- Level order: ---")
    console.log(tree.levelOrder());
    console.log(tree.levelOrderIt());
    
    console.log("--- Pre, post and in-order: ---")
    console.log(tree.preorder());
    console.log(tree.postorder());
    console.log(tree.inorder());
}
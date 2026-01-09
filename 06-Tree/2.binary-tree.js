/**
 * ======================================================
 * BINARY TREE WITH DUPLICATE REMOVAL
 * ======================================================
 *
 * Features:
 * - Insert values (allows duplicates)
 * - Remove duplicate values
 * - BFS traversal
 * - DFS traversals (preorder, inorder, postorder)
 * - Search
 *
 * ======================================================
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    /* =======================
       INSERT (LEVEL ORDER)
       Allows duplicates
    ======================= */
    insert(value) {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();

            if (!node.left) {
                node.left = newNode;
                return;
            } else {
                queue.push(node.left);
            }

            if (!node.right) {
                node.right = newNode;
                return;
            } else {
                queue.push(node.right);
            }
        }
    }

    /* =======================
       BFS (LEVEL ORDER)
    ======================= */
    bfs() {
        if (!this.root) return [];

        const result = [];
        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();
            result.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return result;
    }

    /* =======================
       REMOVE DUPLICATES
    ======================= */
    removeDuplicates() {
        if (!this.root) return;

        const seen = new Set();
        const values = this.bfs();

        this.root = null;

        for (let val of values) {
            if (!seen.has(val)) {
                seen.add(val);
                this.insert(val);
            }
        }
    }

    /* =======================
       SEARCH
    ======================= */
    search(value) {
        if (!this.root) return false;

        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();

            if (node.value === value) return true;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return false;
    }

    /* =======================
       DFS TRAVERSALS
    ======================= */

    preorder() {
        const result = [];

        const traverse = (node) => {
            if (!node) return;
            result.push(node.value);
            traverse(node.left);
            traverse(node.right);
        };

        traverse(this.root);
        return result;
    }

    inorder() {
        const result = [];

        const traverse = (node) => {
            if (!node) return;
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        };

        traverse(this.root);
        return result;
    }

    postorder() {
        const result = [];

        const traverse = (node) => {
            if (!node) return;
            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
        };

        traverse(this.root);
        return result;
    }
}

/* =======================
   TEST (YOUR EXACT CODE)
======================= */

const tree = new BinaryTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(3);

console.log(tree.bfs());           
// [1, 2, 3, 2, 4, 3]

tree.removeDuplicates();
console.log(tree.bfs());           
// [1, 2, 3, 4]

console.log(tree.search(4));       
// true

console.log(tree.preorder());      
// DFS preorder

console.log(tree.inorder());       
// DFS inorder

console.log(tree.postorder());     
// DFS postorder

// 🧠 Time Complexity
// Operation	Complexity
// Insert	    O(n)
// BFS	        O(n)
// Search	    O(n)
// Remove Duplicates	 O(n)
// DFS Traversals	     O(n)
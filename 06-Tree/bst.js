/**
 * ======================================================
 * BINARY SEARCH TREE (BST) – JavaScript Implementation
 * ======================================================
 *
 * Rules of BST:
 * - Left child < Parent node
 * - Right child > Parent node
 *
 * Operations included:
 * - Insert
 * - Search
 * - Delete
 * - DFS Traversals (Pre, In, Post)
 * - BFS (Level Order)
 * - Min / Max
 * - Height
 * - Balance Check
 *
 * ======================================================
 */

/**
 * TreeNode
 * Represents a single node in the BST
 */
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * BinarySearchTree
 * Represents the BST structure
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Check if tree is empty
     */
    isEmpty() {
        return this.root === null;
    }

    /**
     * Insert a value into BST
     * @param {*} value
     */
    insert(value) {
        const newNode = new TreeNode(value);

        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    /**
     * Helper method for insert
     */
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    /**
     * Search for a value in BST
     * @param {*} value
     * @returns {TreeNode|false}
     */
    search(value, node = this.root) {
        if (!node) return false;

        if (node.value === value) return node;

        if (value < node.value) {
            return this.search(value, node.left);
        } else {
            return this.search(value, node.right);
        }
    }

    /* =======================
       TREE TRAVERSALS (DFS)
    ======================= */

    // Root → Left → Right
    preOrder(node = this.root) {
        if (!node) return;

        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    // Left → Root → Right (sorted order)
    inOrder(node = this.root) {
        if (!node) return;

        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }

    // Left → Right → Root
    postOrder(node = this.root) {
        if (!node) return;

        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }

    /* =======================
       BFS (LEVEL ORDER)
    ======================= */

    bfs() {
        if (!this.root) return;

        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();
            console.log(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    /* =======================
       MIN / MAX
    ======================= */

    findMin(node = this.root) {
        if (!node) return null;

        while (node.left) {
            node = node.left;
        }
        return node.value;
    }

    findMax(node = this.root) {
        if (!node) return null;

        while (node.right) {
            node = node.right;
        }
        return node.value;
    }

    /* =======================
       HEIGHT & BALANCE
    ======================= */

    height(node = this.root) {
        if (!node) return -1;

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    isBalanced(node = this.root) {
        if (!node) return true;

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        return (
            this.isBalanced(node.left) &&
            this.isBalanced(node.right)
        );
    }

    /* =======================
       DELETE NODE
    ======================= */

    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
        } else {
            // Case 1: No child
            if (!node.left && !node.right) return null;

            // Case 2: One child
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            // Case 3: Two children
            const minValue = this.findMin(node.right);
            node.value = minValue;
            node.right = this._deleteNode(node.right, minValue);
        }

        return node;
    }
}

/* =======================
   Example Usage
======================= */

// const bst = new BinarySearchTree();
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);

// console.log("InOrder Traversal (Sorted):");
// bst.inOrder();

// console.log("Min:", bst.findMin());
// console.log("Max:", bst.findMax());
// console.log("Height:", bst.height());
// console.log("Balanced:", bst.isBalanced());

// bst.delete(10);
// bst.inOrder();

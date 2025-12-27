/**
 * ======================================================
 * GENERAL TREE IMPLEMENTATION (JavaScript)
 * ======================================================
 */

/* ---------- Tree Node ---------- */
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

/* ---------- General Tree ---------- */
class GeneralTree {
    constructor(value) {
        this.root = new TreeNode(value);
    }

    find(value) {
        if (!this.root) return null;

        let queue = [this.root];
        while (queue.length) {
            let node = queue.shift();

            if (node.value === value) return node;

            for (let child of node.children) {
                queue.push(child);
            }
        }
        return null;
    }

    insert(parentValue, newValue) {
        const parent = this.find(parentValue);
        if (!parent) return false;

        parent.children.push(new TreeNode(newValue));
        return true;
    }

    height(node = this.root) {
        if (!node) return -1;

        let max = -1;
        for (let child of node.children) {
            max = Math.max(max, this.height(child));
        }
        return max + 1;
    }

    /* ---------- Traversals ---------- */

    preOrder(node = this.root) {
        if (!node) return;

        console.log(node.value);
        for (let child of node.children) {
            this.preOrder(child);
        }
    }

    postOrder(node = this.root) {
        if (!node) return;

        for (let child of node.children) {
            this.postOrder(child);
        }
        console.log(node.value);
    }

    bfs() {
        if (!this.root) return;

        let queue = [this.root];
        while (queue.length) {
            let node = queue.shift();
            console.log(node.value);

            for (let child of node.children) {
                queue.push(child);
            }
        }
    }
}


/* =====================
Example Usage
===================== */

const tree = new GeneralTree("A");
tree.insert("A", "B");
tree.insert("A", "C");
tree.insert("B", "D");
tree.insert("B", "E");

console.log("Preorder:");
tree.preOrder();

console.log("Tree Height:", tree.height());




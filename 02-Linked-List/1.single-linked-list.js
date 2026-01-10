/**
 * ======================================================
 * SINGLY LINKED LIST – JavaScript
 * ======================================================
 *
 * Operations Included:
 * 1. Insert at Start
 * 2. Insert at End
 * 3. Insert After a Given Value
 * 4. Delete a Node
 * 5. Search a Value
 * 6. Print List
 * 7. Count Nodes
 * 8. Reverse (Iterative)
 * 9. Reverse (Recursive)
 *
 * ======================================================
 *
 * Time Complexity Summary:
 * - Insert at Start      → O(1)
 * - Insert at End        → O(n)
 * - Insert After Value   → O(n)
 * - Delete               → O(n)
 * - Search               → O(n)
 * - Reverse              → O(n)
 *
 * Space Complexity:
 * - O(1) (except recursive reverse → O(n))
 *
 * ======================================================
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    /* ======================================================
       INSERT AT START
    ====================================================== */
    insertAtStart(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    /* ======================================================
       INSERT AT END
    ====================================================== */
    insertAtEnd(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    /* ======================================================
       INSERT AFTER A GIVEN VALUE
    ====================================================== */
    insertAfterValue(value, data) {
        let current = this.head;

        while (current !== null) {
            if (current.data === value) {
                const newNode = new Node(data);
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }

        console.log("Value not found");
    }

    /* ======================================================
       DELETE A NODE
    ====================================================== */
    delete(data) {
        if (this.head === null) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    /* ======================================================
       SEARCH
    ====================================================== */
    search(data) {
        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    /* ======================================================
       COUNT NODES
    ====================================================== */
    count() {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            count++;
            current = current.next;
        }

        return count;
    }

    /* ======================================================
       PRINT LINKED LIST
    ====================================================== */
    print() {
        let current = this.head;
        let result = "";

        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }

        console.log(result + "null");
    }

    /* ======================================================
       REVERSE (ITERATIVE)
    ====================================================== */
    reverse() {
        let current = this.head;
        let prev = null;

        while (current !== null) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    /* ======================================================
       REVERSE (RECURSIVE)
    ====================================================== */
    recursiveReverse() {
        const reverse = (current, prev = null) => {
            if (!current) return prev;

            const next = current.next;
            current.next = prev;
            return reverse(next, current);
        };

        this.head = reverse(this.head);
    }
}

/* =======================
   Example Usage
======================= */

const list = new LinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtStart(5);
list.insertAfterValue(20, 25);

list.print();          // 5 -> 10 -> 20 -> 25 -> 30 -> null
console.log(list.count()); // 5

console.log(list.search(25)); // true
console.log(list.search(100)); // false

list.reverse();
list.print();          // 30 -> 25 -> 20 -> 10 -> 5 -> null

list.recursiveReverse();
list.print();          // 5 -> 10 -> 20 -> 25 -> 30 -> null

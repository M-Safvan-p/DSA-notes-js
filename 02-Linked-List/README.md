# 🧩Linked List

## 🌱 What Is a Linked List?

A **Linked List** is a **dynamic data structure** used to store data **in a sequence**,

but **unlike arrays**, elements are **not stored next to each other in memory**.

> A linked list is a linear data structure that includes a series of connected nodes
Each node consists of a data value and a pointer that points to the next node
> 

Each element (called a **node**) has **two parts**:

1. **Data** – actual value
2. **Next** – a link (or pointer) to the next node

🧠 Structure of a Node

```
+-------+---------+
|  Data |  Next → |
+-------+---------+
```

- The `Next` field points to the **next node’s address**.
- The last node points to `null` (meaning end of the list).

---

### Types of Linked Lists

1. **Singly Linked List** – Each node points to the **next** node.
2. **Doubly Linked List** – Each node points to **next** and **previous** node.
3. **Circular Linked List** – Last node points **back to first** node.

> Singly: A -> B -> C -> NULL
Doubly: NULL <- A <-> B <-> C -> NULL
Circular: A -> B -> C -> back to A
> 

---

## ⌛ Time Complexity

| Operation | Linked List | Why? |
| --- | --- | --- |
| Insert at start | O(1) | No shifting needed |
| Insert at end | O(n) | Need to reach last node |
| Delete at start | O(1) | Simply move head |
| Delete at end | O(n) | Need to reach second last node |
| Search | O(n) | Check node-by-node |

✅ Summary

| Concept | Meaning |
| --- | --- |
| **Node** | A small block containing data + next pointer |
| **Head** | The first node in the list |
| **Null** | Marks the end of the list |
| **Append** | Add a new node at the end |
| **Traverse** | Move through each node one by one |

## 🩵 1. **Singly Linked List**

Each node has **one link (next)** that points to the next node in the list.

You can move **only in one direction** — from head to end.

### 📊 Structure:

> [10] -> [20] -> [30] -> null
> 
- `10` is the **head**
- `null` marks the **end**
- 💻 Simple Example
    
    ```jsx
    class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }
    
    class SinglyLinkedList {
      constructor() {
        this.head = null;
      }
    
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
    
      printList() {
        let current = this.head;
        let result = "";
        while (current) {
          result += current.data + " -> ";
          current = current.next;
        }
        console.log(result + "NULL");
      }
    }
    
    const list = new SinglyLinkedList();
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    list.printList(); // Output: 10 -> 20 -> 30 -> NULL
    ```
    

---

## 🩷 2. **Doubly Linked List**

Each node has **two pointers**:

1. `prev` → points to the previous node
2. `next` → points to the next node

You can move **both forward and backward**.

### 📊 Structure:

> null <- [10] <-> [20] <-> [30] -> null
> 
- 💻 Simple Example
    
    ```jsx
    class DoublyNode {
      constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
      }
    }
    
    class DoublyLinkedList {
      constructor() {
        this.head = null;
        this.tail = null;
      }
    
      insertAtEnd(data) {
        const newNode = new DoublyNode(data);
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
          return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    
      printForward() {
        let current = this.head;
        let result = "";
        while (current) {
          result += current.data + " <-> ";
          current = current.next;
        }
        console.log("Forward:", result + "NULL");
      }
    
      printBackward() {
        let current = this.tail;
        let result = "";
        while (current) {
          result += current.data + " <-> ";
          current = current.prev;
        }
        console.log("Backward:", result + "NULL");
      }
    }
    
    const dlist = new DoublyLinkedList();
    dlist.insertAtEnd(10);
    dlist.insertAtEnd(20);
    dlist.insertAtEnd(30);
    dlist.printForward(); // Forward: 10 <-> 20 <-> 30 <-> NULL
    dlist.printBackward(); // Backward: 30 <-> 20 <-> 10 <-> NULL
    ```
    

---

## 🩶 3. **Circular Linked List**

In this type, the **last node points back to the first node**,

forming a **circle** instead of ending with `null`.

There are **two types**:

1. **Singly Circular Linked List**
2. **Doubly Circular Linked List**

### 📊 Structure (Singly Circular)

```
[10] -> [20] -> [30] ↺
         ↑___________|
```

- 💻 Simple Example
    
    ```jsx
    class CircularNode {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }
    
    class CircularLinkedList {
      constructor() {
        this.head = null;
      }
    
      insert(data) {
        const newNode = new CircularNode(data);
        if (!this.head) {
          this.head = newNode;
          newNode.next = this.head;
          return;
        }
    
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;// this line is the main
      }
    
      printList(limit = 10) {
        // limit to avoid infinite loop
        let current = this.head;
        let count = 0;
        let result = "";
        while (current && count < limit) {
          result += current.data + " -> ";
          current = current.next;
          count++;
        }
        console.log(result + "(back to head)");
      }
    }
    
    const clist = new CircularLinkedList();
    clist.insert(10);
    clist.insert(20);
    clist.insert(30);
    clist.printList(); // 10 -> 20 -> 30 -> (back to head)
    ```
    

---


| **Linked List Type** | **Advantages** | **Disadvantages** |
| --- | --- | --- |
| **Singly Linked List** | • Easy to implement
• Uses less memory | • Cannot go backward
• Deleting last node takes more time |
| **Doubly Linked List** | • Can move forward and backward
• Easy to insert or delete nodes | • Uses more memory
• Logic is more complex |
| **Circular Linked List** | • Can traverse endlessly
• Useful for playlists and round-robin scheduling | • Hard to find the end
• Logic is complex |
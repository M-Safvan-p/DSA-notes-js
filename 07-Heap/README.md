# 🌳 Heap


> A **Heap** is a **special binary tree** used when we want:
👉 **Fast access to the minimum or maximum element**
> 

Heap is a specific type of **Binary Tree** with two rules:

1. **The Shape Rule:** It must be a "Complete Binary Tree." This means you fill the tree from top to bottom, left to right. No gaps allowed.
2. **The Order Rule:**
    - **Max Heap:** Every parent is *greater* than its children. The biggest number is always at the top (Root).
    - **Min Heap:** Every parent is *smaller* than its children. The smallest number is always at the top (Root).

### Real-life example 🎯

Think of a **hospital emergency queue**:

- Most serious patient is treated first
- Not first-come-first-serve

That’s a **heap** → priority-based.

This is exactly what a **Heap** is for. It is a data structure designed to give you the "highest priority" (or lowest value) item instantly.


## 🧠 2. Properties of a Heap (Must Know)

### ✅ Binary Heap Properties

1️⃣ **Complete Binary Tree**

- All levels fully filled
- Last level filled **from left to right**

2️⃣ **Heap Property**

- **Max Heap** → Parent ≥ children
- **Min Heap** → Parent ≤ children


## 🔼 3. Types of Heaps

### ✅ Max Heap

Largest element is always on top.

```
        50
       /  \
     30    40
    / \
  10  20
```

### ✅ Min Heap

Smallest element is always on top.

```
        10
       /  \
     20    30
```

✅ Root is **always important element**


## 🧠 4. Why Heap is Stored as an Array?

Heaps are stored in **arrays** (not pointers) for speed.

Index Formula (Very Important)

For node at index `i`:

- Parent → `Math.floor((i - 1) / 2)`
- Left child → `2*i + 1`
- Right child → `2*i + 2`

📌 This makes heap operations fast.

---

- 🧑‍💻 5. Min Heap Implementation (JavaScript)
    
    ```jsx
    class MinHeap {
      constructor() {
        this.heap = [];
      }
    
      getParent(i) {
        return Math.floor((i - 1) / 2);
      }
    
      getLeftChild(i) {
        return 2 * i + 1;
      }
    
      getRightChild(i) {
        return 2 * i + 2;
      }
    
      insert(value) {
        this.heap.push(value);
        this.heapifyUp();
      }
    
      heapifyUp() {
        let index = this.heap.length - 1;
        while (
          index > 0 &&
          this.heap[this.getParent(index)] > this.heap[index]
        ) {
          [this.heap[index], this.heap[this.getParent(index)]] =
            [this.heap[this.getParent(index)], this.heap[index]];
          index = this.getParent(index);
        }
      }
    
      extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        if (this.heap.length === 0) return null;
    
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
      }
    
      heapifyDown(index) {
        let smallest = index;
        let left = this.getLeftChild(index);
        let right = this.getRightChild(index);
    
        if (left < this.heap.length &&
            this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }
    
        if (right < this.heap.length &&
            this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }
    
        if (smallest !== index) {
          [this.heap[index], this.heap[smallest]] =
            [this.heap[smallest], this.heap[index]];
          this.heapifyDown(smallest);
        }
      }
    }
    ```
    

## ⚙️ 6. Heap Operations & Complexity

### Time Complexity

- **Access Max/Min:** O(1) - Immediate (it's always at index 0).
- **Insert:** O(log n) - You only traverse the height of the tree.
- **Remove:** O(log n) - You only traverse the height of the tree.
- **Search:** O(n) - Heaps are NOT good for searching specific numbers.

| Operation | Time |
| --- | --- |
| Insert | **O(log n)** |
| Delete / Extract | **O(log n)** |
| Peek (min/max) | **O(1)** |
| Build Heap | **O(n)** |

---

### 🔥 7. Why Build Heap is O(n)? (Important Insight)

Although insertion is log n,

**heapify bottom-top reduces total work** → O(n)

(Asked frequently in interviews)


## 🎯 8. Applications of Heap (Very Important)

### ✅ Real-World

- CPU Scheduling
- Priority queues
- Load balancers
- Hospital emergency systems

### Real World Use Cases

1. **Priority Queues:** Job scheduling in operating systems (High priority processes run first).
2. **Pathfinding:** Dijkstra’s Algorithm (finding the shortest path on a map) uses a Min Heap to always explore the closest road next.
3. **Top K Elements:** "Find the top 10 players on the leaderboard" (Efficiently done with a Heap).

### ✅ DSA & Interviews

- K largest / smallest elements
- Heap Sort
- Median in data stream
- Merge K sorted arrays
- Dijkstra’s algorithm
- Top K frequent elements


## 🔁 9. Min Heap vs Max Heap

| Feature | Min Heap | Max Heap |
| --- | --- | --- |
| Root | Smallest | Largest |
| Used for | Minimum first | Maximum first |
| Example | Dijkstra | Heap sort |

### ⭐ **What is a Priority Queue?**

A **Priority Queue** is a special type of queue where:

> Elements are removed based on priority, not order of arrival.
> 

Normal Queue (FIFO):

- First In → First Out
- Like standing in a line

Priority Queue:

- **Highest priority element goes out first**
- Not based on time of arrival

⭐ Priority Queue is usually implemented using a **Heap**

- Max-Heap → highest value has highest priority
- Min-Heap → lowest value has highest priority

Time complexities:

- Insert → **O(log n)**
- Remove highest priority → **O(log n)**
- Peek (view top) → **O(1)**

⭐ One-line summary

> A Priority Queue removes elements based on priority, not position. Usually implemented using a heap.
> 

### ❌ **Limitations of Heap**

- **Searching is slow** → O(n)
- **Cannot get sorted order** directly
- **Deleting any element except root is slow**
- **Not good for finding a specific value**
- **Heap sort is not stable**

⭐ One-line summary

> Heap is great for max/min, but bad for searching and ordered operations.
> 

---

# 🔄 Heap Sort

4️⃣ Why Heap Sort?

Advantages ✅

- Time complexity always **O(n log n)**
- No extra memory needed (**O(1) space**)
- Reliable, not affected by input order

Disadvantages ❌

- Not stable
- Slightly slower than Quick Sort in practice
- Complex to understand for beginners

---

5️⃣ Core Concept: Heapify

What is heapify?

**Heapify** is the process of **restoring the heap property**.

➡️ It ensures:

- Parent node is bigger than its children (Max Heap)

📌 Heapify works on **one node & its subtree only**

---

6️⃣ Heap Sort Algorithm (High Level)

1. Convert array into a **Max Heap**
2. Swap first element (largest) with last element
3. Reduce heap size
4. Heapify the root
5. Repeat until sorted

---

- 7️⃣ Step 1: Heapify Function (Most Important Part)
    
    ```jsx
    function heapify(arr, n, i) {
      let largest = i;          // assume parent is largest
      let left = 2 * i + 1;
      let right = 2 * i + 2;
    
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
    
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
    
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest); // fix affected subtree
      }
    }
    ```
    
- 📌 Time Complexity: **O(log n)**
- 8️⃣ Step 2: Build a Max Heap
    
    ```jsx
    function buildMaxHeap(arr) {
      const n = arr.length;
    
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
      }
    }
    ```
    
- We start heapifying from the **last non-leaf node**.
- 📌 Why not start from 0?
- Leaf nodes already follow heap rules.
- 📌 Time Complexity: **O(n)**
- 9️⃣ Step 3: Heap Sort Function
    
    ```jsx
    function heapSort(arr) {
      const n = arr.length;
    
      // Step 1: Build max heap
      buildMaxHeap(arr);
    
      // Step 2: Extract elements one by one
      for (let i = n - 1; i > 0; i--) {
        // Move max element to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
    
        // Restore heap property
        heapify(arr, i, 0);
      }
    
      return arr;
    }
    ```
    

---

1️⃣2️⃣ Complexity Analysis

| Case | Time |
| --- | --- |
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n log n) |
| Space | O(1) |

1️⃣3️⃣ When to Use Heap Sort?

✅ When:

- Memory is limited
- Worst-case time guarantee is needed
- Implementing priority queue logic

❌ Avoid when:

- Stability required
- Simplicity preferred (use Merge / Quick)

---

1️⃣4️⃣ Key Takeaways (Revision)

- Heap Sort uses **Max Heap**
- Heapify fixes heap property
- Always **O(n log n)**
- In-place sorting
- Not stable

### ✅ Final One-Line Summary

> Heap Sort sorts an array by building a max-heap and repeatedly placing the largest element at the end.
> 

---
/**
 * ======================================================
 * HEAP PROBLEMS – JavaScript
 * ======================================================
 *
 * Contents:
 * 1. Min Heap Implementation
 * 2. Kth Largest Element in an Array
 * 3. Concept Note: Kth Smallest Element
 * 4. Delete a Given Value from Min Heap
 * 5. Heap Sort (Descending Order – Objects)
 *
 * ======================================================
 */

/* ======================================================
   MIN HEAP IMPLEMENTATION
====================================================== */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    /* ---------- Helper Methods ---------- */

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    /* ---------- Insert ---------- */

    insert(value) {
        this.heap.push(value);
        this.#heapifyUp();
    }

    #heapifyUp() {
        let index = this.heap.length - 1;

        while (
            index > 0 &&
            this.heap[index] < this.heap[this.getParentIndex(index)]
        ) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    /* ---------- Extract Minimum ---------- */

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.#heapifyDown(0);

        return minValue;
    }

    #heapifyDown(index) {
        let smallest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.#heapifyDown(smallest);
        }
    }

    /* ---------- Utilities ---------- */

    size() {
        return this.heap.length;
    }

    /* ======================================================
       DELETE A VALUE FROM MIN HEAP
    ====================================================== */

    deleteValue(value) {
        const index = this.heap.indexOf(value);
        if (index === -1) return false;

        this.deleteAt(index);
        return true;
    }

    deleteAt(index) {
        if (index < 0 || index >= this.heap.length) return;

        if (index === this.heap.length - 1) {
            this.heap.pop();
            return;
        }

        this.heap[index] = this.heap.pop();
        const parentIndex = this.getParentIndex(index);

        if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            this.#heapifyUpFrom(index);
        } else {
            this.#heapifyDown(index);
        }
    }

    #heapifyUpFrom(index) {
        while (
            index > 0 &&
            this.heap[index] < this.heap[this.getParentIndex(index)]
        ) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }
}

/* ======================================================
   PROBLEM 1: KTH LARGEST ELEMENT IN AN ARRAY
====================================================== */

/**
 * Time Complexity: O(n log k)
 * Space Complexity: O(k)
 */
function findKthLargest(arr, k) {
    const minHeap = new MinHeap();

    for (let num of arr) {
        minHeap.insert(num);
        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }

    return minHeap.heap[0];
}

/* =======================
   Example Usage
======================= */

const numbers = [3, 2, 1, 5, 6, 4];
console.log(findKthLargest(numbers, 2)); // 5

/* ======================================================
   IMPORTANT NOTE (CONCEPT ONLY)
====================================================== */

/**
 * Kth Largest  → Min Heap (size K)
 * Kth Smallest → Max Heap (size K)
 */

/* ======================================================
   PROBLEM 2: HEAP SORT (DESCENDING ORDER)
   Sorting objects based on "marks"
====================================================== */

/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */

const students = [
    { name: "Akhil", marks: 70 },
    { name: "Rahul", marks: 85 },
    { name: "Sneha", marks: 60 },
    { name: "Anu", marks: 90 }
];

function heapSort(arr) {
    const n = arr.length;

    buildMinHeap(arr, n);

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

function buildMinHeap(arr, n) {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

function heapify(arr, n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left].marks < arr[smallest].marks) {
        smallest = left;
    }

    if (right < n && arr[right].marks < arr[smallest].marks) {
        smallest = right;
    }

    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, n, smallest);
    }
}

/* =======================
   Example Usage
======================= */

console.log(heapSort(students));

/**
 * ======================================================
 * HEAP PROBLEMS – JavaScript
 * ======================================================
 *
 * Problem 1:
 * Find the Kth largest element in an array.
 *
 * Approach:
 * - Maintain a Min Heap of size K
 * - Insert elements one by one
 * - If heap size exceeds K, remove the minimum element
 * - The root of the Min Heap will be the Kth largest element
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

        if (
            left < this.heap.length &&
            this.heap[left] < this.heap[smallest]
        ) {
            smallest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right] < this.heap[smallest]
        ) {
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

        // If deleting the last element
        if (index === this.heap.length - 1) {
            this.heap.pop();
            return;
        }

        // Step 1: Replace with last element
        this.heap[index] = this.heap.pop();

        // Step 2: Restore heap property
        const parentIndex = this.getParentIndex(index);

        if (
            index > 0 &&
            this.heap[index] < this.heap[parentIndex]
        ) {
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
 * Find the Kth largest element using Min Heap
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function findKthLargest(arr, k) {
    const minHeap = new MinHeap();

    for (let num of arr) {
        minHeap.insert(num);

        // Keep heap size limited to K
        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }

    // Root of Min Heap is the Kth largest element
    return minHeap.heap[0];
}

/* ======================================================
   Example Usage
====================================================== */

const arr = [3, 2, 1, 5, 6, 4];
const k = 2;

console.log(findKthLargest(arr, k)); // Output: 5

/* ======================================================
   IMPORTANT NOTE (CONCEPT ONLY)
====================================================== */

/**
 * ➤ To find the Kth SMALLEST element:
 *    - Use a MAX HEAP of size K
 *    - Remove the largest element when size exceeds K
 *    - The root of the Max Heap gives the Kth smallest element
 *
 * Reason:
 * - Min Heap keeps the smallest element on top
 * - Max Heap keeps the largest element on top
 */

/* ======================================================
   PROBLEM 2: DELETE A GIVEN VALUE FROM MIN HEAP
====================================================== */

/**
 * Task:
 * Delete a specific value from the Min Heap.
 *
 * Approach:
 * 1. Find the index of the value in the heap array.
 * 2. Replace it with the last element.
 * 3. Remove the last element.
 * 4. Restore heap property:
 *    - Heapify UP if value is smaller than parent
 *    - Heapify DOWN otherwise
 *
 * Time Complexity:
 * - Search: O(n)
 * - Heapify: O(log n)
 *
 * Space Complexity:
 * - O(1)
 *
 * Example:
 * const minHeap = new MinHeap();
 * minHeap.deleteValue(3);
 */

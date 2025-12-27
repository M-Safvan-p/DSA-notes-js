/**
 * ======================================================
 * MAX HEAP IMPLEMENTATION – JavaScript
 * ======================================================
 *
 * IMPORTANT NOTE:
 * This implementation is almost IDENTICAL to Min Heap.
 * The ONLY difference is:
 *
 * 👉 Min Heap  → Parent value < Children
 * 👉 Max Heap  → Parent value > Children
 *
 * Here, we change ONLY the comparison logic.
 *
 * Max Heap Properties:
 * - Complete Binary Tree
 * - Parent node is ALWAYS greater than its children
 * - Maximum element is always at the root (index 0)
 *
 * Time Complexity:
 * - Insert: O(log n)
 * - Extract Max: O(log n)
 *
 * ======================================================
 */

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    /* =======================
       HELPER METHODS
    ======================= */

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

    /* =======================
       INSERT
    ======================= */

    insert(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    _heapifyUp() {
        let index = this.heap.length - 1;

        while (
            index > 0 &&
            this.heap[index] > this.heap[this.getParentIndex(index)]
        ) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    /* =======================
       EXTRACT MAX
    ======================= */

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);

        return maxValue;
    }

    _heapifyDown(index) {
        let largest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if (
            left < this.heap.length &&
            this.heap[left] > this.heap[largest]
        ) {
            largest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right] > this.heap[largest]
        ) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this._heapifyDown(largest);
        }
    }
}

/* =======================
   Example Usage
======================= */

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(15);

console.log(maxHeap.extractMax()); // 20
console.log(maxHeap.extractMax()); // 15
console.log(maxHeap.heap);

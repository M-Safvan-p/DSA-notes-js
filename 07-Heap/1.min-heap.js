/**
 * ======================================================
 * MIN HEAP IMPLEMENTATION – JavaScript
 * ======================================================
 *
 * Min Heap Properties:
 * - Complete Binary Tree
 * - Parent node is ALWAYS smaller than its children
 * - Minimum element is always at the root (index 0)
 *
 * Operations included:
 * - Insert
 * - Extract Minimum
 * - Heapify Up
 * - Heapify Down
 *
 * Time Complexity:
 * - Insert: O(log n)
 * - Extract Min: O(log n)
 *
 * ======================================================
 */

class MinHeap {
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

    /* =======================
       EXTRACT MIN
    ======================= */

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
}

/* =======================
   Example Usage
======================= */

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(2);

console.log(minHeap.extractMin()); // 2
console.log(minHeap.extractMin()); // 5
console.log(minHeap.heap);

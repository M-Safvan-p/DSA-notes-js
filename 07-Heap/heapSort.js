/**
 * ======================================================
 * HEAP SORT – JavaScript
 * ======================================================
 *
 * Heap Sort is a comparison-based sorting algorithm.
 *
 * Time Complexity:
 * - Best Case: O(n log n)
 * - Average Case: O(n log n)
 * - Worst Case: O(n log n)
 *
 * Space Complexity:
 * - O(1) (In-place sorting)
 *
 * ======================================================
 */

/* ======================================================
   HEAP SORT – ASCENDING ORDER
   (Using MAX HEAP)
====================================================== */

function heapSortAscending(arr) {
    const n = arr.length;

    // Step 1: Build Max Heap
    buildMaxHeap(arr, n);

    // Step 2: Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        // Move max to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyMax(arr, i, 0);
    }

    return arr;
}

function buildMaxHeap(arr, n) {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyMax(arr, n, i);
    }
}

function heapifyMax(arr, n, i) {
    let largest = i;
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
        heapifyMax(arr, n, largest);
    }
}

/* ======================================================
   HEAP SORT – DESCENDING ORDER
   (Using MIN HEAP)
====================================================== */

function heapSortDescending(arr) {
    const n = arr.length;

    // Step 1: Build Min Heap
    buildMinHeap(arr, n);

    // Step 2: Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        // Move min to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyMin(arr, i, 0);
    }

    return arr;
}

function buildMinHeap(arr, n) {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyMin(arr, n, i);
    }
}

function heapifyMin(arr, n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }

    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapifyMin(arr, n, smallest);
    }
}

/* =======================
   Example Usage
======================= */

// console.log(heapSortAscending([5, 3, 8, 4, 1]));   // [1, 3, 4, 5, 8]
// console.log(heapSortDescending([5, 3, 8, 4, 1]));  // [8, 5, 4, 3, 1]

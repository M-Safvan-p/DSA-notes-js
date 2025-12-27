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
  
  swap(a,b){
      [this.heap[a],this.heap[b]] = [this.heap[b],this.heap[a]];
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[this.getParent(index)] > this.heap[index]
    ) {
      this.swap(index,this.getParent(index))
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
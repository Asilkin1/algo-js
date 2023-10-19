export class Heap<T> {
    private heap: T[] = [];
    private compare: (a: T, b: T) => boolean;
  
    constructor(minHeap = true) {
      this.compare = minHeap
        ? (a, b) => a < b
        : (a, b) => a > b;
    }
  
    private parentIndex(index: number): number {
      return Math.floor((index - 1) / 2);
    }
  
    private leftChildIndex(index: number): number {
      return 2 * index + 1;
    }
  
    private rightChildIndex(index: number): number {
      return 2 * index + 2;
    }
  
    private swap(index1: number, index2: number): void {
      const temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
    }
  
    insert(value: T): void {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    private heapifyUp(): void {
      let currentIndex = this.heap.length - 1;
  
      while (
        currentIndex > 0 &&
        this.compare(this.heap[currentIndex], this.heap[this.parentIndex(currentIndex)])
      ) {
        this.swap(currentIndex, this.parentIndex(currentIndex));
        currentIndex = this.parentIndex(currentIndex);
      }
    }
  
    extractTop(): T | null {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop() || null;
      }
  
      const topValue = this.heap[0];
      this.heap[0] = this.heap.pop() as T;
      this.heapifyDown();
      return topValue;
    }
  
    private heapifyDown(): void {
      let currentIndex = 0;
      let nextIndex = 0;
  
      while (this.leftChildIndex(currentIndex) < this.heap.length) {
        nextIndex = this.leftChildIndex(currentIndex);
  
        if (
          nextIndex + 1 < this.heap.length &&
          this.compare(this.heap[nextIndex + 1], this.heap[nextIndex])
        ) {
          nextIndex++;
        }
  
        if (this.compare(this.heap[currentIndex], this.heap[nextIndex])) {
          break;
        }
  
        this.swap(currentIndex, nextIndex);
        currentIndex = nextIndex;
      }
    }
  
    size(): number {
      return this.heap.length;
    }
  
    isEmpty(): boolean {
      return this.heap.length === 0;
    }
  }
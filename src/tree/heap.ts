
/**
    * Heap class.
   */
export class Heap<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => boolean;

  /**
  * Create a new Heap instance.
  * @param { boolean} minHeap - heap size is restricted or not.
 */
  constructor(minHeap = true) {
    this.compare = minHeap
      ? (a, b) => a < b
      : (a, b) => a > b;
  }

  /**
  * Parent index.
  * @param {number} index - parent index.
  * @returns { number } - current parent index.
 */
  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  /**
  * Left child index.
  * @param { number } index - left child index.
  * @returns { number } - index of the left child node.
 */
  private leftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  /**
   * RIght child index.
   * @param { number } index - right child index.
   * @returns { number } - index of the right child node.
  */
  private rightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  /**
   * Swap nodes indexes.
   * @param { number } index1 - first node index.
   * @param { number } index2 - second node index.
   * @returns { void } - none.
  */
  private swap(index1: number, index2: number): void {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }


  /**
    * Insert data into the tree.
    * @param { T } value - data to insert into the tree.
    * @returns { void } - none.
   */
  insert(value: T): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  /**
    * Auto balance.
    * @returns { void } - none.
   */
  private heapifyUp(): void {
    let currentIndex = this.heap.length - 1;
    // leftChildIndex() might needed to be right here
    while (
      currentIndex > 0 &&
      this.compare(this.heap[currentIndex], this.heap[this.parentIndex(currentIndex)])
    ) {
      this.swap(currentIndex, this.parentIndex(currentIndex));
      currentIndex = this.parentIndex(currentIndex);
    }
  }

  /**
    * Extract node at the top of the tree.
    * @returns { T | null } - none.
   */
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

  /**
    * What it does?
    * @returns { void } - none.
   */
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

  /**
    * Get the size of the tree.
    * @returns { number } - none.
   */
  size(): number {
    return this.heap.length;
  }

  /**
    * Check if the tree is empty.
    * @returns { boolean } - none.
   */
  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}
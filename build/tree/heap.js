"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = void 0;
class Heap {
    constructor(minHeap = true) {
        this.heap = [];
        this.compare = minHeap
            ? (a, b) => a < b
            : (a, b) => a > b;
    }
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    leftChildIndex(index) {
        return 2 * index + 1;
    }
    rightChildIndex(index) {
        return 2 * index + 2;
    }
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0 &&
            this.compare(this.heap[currentIndex], this.heap[this.parentIndex(currentIndex)])) {
            this.swap(currentIndex, this.parentIndex(currentIndex));
            currentIndex = this.parentIndex(currentIndex);
        }
    }
    extractTop() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop() || null;
        }
        const topValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return topValue;
    }
    heapifyDown() {
        let currentIndex = 0;
        let nextIndex = 0;
        while (this.leftChildIndex(currentIndex) < this.heap.length) {
            nextIndex = this.leftChildIndex(currentIndex);
            if (nextIndex + 1 < this.heap.length &&
                this.compare(this.heap[nextIndex + 1], this.heap[nextIndex])) {
                nextIndex++;
            }
            if (this.compare(this.heap[currentIndex], this.heap[nextIndex])) {
                break;
            }
            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.heap.length === 0;
    }
}
exports.Heap = Heap;

"use strict";
// priotiry queue
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
class PriorityQueue {
    constructor() {
        this.elements = [];
    }
    // Enqueue an item with a priority
    enqueue(item, priority) {
        this.elements.push({ item, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }
    // Dequeue the item with the highest priority
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.elements.shift().item;
    }
    // Get the item with the highest priority without removing it
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.elements[0].item;
    }
    // Check if the priority queue is empty
    isEmpty() {
        return this.elements.length === 0;
    }
    // Get the size of the priority queue
    size() {
        return this.elements.length;
    }
}
exports.PriorityQueue = PriorityQueue;

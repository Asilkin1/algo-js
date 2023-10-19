'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
/**
 * array-based
 * Queue(FIFO)
 * @size = limit queue size(find an optimal size)
 * @data = data to be inserted in the queue or empty
*/
class Queue {
    constructor(size, ...data) {
        this.data = [...data];
        this.size = size;
    }
    enqueue(element) {
        var _a, _b;
        // queue might be full if of a fixed size
        if (this.size === ((_a = this.data) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        // insert last element
        (_b = this.data) === null || _b === void 0 ? void 0 : _b.push(element);
    }
    ;
    dequeue() {
        var _a, _b;
        // queue is empty
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return;
        }
        // remove first element
        (_b = this.data) === null || _b === void 0 ? void 0 : _b.shift();
    }
    ;
    getSize() {
        return this.size;
    }
}
exports.Queue = Queue;

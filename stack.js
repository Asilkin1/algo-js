"use strict";
/*
    Stack (LIFO)
    Should be O(1) time for push and pop
*/
class Stack {
    constructor(...data) {
        this.data = [...data];
    }
    pop() {
        var _a, _b;
        if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.length) === 0)
            return;
        (_b = this.data) === null || _b === void 0 ? void 0 : _b.pop();
    }
    push(element) {
        var _a;
        (_a = this.data) === null || _a === void 0 ? void 0 : _a.push(element);
    }
    getStack() {
        return this.data;
    }
    getStackSize() {
        var _a;
        return (_a = this.data) === null || _a === void 0 ? void 0 : _a.length;
    }
}
module.exports = Stack;

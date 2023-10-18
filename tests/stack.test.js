// stack data structure
const {Stack} = require('../src/stack');

const stack = new Stack();

test('create empty stack', () => {
    expect(stack.getStackSize()).toBe(0);
});

test('add only element to the stack', () => {
    stack.push(1);
    expect(stack.getStackSize()).toBe(1);
});

test('remove last element from the stack', () => {
    stack.pop();
    expect(stack.getStackSize()).toBe(0);
});
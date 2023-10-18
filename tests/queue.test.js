const {Queue} = require('../build/queue');

test('create empty queue', () => {
    const queue = new Queue(0);
    expect(queue.getSize()).toBe(0);
});

test('create queue of a fixed size with no data', () => {
    const queue = new Queue(10,[]);
    expect(queue.getSize()).toBe(10);
});

test('create queue of a fixed size with data', () => {
    const queue = new Queue(10,[1,2,3,4,5,6,7,8,9,10]);
    expect(queue.getSize()).toBe(10);
});
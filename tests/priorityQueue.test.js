const { PriorityQueue } = require('../build/queue/priorityQueue');

describe('PriorityQueue', () => {
  let priorityQueue;

  beforeEach(() => {
    priorityQueue = new PriorityQueue();
  });

  it('should enqueue items with priority', () => {
    priorityQueue.enqueue('Task 1', 2);
    priorityQueue.enqueue('Task 2', 1);
    priorityQueue.enqueue('Task 3', 3);

    expect(priorityQueue.size()).toBe(3);
  });

  it('should dequeue items based on priority', () => {
    priorityQueue.enqueue('Task 1', 2);
    priorityQueue.enqueue('Task 2', 1);
    priorityQueue.enqueue('Task 3', 3);

    expect(priorityQueue.dequeue()).toBe('Task 2'); // Highest priority (1)
    expect(priorityQueue.dequeue()).toBe('Task 1'); // Second highest priority (2)
    expect(priorityQueue.dequeue()).toBe('Task 3'); // Highest priority (3)
    expect(priorityQueue.isEmpty()).toBe(true);
  });

  it('should peek at the item with the highest priority', () => {
    priorityQueue.enqueue('Task 1', 2);
    priorityQueue.enqueue('Task 2', 1);
    priorityQueue.enqueue('Task 3', 3);

    expect(priorityQueue.peek()).toBe('Task 2'); // Highest priority (1)
  });

  it('should return undefined when dequeuing an empty queue', () => {
    expect(priorityQueue.dequeue()).toBeUndefined();
  });

  it('should return undefined when peeking at an empty queue', () => {
    expect(priorityQueue.peek()).toBeUndefined();
  });

  it('should check if the queue is empty', () => {
    expect(priorityQueue.isEmpty()).toBe(true);

    priorityQueue.enqueue('Task 1', 2);
    expect(priorityQueue.isEmpty()).toBe(false);
  });

  it('should return the size of the queue', () => {
    expect(priorityQueue.size()).toBe(0);

    priorityQueue.enqueue('Task 1', 2);
    priorityQueue.enqueue('Task 2', 1);
    priorityQueue.enqueue('Task 3', 3);

    expect(priorityQueue.size()).toBe(3);
  });
});

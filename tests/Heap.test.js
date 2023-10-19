const {Heap} = require('../build/tree/heap'); // Import the Heap class

describe('Heap', () => {
  // Test for MinHeap
  describe('MinHeap', () => {
    let minHeap;

    beforeEach(() => {
      minHeap = new Heap(true);
    });

    it('should insert values and extract the minimum value', () => {
      minHeap.insert(4);
      minHeap.insert(9);
      minHeap.insert(2);

      expect(minHeap.extractTop()).toBe(2);
      expect(minHeap.extractTop()).toBe(4);
      expect(minHeap.extractTop()).toBe(9);
      expect(minHeap.extractTop()).toBeNull();
    });

    it('should return the size of the MinHeap', () => {
      minHeap.insert(4);
      minHeap.insert(9);
      minHeap.insert(2);

      expect(minHeap.size()).toBe(3);
    });

    it('should return true if the MinHeap is empty', () => {
      expect(minHeap.isEmpty()).toBe(true);
      minHeap.insert(4);
      expect(minHeap.isEmpty()).toBe(false);
    });
  });

  // Test for MaxHeap
  describe('MaxHeap', () => {
    let maxHeap;

    beforeEach(() => {
      maxHeap = new Heap(false);
    });

    it('should insert values and extract the maximum value', () => {
      maxHeap.insert(4);
      maxHeap.insert(9);
      maxHeap.insert(2);

      expect(maxHeap.extractTop()).toBe(9);
      expect(maxHeap.extractTop()).toBe(4);
      expect(maxHeap.extractTop()).toBe(2);
      expect(maxHeap.extractTop()).toBeNull();
    });

    it('should return the size of the MaxHeap', () => {
      maxHeap.insert(4);
      maxHeap.insert(9);
      maxHeap.insert(2);

      expect(maxHeap.size()).toBe(3);
    });

    it('should return true if the MaxHeap is empty', () => {
      expect(maxHeap.isEmpty()).toBe(true);
      maxHeap.insert(4);
      expect(maxHeap.isEmpty()).toBe(false);
    });
  });
});

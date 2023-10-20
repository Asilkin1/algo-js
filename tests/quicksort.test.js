const { quickSort } = require('../build/sorting_algorithms/quickSort'); // Adjust the path as needed

describe('Quick Sort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const unsortedArray = [64, 25, 12, 22, 11];
    const sortedArray = quickSort(unsortedArray);
    expect(sortedArray).toEqual([11, 12, 22, 25, 64]);
  });

  it('should handle an empty array', () => {
    const emptyArray = [];
    const sortedArray = quickSort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    const singleElementArray = [42];
    const sortedArray = quickSort(singleElementArray);
    expect(sortedArray).toEqual([42]);
  });

  it('should handle an already sorted array', () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const sorted = quickSort(sortedArray);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle a large array with random values', () => {
    const largeArray = [];
    for (let i = 1000; i >= 1; i--) {
      largeArray.push(i);
    }
    const sortedArray = quickSort(largeArray);
    expect(sortedArray).toEqual([...largeArray].sort((a, b) => a - b));
  });
});

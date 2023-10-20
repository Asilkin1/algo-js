'use strict'
const {WeakAVLTree} = require('../build/tree/WeakAVLTree');

describe('WeakAVLTree', () => {
  it('should insert and balance nodes correctly', () => {
    const avlTree = new WeakAVLTree();

    avlTree.insert(3);
    expect(avlTree.root.data).toBe(3);

    avlTree.insert(2);
    expect(avlTree.root.data).toBe(3);
    expect(avlTree.root.left.data).toBe(2);

    avlTree.insert(4);
    expect(avlTree.root.data).toBe(3);
    expect(avlTree.root.left.data).toBe(2);
    expect(avlTree.root.right.data).toBe(4);

    avlTree.insert(5);
    expect(avlTree.root.data).toBe(3);
    expect(avlTree.root.left.data).toBe(2);
    expect(avlTree.root.right.data).toBe(4);
    expect(avlTree.root.right.right.data).toBe(5);

    avlTree.insert(1);
    expect(avlTree.root.data).toBe(3);
    expect(avlTree.root.left.data).toBe(2);
    expect(avlTree.root.left.left.data).toBe(1);
    expect(avlTree.root.right.data).toBe(4);
    expect(avlTree.root.right.right.data).toBe(5);
  });

  it('should handle an empty tree', () => {
    const avlTree = new WeakAVLTree();
    expect(avlTree.root).toBeNull();
  });

  it('should handle inserting duplicate values', () => {
    const avlTree = new WeakAVLTree();

    avlTree.insert(3);
    avlTree.insert(3);

    expect(avlTree.root.data).toBe(3);
    expect(avlTree.root.weight).toBe(1); // Only one instance of the value is stored
  });

  it('should handle various insertions and balances', () => {
    const avlTree = new WeakAVLTree();

    avlTree.insert(3);
    avlTree.insert(2);
    avlTree.insert(1);
    avlTree.insert(4);
    avlTree.insert(5);

    expect(avlTree.root.data).toBe(3);
    expect(avlTree.root.left.data).toBe(2);
    expect(avlTree.root.left.left.data).toBe(1);
    expect(avlTree.root.right.data).toBe(4);
    expect(avlTree.root.right.right.data).toBe(5);

    avlTree.insert(6);
    avlTree.insert(7);

    expect(avlTree.root.data).toBe(4);
    expect(avlTree.root.left.data).toBe(2);
    expect(avlTree.root.left.left.data).toBe(1);
    expect(avlTree.root.right.data).toBe(6);
    expect(avlTree.root.right.left.data).toBe(3);
    expect(avlTree.root.right.right.data).toBe(7);
    expect(avlTree.root.right.right.right.data).toBe(5);
  });
});
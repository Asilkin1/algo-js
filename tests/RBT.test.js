'use strict'                                         
const { RedBlackTree, RBTNode, Color } = require('../build/RBT') // Import the Red-Black Tree code

describe('Red-Black Tree', () => {
  let rbTree = new RedBlackTree();

  beforeEach(() => {
    rbTree = new RedBlackTree();
  });

  it('should insert a single node', () => {
    rbTree.insert(10);
    const root = rbTree.root;

    expect(root.data).toBe(10);
    expect(root.color).toBe(Color.BLACK);
  });

  it('should insert nodes and maintain Red-Black Tree properties', () => {
    rbTree.insert(10);
    rbTree.insert(5);
    rbTree.insert(15);
    rbTree.insert(3);
    rbTree.insert(7);

    const root = rbTree.root;
    const leftChild = root.left;
    const rightChild = root.right;

    // Check root node properties
    expect(root.data).toBe(10);
    expect(root.color).toBe(Color.BLACK);

    // Check left child properties
    expect(leftChild.data).toBe(5);
    expect(leftChild.color).toBe(Color.BLACK);

    // Check right child properties
    expect(rightChild.data).toBe(15);
    expect(rightChild.color).toBe(Color.RED);

    // Check grandchild properties
    const leftGrandchild = leftChild.left;
    const rightGrandchild = leftChild.right;

    expect(leftGrandchild.data).toBe(3);
    expect(leftGrandchild.color).toBe(Color.RED);

    expect(rightGrandchild.data).toBe(7);
    expect(rightGrandchild.color).toBe(Color.RED);
  });
});
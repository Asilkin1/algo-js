// testing compiled .ts ---> .js
const {AVLTreeNode, AVLTree} = require('../build/AVLTree');

describe('AVLTree and AVLTreeNode', () => {
    let avlTree;
  
    beforeEach(() => {
      avlTree = new AVLTree();
    });
  
    describe('AVLTreeNode', () => {
      it('should create a new AVLTreeNode with the given data', () => {
        const node = new AVLTreeNode(42);
        expect(node.data).toBe(42);
        expect(node.left).toBe(null);
        expect(node.right).toBe(null);
        expect(node.height).toBe(1);
      });
    });
  
    describe('AVLTree', () => {
      it('should create an empty AVLTree', () => {
        expect(avlTree.root).toBe(null);
      });
  
      it('should insert a node into the AVLTree', () => {
        avlTree.insert(50);
        expect(avlTree.root.data).toBe(50);
        expect(avlTree.root.height).toBe(1);
      });
  
      it('should maintain tree balance upon insertion', () => {
        avlTree.insert(50);
        avlTree.insert(30);
        avlTree.insert(70);
  
        expect(avlTree.root.data).toBe(50);
        expect(avlTree.root.height).toBe(2);
        expect(avlTree.root.left.data).toBe(30);
        expect(avlTree.root.right.data).toBe(70);
      });
  
      it('should rotate right upon imbalance', () => {
        avlTree.insert(50);
        avlTree.insert(30);
        avlTree.insert(20);
  
        expect(avlTree.root.data).toBe(30);
        expect(avlTree.root.left.data).toBe(20);
        expect(avlTree.root.right.data).toBe(50);
      });
  
      it('should rotate left upon imbalance', () => {
        avlTree.insert(50);
        avlTree.insert(70);
        avlTree.insert(80);
  
        expect(avlTree.root.data).toBe(70);
        expect(avlTree.root.left.data).toBe(50);
        expect(avlTree.root.right.data).toBe(80);
      });
  
      it('should handle rotations on a more complex tree', () => {
        avlTree.insert(50);
        avlTree.insert(30);
        avlTree.insert(70);
        avlTree.insert(20);
        avlTree.insert(40);
  
        expect(avlTree.root.data).toBe(30);
        expect(avlTree.root.left.data).toBe(20);
        expect(avlTree.root.right.data).toBe(50);
        expect(avlTree.root.left.right.data).toBe(40);
        expect(avlTree.root.height).toBe(3);
      });
    });
  });
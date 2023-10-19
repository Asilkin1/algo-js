'use strict'
const {SplayTree, SplayTreeNode} = require('../build/SplayTree')

describe('SplayTree and SplayTreeNode', () => {
    let splayTree;
  
    beforeEach(() => {
      splayTree = new SplayTree();
    });
  
    describe('SplayTreeNode', () => {
      it('should create a new SplayTreeNode with the given data', () => {
        const node = new SplayTreeNode(42);
        expect(node.data).toBe(42);
        expect(node.left).toBe(null);
        expect(node.right).toBe(null);
      });
    });
  
    describe('SplayTree', () => {
      it('should create an empty SplayTree', () => {
        expect(splayTree.root).toBe(null);
      });
  
      it('should insert a node into the SplayTree', () => {
        splayTree.insert(50);
        expect(splayTree.root.data).toBe(50);
      });
  
      it('should search for a value in the SplayTree', () => {
        splayTree.insert(50);
        splayTree.insert(30);
        splayTree.insert(70);
  
        expect(splayTree.search(50)).toBe(true);
        expect(splayTree.search(30)).toBe(true);
        expect(splayTree.search(70)).toBe(true);
        expect(splayTree.search(80)).toBe(false);
      });
  
      it('should delete a value from the SplayTree', () => {
        splayTree.insert(50);
        splayTree.insert(30);
        splayTree.insert(70);
  
        splayTree.delete(30);
        expect(splayTree.search(30)).toBe(false);
  
        splayTree.delete(50);
        expect(splayTree.search(50)).toBe(false);
        expect(splayTree.root.data).toBe(70);
      });
  
      it('should handle rotations upon insertion', () => {
        splayTree.insert(50);
        splayTree.insert(30);
        splayTree.insert(70);
  
        expect(splayTree.root.data).toBe(30);
        expect(splayTree.root.left.data).toBe(50);
        expect(splayTree.root.right.data).toBe(70);
      });
  
      it('should handle rotations upon deletion', () => {
        splayTree.insert(50);
        splayTree.insert(30);
        splayTree.insert(70);
  
        splayTree.delete(30);
        expect(splayTree.root.data).toBe(50);
        expect(splayTree.root.right.data).toBe(70);
      });
    });
  });

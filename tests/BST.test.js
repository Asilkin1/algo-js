'use strict'
const {BSTTreeNode, BST} = require('../build/BST')

describe('BST and BSTTreeNode', () => {
    let bst;
  
    beforeEach(() => {
      bst = new BST();
    });
  
    describe('BSTTreeNode', () => {
      it('should create a new BSTTreeNode with the given data', () => {
        const node = new BSTTreeNode(42);
        expect(node.data).toBe(42);
        expect(node.left).toBe(null);
        expect(node.right).toBe(null);
      });
    });
  
    describe('BST', () => {
      it('should create an empty BST', () => {
        expect(bst.root).toBe(null);
      });
  
      it('should insert a node into the BST', () => {
        bst.insert(50);
        expect(bst.root.data).toBe(50);
      });
  
      it('should not insert duplicate values', () => {
        bst.insert(50);
        bst.insert(50);
        expect(bst.root.data).toBe(50);
      });
  
      it('should insert and find values in the BST', () => {
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
  
        expect(bst.find(50)).toBe(50);
        expect(bst.find(30)).toBe(30);
        expect(bst.find(70)).toBe(70);
      });
  
      it('should return false for values not found in the BST', () => {
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
  
        expect(bst.find(80)).toBe(false);
        expect(bst.find(20)).toBe(false);
      });
  
      it('should remove nodes from the BST', () => {
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
  
        bst.remove(30);
        expect(bst.find(30)).toBe(false);
  
        bst.remove(50);
        expect(bst.find(50)).toBe(false);
        expect(bst.root.data).toBe(70);
  
        bst.remove(70);
        expect(bst.find(70)).toBe(false);
        expect(bst.root).toBe(null);
      });
  
      it('should handle removing a node with two children', () => {
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
        bst.insert(60);
        bst.insert(80);
  
        bst.remove(70);
        expect(bst.find(70)).toBe(false);
        expect(bst.root.data).toBe(50);
        expect(bst.root.right.data).toBe(80);
      });
  
      it('should find the minimum value in a node', () => {
        const node = new BSTTreeNode(50);
        node.left = new BSTTreeNode(30);
        node.left.left = new BSTTreeNode(20);
        node.left.right = new BSTTreeNode(40);
  
        expect(bst.findMinValue(node)).toBe(20);
      });
    });
  });
// testing compiled .ts ---> .js
const {ABSTTreeNode, ABST} = require('../build/ABST');

describe('ABST and ABSTTreeNode', () => {
    let abst;
  
    beforeEach(() => {
      abst = new ABST();
    });
  
    describe('ABSTTreeNode', () => {
      it('should create a new ABSTTreeNode with the given data', () => {
        const node = new ABSTTreeNode(42);
        expect(node.data).toBe(42);
        expect(node.left).toBe(null);
        expect(node.right).toBe(null);
        expect(node.size).toBe(1);
      });
    });
  
    describe('ABST', () => {
      it('should create an empty ABST', () => {
        expect(abst.root).toBe(null);
      });
  
      it('should insert a node into the ABST', () => {
        abst.insert(50);
        expect(abst.root.data).toBe(50);
        expect(abst.root.size).toBe(1);
      });
  
      it('should not insert duplicate values', () => {
        abst.insert(50);
        abst.insert(50);
        expect(abst.root.data).toBe(50);
        expect(abst.root.size).toBe(1);
      });
  
      it('should insert and find values in the ABST', () => {
        abst.insert(50);
        abst.insert(30);
        abst.insert(70);
  
        expect(abst.findSmallestSize(1)).toBe(30);
        expect(abst.findSmallestSize(2)).toBe(50);
        expect(abst.findSmallestSize(3)).toBe(70);
      });
  
      it('should return null for out-of-range size value', () => {
        abst.insert(50);
        abst.insert(30);
        abst.insert(70);
  
        expect(abst.findSmallestSize(0)).toBe(null);
        expect(abst.findSmallestSize(4)).toBe(null);
      });
  
      it('should return null for size on an empty tree', () => {
        expect(abst.findSmallestSize(1)).toBe(null);
      });
    });
  });
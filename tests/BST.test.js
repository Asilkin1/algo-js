'use strict'
const {BSTTreeNode, BST} = require('../build/BST')

let btree;

beforeAll(() => {
    // create empty tree
    btree = new BST();
});

afterAll(() => {
    btree = null;
});

test('create a tree with one node', () => {
    btree.insert(5);
    expect(btree.find(5)).toBe(5);
});

test('find existing node', () => {
    btree.insert(10);
    expect(btree.find(10)).toBe(10);
});

test('cannot find existing node', () => {
    btree.insert(10);
    btree.remove(10);
    expect(btree.find(10)).toBe(false);
});

const bst = new BST();

bst.insert(10);
bst.insert(1);
bst.insert(20);
bst.insert(16);
let find = bst.find(10)
bst.remove(10);
find = bst.find(10)

console.log('Found: ',find);
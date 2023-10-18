"use strict";
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        const node = new TreeNode(data);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let c = this.root;
        while (true) {
            // duplicate values not accepted
            if (data === c.data)
                return;
            // data less than root
            if (data < c.data) {
                if (!c.left) {
                    c.left = node;
                    return this;
                }
                c = c.left;
            }
            // data more than root
            else {
                if (!c.right) {
                    c.right = node;
                    return this;
                }
                c = c.right;
            }
        }
    } // end of insert
    find(data) {
        if (!this.root)
            return false;
        let c;
        if (this.root)
            c = this.root;
        while (c) {
            if (data === c.data)
                return c.data;
            if (data < c.data) {
                c = c.left;
            }
            else {
                c = c.right;
            }
        }
        return false;
    }
}
const bst = new BST();
bst.insert(10);
bst.insert(1);
bst.insert(20);
bst.insert(16);
let find = bst.find(10);
console.log('Found: ', find);

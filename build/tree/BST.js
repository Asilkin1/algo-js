"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = exports.BSTTreeNode = void 0;
class BSTTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
exports.BSTTreeNode = BSTTreeNode;
class BST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        const node = new BSTTreeNode(data);
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
    // @data - data to be removed
    remove(data) {
        const removeNode = (node, data) => {
            if (!removeNode)
                return null;
            // search left
            if (data < node.data) {
                node.left = removeNode(node.left, data);
            }
            // search right
            else if (data > node.data) {
                node.right = removeNode(node.right, data);
            }
            else {
                if (!node.left) {
                    return node.right;
                }
                else if (!node.right) {
                    return node.left;
                }
                node.data = this.findMinValue(node.right);
                node.right = removeNode(node.right, node.data);
            }
            return node;
        };
        this.root = removeNode(this.root, data);
        return this;
    } // end remove
    findMinValue(node) {
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }
}
exports.BST = BST;

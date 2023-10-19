"use strict";
/**
 *
 * Self-adjusting binary search tree
 * keeps the most frequently used elements
 * near the root
 *
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplayTree = exports.SplayTreeNode = void 0;
class SplayTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
exports.SplayTreeNode = SplayTreeNode;
class SplayTree {
    constructor() {
        this.root = null;
    }
    leftRotate(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        return newRoot;
    }
    rightRotate(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        return newRoot;
    }
    splay(node, data) {
        if (!node)
            return null;
        if (data < node.data) {
            if (!node.left)
                return node;
            if (data < node.left.data) {
                node.left.left = this.splay(node.left.left, data);
                node = this.rightRotate(node);
            }
            else if (data > node.data) {
                node.left.right = this.splay(node.left.right, data);
                if (node.left.right)
                    node.left = this.leftRotate(node.left);
            }
            return node.left ? this.rightRotate(node) : node;
        }
        else if (data > node.data) {
            if (!node.right)
                return node;
            if (data < node.right.data) {
                node.right.left = this.splay(node.right.left, data);
                if (node.right.left)
                    node.right = this.rightRotate(node.right);
            }
            else if (data > node.right.data) {
                node.right.right = this.splay(node.right.right, data);
                node = this.leftRotate(node);
            }
            return node.right ? this.leftRotate(node) : node;
        }
        else {
            return node; // root node
        }
    }
    insert(data) {
        if (!this.root) {
            this.root = new SplayTreeNode(data);
            return;
        }
        this.root = this.splay(this.root, data);
        if (data < this.root.data) {
            const newNode = new SplayTreeNode(data);
            newNode.left = this.root.left;
            newNode.right = this.root;
            this.root.left = null;
            this.root = newNode;
        }
        else if (data > this.root.data) {
            const newNode = new SplayTreeNode(data);
            newNode.right = this.root.right;
            newNode.left = this.root;
            this.root.right = null;
            this.root = newNode;
        }
    }
    search(data) {
        var _a;
        this.root = this.splay(this.root, data);
        return ((_a = this.root) === null || _a === void 0 ? void 0 : _a.data) === data;
    }
    delete(data) {
        if (!this.root)
            return;
        this.root = this.splay(this.root, data);
        if (data === this.root.data) {
            if (!this.root.left) {
                this.root = this.root.right;
            }
            else {
                const newRoot = this.root.right;
                this.root = this.splay(this.root.left, data);
                this.root.right = newRoot;
            }
        }
    }
}
exports.SplayTree = SplayTree;

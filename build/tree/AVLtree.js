"use strict";
/**
 *
 * Automatically balanced tree binary tree
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVLTree = exports.AVLTreeNode = void 0;
class AVLTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}
exports.AVLTreeNode = AVLTreeNode;
class AVLTree {
    constructor() {
        this.root = null;
    }
    getHeight(node) {
        return node ? node.height : 0;
    }
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }
    // rotate left
    leftRotation(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        this.updateHeight(node);
        this.updateHeight(newRoot);
        return newRoot;
    }
    // rotate right
    rightRotation(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        this.updateHeight(node);
        this.updateHeight(newRoot);
        return newRoot;
    }
    // use rotations to balance the tree
    balance(node) {
        if (!node)
            return null;
        const balanceFactor = this.getHeight(node.left) - this.getHeight(node.right);
        if (balanceFactor > 1) {
            // rebalance right side
            if (this.getHeight(node.left.left) >= this.getHeight(node.left.right)) {
                return this.rightRotation(node);
            }
            else {
                node.left = this.leftRotation(node.left);
                return this.leftRotation(node);
            }
        } // right rotation ends
        if (balanceFactor < -1) {
            // left rotation
            if (this.getHeight(node.right.right) >= this.getHeight(node.right.left)) {
                return this.leftRotation(node);
            }
            else {
                node.right = this.rightRotation(node.right);
                return this.leftRotation(node);
            }
        } // left rotation ends
        return node;
    }
    insert(data) {
        this.root = this.insertNode(this.root, data);
    }
    insertNode(node, data) {
        if (!node) {
            return new AVLTreeNode(data);
        }
        if (data < node.data) {
            node.left = this.insertNode(node.left, data);
        }
        else if (data > node.data) {
            node.right = this.insertNode(node.right, data);
        }
        this.updateHeight(node);
        return this.balance(node);
    }
}
exports.AVLTree = AVLTree;

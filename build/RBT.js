"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedBlackTree = exports.RBTNode = exports.Color = void 0;
// Red Black Tree
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLACK"] = 1] = "BLACK";
})(Color || (exports.Color = Color = {}));
class RBTNode {
    constructor(data, color = Color.RED) {
        this.data = data;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
exports.RBTNode = RBTNode;
class RedBlackTree {
    constructor() {
        this.root = null;
    }
    leftRotate(node) {
        const rightChild = node.right;
        node.right = rightChild.left;
        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }
        rightChild.parent = node.parent;
        if (node.parent === null) {
            this.root = rightChild;
        }
        else if (node === node.parent.left) {
            node.parent.left = rightChild;
        }
        else {
            node.parent.right = rightChild;
        }
        rightChild.left = node;
        node.parent = rightChild;
    } // left rotate ends
    rightRotate(node) {
        const leftChild = node.left;
        node.left = leftChild.right;
        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }
        leftChild.parent = node.parent;
        if (node.parent === null) {
            this.root = leftChild;
        }
        else if (node === node.parent.right) {
            node.parent.right = leftChild;
        }
        else {
            node.parent.left = leftChild;
        }
        leftChild.right = node;
        node.parent = leftChild;
    } // right rotate ends
    insert(data) {
        const newNode = new RBTNode(data, Color.RED);
        this.root = this.insertNode(this.root, newNode);
        // keep red-black constraints
        this.fixViolations(newNode);
    }
    insertNode(root, node) {
        if (root === null) {
            return node;
        }
        if (node.data < root.data) {
            root.left = this.insertNode(root.left, node);
            root.left.parent = root;
        }
        else if (node.data > root.data) {
            root.right = this.insertNode(root.right, node);
            root.right.parent = root;
        }
        return root;
    } // insertNode ends
    fixViolations(node) {
        while (node !== this.root && node.color === Color.RED && node.parent.color === Color.RED) {
            let parent = node.parent;
            let grandparent = parent.parent;
            if (parent === grandparent.left) {
                const uncle = grandparent.right;
                if (uncle !== null && uncle.color === Color.RED) {
                    grandparent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node = grandparent;
                }
                else {
                    if (node === parent.right) {
                        this.leftRotate(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rightRotate(grandparent);
                    parent.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    node = parent;
                }
            }
            else {
                const uncle = grandparent.left;
                if (uncle !== null && uncle.color === Color.RED) {
                    grandparent.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node = grandparent;
                }
                else {
                    if (node === parent.left) {
                        this.rightRotate(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.leftRotate(grandparent);
                    parent.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    node = parent;
                }
            }
        }
        this.root.color = Color.BLACK;
    }
}
exports.RedBlackTree = RedBlackTree;

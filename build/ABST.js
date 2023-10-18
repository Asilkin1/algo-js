"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABST = exports.ABSTTreeNode = void 0;
// Augmented BST
class ABSTTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.size = 1; // Size of the subtree rooted at this node
    }
}
exports.ABSTTreeNode = ABSTTreeNode;
class ABST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        const node = new ABSTTreeNode(data);
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
    updateSize(node) {
        if (node)
            node.size = 1 + this.getSize(node.left) + this.getSize(node.right);
    }
    getSize(node) {
        return node ? node.size : 0;
    }
    findSmallestSize(k) {
        const findSmallest = (node, k) => {
            if (!node)
                return null;
            const leftSize = this.getSize(node.left) + 1;
            if (k === leftSize)
                return node.data;
            if (k < leftSize)
                return findSmallest(node.left, k);
            return findSmallest(node.right, k - leftSize);
        };
        return findSmallest(this.root, k);
    }
}
exports.ABST = ABST;
const abst = new ABST();
abst.insert(1);
abst.insert(2);

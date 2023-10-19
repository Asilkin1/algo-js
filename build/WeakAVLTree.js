/**
 *
 * Week AVL Tree
 * a bit less overhead than AVL tree
*/
class WeakAVLTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.weight = 1;
    }
}
class WeakAVLTree {
    constructor() {
        this.root = null;
    }
    // Get the weight of a node (handles null nodes)
    getWeight(node) {
        return node ? node.weight : 0;
    }
    // Update the weight of a node
    updateWeight(node) {
        node.weight = this.getWeight(node.left) + this.getWeight(node.right) + 1;
    }
    // Rotate left
    leftRotate(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        this.updateWeight(node);
        this.updateWeight(newRoot);
        return newRoot;
    }
    // Rotate right
    rightRotate(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        this.updateWeight(node);
        this.updateWeight(newRoot);
        return newRoot;
    }
    // Balance the tree
    balance(node) {
        if (!node)
            return null;
        const balanceFactor = this.getWeight(node.left) - this.getWeight(node.right);
        if (balanceFactor > 1) {
            if (this.getWeight(node.left.left) >= this.getWeight(node.left.right)) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        if (balanceFactor < -1) {
            if (this.getWeight(node.right.right) >= this.getWeight(node.right.left)) {
                return this.leftRotate(node);
            }
            else {
                node.right = this.rightRotate(node.right);
                return this.leftRotate(node);
            }
        }
        return node;
    }
    // Insert a value into the tree
    insert(data) {
        this.root = this.insertNode(this.root, data);
    }
    insertNode(node, data) {
        if (!node) {
            return new WeakAVLTreeNode(data);
        }
        if (data < node.data) {
            node.left = this.insertNode(node.left, data);
        }
        else if (data > node.data) {
            node.right = this.insertNode(node.right, data);
        }
        this.updateWeight(node);
        return this.balance(node);
    }
}

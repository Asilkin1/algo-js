/**
 * 
 * Self-adjusting Red-Black Tree
 * 
*/
export enum Color {
    RED,
    BLACK
}

export class RBTNode<T>{
    data: T;
    color: Color;
    left: RBTNode<T> | null;
    right: RBTNode<T> | null;
    parent: RBTNode<T> | null;

    /**
     * Create a new RBTNode instance.
     * @param {T} data - Data to be inserted into the Node.
     * @param {Color} color - Color of the node.
    */
    constructor(data: T, color: Color = Color.RED) {
        this.data = data;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

export class RedBlackTree<T>{
    root: RBTNode<T> | null;

    /**
     * Create a new RedBlackTree instance.
    */
    constructor() {
        this.root = null;
    }

    /**
     * Left rotation of the node.
     * @param {RBTNode<T>} node - a node to be rotated.
    */
    leftRotate(node: RBTNode<T>) {
        const rightChild = node.right;
        node.right = rightChild!.left;

        if (rightChild!.left !== null) {
            rightChild!.left.parent = node;
        }
        rightChild!.parent = node.parent;

        if (node.parent === null) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild!.left = node;
        node.parent = rightChild;

    } // left rotate ends
    
    /**
     * Right rotation of the node.
     * @param {RBTNode<T>} node - a node to be rotated.
    */
    rightRotate(node: RBTNode<T>) {
        const leftChild = node.left;
        node.left = leftChild!.right;

        if (leftChild!.right !== null) {
            leftChild!.right.parent = node;
        }

        leftChild!.parent = node.parent;

        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        leftChild!.right = node;
        node.parent = leftChild;
    } // right rotate ends

    /**
     * Insert new data into the tree.
     * @param {T} data - data to be inserted.
    */
    insert(data: T) {
        const newNode = new RBTNode(data, Color.RED);
        this.root = this.insertNode(this.root, newNode);
        // keep red-black constraints
        this.fixViolations(newNode);
    }

    /**
     * Insert a node relative to the root.
     * @param { RBTNode<T> | null } root - a root node.
     * @param { RBTNode<T> } node - a node to be inserted.
     * @returns { RBTNode<T> } - return a root.
    */
    insertNode(root: RBTNode<T> | null, node: RBTNode<T> | null): RBTNode<T> | null {
        if (root === null) {
            return node;
        }

        if (node!.data < root.data) {
            root.left = this.insertNode(root.left, node);
            root.left!.parent = root;
        } else if (node!.data > root.data) {
            root.right = this.insertNode(root.right, node);
            root.right!.parent = root;
        }
        return root;
    } // insertNode ends

    /**
     * Fix nodes structure based on the red-black tree criteria.
     * @param {RBTNode<T> | null} node - a node to be inserted.
    */
    fixViolations(node: RBTNode<T> | null) {
        while (node !== this.root && node!.color === Color.RED && node!.parent!.color === Color.RED) {
            let parent = node!.parent;
            let grandparent = parent!.parent;

            if (parent === grandparent!.left) {
                const uncle = grandparent!.right;

                if (uncle !== null && uncle.color === Color.RED) {
                    grandparent!.color = Color.RED;
                    parent!.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node = grandparent;
                } else {
                    if (node === parent!.right) {
                        this.leftRotate(parent!);
                        node = parent;
                        parent = node!.parent;
                    }

                    this.rightRotate(grandparent!);
                    parent!.color = Color.BLACK;
                    grandparent!.color = Color.RED;
                    node = parent;
                }
            } else {
                const uncle = grandparent!.left;

                if (uncle !== null && uncle.color === Color.RED) {
                    grandparent!.color = Color.RED;
                    parent!.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node = grandparent;
                } else {
                    if (node === parent!.left) {
                        this.rightRotate(parent!);
                        node = parent;
                        parent = node!.parent;
                    }

                    this.leftRotate(grandparent!);
                    parent!.color = Color.BLACK;
                    grandparent!.color = Color.RED;
                    node = parent;
                }
            }
        }

        this.root!.color = Color.BLACK;
    }
}
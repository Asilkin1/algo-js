/**
 * 
 * Week AVL Tree
 * a bit less overhead than AVL tree
*/

export class WeakAVLTreeNode<T> {
  data: T;
  left: WeakAVLTreeNode<T> | null;
  right: WeakAVLTreeNode<T> | null;
  weight: number;

  /**
     * Create a new WeakAVLTreeNode instance.
     * @param {T} data - Data to be inserted into the Node.
    */
  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.weight = 1;
  }
}

export class WeakAVLTree<T> {
  root: WeakAVLTreeNode<T> | null;
  /**
     * Create a new WeakAVLree instance.
    */
  constructor() {
    this.root = null;
  }

  /**
     * Get the weight of the node
     * @param { WeakAVLTreeNode | null } node - a node to check.
     * @returns { number } - weight of the node.
    */
  private getWeight(node: WeakAVLTreeNode<T> | null): number {
    return node ? node.weight : 0;
  }

  /**
     * Update weight.
     * @param {WeakAVLTreeNode<T>} node - tree node.
    */
  private updateWeight(node: WeakAVLTreeNode<T>) {
    node.weight = this.getWeight(node.left) + this.getWeight(node.right) + 1;
  }

  /**
     * Left rotation.
     * @param {WeakAVLTreeNode<T>} node - tree node.
     * @returns {WeakAVLTreeNode<T>} - tree node.
    */
  private leftRotate(node: WeakAVLTreeNode<T>): WeakAVLTreeNode<T> {
    const newRoot = node.right;
    node.right = newRoot!.left;
    newRoot!.left = node;
    this.updateWeight(node);
    this.updateWeight(newRoot);
    return newRoot;
  }

  /**
     * Right rotation.
     * @param {WeakAVLTreeNode<T>} node - tree node.
     * @returns {WeakAVLTreeNode<T>} - tree node.
    */
  private rightRotate(node: WeakAVLTreeNode<T>): WeakAVLTreeNode<T> {
    const newRoot = node.left;
    node.left = newRoot!.right;
    newRoot!.right = node;
    this.updateWeight(node);
    this.updateWeight(newRoot);
    return newRoot;
  }

  /**
     * Balance the tree.
     * @param { WeakAVLTreeNode<T> } node - unbalanced tree node.
     * @returns { WeakAVLTreeNode<T> } - balanced tree node.
    */
  private balance(node: WeakAVLTreeNode<T>): WeakAVLTreeNode<T> {
    if (!node) return null;

    const balanceFactor = this.getWeight(node.left) - this.getWeight(node.right);

    if (balanceFactor > 1) {
      if (this.getWeight(node.left!.left) >= this.getWeight(node.left!.right)) {
        return this.rightRotate(node);
      } else {
        node.left = this.leftRotate(node.left!);
        return this.rightRotate(node);
      }
    }

    if (balanceFactor < -1) {
      if (this.getWeight(node.right!.right) >= this.getWeight(node.right!.left)) {
        return this.leftRotate(node);
      } else {
        node.right = this.rightRotate(node.right!);
        return this.leftRotate(node);
      }
    }
    return node;
  }

  /**
     * Insert a value into the tree.
     * @param {T} data - data to be inserted into the tree.
    */
  insert(data: T) {
    this.root = this.insertNode(this.root, data);
  }
  /**
     * Insert node.
     * @param {WeakAVLTreeNode<T> | null} node - tree node.
     * @param { T } data - data to be inserted.
     * @returns {WeakAVLTreeNode<T>} - tree node.
    */
  private insertNode(node: WeakAVLTreeNode<T> | null, data: T): WeakAVLTreeNode<T> {
    if (!node) {
      return new WeakAVLTreeNode(data);
    }

    if (data < node.data) {
      node.left = this.insertNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.insertNode(node.right, data);
    }

    this.updateWeight(node);
    return this.balance(node);
  }
}
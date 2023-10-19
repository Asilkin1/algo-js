/**
 * 
 * Self-adjusting binary search tree
 * keeps the most frequently used elements
 * near the root
 * 
 * 
*/

export class SplayTreeNode<T>{

    data: T;
    left:SplayTreeNode<T>;
    right:SplayTreeNode<T>;

    constructor(data: T){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


export class SplayTree<T>{
    root: SplayTreeNode<T> | null;

    constructor(){
        this.root = null;
    }

    private leftRotate(node: SplayTreeNode<T>): SplayTreeNode<T>{
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        return newRoot;
    }

    private rightRotate(node:SplayTreeNode<T>):SplayTreeNode<T>{
        const newRoot = node.left!;
        node.left = newRoot.right;
        newRoot.right = node;
        return newRoot;
    }

    private splay(node:SplayTreeNode<T> | null, data: T): SplayTreeNode<T>{
        if(!node) return null;

        if(data < node.data){
            if(!node.left) return node;
            if(data < node.left.data){
                node.left.left = this.splay(node.left.left, data);
                node = this.rightRotate(node);
            } else if(data > node.data){
                node.left.right = this.splay(node.left.right, data);
                if(node.left.right) node.left = this.leftRotate(node.left);         
            }
            return node.left ? this.rightRotate(node):node;
        } else if(data > node.data){
            if(!node.right) return node;
            if(data < node.right.data){
                node.right.left = this.splay(node.right.left,data);
                if(node.right.left) node.right = this.rightRotate(node.right);
            } else if(data > node.right.data){
                node.right.right = this.splay(node.right.right,data);
                node = this.leftRotate(node);
            }
            return node.right ? this.leftRotate(node) : node;
        } else {

            return node; // root node
        }
    }

    insert(data: T){
        if(!this.root){
            this.root = new SplayTreeNode(data);
            return;
        }

        this.root = this.splay(this.root, data);

        if(data < this.root.data){
            const newNode = new SplayTreeNode(data);
            newNode.left = this.root.left;
            newNode.right = this.root;
            this.root.left = null;
            this.root = newNode;
        } else if(data > this.root.data){
            const newNode = new SplayTreeNode(data);
            newNode.right = this.root.right;
            newNode.left = this.root;
            this.root.right = null;
            this.root = newNode;
        }
    }

    search(data: T):boolean{
        this.root = this.splay(this.root, data);
        return this.root?.data === data;
    }

    delete(data: T){
        if(!this.root) return;

        this.root = this.splay(this.root, data);

        if(data === this.root.data){
            if(!this.root.left){
                this.root = this.root.right;
            } else {
                const newRoot = this.root.right;
                this.root = this.splay(this.root.left, data);
                this.root.right = newRoot;
            }
        }
    }
}
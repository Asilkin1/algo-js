// Augmented BST
export class ABSTTreeNode<T> {
    data: T | null;
    left: ABSTTreeNode<T> | null;
    right: ABSTTreeNode<T> | null;
    size: number;

    constructor(data:T) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.size = 1; // Size of the subtree rooted at this node
    }
  }

export class ABST<T>{
    root: ABSTTreeNode<T> | null;

    constructor(){
        this.root = null;
    }

    insert(data:T){
        const node = new ABSTTreeNode(data);

        if(!this.root){
            this.root = node;
            return this;
        }

        let c = this.root;
        
        while(true){
            // duplicate values not accepted
            if(data === c.data) return;
            
            // data less than root
            if(data < c.data){
                if(!c.left){
                    c.left = node;
                    return this;
                }
                c = c.left;
            }
            // data more than root
            else{
                if(!c.right){
                    c.right = node;
                    return this;
                }
            c = c.right;
            }

        }
    } // end of insert

    updateSize(node:ABSTTreeNode<T>){
        if(node) node.size = 1 + this.getSize(node.left) + this.getSize(node.right);
    }

    getSize(node:ABSTTreeNode<T> | null){
        return node ? node.size : 0;
    }

    findSmallestSize(k:T):T | null{
        const findSmallest = (node:ABSTTreeNode<T> | null, k:any): T | null => {
            if(!node) return null;

            const leftSize = this.getSize(node.left) + 1;

            if(k === leftSize) return node.data;
            if(k < leftSize) return findSmallest(node.left, k);
            return findSmallest(node.right, k - leftSize);
        };

        return findSmallest(this.root, k);
    }
}

const abst = new ABST();

abst.insert(1);
abst.insert(2);







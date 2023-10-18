// Generic Tree data structure
// class TreeNode<T>{
//     data: T;
//     left: TreeNode<T> | null;
//     right: TreeNode<T> | null ;

//     constructor(data: T){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class Tree<T>{
//     // cannot be empty
//     r: TreeNode<T>;

//     constructor(root:TreeNode<T>){
//         this.r = root;
//     }

//     root(){
//         return this.r;
//     }

//     // a node is a parent
//     parent(v:TreeNode<T>){
//         return this.findParent(this.r,v);
//     }

//     findParent(node:TreeNode<T> | null, target:TreeNode<T>):boolean{
//         if(node === null) return false;

//         if(node === target){
//             return node.left !== null || node.right !== null;
//         }
//         return this.findParent(node.left,target) || this.findParent(node.right,target);
//     }

//     // if it is not a root and have no left and right node
//     children(v:TreeNode<T>):boolean{
//         return v.left === null && v.right === null && this.r !== v;
//     }
//     // has one or more children
//     isInternal(v:TreeNode<T>):boolean{
//         if(v.left !== null || v.right !== null){
//             return true;
//         }
//         return false;
//     }

//     // has no children(leaf)
//     isExternal(v:TreeNode<T>):boolean{
//         if(v.left === null && v.right === null){
//             return true;
//         }
//         return false;
//     }

//     isRoot(v:TreeNode<T>):boolean{
//         return v === this.r;
//     }

//     size():number{
//         // return a number of nodes in the tree
//         if(this.r.left === null && this.r.right === null) return 0;
        
//         if(this.r.left){

//         }
//     }

//     depth(t:Tree<T>,v:TreeNode<T>){
//         if(t.isRoot(v)) return 0;
//         return 1 + this.depth(t,t.parent(v));
//     }

//     elements(){
//         // return a set containing all elements stored in the tree
//     }

//     positions(){
//         // returns all the nodes of the tree
//     }

//     swapElements(v,w){
//         // swap elements stored at the nodes v and w
//     }
//     replaceElement(v:TreeNode<T>,e:T):T{
//         // replace v with e and return e
//         return "asdfds";
//     }



// }
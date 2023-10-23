'use strict';
/**  
 * Stack data structure
 * @example new Node(5)
*/
export class Node<T>{
    data: T;
    prev: Node<T> | null;
    next: Node<T> | null;

    /**
     * Create a new Node instance.
     * @param {T} data - Data to be inserted into the Node.
    */
    constructor(data: T) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
/**
 * Doubly linked list methods  |   performance
 * first()                            O(1)
 * last()                             O(1)
 * before(Node)                       O(1)
 * after(Node)                        O(1)
 * insertBefore(Node, Data)           O(1)  
 * insertAfter(Node, Data)            O(1)
 * remove(p)                          O(1)     
*/
export class LinkedList<T>{
    head: Node<T> | null;

     /**
     * Create a new Stack instance.
     * @param {Node<T> | null} head - First element of the linked 
     * list or null if the list is empty.
    */

    constructor(head: Node<T> | null) {
        this.head = head;
    }

    /**
     * Get size of the linked list by counting 
     * a number of connected nodes.
     * @returns {number} - a number of nodes in the linked list.
    */
    size(): number {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

     /**
     * Clear all the nodes of the linked list by 
     * setting head to null.
    */
    clear() {
        this.head = null;
    }

     /**
     * Get the last element in the linked list.
     * 
    */
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
    }

    // get the first element in the linked list.
    getFirst() {
        if (this.head === null) {
            return null;
        }
        return this.head;
    };

    /**
     * Returns a node before the current.
     * @param {Node<T>} node - current node.
     * @returns {Node<T>} - a node before the current node.
    */
    before<T>(node: Node<T>): Node<T> | null {
        // no prev node
        if (node.prev === null) {
            return null;
        }
        return node.prev;
    }

    /**
     * Returns a node after the current.
     * @param {Node<T>} node - current node.
     * @returns {Node<T> | null} - a node after the current.
    */
    after<T>(node: Node<T>): Node<T> | null {
        // next not available
        if (node.next === null) {
            return null;
        }
        return node.next;
    }
    /**
     * Insert a new element in the list before current node.
     * @param {Node<T>} node - current node.
     * @param {T} data - data to be inserted in new node.
     * @returns {Node<T>} - a new node inserted in the list.
    */
    insertBefore<T>(node: Node<T>, data: T): Node<T> {
        let v = new Node(data);
        v.prev = node.prev;
        v.next = node;

        if (node.prev) {
            node.prev.next = v;
        }
        node.prev = v;

        return v;
    }

     /**
     * Insert a new element in the list after current node.
     * @param {Node<T>} node - current node.
     * @param {T} data - data to be inserted in new node.
     * @returns {Node<T>} - a new node inserted in the list.
    */
    insertAfter<T>(node: Node<T>, data: T): Node<T> {
        let v = new Node(data);

        // last in the list
        if (node.next === null) {
            v.prev = node;
            v.next = null;
            node.next = v;
        }
        else {
            v.prev = node;
            v.next = node.next;
            node.next.prev = v;
            node.next = v;
        }
        return v;
    }

    /**
     * Insert a new element in the list after current node.
     * @param {Node<T>} node - current node.
     * @returns {T} - data removed from the list.
    */
    // remove from list element at position p
    remove<T>(node: Node<T>): T {
        let temp = node.data;
        // check if null
        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;
        // unlink
        node.prev = null;
        node.next = null;
        // removed element returned
        return temp;
    }
}
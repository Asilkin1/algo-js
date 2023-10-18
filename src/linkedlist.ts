'use strict';

// Node in a doubly linked list
export class Node<T>{
    data: T;
    prev: Node<T> | null;
    next: Node<T> | null;

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

    constructor(head: Node<T> | null) {
        this.head = head;
    }

    size(): number {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
    }

    getFirst() {
        if (this.head === null) {
            return null;
        }
        return this.head;
    };

    // doubly linked list methods
    // return the node before current node
    before<T>(node: Node<T>): Node<T> | null {
        // no prev node
        if (node.prev === null) {
            return null;
        }
        return node.prev;
    }

    // return next node
    after<T>(node: Node<T>): Node<T> | null {
        // next not available
        if (node.next === null) {
            return null;
        }
        return node.next;
    }
    // insert a new element into list before position p
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

    // insert a new data into list after specified node
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
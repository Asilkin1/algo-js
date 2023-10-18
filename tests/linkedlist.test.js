'use strict'
const {Node, LinkedList} = require('../build/linkedlist');

let llist;

beforeAll(() => {
    let node1 = new Node(20);
    llist = new LinkedList(node1);
});

test('create empty linked list', () => {
    expect(llist.size()).toBe(0);
});

test('size of linked list', () => {
    let node1 = new Node(25);
    llist.insertAfter(node1,20);
    expect(llist.size()).toBe(2);
});

test('clear linked list', () => {
    let node1 = new Node(25);
    llist.insertAfter(node1,34);
    llist.clear();
    expect(llist.size()).toBe(0);
});

test('create linked list with 2 nodes linked together', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);

    node1.next = node2;
    const llist = new LinkedList(node1);
    expect(llist.size()).toBe(2);
    
});

test('node before current one',() =>{
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.next = node2;
    node2.prev = node1;
    const llist = new LinkedList(node1);
    expect(llist.before(node2)).toBe(node1);
});

test('node after current one',() =>{
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.next = node2;
    node2.prev = node1;
    const llist = new LinkedList(node1);
    expect(llist.after(node1)).toBe(node2);
});

test('insert node before',() =>{
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.next = node2;
    node2.prev = node1;
    const llist = new LinkedList(node1);
    let node3 = llist.insertBefore(node2,3);
    expect(node3).toBe(node3);
});

test('insert node after',() =>{
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.next = node2;
    node2.prev = node1;
    const llist = new LinkedList(node1);
    let node3 = llist.insertAfter(node2,3);
    expect(node3).toBe(node3);
});



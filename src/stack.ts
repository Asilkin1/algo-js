"use strict";
/*
    Stack (LIFO)
    Should be O(1) time for push and pop
*/
class Stack<T>{
    data:T[] | null

    constructor(...data:T[]){
        this.data = [...data];
    }

    pop(){
        if(this.data?.length === 0)
            return;
            this.data?.pop();    
    }

    push(element:T){
        this.data?.push(element);
    }

    getStack(){
        return this.data;
    }

    getStackSize(){
        return this.data?.length;
    }
}

module.exports = Stack;
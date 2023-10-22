"use strict";
/**  
 * Stack data structure
 * @example
 * new stack([1,2,3,5,6])
*/
export class Stack<T>{
    data:T[] | null

    /**
     * Create a new Stack instance.
     * @param {T | null} data - Data to be inserted into the stack or empty
    */
    constructor(...data:T[] | null){
        this.data = [...data];
    }
    /**
     * Remove last element from the stack
    */
    pop(){
        if(this.data?.length === 0)
            return;
            this.data?.pop();    
    }

    /**
     * Add element to the stack.
     * @param {T} element - an item to be inserted in the stack. 
    */
    push(element:T){
        this.data?.push(element);
    }

    /**
     * Get elements on the stack.
     * @returns {T[]} - The elements stored in the stack.
    */
    getStack(){
        return this.data;
    }

    /**
     * Get stack size.
     * @returns {number} - The number of elements in the stack. 
    */
    getStackSize(){
        return this.data?.length;
    }
}
'use strict';

/**
 * array-based 
 * Queue(FIFO)
 * @size = limit queue size(find an optimal size)
 * @data = data to be inserted in the queue or empty 
*/
export class Queue<T>{
    size: T;
    data: T[] | null

    constructor(size:T,...data:T[]){
        this.data = [...data];
        this.size = size;
    }

    enqueue(element:T){
        // queue might be full if of a fixed size
        if(this.size === this.data?.length){
            return;
        }
        // insert last element
        this.data?.push(element);
    };

    dequeue(){
        // queue is empty
        if(this.data?.length === 0){
            return;
        }
        // remove first element
        this.data?.shift();
    };

    getSize(){
        return this.size;
    }
}
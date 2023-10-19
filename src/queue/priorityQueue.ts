// priotiry queue

export class PriorityQueue<T> {
    private elements: {
         item: T; 
         priority: number 
        }[] = [];
  
    // Enqueue an item with a priority
    enqueue(item: T, priority: number): void {
      this.elements.push({ item, priority });
      this.elements.sort((a, b) => a.priority - b.priority);
    }
  
    // Dequeue the item with the highest priority
    dequeue(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.elements.shift()!.item;
    }
  
    // Get the item with the highest priority without removing it
    peek(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.elements[0].item;
    }
  
    // Check if the priority queue is empty
    isEmpty(): boolean {
      return this.elements.length === 0;
    }
  
    // Get the size of the priority queue
    size(): number {
      return this.elements.length;
    }
  }
  
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // Flag to optimize the sort
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // If no two elements were swapped in inner loop, the array is already sorted
        if (!swapped) {
            break;
        }
    }
    return arr;
}
exports.bubbleSort = bubbleSort;

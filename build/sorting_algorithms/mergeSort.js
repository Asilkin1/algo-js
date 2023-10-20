"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = exports.mergeSort = void 0;
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    // middle point
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    // sort halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}
exports.mergeSort = mergeSort;
;
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
exports.merge = merge;
;

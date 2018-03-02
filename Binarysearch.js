function binarySearch(increaseArr, numberSearch) {
    let start = 0;
    let end = increaseArr.length - 1;
    let pivot = Math.round((start + end) / 2);
    while (numberSearch !== increaseArr[pivot] && start < end) {
        console.log(start,end);
        if (numberSearch < increaseArr[pivot]) {
            end = pivot - 1;
        } else {
            start = pivot + 1;
        };
        pivot = Math.round((start + end) / 2);
    }
    return  increaseArr[pivot] === numberSearch ? pivot : -1;
}

let a = [1, 5, 7, 9, 15];
console.log (binarySearch (a, 15));
function jumpSort(increaseArr, searchNumber) {
    let start = 0;
    let jump = start + 2;
    let end = increaseArr.length - 1;
    if (searchNumber === increaseArr[jump]) {
        return jump;
    } else if ( searchNumber === increaseArr[end]) {
        return end;
    }
    while (searchNumber !== increaseArr[jump] && jump < end && jump > start) {
        // console.log ( jump ,end);
        if (searchNumber < increaseArr[jump]) {
            jump = jump - 1;
            if (searchNumber > increaseArr[jump]) {
                return -1;
            }
        } else {
            jump = jump + 2;
            if (jump > end) {
                return -1;
            }
        }
    }
    return searchNumber === increaseArr[jump] ? jump : -1;
}

let a = [1, 5, 8, 10, 12, 15, 17, 20];
console.log(jumpSort(a, -100));
function quickSortObject(arr, left, right) {
    if (left >= right) {
        return;
    }
    var i = left;
    var j = right;
    var constg;
    var pivot = arr[Math.round((left + right) / 2)].date;
    while (true) {
        while (arr[i].value < pivot) {
            i++;
        }
        while (arr[j].value > pivot) {
            j--;
        }
        if (i < j) {
            constg = arr[i];
            arr[i] = arr[j];
            arr[j] = constg;
        } else {
            break;
        }
        quickSortObject(arr, left, j - 1);
        quickSortObject(arr, i + 1, right);
    }
}

var a = [{ value: 5, name: 'A' },
{ value: 10, name: 'B' },
{ value: 1, name: 'C' },
{ value: 8, name: 'K' },
{ value: 2, name: 'D' },
{ value: 6, name: 'F' }]

quickSortObject(a, 0, a.length - 1);
console.log(a);
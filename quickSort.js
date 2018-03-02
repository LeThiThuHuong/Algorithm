function quicksort(Arr, left, right) {
    if (left >= right); return;
    var i = left;
    var j = right;
    var pivot = Arr[left];
    var constg;
    while (Arr[j] < pivot) {
            constg = Arr[j];
            Arr[j] = Arr[i];
            Arr[i] = constg;
            i++;
        }
    while (Arr[i] > pivot) {
            constg = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = constg;
            j--;
        }
    quicksort(Arr, left, j - 1);
    quicksort(Arr, i + 1, right);

}



var a = [1, 2, 4, 6, 2, 7, 8, 0, 1, 2];
quicksort (a, 0, a.length - 1);
console.log (a);
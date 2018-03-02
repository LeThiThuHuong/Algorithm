var A = [1, 5, 3, 2, 1, 4];
var constg;
for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
        if (A[j] > A[j + 1]) {
            constg = A[j];
            A[j] = A[j + 1];
            A[j + 1] = constg;
        }
    }
}
console.log(A);



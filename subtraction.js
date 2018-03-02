var subtraction = function (A, B) {
    var difference = '';
    var max = B.length;
    var remainder = 0;
    var result;
    if (max < A.length) {
        max = A.length
    }
    for (var i = 0; i < max; i++) {
        numA = A[A.length - 1 - i];
        numA = Number(numA) || 0;
        numB = B[B.length - 1 - i];
        numB = Number(numB) || 0;
        if (numA < numB) {
            result = 10 + numA - numB - remainder;
            difference = result + difference;
            remainder = 1;
        } else if (numA >= numB) {
            result = numA - numB - remainder;
            if (result < 0) {
                result = 10 + numA - numB - remainder;
                remainder = 1;
                difference = result + difference;
            } else {
                difference = result + difference;
                remainder = 0;
            }
        }
    }
    return difference;
}
var a = subtraction('972587', '12455');
console.log(a);
var b = subtraction('54325', ' 2345');
console.log(b);
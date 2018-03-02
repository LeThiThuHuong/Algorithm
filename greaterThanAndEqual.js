var greaterThanAndEqual = function (A, B) {
    var a = A.length;
    var b = B.length;
    var difference = Math.abs(a - b);
    var string = '';
    var result;
    for (var i = 0; i < difference; i++) {
        string = string + 0;
    }
    if (a > b) {
        B = string + B;
    } else if (b < a) {
        A = string + A;
    }
    for (var i = 0; i < A.length; i++) {
        numA = A[i];
        numA = Number(numA);
        numA1 = A[i + 1];
        numA1 = Number(numA1);
        numB = B[i];
        numB = Number(numB);
        numB1 = B[i + 1];
        numB1 = Number(numB1);
        if (numA > numB) {
            result = true;
            break;
        } else if (numA < numB) {
            result = false;
            break;
        } else if (i === A.length - 1) {
            result = true;
        }
    }
    return (result);
}

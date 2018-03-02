var greaterthan = function (bigNumA, bigNumB) {
    var difference = Math.abs(bigNumA.length - bigNumB.length);
    var string = '';
    var result;
    for (var i = 0; i < difference; i++) {
        string = string + 0;
    }
    if (bigNumA.length > bigNumB.length) {
        bigNumB = string + bigNumB;
    } else {
        bigNumA = string + bigNumA;
    }
    for (var i = 0; i < bigNumA.length; i++) {
        numA = Number(bigNumA[i]);
        numB = Number(bigNumB[i]);
        if (numA > numB) {
            result = true;
            break;
        } else {
            result = false;
            break;
        }
    }
    return result
}


var a = greaterthan('287467865876', '9972586924965696987');
console.log(a);

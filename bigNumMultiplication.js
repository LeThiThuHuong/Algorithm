var string = '123';
var number = 5;

function multiplication(bigNum, number) {
    var result;
    var remainder = 0
    var multiplication = '';
    for (var i = 0; i < bigNum.length; i++) {
        bigNum = bigNum[bigNum.length - i - 1];
        convertBigNumToNumber = Number(bigNum) || 0;
        result = number * convertBigNumToNumber;
        multiplication = (result % 10 + remainder) + multiplication;
        remainder = Math.floor(result / 10);
    }
    return multiplication
}
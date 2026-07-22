function equalSumsEvenOddPositions(firstNum, secondNum) {
    let line = "";

    for (let i = firstNum; i <= secondNum; i++) {
        let numberAsString = "" + i;
        let evenSum = 0;
        let oddSum = 0;


        for (let j = 0; j < numberAsString.length; j++) {
            let currentNumber = Number(numberAsString[j]);
            if (j % 2 === 0) {
                evenSum += currentNumber;
            } else {
                oddSum += currentNumber;
            }
        }
        if (evenSum === oddSum) {
            line += i + " "
        }
    }
    console.log(line);
}

equalSumsEvenOddPositions(100000, 100050);
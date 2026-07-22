function numberPyramid(number) {
    let currentNumber = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            if (currentNumber > number) {
                isBigger = true;
                break;
            }
            printCurrentLine += currentNumber + " ";
            currentNumber++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(15);
function maxNumber(dataArray) {
    let index = 0;
    let input = dataArray[index++];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (input !== "Stop") {
        let currentNumber = Number(input);
        if (currentNumber >= maxNumber) {
            maxNumber = currentNumber;
        }
        input = dataArray[index++];
    }
    console.log(maxNumber);
}

maxNumber(["100", "99", "80", "70", "Stop"])
maxNumber(["-10", "20", "-30", "Stop"])
maxNumber(["45", "-20", "7", "99", "Stop"]);
maxNumber(["999", "Stop"]);
maxNumber(["-1", "-2", "Stop"]);
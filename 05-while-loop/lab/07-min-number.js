function minNumber(dataArray) {
    let index = 0;
    let input = dataArray[index++];
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (input !== "Stop") {
        let currentNumber = Number(input);
        if (currentNumber <= minNumber) {
            minNumber = currentNumber;
        }
        input = dataArray[index++];
    }
    console.log(minNumber);
}

minNumber(["100", "99", "80", "70", "Stop"])
minNumber(["-10", "20", "-30", "Stop"])
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);
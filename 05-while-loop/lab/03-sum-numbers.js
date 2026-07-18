function sumNumbers(dataArray) {
    let index = 0;
    const expectedSum = Number(dataArray[index++]);

    let sum = Number(dataArray[index++]) + Number(dataArray[index++]);

    while (sum < expectedSum) {
        let number = Number(dataArray[index++]);
        sum += number;
    }

    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
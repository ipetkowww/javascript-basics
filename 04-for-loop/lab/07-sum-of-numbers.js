function sumOfNumbers(numberAsText) {
    let sum = 0;

    for (let i = 0; i < numberAsText.length; i++) {
        sum += Number(numberAsText[i]);
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers("1234");
sumOfNumbers("564891");
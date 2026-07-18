function numbersDivisibleBy9(startNum, endNum) {
    let sum = 0;
    let numbers = [];

    for (let i = startNum; i <= endNum; i++) {
        if (i % 9 === 0) {
            sum += i;
            numbers.push(i);
        }
    }

    console.log(`The sum: ${sum}`);
    for (const number of numbers) {
        console.log(number);
    }
}

numbersDivisibleBy9(100, 200);
function sumOfTwoNumbers(start, end, magicNumber) {
    let combinations = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combinations++;
            if (i + j === magicNumber) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }
    }

    console.log(`${combinations} combinations - neither equals ${magicNumber}`);
}

sumOfTwoNumbers(1, 10, 5);
sumOfTwoNumbers(88, 888, 1000);
sumOfTwoNumbers(23, 24, 20);
sumOfTwoNumbers(88, 888, 2000);
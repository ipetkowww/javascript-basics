function multiplyTable(input) {
    let number = Number(input);

    let first = number % 10;
    let second = Math.floor(number / 10) % 10;
    let third = Math.floor(number / 100);

    for (let i = 1; i <= first; i++) {
        for (let j = 1; j <= second; j++) {
            for (let k = 1; k <= third; k++) {
                console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
            }
        }
    }
}

multiplyTable(222);
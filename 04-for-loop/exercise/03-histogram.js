function histogram(numbers) {
    const numbersCount = numbers[0];
    let pCounts = [0, 0, 0, 0, 0];

    for (let i = 1; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        if (currentNumber < 200) {
            pCounts[0]++;
        } else if (currentNumber >= 200 && currentNumber <= 399) {
            pCounts[1]++;
        } else if (currentNumber >= 400 && currentNumber <= 599) {
            pCounts[2]++;
        } else if (currentNumber >= 600 && currentNumber <= 799) {
            pCounts[3]++;
        } else {
            pCounts[4]++;
        }
    }

    for (const p of pCounts) {
        console.log(`${(p / numbersCount * 100).toFixed(2)}%`);
    }
}


histogram([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);
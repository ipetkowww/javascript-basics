function specialNumber(number) {
    let line = "";

    for (let i = 1111; i <= 9999; i++) {
        let currentNumber = i;
        let isMagic = true;

        while (currentNumber > 0) {
            let lastDigit = currentNumber % 10;

            if (lastDigit === 0 || number % lastDigit !== 0) {
                isMagic = false;
                break;
            }

            currentNumber = Math.floor(currentNumber / 10);
        }

        if (isMagic) {
            line += i + " ";
        }
    }

    console.log(line);
}

specialNumber(11);
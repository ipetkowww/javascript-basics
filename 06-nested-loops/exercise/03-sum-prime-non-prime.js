function sumPrimeNonPrime(dataArray) {
    let index = 0;
    let command = dataArray[index++];
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== "stop") {
        let number = Number(command);

        if (number < 0) {
            console.log("Number is negative.");
        } else {
            let isPrime = true;

            if (number <= 1) {
                isPrime = false;
            } else if (number > 2 && number % 2 === 0) {
                isPrime = false;
            } else {
                for (let i = 3; i <= Math.sqrt(number); i += 2) {
                    if (number % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }

            if (isPrime) {
                primeSum += number;
            } else {
                nonPrimeSum += number;
            }
        }

        command = dataArray[index++];
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);
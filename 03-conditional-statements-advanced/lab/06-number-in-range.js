function numberInRange(number) {
    if (number !== 0 && number >= -100 && number <= 100) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

numberInRange(0);
numberInRange(-25);
numberInRange(25);
function sequence2kPlus1(number) {
    let counter = 1;

    while (counter <= number) {
        console.log(counter);
        counter = counter * 2 + 1;
    }
}

sequence2kPlus1(31);
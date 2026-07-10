function depositCalculator(depositAmount, depositLengthMonths, yearlyPercentage) {
    const sum = depositAmount + depositLengthMonths * ((depositAmount * (yearlyPercentage / 100)) / 12);
    console.log(sum);
}

depositCalculator(200, 3, 5.7);
depositCalculator(2350, 6, 7);
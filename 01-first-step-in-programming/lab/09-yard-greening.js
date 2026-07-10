function printPriceForYardGreening(yardMeters) {
    const pricePerMeter = 7.61;
    const discountPercentage = 0.18;
    const price = yardMeters * pricePerMeter;
    const discount = price * discountPercentage;
    const finalPrice = price - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

printPriceForYardGreening(550);
console.log("=============")
printPriceForYardGreening(150);
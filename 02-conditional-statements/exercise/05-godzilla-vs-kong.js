function movieBudget(budget, personalCount, priceForClothesForPerson) {
    const decorPrice = budget * 0.1;
    let clothesPrice = personalCount * priceForClothesForPerson;

    if (personalCount > 150) {
        clothesPrice -= clothesPrice * 0.1;
    }
    const totalPrice = decorPrice + clothesPrice;

    if (totalPrice > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`)
    }
}

movieBudget(20000, 120, 55.5);
console.log("====================");
movieBudget(15437.62, 186, 57.99);
console.log("====================");
movieBudget(9587.88, 222, 55.68);
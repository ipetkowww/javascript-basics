function printTotalPriceForFood(dogsFoodCount, catsFoodCount) {
    const dogFoodPrice = 2.50;
    const catFoodPrice = 4;
    const totalPrice = (dogsFoodCount * dogFoodPrice) + (catsFoodCount * catFoodPrice);
    console.log(`${totalPrice} lv.`);
}

printTotalPriceForFood(5, 4);
printTotalPriceForFood(13, 9);
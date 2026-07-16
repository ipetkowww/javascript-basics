function toyShop(vacationPrice, puzzlesCount, dollsCount, bearsCount, minionsCount, trucksCount) {
    const puzzlePrice = 2.6;
    const dollPrice = 3;
    const bearPrice = 4.1;
    const minionsPrice = 8.2;
    const trucksPrice = 2;

    let finalPrice = (puzzlePrice * puzzlesCount) + (dollPrice * dollsCount) + (bearPrice * bearsCount)
        + (minionsPrice * minionsCount) + (trucksPrice * trucksCount)

    const toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (toysCount >= 50) {
        finalPrice -= (finalPrice * 0.25);
    }
    finalPrice -= finalPrice * 0.1;

    if (finalPrice >= vacationPrice) {
        console.log(`Yes! ${(finalPrice - vacationPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(vacationPrice - finalPrice).toFixed(2)} lv needed.`)
    }
}

toyShop(40.8, 20, 25, 30, 50, 10);
toyShop(320, 8, 2, 5, 5, 1)
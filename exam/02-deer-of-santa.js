function deerOfSanta(days, leftFood, foodFirstDeer, foodSecondDeer, foodThirdDeer) {
    let firstDeerNeedFood = days * foodFirstDeer;
    let secondDeerNeedFood = days * foodSecondDeer;
    let thirdDeerNeedFood = days * foodThirdDeer;
    let totalNeedFood = firstDeerNeedFood + secondDeerNeedFood + thirdDeerNeedFood;

    if (leftFood >= totalNeedFood) {
        console.log(`${Math.floor(leftFood - totalNeedFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalNeedFood - leftFood)} more kilos of food are needed.`);
    }
}

deerOfSanta(2, 10, 1, 1, 2);
deerOfSanta(5, 10, 2.1, 0.8, 11);
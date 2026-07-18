function newHouse(flowerType, flowersCount, budget) {
    let finalPrice = 0;

    switch (flowerType) {
        case "Roses":
            finalPrice = flowersCount * 5;
            if (flowersCount > 80) {
                finalPrice *= 0.90;
            }
            break;

        case "Dahlias":
            finalPrice = flowersCount * 3.8;
            if (flowersCount > 90) {
                finalPrice *= 0.85;
            }
            break;

        case "Tulips":
            finalPrice = flowersCount * 2.8;
            if (flowersCount > 80) {
                finalPrice *= 0.85;
            }
            break;

        case "Narcissus":
            finalPrice = flowersCount * 3;
            if (flowersCount < 120) {
                finalPrice *= 1.15;
            }
            break;

        case "Gladiolus":
            finalPrice = flowersCount * 2.5;
            if (flowersCount < 80) {
                finalPrice *= 1.20;
            }
            break;
    }

    if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`);
    }
}

newHouse("Roses", 55, 250);
newHouse("Tulips", 88, 260);
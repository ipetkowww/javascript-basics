function shopping(budget, videoCardsCount, cpuCount, ramCount) {
    const videoCardPrice = 250;
    const videoCardsSum = videoCardsCount * videoCardPrice;

    const cpuPrice = videoCardsSum * 0.35;
    const cpuSum = cpuCount * cpuPrice;

    const ramPrice = videoCardsSum * 0.1;
    const ramSum = ramCount * ramPrice;

    let totalPrice = videoCardsSum + cpuSum + ramSum;
    if (videoCardsCount > cpuCount) {
        totalPrice -= totalPrice * 0.15;
    }

    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
    }
}

shopping(900, 2, 1, 3);
shopping(920.45, 3, 1, 1);
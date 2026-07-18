function fishingBoat(budget, season, peopleCount) {
    let totalPrice;

    switch (season) {
        case "Spring":
            totalPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            totalPrice = 4200;
            break;
        case "Winter":
            totalPrice = 2600;
            break;
    }

    if (peopleCount <= 6) {
        totalPrice -= totalPrice * 0.1;
    } else if (peopleCount <= 11) {
        totalPrice -= totalPrice * 0.15;
    } else {
        totalPrice -= totalPrice * 0.25;
    }

    if (peopleCount %2 === 0 && season !== "Autumn") {
        totalPrice -= totalPrice * 0.05;
    }

    if (budget >= totalPrice) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(3000, "Summer", 11);
fishingBoat(3600, "Autumn", 6);
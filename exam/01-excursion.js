function excursion(peopleCount, nightsCount, cardsCount, museumTicketsCount) {
    let nightsPrice = nightsCount * 20;
    let cardsPrice = cardsCount * 1.60;
    let museumTicketsPrice = museumTicketsCount * 6;

    let totalPricePerPerson = nightsPrice + cardsPrice + museumTicketsPrice;
    let totalPrice = totalPricePerPerson * peopleCount;

    totalPrice += totalPrice * 0.25;

    console.log(totalPrice.toFixed(2));
}

excursion(20, 14, 30, 6);
excursion(131, 9, 33, 46);
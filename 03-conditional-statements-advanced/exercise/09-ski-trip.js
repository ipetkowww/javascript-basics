function skiTrip(days, room, review) {
    const nights = days - 1;
    let totalPrice;

    switch (room) {
        case "room for one person":
            totalPrice = nights * 18;
            break

        case "apartment":
            totalPrice = nights * 25;
            if (days < 10) {
                totalPrice -= totalPrice * 0.3;
            } else if (days >= 10 && days <= 15) {
                totalPrice -= totalPrice * 0.35;
            } else {
                totalPrice -= totalPrice * 0.5;
            }
            break;

        case "president apartment":
            totalPrice = nights * 35;
            if (days < 10) {
                totalPrice -= totalPrice * 0.1;
            } else if (days >= 10 && days <= 15) {
                totalPrice -= totalPrice * 0.15;
            } else {
                totalPrice -= totalPrice * 0.2;
            }
            break;
    }

    if (review === "positive") {
        totalPrice += totalPrice * 0.25;
    } else {
        totalPrice -= totalPrice * 0.1;
    }

    console.log(totalPrice.toFixed(2));
}

skiTrip(14, "apartment", "positive");
skiTrip(30, "president apartment", "negative");
skiTrip(12, "room for one person", "positive");
skiTrip(2, "apartment", "positive");
function fruitShop(product, day, quantity) {
    let price;
    const isWeekend = day === "Saturday" || day === "Sunday";
    const isWeekday =
        day === "Monday" ||
        day === "Tuesday" ||
        day === "Wednesday" ||
        day === "Thursday" ||
        day === "Friday";

    if (!isWeekday && !isWeekend) {
        console.log("error");
        return;
    }

    switch (product) {
        case "banana":
            price = isWeekend ? 2.70 : 2.50;
            break;
        case "apple":
            price = isWeekend ? 1.25 : 1.20;
            break;
        case "orange":
            price = isWeekend ? 0.90 : 0.85;
            break;
        case "grapefruit":
            price = isWeekend ? 1.60 : 1.45;
            break;
        case "kiwi":
            price = isWeekend ? 3.00 : 2.70;
            break;
        case "pineapple":
            price = isWeekend ? 5.60 : 5.50;
            break;
        case "grapes":
            price = isWeekend ? 4.20 : 3.85;
            break;
        default:
            console.log("error");
            return;
    }

    console.log((price * quantity).toFixed(2));
}

fruitShop("apple", "Tuesday", 2);
fruitShop("orange", "Sunday", 3);
fruitShop("kiwi", "Monday", 2.5);
fruitShop("grapes", "Saturday", 0.5);
fruitShop("tomato", "Monday", 0.5);
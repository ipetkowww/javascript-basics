function foodDelivery(chickenMenus, fishMenus, vegetarianMenus) {
    const chickenMenuPrice = 10.35;
    const fishMenuPrice = 12.4;
    const vegetarianMenuPrice = 8.15;
    const deliveryPrice = 2.5;

    const allMenusPrice = (chickenMenus * chickenMenuPrice) + (fishMenus * fishMenuPrice)
        + (vegetarianMenus * vegetarianMenuPrice);
    const desertPrice = allMenusPrice * 0.2;
    console.log(allMenusPrice + desertPrice + deliveryPrice)
}

foodDelivery(2, 4, 3);
foodDelivery(9, 2, 6);
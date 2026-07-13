function basketballEquipment(priceForYear) {
    const shoes = priceForYear - (priceForYear * 0.4);
    const jersey = shoes - (shoes * 0.2);
    const ball = jersey / 4;
    const accessories = ball / 5;

    console.log(priceForYear + shoes + jersey + ball + accessories);
}

basketballEquipment(365);
basketballEquipment(550);
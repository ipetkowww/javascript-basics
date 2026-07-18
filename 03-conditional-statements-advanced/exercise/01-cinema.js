function cinema(type, rowsCount, colsCount) {
    let price;

    switch (type) {
        case "Premiere":
            price = 12;
            break;
        case "Normal":
            price = 7.50
            break;
        case "Discount":
            price = 5;
            break;
    }

    console.log(`${(rowsCount * colsCount * price).toFixed(2)} leva`);
}

cinema("Premiere", 10, 12);
cinema("Normal", 21, 13);
cinema("Discount", 12, 30);
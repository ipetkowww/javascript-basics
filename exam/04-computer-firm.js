function computerFirm(input) {
    const modelsCount = Number(input[0]);
    let allSales = 0;
    let totalRating = 0;

    for (let i = 1; i <= modelsCount; i++) {
        let currentNumber = Number(input[i]);
        let rating = Number(currentNumber) % 10;
        let possibleSales = Math.floor(currentNumber / 10);
        totalRating += rating;

        if (rating === 3) {
            allSales += possibleSales * 0.5;
        } else if (rating === 4) {
            allSales += possibleSales * 0.7;
        } else if (rating === 5) {
            allSales += possibleSales * 0.85;
        } else if (rating === 6) {
            allSales += possibleSales;
        }
    }

    console.log(allSales.toFixed(2));
    console.log((totalRating / modelsCount).toFixed(2));
}

computerFirm(["3", "103", "103", "103"]);

computerFirm(["5",
    "122",
    "156",
    "202",
    "214",
    "185"]);

computerFirm((["2",
    "204",
    "206"]));
function journey(budget, season) {
    const isSummer = season === "summer";

    let destination;
    let percentage;

    if (budget <= 100) {
        destination = "Bulgaria";
        percentage = isSummer ? 0.3 : 0.7;
    } else if (budget <= 1000) {
        destination = "Balkans";
        percentage = isSummer ? 0.4 : 0.8;
    } else {
        destination = "Europe";
        percentage = 0.9;
    }

    const vacationType = destination === "Europe" || !isSummer ? "Hotel" : "Camp";

    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${(budget * percentage).toFixed(2)}`);
}

journey(50, "summer");
journey(75, "winter");
journey(312, "summer");
journey(678.53, "winter");
journey(1500, "summer");
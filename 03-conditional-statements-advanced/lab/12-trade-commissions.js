function tradeCommissions(city, salesCount) {
    let percent;

    if (salesCount < 0) {
        console.log("error");
        return;
    }

    if (salesCount <= 500) {
        switch (city) {
            case "Sofia": percent = 0.05; break;
            case "Varna": percent = 0.045; break;
            case "Plovdiv": percent = 0.055; break;
            default: console.log("error"); return;
        }
    } else if (salesCount <= 1000) {
        switch (city) {
            case "Sofia": percent = 0.07; break;
            case "Varna": percent = 0.075; break;
            case "Plovdiv": percent = 0.08; break;
            default: console.log("error"); return;
        }
    } else if (salesCount <= 10000) {
        switch (city) {
            case "Sofia": percent = 0.08; break;
            case "Varna": percent = 0.10; break;
            case "Plovdiv": percent = 0.12; break;
            default: console.log("error"); return;
        }
    } else {
        switch (city) {
            case "Sofia": percent = 0.12; break;
            case "Varna": percent = 0.13; break;
            case "Plovdiv": percent = 0.145; break;
            default: console.log("error"); return;
        }
    }

    console.log((salesCount * percent).toFixed(2));
}

tradeCommissions("Sofia", 1500);
tradeCommissions("Plovdiv", 499.99);
tradeCommissions("Varna", 3874.50);
tradeCommissions("Kaspichan", -50);
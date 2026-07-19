function traveling(dataArray) {
    let country = dataArray[0];
    let minimumBudget = dataArray[1];
    let savedMoney = 0;

    for (let i = 2; i < dataArray.length; i++) {
        if (dataArray[i] === "End") {
            return;
        }

        if (isNaN(dataArray[i])) {
            country = dataArray[i];
            minimumBudget = dataArray[i + 1];
            i++;
            savedMoney = 0;
            continue;
        }

        savedMoney += Number(dataArray[i]);
        if (savedMoney >= minimumBudget) {
            console.log(`Going to ${country}!`);
        }
    }
}

traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);

traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);
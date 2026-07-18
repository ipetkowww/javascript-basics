function vacation(dataArray) {
    let index = 0;

    const neededMoney = Number(dataArray[index++]);
    let currentMoney = Number(dataArray[index++]);

    let days = 0;
    let spendingDays = 0;

    while (currentMoney < neededMoney) {
        const action = dataArray[index++];
        const amount = Number(dataArray[index++]);

        days++;

        if (action === "spend") {
            currentMoney -= amount;

            if (currentMoney < 0) {
                currentMoney = 0;
            }

            spendingDays++;

            if (spendingDays === 5) {
                console.log("You can't save the money.");
                console.log(days);
                return;
            }
        } else if (action === "save") {
            currentMoney += amount;
            spendingDays = 0;
        }
    }

    console.log(`You saved the money for ${days} days.`);
}

vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);

vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"]);

vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);
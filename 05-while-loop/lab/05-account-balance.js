function accountBalance(dataArray) {
    let index = 0;
    let input = dataArray[index++];
    let total = 0;

    while(input !== "NoMoreMoney") {
        let money = Number(input);
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${money.toFixed(2)}`);
        total += money;

        input = dataArray[index++];
    }
    console.log(`Total: ${total.toFixed(2)}`)
}

accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);

accountBalance(["120",
    "45.55",
    "-150"]);
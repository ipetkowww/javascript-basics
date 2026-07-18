function cleverLily(age, washerMachinePrice, toyPrice) {
    let toysCount = 0;
    let birthdayMoney = 10;
    let savedMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savedMoney += birthdayMoney;
            birthdayMoney += 10;
            savedMoney--;
        } else {
            toysCount++;
        }
    }

    const totalMoney = savedMoney + toysCount * toyPrice;

    if (totalMoney >= washerMachinePrice) {
        console.log(`Yes! ${(totalMoney - washerMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerMachinePrice - totalMoney).toFixed(2)}`);
    }
}

cleverLily(10, 170, 6);
cleverLily(21, 1570.98, 3);
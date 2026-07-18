function trekkingMania(dataArray) {
    let totalPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kalimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < dataArray.length; i++) {
        const peopleInGroup = Number(dataArray[i]);
        totalPeople += peopleInGroup;

        if (peopleInGroup <= 5) {
            musala += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            monblan += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            kalimandjaro += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            k2 += peopleInGroup;
        } else {
            everest += peopleInGroup;
        }
    }

    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kalimandjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}

trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"]);
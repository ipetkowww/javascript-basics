function tennisRanklist(dataArray) {
    const tournaments = Number(dataArray[0]);
    let startingPoints = Number(dataArray[1]);
    let wonPoints = 0;
    let wonTournaments = 0;

    for (let i = 2; i < dataArray.length; i++) {
        const currentResult = dataArray[i];
        switch (currentResult) {
            case "W":
                wonPoints += 2000;
                wonTournaments++;
                break;
            case "F":
                wonPoints += 1200;
                break;

            case "SF":
                wonPoints += 720;
                break;
        }
    }

    console.log(`Final points: ${startingPoints + wonPoints}`);
    console.log(`Average points: ${Math.floor(wonPoints / tournaments)}`);
    console.log(`${((wonTournaments / tournaments) * 100).toFixed(2)}%`);
}

tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);

tennisRanklist(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"]);
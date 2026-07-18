function cake(dataArray) {
    let index = 0;

    const cakeLength = Number(dataArray[index++]);
    const cakeWidth = Number(dataArray[index++]);
    let pieces = cakeLength * cakeWidth;

    let command = dataArray[index++];

    while (command !== "STOP") {
        let takenPieces = Number(command);
        pieces -= takenPieces;
        if (pieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
            return;
        }
        command = dataArray[index++];
    }

    console.log(`${pieces} pieces are left.`);
}

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);
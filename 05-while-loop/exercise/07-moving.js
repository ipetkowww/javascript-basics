function moving(dataArray) {
    let index = 0;

    const width = Number(dataArray[index++]);
    const length = Number(dataArray[index++]);
    const height = Number(dataArray[index++]);
    const availableSpace = width * height * length;

    let command = dataArray[index++];
    let usedSpace = 0;

    while (command !== "Done") {
        usedSpace += Number(command);
        if (usedSpace > availableSpace) {
            console.log(`No more free space! You need ${usedSpace - availableSpace} Cubic meters more.`)
            return;
        }
        command = dataArray[index++];
    }

    console.log(`${availableSpace - usedSpace} Cubic meters left.`)
}

moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]);
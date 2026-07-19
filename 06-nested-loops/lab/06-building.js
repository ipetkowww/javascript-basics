function building(floors, rooms) {
    let indicator;

    for (let i = floors; i >= 1; i--) {
        for (let j = 0; j < rooms; j++) {
            if (i === floors) {
                indicator = "L";
            } else if (i % 2 === 0) {
                indicator = "O";
            } else {
                indicator = "A";
            }
            process.stdout.write(`${indicator}${i}${j} `);
        }
        console.log();
    }
}

building(6, 4);
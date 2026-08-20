function everest(input) {
    let index = 0;
    let command = input[index++];
    let height = 5364;
    let days = 1;

    while (command !== "END") {
        let text = command;
        let meters = Number(input[index++]);

        if (text === "Yes") {
            days++;
            if (days > 5) {
                console.log("Failed!");
                console.log(height);
                return;
            }
        }

        height += meters;

        if (height >= 8848) {
            console.log(`Goal reached for ${days} days!`);
            return;
        }

        command = input[index++];
    }

    console.log("Failed!");
    console.log(height);
}

everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
everest(["Yes", "1000", "Yes", "945", "No", "1200", "END"]);
everest(["Yes", "700", "END"]);
everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);
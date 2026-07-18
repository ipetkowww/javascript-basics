function walking(dataArray) {
    const goal = 10_000;

    let index = 0;
    let totalSteps = 0;
    let currentSteps = 0;
    let wantGoHome = false;

    while (true) {
        let input = dataArray[index++];
        if (input === "Going home") {
            currentSteps = Number(dataArray[index++]);
            wantGoHome = true;
        } else {
            currentSteps = Number(input);
        }

        totalSteps += currentSteps;

        if (totalSteps >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - goal} steps over the goal!`);
            return;
        }

        if (wantGoHome) {
            console.log(`${goal - totalSteps} more steps to reach goal.`);
            return;
        }
    }
}

walking(["1000",
    "1500",
    "2000",
    "6500"])
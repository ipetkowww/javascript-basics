function examPreparation(dataArray) {
    let index = 0;
    let maxPoorGrades = Number(dataArray[index++]);

    let poorGrades = 0;
    let totalScore = 0;
    let problemsCount = 0;
    let lastProblem = "";

    let problemName = dataArray[index++];

    while (problemName !== "Enough") {
        lastProblem = problemName;
        const score = Number(dataArray[index++]);

        totalScore += score;
        problemsCount++;

        if (score <= 4) {
            poorGrades++;
            if (poorGrades === maxPoorGrades) {
                console.log(`You need a break, ${poorGrades} poor grades.`);
                return;
            }
        }

        problemName = dataArray[index++];
    }

    console.log(`Average score: ${(totalScore / problemsCount).toFixed(2)}`);
    console.log(`Number of problems: ${problemsCount}`);
    console.log(`Last problem: ${lastProblem}`);
}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
console.log("======")
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]);
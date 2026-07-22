function trainTheTrainers(input) {
    let index = 0;
    const juryCount = Number(input[index++]);

    let command = input[index++];
    let totalGrades = 0;
    let totalCount = 0;

    while (command !== "Finish") {
        const presentation = command;
        let presentationSum = 0;

        for (let i = 0; i < juryCount; i++) {
            let grade = Number(input[index++]);
            presentationSum += grade;
            totalGrades += grade;
            totalCount++;
        }

        console.log(`${presentation} - ${(presentationSum / juryCount).toFixed(2)}.`);
        command = input[index++];
    }

    console.log(`Student's final assessment is ${(totalGrades / totalCount).toFixed(2)}.`);
}

trainTheTrainers([
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
]);
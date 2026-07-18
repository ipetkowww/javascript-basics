function graduation(input) {
    let index = 0;
    const studentName = input[index++];

    let currentGrade = 0;
    let totalGrades = 0;
    let failedCount = 0;

    while (currentGrade < 12) {
        const annualGrade = Number(input[index++]);

        if (annualGrade < 4) {
            failedCount++;

            if (failedCount > 1) {
                console.log(`${studentName} has been excluded at ${currentGrade + 1} grade`);
                return;
            }
        } else {
            totalGrades += annualGrade;
            currentGrade++;
        }
    }

    console.log(`${studentName} graduated. Average grade: ${(totalGrades / 12).toFixed(2)}`);
}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
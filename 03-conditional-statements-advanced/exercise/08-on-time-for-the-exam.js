function onTimeForTheExam(examHour, examMinute, arrivalHour, arrivalMinute) {
    const examTime = examHour * 60 + examMinute;
    const arrivalTime = arrivalHour * 60 + arrivalMinute;

    const difference = arrivalTime - examTime;
    const absDifference = Math.abs(difference);

    if (difference > 0) {
        console.log("Late");
    } else if (difference >= -30) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    if (difference !== 0) {
        const hours = Math.floor(absDifference / 60);
        const minutes = absDifference % 60;

        if (hours === 0) {
            console.log(
                `${minutes} minutes ${difference > 0 ? "after" : "before"} the start`
            );
        } else {
            console.log(
                `${hours}:${minutes.toString().padStart(2, "0")} hours ${difference > 0 ? "after" : "before"} the start`
            );
        }
    }
}

onTimeForTheExam(9, 30, 9, 50);
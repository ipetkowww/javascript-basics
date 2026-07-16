function workingHours(hour, day) {
    const isWorkingHour = hour >= 10 && hour <= 18;

    if (day === "Sunday") {
        console.log("closed");
    } else {
        console.log(isWorkingHour ? "open" : "closed");
    }
}

workingHours(11, "Monday");
workingHours(19, "Friday");
workingHours(11, "Sunday");
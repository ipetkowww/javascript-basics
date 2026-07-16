function printWorkingOrWeekendDay(day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break
    }
}

printWorkingOrWeekendDay("Monday");
printWorkingOrWeekendDay("Tuesday");
printWorkingOrWeekendDay("Wednesday");
printWorkingOrWeekendDay("Thursday");
printWorkingOrWeekendDay("Friday");
printWorkingOrWeekendDay("Saturday");
printWorkingOrWeekendDay("Sunday");
printWorkingOrWeekendDay("April");
function dayOfWeek(number) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (number < 1 || number > 7) {
        console.log("Error");
    } else {
        console.log(days[number - 1]);
    }
}

dayOfWeek(0);
dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(4);
dayOfWeek(5);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(8);
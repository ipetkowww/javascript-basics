function printSpeedInfo(speed) {
    if (speed <= 10) {
        console.log("slow");
    } else if (speed <= 50) {
        console.log("average");
    } else if (speed <= 150) {
        console.log("fast");
    } else if (speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}

printSpeedInfo(8);
printSpeedInfo(49.5);
printSpeedInfo(126);
printSpeedInfo(160);
printSpeedInfo(3500);
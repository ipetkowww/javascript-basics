function printNumberPosition(number) {
    if (number < 100) {
        console.log("Less than 100");
    } else if (number <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}

printNumberPosition(95);
printNumberPosition(100);
printNumberPosition(120);
printNumberPosition(210);
printNumberPosition(200);
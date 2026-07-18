function readText(dataArray) {
    let index = 0;
    let text = dataArray[index];

    while (text !== "Stop") {
        console.log(text);
        text = dataArray[++index];
    }
}

readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);
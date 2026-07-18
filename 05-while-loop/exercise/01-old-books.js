function oldBook(dataArray) {
    let index = 0;
    let book = dataArray[index++];

    let input = dataArray[index++];
    let checkedBook = 0;
    let found = false;

    while (input !== "No More Books") {
        if (input === book) {
            console.log(`You checked ${checkedBook} books and found it.`);
            found = true;
            break;
        }
        checkedBook++;
        input = dataArray[index++];
    }

    if (!found) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBook} books.`);
    }
}

oldBook(["Troy",
    "Stronger",
    "Life Style",
    "Troy"]);

oldBook(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]);

oldBook(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"]);
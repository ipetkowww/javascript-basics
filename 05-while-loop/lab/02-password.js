function password(dataArray) {
    let index = 0;

    let username = dataArray[index++];
    let password = dataArray[index++];
    let inputPassword = dataArray[index++];

    while (password !== inputPassword) {
        inputPassword = dataArray[index++];
    }

    console.log(`Welcome ${username}!`);
}

password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"]);


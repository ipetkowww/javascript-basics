function passwordGuess(password) {
    const correctPassword = "s3cr3t!P@ssw0rd";
    console.log(password === correctPassword ? "Welcome" : "Wrong password!");
}

passwordGuess("qwerty");
passwordGuess("s3cr3t!P@ssw0rd");
passwordGuess("s3cr3t!p@ss");
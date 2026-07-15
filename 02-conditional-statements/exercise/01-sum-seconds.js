function sumSeconds(first, second, third) {
    const totalTile = first + second + third;
    const minutes = Math.floor(totalTile / 60);
    const seconds = totalTile % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(35, 45, 44);
sumSeconds(22, 7, 34);
sumSeconds(50, 50, 49);
sumSeconds(14, 12, 10);
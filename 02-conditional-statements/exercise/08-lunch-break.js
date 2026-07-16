function lunchBreak(serialName, episodeLength, breakLength) {
    const timeForLunch = breakLength / 8;
    const timeForRest = breakLength / 4;
    const leftTime = breakLength - timeForLunch - timeForRest;

    if (leftTime >= episodeLength) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(leftTime - episodeLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeLength - leftTime)} more minutes.`);
    }
}

lunchBreak("Game of Thrones", 60, 96);
lunchBreak("Teen Wolf", 48, 60);
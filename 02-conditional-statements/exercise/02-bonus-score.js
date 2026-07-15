function bonusScore(points) {
    let bonus;

    if (points <= 100) {
        bonus = 5;
    } else if (points <= 1000) {
        bonus = points * 0.2;
    } else {
        bonus = points * 0.1;
    }

    if (points % 2 === 0) {
        bonus += 1;
    }
    if (points % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(bonus + points);
}

bonusScore(20);
bonusScore(175);
bonusScore(2703);
bonusScore(15875);
function combinations(end) {
    let validCombination = 0;

    for (let i = 0; i <= end; i++) {
        for (let j = 0; j <= end; j++) {
            for (let k = 0; k <= end; k++) {
                if (i + j + k === end) {
                    validCombination++;
                }
            }
        }
    }

    console.log(validCombination);
}

combinations(25);
combinations(20);
combinations(5);
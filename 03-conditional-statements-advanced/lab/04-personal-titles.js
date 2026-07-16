function personalTitles(age, gender) {
    const isAdult = age >= 16;

    if (gender === "m") {
        console.log(isAdult ? "Mr." : "Master");
    } else {
        console.log(isAdult ? "Ms." : "Miss");
    }
}

personalTitles(12, "f");
personalTitles(17, "m");
personalTitles(25, "f");
personalTitles(13.5, "m");
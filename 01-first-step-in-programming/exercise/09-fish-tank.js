function fishTank(length, width, height, percent) {
    const volume = length * width * height;
    const volumeLiters = volume / 1000;

    console.log(volumeLiters * (1 - (percent / 100)));
}

fishTank(85, 75, 47, 17);
fishTank(105, 77, 89, 18.5);
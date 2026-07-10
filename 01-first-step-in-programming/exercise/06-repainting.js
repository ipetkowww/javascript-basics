function repaintingPrice(naylon, paint, dilutant, hours) {
    const naylonPrice = 1.5;
    const paintPrice = 14.5;
    const dilutantPrice = 5;

    const naylonSum = (naylon + 2) * naylonPrice;
    const paintSum = (paint + (paint * 0.1)) * paintPrice;
    const dilutantSum = dilutant * dilutantPrice;
    const bagsSum = 0.4;
    const totalPriceMaterials = naylonSum + paintSum + dilutantSum + bagsSum;
    const priceMasters = (totalPriceMaterials * 0.3) * hours;
    const finalPrice = totalPriceMaterials + priceMasters;

    console.log(finalPrice);
}

repaintingPrice(10, 11, 4, 8);
repaintingPrice(5, 10, 10, 1);
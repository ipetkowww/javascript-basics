function suppliesForSchool(pensCount, markersCount, cleanerLiters, discountPercentage) {
    const pensPrice = 5.8;
    const markersPrice = 7.2;
    const cleanerLiterPrice = 1.2;

    const priceForAllMaterials = (pensCount * pensPrice) + (markersCount * markersPrice) + (cleanerLiters * cleanerLiterPrice);
    const priceWithDiscount = priceForAllMaterials - (priceForAllMaterials * (discountPercentage / 100));

    console.log(priceWithDiscount);
}

suppliesForSchool(2, 3, 4, 25);
suppliesForSchool(4, 2, 5, 13);
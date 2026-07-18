function hotelRoom(month, nightsCount) {
    let studioPrice;
    let apartmentPrice;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50 * nightsCount;
            apartmentPrice = 65 * nightsCount;
            if (nightsCount > 14) {
                studioPrice -= studioPrice * 0.3;
            } else if (nightsCount > 7) {
                studioPrice -= studioPrice * 0.05;
            }
            break;

        case "June":
        case "September":
            studioPrice = 75.2 * nightsCount;
            apartmentPrice = 68.7 * nightsCount;
            if (nightsCount > 14) {
                studioPrice -= studioPrice * 0.2;
            }
            break;

        case "July":
        case "August":
            studioPrice = 76 * nightsCount;
            apartmentPrice = 77 * nightsCount;
            break;
    }

    if (nightsCount > 14) {
        apartmentPrice -= apartmentPrice * 0.1;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}

hotelRoom("May", 15);
hotelRoom("June", 14);
hotelRoom("August", 20);
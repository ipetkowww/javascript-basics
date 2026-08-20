function courierExpress(deliveryWeight, serviceType, distance) {
    let pricePerKm;
    let surchargePercent;

    if (deliveryWeight < 1) {
        pricePerKm = 0.03;
        surchargePercent = 0.80;
    } else if (deliveryWeight < 10) {
        pricePerKm = 0.05;
        surchargePercent = 0.40;
    } else if (deliveryWeight < 40) {
        pricePerKm = 0.10;
        surchargePercent = 0.05;
    } else if (deliveryWeight < 90) {
        pricePerKm = 0.15;
        surchargePercent = 0.02;
    } else {
        pricePerKm = 0.20;
        surchargePercent = 0.01;
    }

    let price = pricePerKm * distance;

    if (serviceType === "express") {
        price += deliveryWeight * surchargePercent * pricePerKm * distance;
    }

    console.log(`The delivery of your shipment with weight of ${deliveryWeight.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}

courierExpress(1.5, "standard", 100);
courierExpress(87, "express", 130);
courierExpress(20, "standard", 349);
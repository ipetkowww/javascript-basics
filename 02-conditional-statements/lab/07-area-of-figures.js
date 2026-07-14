function printArea(figure, width, height) {
    let area;

    switch (figure) {
        case "square":
            area = width * width;
            break;
        case "rectangle":
            area = width * height;
            break;
        case "circle":
            area = (width * width) * Math.PI;
            break;
        case "triangle":
            area = (width * height) / 2;
            break
    }

    console.log(area.toFixed(3));
}

printArea("square", 5);
printArea("rectangle", 7, 2.5);
printArea("circle", 6);
printArea("triangle", 4.5, 20);
function getRandomPoint(canvas, size) {
    var centerX = canvas.width/2;
    var centerY = canvas.height/2;
    var constantX = canvas.width/2.5;
    var constantY = canvas.height/2.5;

    var x_min = centerX - constantX;
    var x_max = centerX + constantX;
    var y_min = centerY - constantY;
    var y_max = centerY + constantY;

    var x = getRandomInt(x_min, x_max);
    var y = getRandomInt(y_min, y_max);
    return new Point(x, y, size);
}

function getNRandomPoints(canvas, n, size) {
    var generatedPoints = [];
    for (i in [...Array(n).keys()]) {
        generatedPoints.push(getRandomPoint(canvas, size));
    }
    console.log(generatedPoints);
    return generatedPoints;
}
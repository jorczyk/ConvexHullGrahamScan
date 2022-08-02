const canvas = document.getElementById("mainCanvas");
canvas.height = window.innerHeight-10;
canvas.width = window.innerWidth-10;
const margin = 10;
const context = canvas.getContext("2d");
setupMouseClickListener(canvas)


function drawPoints(canvas, points, withText) {
    points.forEach(element => {
        element.draw(context);
        if (withText && element.drawText(context));
    });
}

const points = getNRandomPoints(canvas, 400, 10);
drawPoints(canvas, points, false);
var convexHullPoints = calculateGrahamSweep(points, false);

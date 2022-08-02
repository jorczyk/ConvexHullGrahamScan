// import { getRandomInt } from "./calc";

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

// const points = getDummyPoints2();
const points = getNRandomPoints(canvas, 20, 10);
// const points = easyPoints();

drawPoints(canvas, points, false);

// {
//     var point1 = new Point(0, 0, 5);
//     var point2 = new Point(119, 0, 5);
//     var point3 = new Point(2, 5, 5);
//     var vector1 = new Vector(point1, point2);
//     var vector2 = new Vector(point1, point3);
//     var cosine = vector1.calculateCosine(vector2);
//     console.log(cosine);

//     var cosine2 = point3.calculateCosine(point1);
//     console.log(cosine2);
// }

var convexHullPoints = calculateGrahamSweep(points, false);

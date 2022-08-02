function getStartingPoint(points) {
    var biggestYPoint = points[0];
    var biggestYPointIndex = 0;
    for (let i = 1; i < points.length; i++) {
        var currentPoint = points[i];
        if(currentPoint.y > biggestYPoint.y) {
            biggestYPoint = currentPoint;
            biggestYPointIndex = i;
        }
        if(currentPoint.y == biggestYPoint.y && currentPoint.x < biggestYPoint.x) {
            biggestYPoint = currentPoint;
            biggestYPointIndex = i;
        }
    }
    return [biggestYPoint, biggestYPointIndex];
}

function setStartingPoint(point, convexHull) {
    point.color("#ebdb34");
    convexHull[0] = startingPoint;
}

function calculateCosineForReminingPoints(points, startingPoint) {
    points.forEach(point => {
        point.calculateCosine(startingPoint);
    });
}

function prepareRemainingPoints(points, startingPoint) {
    calculateCosineForReminingPoints(points, startingPoint);
    sortPointsByCosine(startingPoint, points);
    removeSameAngledPoints(points, startingPoint);
}

function pushTwoFirstPoints(convexHull, convexHullObj, remainingPoints) {
    convexHull.push(remainingPoints[0]);
    convexHullObj.push(remainingPoints[0]);
    convexHull.push(remainingPoints[1]);
    convexHullObj.push(remainingPoints[1]);
    remainingPoints[0].color("#03f0fc");
    remainingPoints[1].color("#03f0fc");
}

function calculateGrahamSweep(points, stepByStep) {
    var convexHull = [];
    var convexHullObj = new ConvexHull([]);
    var startingPointResult = getStartingPoint(points);
    var startingPoint = startingPointResult[0]
    var startingPointIndex = startingPointResult[1]
    convexHull[0] = startingPoint;
    convexHullObj.setStartingPoint(startingPoint);
    points.splice(startingPointIndex,1);
    prepareRemainingPoints(points, startingPoint);

    if(points < 3) {
        alert("Cannot create convex hull from less than 3(4) points");
    }

    pushTwoFirstPoints(convexHull, convexHullObj, points);

    var i = 2;
    var n = points.length;

    if(stepByStep) {
        document.addEventListener('keydown', (event) => {
            if(i < n){
                var candidate = points[i];
                candidate.color("#54f542");

                while(turnOrientation(convexHullObj.getSecondToLast(), convexHullObj.getLast(), candidate) == 2) {
                    convexHull.pop();
                    convexHullObj.pop();
                    console.log(`ConvexHullSize: ${convexHull.length}`);
                }

                // if (isLeftTurn == 0) {
                //     //remove
                //     //add
                //     //TODO
                // }

                if(turnOrientation(convexHullObj.getSecondToLast(), convexHullObj.getLast(), candidate) == 1) {
                    convexHull.push(candidate);
                    convexHullObj.push(candidate);
                }

                i++;
                console.log(`Step: ${i}`);
                console.log(convexHull);
            } else {
                convexHull.forEach(element => {element.color("#FF0000");})
                convexHullObj.drawComplete(context);
            }
        }, false);
    } else {
        for (let i = 2; i < n; i++) {
        var candidate = points[i];
        candidate.color("#54f542");

        while(turnOrientation(convexHull[convexHull.length-2], convexHull[convexHull.length-1], candidate) == 2) {
            convexHull.pop();
        }

        // if (isLeftTurn == 0) {
        //     //remove
        //     //add
        //     //TODO
        // }

        if(turnOrientation(convexHull[convexHull.length-2], convexHull[convexHull.length-1], candidate) == 1) {
            convexHull.push(candidate);
        }
        // i++;

        // Alert the key name and key code on keydown
        console.log(`Step: ${i}`);
        console.log(convexHull);
    }
        convexHull.forEach(element => {element.color("#FF0000");})
        console.log(convexHull);
        var convexHullObject = new ConvexHull(convexHull);
        convexHullObject.drawComplete(context);
    }
    return convexHull;
}


function sortPointsByCosine(startingPoint, points) {
    points.sort(function (first, second) {
        if (first.cosine > second.cosine) {
           return -1;
        }
        if (first.cosine < second.cosine) {
           return 1;
        }
        return 0;
     });
}

function removeSameAngledPoints(points, startingPoint) {
    for (let i = 1; i < points.length; i++) {
        var currentPoint = points[i];
        var previousPoint = points[i-1];
        if(currentPoint.cosine == points[i-1].cosine){
            if(currentPoint.calculateDistance(startingPoint) > previousPoint.calculateDistance(startingPoint)) {
                points.splice(i-1,1);
            } else {
                points.splice(i,1);
            }
            i--;
        }
    }
}

function turnOrientation(p1, p2, p3) {
    let val = (p2.y - p1.y) * (p3.x - p2.x) - (p2.x - p1.x) * (p3.y - p2.y);
   
    if (val == 0) return 0; // collinear
   
    // clock or counterclock wise
    return (val > 0) ? 1 : 2;
  }
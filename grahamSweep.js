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
    var newPoints = points;
    newPoints.splice(biggestYPointIndex,1);
    biggestYPoint.color("#ebdb34");
    return [biggestYPoint, newPoints];
}

function calculateGrahamSweep(points, stepByStep) {
    console.log(`Initial points: ${points.length}`)
    var convexHull = [];
    var startingPointResult = getStartingPoint(points);
    var startingPoint = startingPointResult[0]
    convexHull[0] = startingPoint;
    var remainingPoints = startingPointResult[1];
    remainingPoints.forEach(element => {
        element.calculateCosine(startingPoint);
    });
    sortPointsByCosine(startingPointResult[0], remainingPoints);
    removeSameAngledPoints(remainingPoints, startingPoint);
    console.log("POINTS TO BE REGARDED");
    console.log(remainingPoints);

    if(remainingPoints < 3) {
        alert("Cannot create convex hull from less than 3(4) points");
    }

    convexHull.push(remainingPoints[0]);
    convexHull.push(remainingPoints[1]);
    remainingPoints[0].color("#03f0fc");
    remainingPoints[1].color("#03f0fc");

    var i = 2;
    var n = remainingPoints.length;

    if(stepByStep) {
        document.addEventListener('keydown', (event) => {
            if(i < n){
                var candidate = remainingPoints[i];
                candidate.color("#54f542");

                console.log("PRINTING cancidate")
                console.log(convexHull);
                console.log(candidate);

                while(turnOrientation(convexHull[convexHull.length-2], convexHull[convexHull.length-1], candidate) == 2) {
                    convexHull.pop();
                    console.log(`ConvexHullSize: ${convexHull.length}`);
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
                i++;
                console.log(`Step: ${i}`);
                console.log(convexHull);
            } else {
                convexHull.forEach(element => {element.color("#FF0000");})
                console.log(convexHull);
                var convexHullObject = new ConvexHull(convexHull);
                convexHullObject.drawComplete(context);
            }
        }, false);
    } else {
        for (let i = 2; i < n; i++) {
        var candidate = remainingPoints[i];
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
    console.log("Printing turn orientation");
    let val = (p2.y - p1.y) * (p3.x - p2.x) - (p2.x - p1.x) * (p3.y - p2.y);
   
    if (val == 0) return 0; // collinear
   
    // clock or counterclock wise
    return (val > 0) ? 1 : 2;
  }
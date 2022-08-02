const pointsSize = 20;

// function getRandomPoints(canvas,n) {
//     return getNRandomPoints(canvas, n);
// }

function getDummyPoints() {
    var dummyPoints = [];
    dummyPoints.push(new Point(292, 225, pointsSize));
    dummyPoints.push(new Point(154, 232, pointsSize));
    dummyPoints.push(new Point(413, 135, pointsSize));
    dummyPoints.push(new Point(472, 216, pointsSize));
    dummyPoints.push(new Point(296, 739, pointsSize));
    dummyPoints.push(new Point(595, 783, pointsSize));
    dummyPoints.push(new Point(337, 122, pointsSize));
    dummyPoints.push(new Point(337, 122, pointsSize));
    dummyPoints.push(new Point(337, 122, pointsSize));
    dummyPoints.push(new Point(337, 122, pointsSize));
    dummyPoints.push(new Point(337, 122, pointsSize));
    return dummyPoints;
}

function easyPoints() {
    var dummyPoints = [];
    dummyPoints.push(new Point(292, 225, pointsSize));
    dummyPoints.push(new Point(154, 232, pointsSize));
    dummyPoints.push(new Point(413, 135, pointsSize));
    dummyPoints.push(new Point(472, 216, pointsSize));
    dummyPoints.push(new Point(296, 739, pointsSize));
    dummyPoints.push(new Point(595, 783, pointsSize));
    dummyPoints.push(new Point(337, 122, pointsSize));
    dummyPoints.push(new Point(337, 122, pointsSize));
    dummyPoints.push(new Point(337, 122, pointsSize));
    dummyPoints.push(new Point(337, 122, pointsSize));
    dummyPoints.push(new Point(337, 122, pointsSize));
    dummyPoints.push(new Point(700, 800, pointsSize));
    return dummyPoints;
}

function getDummyPoints2() {
    var dummyPoints = [];
    dummyPoints.push(new Point(592, 782, pointsSize));
    dummyPoints.push(new Point(632, 277, pointsSize));
    dummyPoints.push(new Point(679, 719, pointsSize));
    dummyPoints.push(new Point(201, 364, pointsSize));
    dummyPoints.push(new Point(489, 458, pointsSize));
    return dummyPoints;
}

// const getCursorPosition = (canvas, event) => {
//     const x = event.offsetX
//     const y = event.offsetY
//     console.log(x, y)
//   }

// function setupMouseClickListener(canvas) {
//     let mouseclickPoints = []
//     canvas.addEventListener('mousedown', (e) => {
//         const x = e.offsetX
//         const y = e.offsetY
//         mouseclickPoints.push(new Point(x, y, pointsSize));

//     })
// }
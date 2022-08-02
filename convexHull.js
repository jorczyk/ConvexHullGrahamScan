class ConvexHull{
    constructor(points){
        this.points = points;
    }

    push(point) {
        this.points.push(point);
    }

    pop(point) {
        this.points.pop();
    }

    get(index) {
        return this.points[index];
    }

    length() {
        return this.points.lenght;
    }

    setStartingPoint(point) {
        this.points[0] = point;
    }

    drawComplete(context) {
        this.points.forEach(point => {point.color("#FF0000");})
        this.draw(context);
        console.log(this.points[this.points.length-1]);
        console.log(this.points[0]);
        context.moveTo(this.points[this.points.length-1].x, this.points[this.points.length-1].y);
        context.lineTo(this.points[0].x, this.points[0].y);
        context.stroke();
    }

    draw(context) {
        console.log("DRAWING CONVEX HULL");
        context.setLineDash([]);
        context.beginPath();
        context.moveTo(this.points[0].x, this.points[0].y);
        this.points.forEach(point => {
            context.lineTo(point.x, point.y);
        });
        // context.lineTo(this.points[0].x, this.points[0].y);
        context.stroke();
    }
}
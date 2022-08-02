class ConvexHull{
    constructor(points){
        this.points = points;
    }

    draw(context) {
        console.log("DRAWING CONVEX HULL");
        context.setLineDash([]);
        context.beginPath();
        context.moveTo(this.points[0].x, this.points[0].y);
        this.points.forEach(point => {
            context.lineTo(point.x, point.y);
        });
        context.lineTo(this.points[0].x, this.points[0].y);
        context.stroke();
    }
}
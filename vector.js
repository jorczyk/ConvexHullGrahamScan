class Vector{
    constructor(startingPoint,endPoint, context){
        this.startingPoint=startingPoint;
        this.endPoint=endPoint;
        this.xLength = endPoint.x-startingPoint.x;
        this.yLength = endPoint.y-startingPoint.y;
        this.length = Math.sqrt(Math.pow(this.xLength,2)+Math.pow(this.yLength,2));
        this.context = context;
    }

    calculateScalarProduct(other) {
        return this.xLength * other.xLength + this.yLength * other.yLength;
    }

    calculateCosine(other) {
        return this.calculateScalarProduct(other)/(this.length * other.length);
    }

    draw() {
        this.context.setLineDash([5, 15]);
        this.context.beginPath();
        this.context.moveTo(this.startingPoint.x, this.startingPoint.y);
        this.context.lineTo(this.endPoint.x, this.endPoint.y);
        this.context.stroke();
    }
}
class Point{
    constructor(x,y,side){
        this.x=x;
        this.y=y;
        this.side=side;
        this.cosine = null;
        this.context = null;
    }

    draw(ctx){
        ctx.fillRect(
            this.x-this.side/2,
            this.y-this.side/2,
            this.side,
            this.side
        );
        this.context = ctx;
    }

    drawText(ctx) {
        ctx.font = '15px serif';
        ctx.fillText(`x: ${this.x}, y:${this.y}`, this.x+5, this.y+5);
    }

    color(color) {
        this.context.fillStyle = color;
        this.context.fillRect(
            this.x-this.side/2,
            this.y-this.side/2,
            this.side,
            this.side
        );
    }

    calculateDistance(other) {
        return Math.sqrt(Math.pow(this.x-other.x,2) + Math.pow(this.y-other.y,2));
    }

    calculateCosine(other) {
        var artificialVector = new Vector(other, other.getArtificialPointForVector(), this.context);
        artificialVector.draw();
        var measuredVector = new Vector(other, this, this.context);
        measuredVector.draw();
        this.cosine = measuredVector.calculateCosine(artificialVector);
        return this.cosine;
    }

    getArtificialPointForVector() {
        return new Point((this.x + 500), this.y, 5);
    }
}
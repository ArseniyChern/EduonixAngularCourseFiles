class Furniture {
    dimension: number;
    height: number;
    width: number;
    length: number;

    protected constructor(dimension: number) {
        this.dimension = dimension;
    }

    getSize(): number {
        if (this.dimension == 2) {
            return this.length * this.height;
        }
        else if (this.dimension == 3) {
            return this.width * this.height * this.length;
        }

        return 0;
    }
}

class TV extends Furniture {
    constructor(height, width, length) {
        super(2);
        this.height = height;
        this.width = width;
        this.length = length;
    }

}

class Couch extends Furniture {
    constructor(height, width, length) {
        super(3);
        this.height = height;
        this.width = width;
        this.length = length;
    }
}

var tv = new TV(12, 2, 5);
var couch = new Couch(6, 6, 12);

console.log(tv.getSize());
console.log(couch.getSize());

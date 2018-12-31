class Car {
    protected num: number;
    constructor(num: number) {
        this.num = num;
    }
    printNum() {
        console.log(this.num);
    }
}

class Van extends Car {
    printNum() {
        console.log(this.num * 2);
    }
}

var lexus = new Van(1);

lexus.printNum();

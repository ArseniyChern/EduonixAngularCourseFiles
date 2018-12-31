var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(num) {
        this.num = num;
    }
    Car.prototype.printNum = function () {
        console.log(this.num);
    };
    return Car;
}());
var Van = /** @class */ (function (_super) {
    __extends(Van, _super);
    function Van() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Van.prototype.printNum = function () {
        console.log(this.num * 2);
    };
    return Van;
}(Car));
var lexus = new Van(1);
lexus.printNum();

var a = [1, true];
console.log(a);
var Car;
(function (Car) {
    Car[Car["Toyota"] = 0] = "Toyota";
    Car[Car["Lexus"] = 1] = "Lexus";
    Car[Car["Mercedes"] = 2] = "Mercedes";
})(Car || (Car = {}));
var b = Car.Lexus;
console.log(Car[b]);

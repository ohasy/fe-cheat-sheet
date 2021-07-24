const engineTypes = Object.freeze({
    big: "Big",
    medium: "Medium",
    small: "Small"
})
function Vehicle(wheels, engine, model) {
    this.engine = engine;
    this.wheels = wheels;
    this.model = model;
}
Vehicle.prototype.drive = function () {
    console.log(`driving vehicle ${this.model}`)
}
function Car(wheels, engine, model, hasOpenRoof) {
    Vehicle.call(this, wheels, engine, model);
    this.hasOpenRoof = hasOpenRoof;
}
Car.prototype = Object.create(Vehicle);
// Car.prototype.constructor = Car;

Car.prototype.drift = function () {
    console.log(`drifting ${this.hasOpenRoof ? "fancy open roof" : "normal"} car: modal ${this.model}`)
}
Car.prototype.drive = function () {
    console.log(`Driving ${this.hasOpenRoof ? "fancy open roof" : "normal"} car: modal ${this.model}`)
}

const bike = new Vehicle(2, engineTypes.medium, "Splender");
console.log(bike.wheels);
bike.drive();

const car = new Car(4, engineTypes.medium, "Alto", true);
console.log(car.wheels);
car.drive();
car.drift();
function carFactory(car) {
    let engine = {};
    let carriage = {};
    let obj = {};

    obj.model = car.model;

    if (car.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (car.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (car.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }
    obj.engine = engine;

    carriage.type = car.carriage;
    carriage.color = car.color;
    obj.carriage = carriage;

    let wheels = car.wheelsize;
    if (wheels % 2 === 0) {
        wheels--;
    }
    obj.wheels = [0, 0, 0, 0].fill(wheels, 0, 4)

    return obj;
}
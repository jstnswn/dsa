class Vehicle {
    constructor(size, wheelNum, licensePlate) {
        this.size = size;
        this.wheelNum = wheelNum;
        this.licensePlate = licensePlate
    }
}


class Motorcycle extends Vehicle {
    constructor(size, wheelNum, licensePlate) {
        super(size, wheelNum, licensePlate)
    }
}

const bike = new Motorcycle('small', '2', '38324u')

console.log(bike)

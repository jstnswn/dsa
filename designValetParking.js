// VALLET
    // CAR MANAGEMENT ---
        // Parking
            // Total parking spaces
            // Number of available spaces
            // Types of spaces (PAY MANAGEMENT)
        // Valet Queue
            // Number of Cars in Queue
            // Workers available (WORKERS)

    // WORKERS ---
        // Managers
        // Employees
            // Total number of employees (static)
            // Total available employees (static)
            // Employee Instance
                // Current Tip (PAY MANAGEMENT)
                // Total Tips
                // Total day salary
                // Total day pay (total tips + total salary)

    // PAY MANAGEMENT ---
        // Flat valet rate
        // Premium rate (faster parking/pickup)
        // Tip (EMPLOYEE instance)

class Person {
    constructor(name, car) {
        this.name = name;
        this.car = car
        this.carAvail = true;
        this.receipt = null;
    }

    parkCarAtValet(valet) {
        if (!this.carAvail) return;
        const receipt = valet.parkCar(this.car);
        if (typeof receipt !== 'string') {
            this.receipt = receipt;
            this.carAvail = false;
        }
        else return 'No parking was available';
    }

    getCar(valet) {
        const car = valet.getCar(this.receipt);
        if (car) {
            this.carAvail = true;
        }
    }
}

class Vehicle {
    constructor(licensePlate, size) {
        this.licensePlate = licensePlate;
        this.size = size;
    }
    carInfo() {
        return {
            licensePlate: this.licensePlate,
            size: this.size
        }
    }
}

class ParkingLot {
    constructor(smallStalls, medStalls, largeStalls) {
        this.smallCapacity = smallStalls;
        this.smallCars = {};
        this.medCapacity = medStalls;
        this.medCars = {};
        this.largeCapacity = largeStalls;
        this.largeCars = {};
    }

    parkCar(car) {
        let receipt;
        const carInfo = car.carInfo();

        if (car.size === 'small') {
            receipt = this.parkSmall(carInfo);
        } else if (car.size === 'medium') {
            receipt = this.parkMed(carInfo);
        } else if (car.size === 'large') {
            receipt = this.parkLarge(carInfo);
        }

        return receipt;
    }

    parkSmall(car) {
        if (this.smallCapacity > 0) {
            this.smallCapacity--;
            this.smallCars[car.licensePlate] = car;
            return {licensePlate: car.licensePlate, stallType: 'small'};
        } else {
            return this.parkMed(car);
        }
    }

    parkMed(car) {
        if (this.medCapacity > 0) {
            this.medCapacity--;
            this.medCars[car.licensePlate] = car;
            return {licencePlate: car.licensePlate, stallType: 'medium'};
        } else {
            return this.parkLarge(car);
        }
    }

    parkLarge(car) {
        if (this.largeCapacity > 0) {
            this.largeCapacity--;
            this.largeCars[car.licensePlate] = car;
            return {licencePlate: car.licensePlate, stallType: 'large'};
        } else {
            return 'Sorry. Lot is full';
        }
    }

    getCar(receipt) {
        if (receipt.stallType === 'small') {
            return this.getSmallCar(receipt.licensePlate);
        }
        if (receipt.stallType === 'medium') {
            return this.getMedCar(receipt.licensePlate);
        }
        if (receipt.stallType === 'large') {
            return this.getLargeCar(receipt.licensePlate);
        }
    }

    getSmallCar(licensePlate) {
        const car = this.smallCars[licensePlate];
        if (car) {
            delete this.smallCars[licensePlate];
            this.smallCapacity++;
            return car;
        }
        else return 'Car was not found';
    }

    getMedCar(licensePlate) {
        const car = this.medCars[licensePlate];
        if (car) {
            delete this.medCars[licensePlate];
            this.medCapacity++;
            return car;
        }
        else return 'Car was not found';
    }

    getLargeCar(licensePlate) {
        const car = this.largeCars[licensePlate];
        if (car) {
            delete this.largeCars[licensePlate];
            this.largeCapacity++
            return car;
        }
        else return 'Car was not found';
    }
}

const valet = new ParkingLot(1, 1, 1);

const smallCar = new Vehicle('1234', 'small');
const medCar = new Vehicle('888', 'medium');
const largeCar = new Vehicle('00000', 'large')
const person = new Person('Jookey', smallCar);
const person2 = new Person('Oompa', medCar);
const person3 = new Person('Loompa', largeCar);

person.parkCarAtValet(valet);
person2.parkCarAtValet(valet);
person3.parkCarAtValet(valet);
person.getCar(valet);



console.log('person', person)
console.log('valet', valet)

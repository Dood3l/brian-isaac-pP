function Car(make, model, year, mileage, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.color = color;

    this.driveToWork = function(){
        this.work = this.mileage + 33;
        console.log(`Old mileage: ${this.mileage} | New mileage: ${this.work}`)
    }

    this.driveAroundTheWorld = function(){
        this.aroundWorldAfterWork = this.work + 24000;
        console.log(`Old mileage: ${this.work} | New mileage: ${this.aroundWorldAfterWork}`)
    }

    this.runErrands = function (){
        this.errandsAfterDriveAroundWorld = this.aroundWorldAfterWork + 30;
        console.log(`Old mileage: ${this.aroundWorldAfterWork} | New mileage: ${this.errandsAfterDriveAroundWorld}`)
    }
}

var Lambo = new Car('Lamboghini', 'Huracan EVO', 2021, 0, 'black')
Lambo.driveToWork();
Lambo.driveAroundTheWorld();
Lambo.runErrands();

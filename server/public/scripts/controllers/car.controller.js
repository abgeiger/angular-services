app.controller('CarController', ['CarService', function(CarService){
    var self = this;

    self.cars = CarService.cars;
    // self.addCar = CarService.addCar;
    // self.newCar = CarService.newCar;
    
}]);
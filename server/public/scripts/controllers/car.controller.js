app.controller('CarController', ['CarService', 'CompanyService', function(CarService, CompanyService){
    var self = this;

    self.cars = CarService.cars;
    self.addCar = CarService.addCar;
    self.newCar = CarService.newCar;
    self.companies = CompanyService.companies;
}]);
app.service('CarService', ['$http', function($http) {
    var self = this;

    self.cars = { list: [] };

    self.newCar = {};

    self.getCars = function() {
        $http({
            method: 'GET',
            url: '/cars'
        }).then(function(response) {
            console.log('response', response);
            
            self.cars.list = response.data;
        });
    };
    
    self.getCars();

    self.addCar = function(newCar) {
        console.log('clicked');

        $http({
            method: 'POST',
            url: '/cars',
            data: newCar
        }).then(function(response) {
            console.log('response', response);
            self.newCar = {};
            self.getCars();
        });
    };
}]);
app.service('CompanyService', ['$http', function($http) {
    var self = this;

    self.companies = { list: [] };

    self.newCompany = {};

    self.getCompanies = function() {
        $http({
            method: 'GET',
            url: '/companies'
        }).then(function(response) {
            console.log('response', response);
            
            self.companies.list = response.data;
        });
    };
    
    self.getCompanies();

    self.addCompany = function(newCompany) {
        console.log('clicked');

        $http({
            method: 'POST',
            url: '/companies',
            data: self.newCompany
        }).then(function(response) {
            console.log('response', response);
            self.newCompany = {};
        });
    }
}]);
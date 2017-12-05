app.controller('CompanyController', ['CompanyService', function(CompanyService){
    var self = this;
    
    self.companies = CompanyService.companies;
    self.addCompany = CompanyService.addCompany;
    self.newCompany = CompanyService.newCompany;
}]);
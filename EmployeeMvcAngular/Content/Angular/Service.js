app.service("angularService", function($http) {
    // get all employee
    this.getEmployees = function() {
        return $http.get("Home/GetAll");
    };

    // get Employee By id
    this.getEmployee = function (employeeID) {
        var response = $http({
            method: "post",
            url: "Home/GetEmployeeById",
            params: {
                id: JSON.stringify(employeeID)
            }
        });
        return response;
    }


})
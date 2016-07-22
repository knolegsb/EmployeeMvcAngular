app.controller("empCtrl", function($scope, angularService) {
    $scope.divEmployee = false;
    getAllEmployee();

    // To Get All Records
    function getAllEmployee() {
        var getData = angularService.getEmployees();
        getData.then(function(emp) {
            $scope.getEmployees = emp.data;
        }, function() {
            alert('Error in getting records');
        });
    }

    $scope.editEmployee = function(employee) {
        var getData = angularService.getEmployee(employee.Id);
        getData.then(function(emp) {
            $scope.employee = emp.data;
            $scope.employeeId = employee.Id;
            $scope.employeeName = employee.Name;
            $scope.employeeEmail = employee.Email;
            $scope.employeePhonenumber = employee.PhoneNumber;
        }, function() {
            alert('Error in getting records');
        });
    }

    $scope.AddEmployeeDiv = function() {
        ClearField();
        $scope.Action = "Add";
        $scope.divEmployee = true;
    }

    $scope.deleteEmployer = function(employee) {
        var getData = angularService.deleteEmp(employee.Id);
        getData.then(function(msg) {
            getAllEmployee();
            alert('Employee Deleted');
        }, function() {
            alert('Error in Deleting Record');
        });
    }

    function ClearField() {
        $scope.employeeId = "";
        $scope.employeeName = "";
        $scope.employeeEmail = "";
        $scope.employeePhonenumber = "";
    }
});
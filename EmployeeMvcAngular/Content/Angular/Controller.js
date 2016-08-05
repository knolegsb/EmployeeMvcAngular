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
            $scope.employeeMobilenumber = employee.MobileNumber;
            $scope.Action = "Update";
            $scope.divEmployee = true;
        }, function() {
            alert('Error in getting records');
        });
    }

    $scope.AddUpdateEmployee = function () {
        debugger;
        var Employee = {
            Name: $scope.employeeName,
            Email: $scope.employeeEmail,
            MobileNumber: $scope.employeeMobilenumber
        };
        var getAction = $scope.Action;

        if (getAction == "Update") {
            Employee.Id = $scope.employeeId;
            var getData = angularService.updateEmp(Employee);
            getData.then(function (msg) {
                getAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in updating record');
            });
        } else {
            var getData = angularService.AddEmp(Employee);
            getData.then(function (msg) {
                getAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in adding record');
            });
        }
    }

    $scope.AddEmployeeDiv = function() {
        ClearField();
        $scope.Action = "Add";
        $scope.divEmployee = true;
    }

    $scope.deleteEmployee = function(employee) {
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
        $scope.employeeMobilenumber = "";
    }
});
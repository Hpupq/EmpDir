myApp.controller('empController', function($scope,$route,$routeParams,$http){
	$scope.getEmployees = function(){
		$http.get('/employees/').then(function(response){
			 
			$scope.employees = response.data;
		});
	};
	$scope.showEmployee = function(){
		var id = $routeParams.id;
		$http.get('/employees/'+ id).then(function(response){
			$scope.employee = response.data;
		});
	};
	$scope.addEmployee = function(){
		//var id = $routeParams.id;
		var birthday = new Date($scope.employee.dob);
        var today = new Date();
        var age = ((today - birthday) / (31557600000));
        $scope.employee.age = Math.floor( age );
		$http.post('/employees/', $scope.employee).then(function(response){
			//$scope.employee = response.data;
			window.location.href = '/';
		});
	};
	$scope.updateEmployee = function(){
		var id = $routeParams.id;
		var birthday = new Date($scope.employee.dob);
        var today = new Date();
        var age = ((today - birthday) / (31557600000));
        $scope.employee.age = Math.floor( age );
		$http.put('/employees/'+ id , $scope.employee).then(function(response){
			//$scope.employee = response.data;
			window.location.href = '/';
		});
	};
	$scope.deleteEmployee = function(id){
		var id = id;
		$http.delete('/employees/'+ id).then(function(response){
			$route.reload();
		});
	};
});
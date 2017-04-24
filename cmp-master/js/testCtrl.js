var app = angular.module('materializeApp', ['ui.materialize'])
    .controller('BodyController', ["$scope","$http", function ($scope,$http) {
        $scope.select = {
            value: "Option1",
            choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
        };
        $http.get("bin/airport_list.php"). 
		success(function(data,status)
		{
			//alert(data);
			$scope.airportList=angular.fromJson(data);
			
		});
		$scope.airport="";

    }]);
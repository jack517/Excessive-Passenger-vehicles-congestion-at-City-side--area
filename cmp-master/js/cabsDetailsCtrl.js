 var mainApp=angular.module('mainApp', []);
 mainApp.controller("cabsDetailsCtrl",function ($scope,$http) {
 	// body...
 	/*alert("Lalit");*/
 	$http.post("bin/check.php").success(function(data,status){
 	Data=angular.fromJson(data);
 	if(Data.loginstatus==0)
 			window.location.href="index.html";
 	});
 	$scope.airportList=["allahabad-lxi","lucknow-lko"];
 	/*$http.get("bin/airport_list.php"). 
		success(function(data,status)
		{
			//alert(data);
			$scope.airportList=angular.fromJson(data);
			
		});
	 $scope.fireEvent = function(){

        // This will only run after the ng-repeat has rendered its things to the DOM
        $timeout(function(){
            $scope.$broadcast('thingsRendered');
        }, 0);

    };*/
    $scope.flag=0;
 	$scope.getCabs=function()
 	{
 		console.log($scope.airport);
 		$http.post("bin/get_cab.php",{airportname:$scope.airport}).
		success(function(data,status)
		{
			//alert(data);
			$scope.cabs=angular.fromJson(data);
			//alert(Data);
		});
		$scope.flag=1;
 	}

 	$scope.increaseCab=function()
 	{
 		$http.post("bin/inc_cab.php",{airportname:$scope.airport}).
		success(function(data,status)
		{
			//alert(data);
			Data=angular.fromJson(data);
			if(Data.incrementstatus==1)
				//alert("Cab Increased Successfully");
				$scope.getCabs();
			else
				alert("try after SomeTime");

			//alert(Data);
		});
		$scope.flag=1;
		
 	};
 	$scope.decreaseCab=function()
 	{
 		$http.post("bin/dec_cab.php",{airportname:$scope.airport}).
		success(function(data,status)
		{
			//alert(data);
			Data=angular.fromJson(data);
			if(Data.incrementstatus==1)
				$scope.getCabs();
				//alert("Cab decreased Successfully");
			else
				alert(Data.msg);
			//alert(Data);
		});
		$scope.flag=1;
	//	$scope.getCabs();
 	};
 /*	$http.post("bin/check.php").success(function(data,status){
 		Data=angular.fromJson(data);
 		if(Data.loginstatus==1)
 			window.location.href="employeesRegistration.html";
 	});*/
 	
 	
 });
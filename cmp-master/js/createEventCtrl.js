var mainApp=angular.module('mainApp', []);
 mainApp.controller("createEventCtrl",function ($scope,$http) {
 	// body...
 	
 /*	$http.post("bin/check.php").success(function(data,status){
 		Data=angular.fromJson(data);
 		if(Data.loginstatus==1)
 			window.location.href="employeesRegistration.html";
 	});*/
 	 //$scope.airportList=["LXI","LKO"];
 	$http.post("bin/check.php").success(function(data,status){
 	Data=angular.fromJson(data);
 	if(Data.loginstatus==0)
 			window.location.href="index.html";
 	});
 	 $scope.airportId="";
 	$scope.airportList=["LXI","LKO"];
 	 $scope.inputDate={
 	 	"day":2,
 	 	 "month":4,
 	 	 "year":2017
 	 };
 	 $scope.flightId="";
 	 /*$http.get("bin/airport_list.php"). 
		success(function(data,status)
		{
			//alert(data);
			$scope.airportList=angular.fromJson(data);
		});*/
	 $scope.flag=0;
	 /*$scope.getFlights=function()
	 {
	 	$http.get("bin/airport_list.php"). 
		success(function(data,status)
		{
			//alert(data);
			$scope.airportList=angular.fromJson(data);
		});
	 }*/
	 $scope.flightList=[];

	 $scope.getFlights=function()
	 {
	 	$http.post("bin/getflights.php",{at_airport_id:$scope.airportId,date:$scope.inputDate.year.toString()+'/'+$scope.inputDate.month.toString()+'/'+$scope.inputDate.day.toString()}).success
	 	(function(data,status){
	 		$scope.flightList=angular.fromJson(data);
	 		//$scope.flightList.concat(Data);
	 		$scope.flag=1;
	 		
	 	//	Data=angular.fromJson(data);
	 		
	 		

	 	});
	 }
	 $scope.createEvent=function()
	 {

	 	$http.post("bin/createEventByAirportFlightDate.php",{at_airport_id:$scope.airportId,date:$scope.inputDate.year.toString()+'/'+$scope.inputDate.month.toString()+'/'+$scope.inputDate.day.toString()
	 	,distance:$scope.distance,flight_id:$scope.flightId}).success
	 	(function(data,status){
	 		$scope.flightList=angular.fromJson(data);
	 		//$scope.flightList.concat(Data);
	 		$scope.flag=1;
	 			Data=angular.fromJson(data);
	 			if(Data.eventstatus==1)
	 				alert("Event Created Succesfully");
	 			else
	 				alert("Try after Sometime");

	 	});

	 }
	 
 	
 });
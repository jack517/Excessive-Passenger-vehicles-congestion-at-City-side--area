var mainApp=angular.module('mainApp', []);
 mainApp.controller("addDelayCtrl",function ($scope,$http) {
 	// body...
 	
 /*	$http.post("bin/check.php").success(function(data,status){
 		Data=angular.fromJson(data);
 		if(Data.loginstatus==1)
 			window.location.href="employeesRegistration.html";
 	});*/
 	$http.post("bin/check.php").success(function(data,status){
 	Data=angular.fromJson(data);
 	if(Data.loginstatus==0)
 			window.location.href="index.html";
 	});
 	 $scope.airportid="";
 	 $scope.airportList=["LXI","LKO"];
 	/* $http.get("bin/airport_list.php"). 
		success(function(data,status)
		{
			//alert(data);
			$scope.airportList=angular.fromJson(data);
		});*/
		$scope.delayInArrival={
			minute:0,
			second:0,
			hour:0
		};
		$scope.delayInDeparture={
			minute:0,
			second:0,
			hour:0
		};

	 $scope.getFlights=function()
	 {
	 	$http.post("bin/getflights.php",{at_airport_id:$scope.airportId,date:$scope.inputDate.year.toString()+'/'+$scope.inputDate.month.toString()+'/'+$scope.inputDate.day.toString()}).success
	 	(function(data,status){
	 		$scope.flightList=angular.fromJson(data);
	 		//$scope.flightList.concat(Data);
	 		$scope.flag=1;
	 		$digest();

	 	});
	 }

	 $scope.addDelay=function()
	 {

	 		delayInArrival=$scope.delayInArrival.hour.toString()+':'+$scope.delayInArrival.minute.toString()+':'+$scope.delayInArrival.second.toString();
	 		delayInDeparture=$scope.delayInDeparture.hour.toString()+':'+$scope.delayInDeparture.minute.toString()+':'+$scope.delayInDeparture.second.toString();		
	 		$http.post("bin/update_delay.php",{airportid:$scope.airportId,date:$scope.inputDate.year.toString()+'/'+$scope.inputDate.month.toString()+'/'+$scope.inputDate.day.toString(),flightid:$scope.flightid,
	 		delayarr:delayInArrival,delaydepa:delayInDeparture,flightid:$scope.flightId}).success
	 	(function(data,status){
	 		
	 		Data=angular.fromJson(data);
	 		if(Data.delaystatus==1)
	 			alert("Delay Updated Successfully");

	 	});
	 }
 	
 });
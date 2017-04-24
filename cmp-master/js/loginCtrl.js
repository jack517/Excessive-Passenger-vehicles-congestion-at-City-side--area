 var mainApp=angular.module('mainApp', []);
 mainApp.controller("loginCtrl",function ($scope,$http) {
 	// body...
 	
 /*	$http.post("bin/check.php").success(function(data,status){
 		Data=angular.fromJson(data);
 		if(Data.loginstatus==1)
 			window.location.href="employeesRegistration.html";
 	});*/
 	$scope.userName="";
 	$scope.password="";
 	$http.post("bin/check.php").success(function(data,status){
 	Data=angular.fromJson(data);
 	if(Data.loginstatus==1)
 			window.location.href="flightTracking.html";
 	});
 	$scope.login=function()
	{
		//alert("Hello World");
		$http.post("bin/login.php",{email_id:$scope.userName,password:$scope.password}).
		success(function(data,status)
		{
			//alert(data);
			Data=angular.fromJson(data);
			if(Data.loginstatus==1)
				window.location.href="createEvent.html";
			else if(Data.loginstatus==2)
				alert("incorrect password");
			else
				alert("Fields cannot be Empty");
		}
		);
 	}
 	
 });
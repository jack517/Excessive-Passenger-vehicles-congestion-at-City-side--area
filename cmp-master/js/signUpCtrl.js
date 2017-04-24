 var mainApp=angular.module('mainApp', []);
 mainApp.controller("signUpCtrl",function ($scope,$http) {
 	// body...
 	$scope.firstname="";

 	$scope.userName="";
 	$scope.password="";

 	$http.post("bin/check.php").success(function(data,status){
 	Data=angular.fromJson(data);
 	if(Data.loginstatus==1)
 			window.location.href="flightTracking.html";
 	});
 	$scope.signUp=function()
 	{
 		//alert("sign Up");
 		if($scope.name!=""&&$scope.userName!=""&&$scope.password!="")
 		{
 			$http.post("bin/signUp.php",{name:$scope.name,password:$scope.password
 										 ,firebase:1,
 										 email:$scope.userName
 										 ,usermode:$scope.userMode
 										 ,mobile:$scope.mobile
 										}).success(function(data,status){
 										Data=angular.fromJson(data);
 										if(Data.signupstatus==1)
 										{
 											alert("User Created Successfully");
 											window.location.href="login.html";
 										}
 										else if(Data.signupstatus==3)
 											alert("User Already Exist");
 										else if(Data.signupstatus==3)
 											alert("Error in creating user"); 


 			});
 		}
 	}
 	
 });
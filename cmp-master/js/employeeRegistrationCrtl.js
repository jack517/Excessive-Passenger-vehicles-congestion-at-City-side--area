 var mainApp=angular.module('mainApp', []);
 mainApp.controller("employeeRegistrationCtrl",function ($scope,$http) {
 	// body...
 	
 	$http.post("bin/check.php").success(function(data,status){
 		Data=angular.fromJson(data);
 		if(Data.loginstatus==0)
 			window.location.href="index.html";
 	});
 	$scope.createEmployee=function()
 	{
 		$http.post("bin/employeeRegistration.php",{
 		empFirstName:$scope.empFirstName,
 		empLastName:$scope.empLastName,
 		empEmailId:$scope.empEmailId,
 		dateOfBirth:$scope.dateOfBirth,
 		contactNo:$scope.contactNo,
 		softSkillRating:$scope.softSkillRating,
 		educationBackgroundRating:$scope.educationBackgroundRating,
 		yearOfExperience:$scope.yearOfExperience
 		}).success(function(data,status)
 		{
 			Data=angular.fromJson(data);
 			if(Data.empstatus==1)
 											alert("employee Created Successfully");
 										else if(Data.signupstatus==3)
 											alert("Employee  Already Exist");
 										else if(Data.signupstatus==2)
 											alert("Error in creating Employee"); 
 		});
 	}
 	
 	
 });
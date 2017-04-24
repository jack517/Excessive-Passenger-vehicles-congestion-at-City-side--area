 var mainApp=angular.module('mainApp', []);
 mainApp.controller("createProjectCtrl",function ($scope,$http) {
 	// body...
 	
 	$http.post("bin/check.php").success(function(data,status){
 		Data=angular.fromJson(data);
 		if(Data.loginstatus==0)
 			window.location.href="index.html";
 	});
 	$scope.createProject=function()
 	{
 		$http.post("bin/projectRegistration.php",{
 		projectName:$scope.projectName,
 		projectDescription:$scope.projectDescription,
 		projectBudget:$scope.projectBudget,
 		projectDeadline:$scope.projectDeadline,
 		projectDifficulty:$scope.projectDifficulty
 		}).success(function(data,status)
 		{
 			Data=angular.fromJson(data);
 			if(Data.projstatus==1)
 											alert("Project Created Successfully");
 										else if(Data.projstatus==3)
 											alert("Project  Already Exist");
 										else if(Data.projstatus==2)
 											alert("Error in creating Project"); 
 		});
 	}
 	
 	
 });
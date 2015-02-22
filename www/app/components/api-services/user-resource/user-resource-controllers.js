/* Controllers of apiServicesControllers component */
//______________________________________________

var userResourceControllers = angular.module('userResourceControllers', ['drupalApiService', 'drupalApi']);


/* User Resource Controller */
userResourceControllers.controller('userResourceController', 
		   ['$scope', 'UserResource', 'drupalApiNotificationChannel', 
    function($scope,   UserResource,   drupalApiNotificationChannel) {
			   
			 //UserResource
			 $scope.lastTimeRequestToUserResourceLogin = null;
			 $scope.lastResultRequestToUserResourceLogin = null;
			   
			 $scope.callUserResourceLogin = function(loginData) {
					$scope.lastTimeRequestToUserResourceLogin = Date.now();
					UserResource.login(  loginData.username,  loginData.password )
					    .then(
					    		//success
					    		function(data) {
					    			console.log('success');
					    			$scope.lastResultRequestToUserResourceLogin = data;
					    		},
					    		//error
					    		function(data) {
					    			console.log(data);
					    			$scope.lastResultRequestToUserResourceLogin = data;
					    		}
					    );
			 }
			   
		   $scope.lastTimeRequestToUserResourceLogout = null;
		   $scope.lastResultRequestToUserResourceLogout = null;
		   
		   $scope.callUserResourceLogout = function() {
				console.log('callUserResourceLogin'); 
				UserResource.logout( )
			    .then(
			    		//success
			    		function(data) {
			    			console.log(data); 
			    		},
			    		//error
			    		function(data) {
			    			console.log(data); 
			    		}
			    );
		   }
			  
}]);



/* Controllers of apiServicesControllers component */
//______________________________________________

var apiServicesControllers = angular.module('apiServicesControllers', ['drupalApiService', 'drupalApi']);

/* Main firstBasicTestsApiService Controllers */
apiServicesControllers.controller('drupalResourcesTestsCtrl', 
		   ['$scope', '$filter', 'SystemResource', 'UserResource', 'drupalApiNotificationChannel', 
            function($scope, $filter,  SystemResource, UserResource, drupalApiNotificationChannel) {
			   
			   //SystemResource
			   $scope.lastTimeRequestToSystemConnect = null;
			   $scope.lastResultRequestToSystemConnect = null;
			   
			   $scope.callSystemRecourceConncet = function() {
						console.log('callSystemRecourceConncet'); 
						$scope.lastTimeRequestToSystemConnect = Date.now();
						
						SystemResource.connect()
					    .then(
					    		//success
					    		function(data) {
					    			console.log('success');
					    			$scope.lastResultRequestToSystemConnect = data;
					    		},
					    		//error
					    		function(data) {
					    			console.log('error');
					    			$scope.lastResultRequestToSystemConnect = data;
					    		}
					    );
			   };
			   
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
			   

			   
			   
			   
			   /*$scope.lastTimeRequestToUserResourceLogout = null;
			   $scope.lastResultRequestToUserResourceLogout = null;
			   
			   $scope.callUserResourceLogout = function() {
					console.log('callUserResourceLogin'); 
					UserResource.logou( )
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
			   }*/
			  
			   
	
}]);




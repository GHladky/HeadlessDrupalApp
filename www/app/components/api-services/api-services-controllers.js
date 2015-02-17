/* Controllers of apiServicesControllers component */
//______________________________________________

var apiServicesControllers = angular.module('apiServicesControllers', ['drupalApiService', 'drupalApi']);

/* Main firstBasicTestsApiService Controllers */
apiServicesControllers.controller('firstBasicTestsApiServiceCtrl', 
						   ['$scope', 'firstBasicTestsApiService',
                    function($scope,   firstBasicTestsApiService) {
	
	$scope.list = {};
	
	$scope.getTestView = function() {
		firstBasicTestsApiService.getTestView().then(
				//success
				function(result) {
					console.log('success'); 
					$scope.list2 = result.data;
				},
				//error
				function(error) {
					console.log('error: ' + error); 
				}
		);
	};
	
	$scope.getAllBasicPages = function() {
		firstBasicTestsApiService.getAllBasicPages()
		.then(
			//success
			function(result) {
				console.log('success'); 
				$scope.list = result.data;
			},
			//error
			function(error) {
				console.log('error: ' + error); 
			}
		);
	};
	
}]);

/* Main ngRecourceCtrl Controllers */
apiServicesControllers.controller('ngRecourceCtrl', 
						   ['$scope', 'firstBasicTestsApiService', 
                    function($scope,   firstBasicTestsApiService ) {
	console.log('Asdf'); 
	$scope.list = {};
	
				
}]);

/* Main firstBasicTestsApiService Controllers */
apiServicesControllers.controller('drupalResourcesTestsCtrl', 
		   ['$scope', '$filter', 'SystemResource', 'UserResource', 
            function($scope, $filter,  SystemResource, UserResource) {
			   
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
			   }
			   
			   //UserResource
			   $scope.lastTimeRequestToUserResourceLogin = null;
			   $scope.lastResultRequestToUserResourceLogin = null;
			   
			   $scope.callUserResourceLogin = function(loginData) {
					console.log('callUserResourceLogin'); 
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




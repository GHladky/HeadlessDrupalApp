/* Controllers of calendar component */
//______________________________________________

var calendarControllers = angular.module('apiServicesControllers', ['drupalApiService']);

/* Main calendar Controllers */
calendarControllers.controller('firstBasicTestsApiServiceCtrl', 
						   ['$scope', 'firstBasicTestsApiService',
                    function($scope,   apiService) {
	
	$scope.list = {};
	
	
	$scope.getTestView = function() {
		apiService.getTestView().then(
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
	}
	
	
	$scope.getAllBasicPages = function() {
		apiService.getAllBasicPages()
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
	}
				
}]);



/* Controllers of calendar component */
//______________________________________________

var calendarControllers = angular.module('calendar.controllers', ['apiServices']);

/* Main calendar Controllers */
calendarControllers.controller('calendarCtrl', 
						   ['$scope', 'apiService',
                    function($scope,   apiService) {
	

	console.log('in calendarCtrl'); 
	
	$scope.list = {};
	$scope.list2 = {};
	
	
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

/* Detail view calendar Controllers */


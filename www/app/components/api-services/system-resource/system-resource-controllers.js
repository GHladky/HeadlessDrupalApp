/* Controllers of apiServicesControllers component */
//______________________________________________

var systemResourceControllers = angular.module('systemResourceControllers', ['drupalApiService', 'drupalApi']);


/* System Resource Controller */
systemResourceControllers.controller('systemResourceController', 
		   ['$scope', 'SystemResource', 'drupalApiNotificationChannel', 
    function($scope,   SystemResource,   drupalApiNotificationChannel) {
			   
			   //
			   //SystemResource
			   //
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
}]);



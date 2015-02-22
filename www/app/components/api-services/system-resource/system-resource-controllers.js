/* Controllers of apiServicesControllers component */
//______________________________________________

var systemResourceControllers = angular.module('systemResourceControllers', ['drupalApiService', 'drupalApi']);


/* System Resource Controller */
systemResourceControllers.controller('systemResourceController', 
		   ['$scope', 'SystemResource', 'UserResource', 'SessionResource', 'drupalApiNotificationChannel', 
    function($scope,   SystemResource,   UserResource,   SessionResource,   drupalApiNotificationChannel) {
			   
			   //
			   //SystemResource
			   //
			   $scope.lastTimeRequestToSystemConnect = null;
			   $scope.lastResultRequestToSystemConnect = null;
			   
			   $scope.callSystemRecourceConncet = function() {
						console.log('callSystemRecourceConncet'); 
						$scope.lastTimeRequestToSystemConnect = Date.now();
						
						SessionResource.token().then(
						function(token){
							console.log(token); 
							SystemResource.connect(token)
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
						},
						function(){
							
						});
						
						
			   };
}]);



/* Controllers of apiServicesControllers component */
//______________________________________________

var nodeResourceControllers = angular.module('nodeResourceControllers', ['drupalApiService', 'drupalApi']);


/* Node Resource Controller */
nodeResourceControllers.controller('nodeResourceController', 
		   ['$scope', 'NodeResource', 'drupalApiNotificationChannel', 
    function($scope,   NodeResource,   drupalApiNotificationChannel) {
			   
			   //
			   //Node Resource 
			   //
			   
			   //Retrieve
			   $scope.nodeRetrieveRequests = [];
			   
			   $scope.callNodeRecourceRetrieve = function(nid) {
				   
				   var requestTime = Date.now();
				   NodeResource.retrieve(nid).then(
				    		//success
				    		function(data) {
				    			console.log('success');
				    			$scope.nodeRetrieveRequests.push({requestTime:requestTime, data:data});
				    		},
				    		//error
				    		function(data) {
				    			console.log('error');
				    			$scope.nodeRetrieveRequests.push({requestTime:requestTime, data:data});
				    		}
				    );
			   };
			   
			   //Index
			   
			   $scope.nodeIndexRequests = [];
			   
			   //get params for index request
			   $scope.nodeIndex = {};
			   $scope.nodeIndex.page = null;
			   $scope.nodeIndex.fields = null;
			   $scope.nodeIndex.parameters = null;
			   $scope.nodeIndex.pagesize = null;
			   
			   $scope.callNodeRecourceIndex = function(nodeIndex) {
				   
				   var requestTime = Date.now();
				   NodeResource.index(nodeIndex.page, nodeIndex.fields, nodeIndex.parameters, nodeIndex.pagesize).then(
				    		//success
				    		function(data) {
				    			console.log('success');
				    			$scope.nodeIndexRequests.push({requestTime:requestTime, data:data});
				    		},
				    		//error
				    		function(data) {
				    			console.log('error');
				    			$scope.nodeIndexRequests.push({requestTime:requestTime, data:data});
				    		}
				    );
			    };
}]);



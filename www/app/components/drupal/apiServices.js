/* Drupals api depending services*/
//______________________________________________

var apiServices = angular.module('apiServices', []);

apiServices.constant("apiServicesConfig", {
    baseUrl: "http://www.hladky.at/headless",
    apiPath : "api",
    BasicPageRecource : "node",
    views : 'views',
    testView : 'test'
});

apiServices.factory('apiService', 
		[  'apiServicesConfig', '$http', 
  function( apiServicesConfig,  $http) {
	
	//private method
	var getTestView = function() {
		
		var pathToApi = apiServicesConfig.baseUrl + '/' + apiServicesConfig.apiPath + '/' + apiServicesConfig.views + '/' +  apiServicesConfig.testView; 
		
		return $http.get(pathToApi).
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
			  return data;
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
			  console.log('error' + status); 
		  });
	} 
			
			
	//private method
	var getAllBasicPages = function() {
		
		var pathToApi = apiServicesConfig.baseUrl + '/' + apiServicesConfig.apiPath + '/' + apiServicesConfig.BasicPageRecource; 
		
		return $http.get(pathToApi).
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
			  return data;
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
			  console.log('error' + status); 
		  });
	} 
	
	//public methods
	return {
		getAllBasicPages : getAllBasicPages,
		getTestView : getTestView
	}
}]);
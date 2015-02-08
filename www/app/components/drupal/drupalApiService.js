/* Drupals api depending services*/
//______________________________________________

var drupalApiService = angular.module('drupalApiService', []);

drupalApiService.constant("drupalApiServiceConfig", {
    baseUrl: "http://www.hladky.at/headless",
    apiPath : "api",
    NodeRecource : "node",
    views : 'views',
    testView : 'test'
});

/*First basic tests*/
drupalApiService.factory('firstBasicTestsApiService', 
		[  'drupalApiServiceConfig', '$http', 
  function( drupalApiServiceConfig,   $http) {
	
	//private method
	var getTestView = function() {
		
		var pathToApi = drupalApiServiceConfig.baseUrl + '/' + drupalApiServiceConfig.apiPath + '/' + drupalApiServiceConfig.views + '/' +  drupalApiServiceConfig.testView; 
		
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
		
		var pathToApi = drupalApiServiceConfig.baseUrl + '/' + drupalApiServiceConfig.apiPath + '/' + drupalApiServiceConfig.NodeRecource; 
		
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
}])


//Node Resource
//http://www.masnun.com/2013/08/28/rest-access-in-angularjs-using-ngresource.html
//http://www.masnun.com/2013/09/18/django-rest-framework-angularjs-and-sessionauthentication.html
//http://www.masnun.com/2013/09/18/django-rest-framework-angularjs-resource-trailing-slash-problem.html
drupalApiService.factory("Node", function ($resource) {
	var pathToApi = drupalApiServiceConfig.baseUrl + '/' + drupalApiServiceConfig.apiPath + '/' + drupalApiServiceConfig.NodeRecource; 
	
	return $resource(
        pathToApi,
        {Id: "@Id" },
        {
            "update": {method: "PUT"},
            "reviews": {'method': 'GET', 'params': {'reviews_only': "true"}, isArray: true}

        }
    );
	
});




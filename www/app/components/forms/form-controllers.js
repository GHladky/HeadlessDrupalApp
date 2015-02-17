/* Controllers of formControllers component */
//______________________________________________

var formControllers = angular.module('formControllers', []);

formControllers.controller('form1Ctrl', 
						   ['$scope',  
                    function($scope ) {
	
				
}]);


formControllers.controller('loginCtrl', 
		['$scope', '$filter', 'SystemResource', 'UserResource', 
		 function($scope, $filter,  SystemResource, UserResource) {

		$scope.loginData = {
		    username: '',
		    password : ''
		  };
		
		$scope.serverErrors = '';
   
  $scope.doLogin1 = function(form) {
    console.log(form);
    if(form.$valid) {
    console.log('Sign-In', $scope.user.username);
    $state.go('app.form.register');
    }
  };
  
  $scope.doLogin = function(form) {
		
	   console.log(form); 
	   $scope.lastTimeRequestToUserResourceLogin = Date.now();
		
	   if(form.$valid) {
		   
			UserResource.login(  $scope.loginData.username,  $scope.loginData.password )
		    .then(
		    		//success
		    		function(data) {
		    			console.log('success');
		    			$scope.lastResultRequestToUserResourceLogin = data;
		    		},
		    		//error
		    		function(data) {
		    			console.log(data);
		    			$scope.serverErrors = data;
		    		}
		    );
		}
	   
  }
  
  
  
  
  
  

}]);

formControllers.controller('login2Ctrl', 
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
			
		   if(form.$valid) {
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
	   }
	   
	  
	   

}]);



formControllers.controller('registerCtrl', 
		   ['$scope',  
 function($scope ) {


}]);

formControllers.controller('forgotpasswordCtrl', 
		   ['$scope',  
 function($scope ) {


}]);
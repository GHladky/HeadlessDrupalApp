/* Drupals api depending services*/
//______________________________________________

var drupalApiService = angular.module('drupalApiService', []);

/* Constants for drupalApiService */
drupalApiService.constant("drupalApiServiceConfig", {
   //
   // Drupal depending settings
   //
	
	  // Your sites domain
	  drupal_instance	: 'http://www.hladky.at/headless/',
	 
	  // Your service endpoints
	 
	  api_endpoints		:  {
		  // Endpoint api/v1/
		  // Machine-readable name of the endpoint
		  api_v1 : {
			  path: 'api/v1/',
			  // Resources of your endpoint
			  // Resources: defualt or alias
			  // NOTE: if you set custom aliases for your recources in [your.domain.org]/admin/structure/services/list/api/resources change value here
			  resources	: { 
				  //comment 				: 'comment/', 	
				  //file					: 'file/', 	
				  //node	 				: 'node/',
				  system				: 'system/',
				  //taxonomy_term	 		: 'taxonomy_term/',	
				  //taxonomy_vocabulary 	: 'taxonomy_vocabulary/', 	
				  user 					: 'user/',	
				  //views 				: 'views/', 					
			  },
			  // available formats of your service
			  // drupal settings under [your.domain.org]/admin/structure/services/list/api/resources/[]
			  formats : {
				  json 	: '.json',
				  xml 	: '.xml'
			  }
		  },
		  // other endpoint [path/to/endpoint]
	  },
	

	//
	// Constants for drupalApiNotificationChannel
	//
	
	// System resource
	//
	// Actions:
	// Connect action
	system_connectConfirmed	: 'event:drupal-system-connectConfirmed',
	system_connectFailed  	: 'event:drupal-system-connectFailed',

	// User resource
	//
	// Actions:
	// Register action
	use_registerConfirmed  	: 'event:drupal-user-registerConfirmed',
	use_registerFailed  	: 'event:drupal-user-registerFailed',
	// Login action
	use_loginConfirmed  	: 'event:drupal-user-loginConfirmed',
	use_loginFailed  		: 'event:drupal-user-loginFailed',
	// Logout action
	use_logoutConfirmed  	: 'event:drupal-user-logoutConfirmed',
	use_logoutFailed  		: 'event:drupal-user-logoutFailed',

});

/*Notification service for spi events*/
//http://codingsmackdown.tv/blog/2013/04/29/hailing-all-frequencies-communicating-in-angularjs-with-the-pubsub-design-pattern/
drupalApiService.factory('drupalApiNotificationChannel', ['$rootScope', 'drupalApiServiceConfig', function ($rootScope, drupalApiServiceConfig) {
   
	//
	// System resource
	//
	
	// Connect Action
	
	// Publish system connect confirmed event
    var publishSystemConnectConfirmed = function (user) {
        $rootScope.$broadcast(drupalApiServiceConfig.systemConnectConfirmed, {user: user});
    };
    // Subscribe to system connect confirmed event
    var onSystemConnectConfirmed = function($scope, handler) {
    	$scope.$on(drupalApiServiceConfig.systemConnectConfirmed, function(event, args) {
	    handler(args.user);
	   });	
    };
    
    // Publish system connect failed event
    var publishSystemConnectFailed = function (response) {
        $rootScope.$broadcast(drupalApiServiceConfig.systemConnectConfirmed, {response: response});
    };
    // Subscribe to system connect failed event
    var onSystemConnectFailed = function($scope, handler) {
    	$scope.$on(drupalApiServiceConfig.systemConnectConfirmed, function(event, args) {
	    handler(args.response);
	   });	
    };
    
    //
	// User resource
	//
    
    // Register action

	// Publish user register confirmed event
    var publishUseRegisterConfirmed = function (respons) {
        $rootScope.$broadcast(drupalApiServiceConfig.userRegisterConfirmed, {respons: respons});
    };
    // Subscribe to user register confirmed event
    var onUseRegisterConfirmed = function($scope, handler) {
    	$scope.$on(drupalApiServiceConfig.userRegisterConfirmed, function(event, args) {
	    handler(args.user);
	   });	
    };
    
    // Publish user register failed event
    var publishUseRegisterFailed = function (respons) {
        $rootScope.$broadcast(drupalApiServiceConfig.userRegisterFailed, {respons: respons});
    };
    // Subscribe to user register failed event
    var onUseRegisterFailed = function($scope, handler) {
    	$scope.$on(drupalApiServiceConfig.userRegisterFailed, function(event, args) {
	    handler(args.respons);
	   });	
    };
    
    //Login action
    
	// Publish user login confirmed event
    var publishUseLoginConfirmed = function (user) {
        $rootScope.$broadcast(drupalApiServiceConfig.userLoginConfirmed, {user: user});
    };
    // Subscribe to user login confirmed event
    var onUseLoginConfirmed = function($scope, handler) {
    	$scope.$on(drupalApiServiceConfig.userLoginConfirmed, function(event, args) {
	    handler(args.user);
	   });	
    };
    
    // Publish user login failed event
    var publishUseLoginFailed = function (respons) {
        $rootScope.$broadcast(drupalApiServiceConfig.userLoginFailed, {respons: respons});
    };
    // Subscribe to user login failed event
    var onUseLoginFailed = function($scope, handler) {
    	$scope.$on(drupalApiServiceConfig.userLoginFailed, function(event, args) {
	    handler(args.respons);
	   });	
    };
    
    //Logout action
    
	// Publish user login confirmed event
    var publishUseLogoutConfirmed = function (user) {
        $rootScope.$broadcast(drupalApiServiceConfig.userLogoutConfirmed, {user: user});
    };
    // Subscribe to user login confirmed event
    var onUseLogoutConfirmed = function($scope, handler) {
    	$scope.$on(drupalApiServiceConfig.userLogoutConfirmed, function(event, args) {
	    handler(args.user);
	   });	
    };
    
    // Publish user login failed event
    var publishUseLogoutFailed = function (respons) {
        $rootScope.$broadcast(drupalApiServiceConfig.userLogoutFailed, {respons: respons});
    };
    // Subscribe to user login failed event
    var onUseLogoutFailed = function($scope, handler) {
    	$scope.$on(drupalApiServiceConfig.userLogoutFailed, function(event, args) {
	    handler(args.respons);
	   });	
    };
    
    
    
   // Return the publicly accessible methods
   return {
	   // System events
	   // Connect events
	   publishSystemConnectConfirmed 	: publishSystemConnectConfirmed,
	   onSystemConnectConfirmed			: onSystemConnectConfirmed,
	   publishSystemConnectFailed 		: publishSystemConnectFailed,
	   onSystemConnectFailed 			: onSystemConnectFailed,
	  
	   // User events
	   // Register events
	   publishUseRegisterConfirmed 		: publishUseRegisterConfirmed,
	   onUseRegisterConfirmed			: onUseRegisterConfirmed,
	   publishUseRegisterFailed			: publishUseRegisterFailed,
	   onUseRegisterFailed				: onUseRegisterFailed,
	   // Login events
	   publishUseLoginConfirmed			: publishUseLoginConfirmed,
	   onUseLoginConfirmed				: onUseLoginConfirmed,
	   publishUseLoginFailed			: publishUseLoginFailed,
	   onUseLoginFailed					: onUseLoginFailed,
	   // Logout events
	   publishUseLogoutConfirmed 		: publishUseLogoutConfirmed,
	   onUseLogoutConfirmed				: onUseLogoutConfirmed,
	   publishUseLogoutFailed			: publishUseLogoutFailed,
	   onUseLogoutFailed				: onUseLogoutFailed,
	   
   	};
}]);

/**
* Drupal services module
*/
var drupalAPI = angular.module('drupalApi', ['config']);

/**
 * SystemResource
 * 
 * This service mirrors the Drupal system resource of the services 3.x module.
 * To use this you have to set following line in your Drupal CORS module settings
 * your_api_endpoint/system/*|<mirror>|POST|Content-Type,Authorization|true
 * 
**/
drupalAPI.factory('SystemResource', function($http, $q, drupalApiServiceConfig) {
	
	/*
	 * connect
	 * 
	 * Returns the details of currently logged in user.
	 * 
	 * Method: POST 
	 * Url: http://drupal_instance/api_endpoint/system/connect
	 * Headers: Content-Type:application/json
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: SystemResource.connect().success(yourSuccessCallback).error(yourErrorCallback);
	*/
	var connect = function(){
		var connectPath = drupalApiServiceConfig.drupal_instance + drupalApiServiceConfig.api_endpoints.api_v1.path + drupalApiServiceConfig.api_endpoints.api_v1.resources.system + 'connect';
		
		var defer = $q.defer();
		console.log(connectPath); 
		$http({
			method :'POST',
			url : connectPath,
			headers : {
				"Content-Type": "application/json",
			}
		})
		.success(function(data, status, headers, config){
			
			console.log('data' + JSON.stringify(data));
			console.log('status' + status);
			console.log('headers' + headers);
			console.log('config' + JSON.stringify(config));
			
			defer.resolve(data);
		})
		.error(function(data, status, headers, config){
			
			console.log('data' + JSON.stringify(data));
			console.log('status' + status);
			console.log('headers' + headers);
			console.log('config' + JSON.stringify(config));
			
			defer.reject(data);
		});
		
		return defer.promise;
	};
	
	/*
	 * get_variable
	 * 
	 * Returns the value of a system variable using variable_get().
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/system/get_variable
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{String} name The name of the variable to return, required:true, source:post body
	 * @param 	{String} _default The default value to use if this variable has never been set, required:false, source:post body
	 * 
	 * @return 	{Promise}
	 * 
	 *  useage: SystemResource.get_variable().then(yourSuccessCallback,yourErrorCallback);
	 */
	var get_variable = function(name, _default){
		return;
	};
	
	/*
	 * set_variable
	 * 
	 * Returns the value of a system variable using variable_get().
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/system/get_variable
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{String} name The name of the variable to set, required:true, source:post body
	 * @param 	{String} value The value to set, required:true, source:post body
	 * 
	 * @return 	{Promise}
	 * 
	 *  useage: SystemResource.set_variable().success(yourSuccessCallback).error(yourErrorCallback);
	 */
	var set_variable = function(name, value){
		return;
	};
	
	/*
	 * del_variable
	 * 
	 * Deletes a system variable using variable_del().
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/system/get_variable
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{String} name The name of the variable to delete, required:true, source:post body
	 * 
	 * @return 	{Promise}
	 * 
	 *  useage: SystemResource.del_variable().then(yourSuccessCallback,yourErrorCallback);
	 */
	var del_variable = function(name){
		return;
	};

	//public methods	
	return {
		connect : connect,
		//get_variable : get_variable,
		//set_variable : set_variable,
		//del_variable : del_variable
	};

});


/**
 * UserResource
 *
 * This service mirrors the Drupal system resource of the services 3.x module.
 * to use this you have to set following line in your Drupal CORS module settings
 * your_api_endpoint/user/*|<mirror>|GET, PUT, POST, DELETE|Content-Type,Authorization
 * 
**/
drupalAPI.factory('UserResource', function($http, $q, DrupalAPISettings) {
	
	/*
	 * retrieve
	 * 
	 * Retrieve a user
	 * Method: GET
	 * Url: http://drupal_instance/api_endpoint/user/{UID}
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{Integer} uid The uid of the user to retrieve., required:true, source:path
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: UserResource.retrieve(username, password).then(yourSuccessCallback,yourErrorCallback);
	 */
	var retrieve = function( uid ) {
		return;
	};
	
	/*
	 * create
	 * 
	 * Retrieve a user
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/user
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{Array} uid The user object, required:true, source:post body
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: UserResource.create(uid).then(yourSuccessCallback,yourErrorCallback);
	 */
	var create = function( uid ) {
		return;
	};

	/*
	 * update
	 * 
	 * Update a user
	 * Method: PUT
	 * Url: http://drupal_instance/api_endpoint/user/{UID}
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{Integer} uid Unique identifier for this user, required:true, source:path
	 * @param 	{Array} data The user object with updated information, required:true, source:post body
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: UserResource.update(uid, data).then(yourSuccessCallback,yourErrorCallback);
	 */
	var update = function( uid, data ) {
		return;
	};

	/*
	 * _delete
	 * 
	 * Delete a user
	 * Method: DELETE
	 * Url: http://drupal_instance/api_endpoint/user/{UID}
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{Integer} uid The id of the user to delete, required:true, source:path
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: UserResource._delete(uid).then(yourSuccessCallback,yourErrorCallback);
	 */
	var _delete = function( uid ) {
		return;
	};
	
	/*
	 * index
	 * 
	 * List all users
	 * Method: GET
	 * Url: http://drupal_instance/api_endpoint/user
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{Integer} page The zero-based index of the page to get. defaults to 0., required:false, source:param
	 * @param 	{String} fields The fields to get., required:false, source:param
	 * @param 	{Array} parameters Parameters, required:false, source:param
	 * @param 	{Integer} pagesize Number of records to get per page., required:false, source:param
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: UserResource.index(page, fields, parameters, pagesize).then(yourSuccessCallback,yourErrorCallback);
	 */
	var index = function( page, fields, parameters, pagesize ) {
		return;
	};
			
	/*
	 * login
	 * 
	 * Login a user for a new session
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/user/login
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{String} username A valid username, required:true, source:post body
	 * @param 	{String} password A valid password, required:true, source:post body
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: UserResource.login(username, password).then(yourSuccessCallback,yourErrorCallback);
	 */	
	var login = function( username, password ) {
					
		var defer = $q.defer();

		$http({
			method :'POST',
			url : DrupalAPISettings.drupal_instance + DrupalAPISettings.api_endpoints.api_v1 + DrupalAPISettings.resources.user + 'login',
			headers : {
				"Content-Type": "application/json"
			},
			data : {
				"username" : username,
				"password" : password
			},
			
		})
		.success(function(data, status, headers, config){
			
			console.log('success'); 
			console.log('data' + JSON.stringify(data));
			console.log('status' + status);
			console.log('headers' + headers);
			console.log('config' + JSON.stringify(config));
			
			defer.resolve(data);
		})
		.error(function(data, status, headers, config){
			
			console.log('error');
			console.log('data' + JSON.stringify(data));
			console.log('status' + status);
			console.log('headers' + headers);
			console.log('config' + JSON.stringify(config));
			
			defer.reject(data);
		});
		
		return defer.promise;
	};
	

	/*
	 * logout
	 * 
	 * Logout a user session
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/user/logout
	 * Headers: Content-Type:application/json
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: UserResource.logout(username, password).then(yourSuccessCallback,yourErrorCallback);
	 */
	var logout = function() {
		return;
	};

	
	/*
	 * token
	 * 
	 * Returns the CSRF token.
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/user/token
	 * Headers: Content-Type:application/json
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: UserResource.token().then(yourSuccessCallback,yourErrorCallback);
	 */
	var token = function() {
		return;
	};
	
	/*
	 * request_new_password
	 * 
	 * Request a new password, given a user name or e-mail address.
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/user/request_new_password
	 * Headers: Content-Type:application/json
	 * 
	 * @param 	{String} name A valid user name or e-mail address, required:true, source:post body
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: UserResource.request_new_password(name).then(yourSuccessCallback,yourErrorCallback);
	 */
	var request_new_password = function(name) {
		return;
	};
		
	/*
	 * register
	 * 
	 * Register a user
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/user/register
	 * Headers: Content-Type:application/json
	 * 
	 * @param {Array} account The user object, required:true, source:post body
	 * 
	 * @return {Promise}
	 * 
	 * useage: UserResource.login(account).then(yourSuccessCallback,yourErrorCallback);
	 */
	var register = function(account){
		var defer = $q.defer();
		$http({
			method :'POST',
			url : drupal_instance + api_endpoint + 'user/register',
			headers : {
				"Content-Type": "application/json"
			},
			data : {
				name : username,
				pass : password,
				mail : email
			},
		})
		.success(function(data, status, headers, config){
			defer.resolve(data);
		})
		.error(function(data, status, headers, config){
			defer.reject(data);
		});
		
		return defer.promise;
	};
	
	/*
	 * cancel
	 * 
	 * Cancel a user
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/user/cancel/{UID}
	 * Headers: Content-Type:application/json
	 * 
	 * @param {Integer} uid The user object, required:true, source:path
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: UserResource.cancel(name).then(yourSuccessCallback,yourErrorCallback);
	 */
	var cancel = function(name) {
		return;
	};
		
	/*
	 * password_reset
	 * 
	 * NOTE the docs in services definitions is not uop to date 
	 * 
	 * resets the password
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/user/password_reset/{UID}
	 * Headers: Content-Type:application/json
	 * 
	 * @param {Integer} uid The id of the user whose password to reset., required:true, source:path
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: UserResource.password_reset(uid).then(yourSuccessCallback,yourErrorCallback);
	 */
	var password_reset = function(uid) {
		return;
	};
		
	/*
	 * resend_welcome_email
	 * 
	 * NOTE the docs in services definitions is not uop to date 
	 * 
	 * resets the password
	 * Method: POST
	 * Url: http://drupal_instance/api_endpoint/user/resend_welcome_email/{UID}
	 * Headers: Content-Type:application/json
	 * 
	 * @param {Integer} uid The id of the user whose welcome email to resend., required:true, source:path
	 * 
	 * @return 	{Promise}
	 * 
	 * useage: UserResource.resend_welcome_email(uid).then(yourSuccessCallback,yourErrorCallback);
	 */
	var resend_welcome_email = function(uid) {
		return;
	};
		
	//public methods	
	return {
		//retrieve : retrieve,
		//create : create,
		//update : update,
		//_delete : _delete,
		//index : index,
		login : login,
		logout : logout,
		//token : token,
		//request_new_password : request_new_password,
		register : register,
		//cancel : cancel,
		//password_reset : password_reset,
		//resend_welcome_email : resend_welcome_email,
	};

});





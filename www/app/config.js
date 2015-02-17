/**
* Application services module
*/
var config = angular.module('config', []);


/**
 * 
**/
config.constant('DrupalAPISettings', {
	  //your sites domain
	  drupal_instance	: 'http://www.hladky.at/headless/',
	  //your service endpoints
	  //Machine-readable name of the endpoint : Path to endpoint 
	  api_endpoints		:  {
		  api_v1 : 'api/v1/',
	  },
	  // resource : defualt or alias
	  // if you set custom aliases for your recources in admin/structure/services/list/api/resources change value here
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
	  formats : {
		  json 	: '.json',
		  xml 	: '.xml'
	  }
});

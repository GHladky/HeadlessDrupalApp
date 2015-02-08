// angular.module is a global place for creating, registering and retrieving Angular modules
// 'headlessDrupalApp' is the name of this angular module example (also set in a <body> attribute in index.html)
var headlessDrupalApp = angular.module('headlessDrupalApp', [ 'ionic',
                                                          //root controllers
                                                          'appControllers', 
                                                          //global modules
													
														  //components
														  'overviewControllers', 'networkControllers', 'apiServicesControllers'
														]);
	    
headlessDrupalApp.run(function($ionicPlatform ) {
  $ionicPlatform.ready(function() {
	
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    
  });
});													
														
headlessDrupalApp.config(
			[ '$stateProvider', '$urlRouterProvider',
	  function($stateProvider,   $urlRouterProvider) {
	 
	

	  // Ionic uses AngularUI Router which uses the concept of states
	
	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/overview');
	
	  // Learn more here: https://github.com/angular-ui/ui-router or look in the readme.md in the projects root folder
	  // Set up the various states which the app can be in.
	  // Each state's controller can be found in controllers.js
	  $stateProvider
	  
	  // setup an abstract state for the app directive 
	  // this is the root route
	  .state('app', {
	      url: "/app",
	      abstract: true,
	      templateUrl: "app/templates/main-sidemenu.html",
	      controller: 'AppCtrl'  
	  })
	  
	  //States for the overview page
	  //______________________________________________
	  .state('app.overview', {
	    url: '/overview',
	    views: {
		      'mainContent': {
		        templateUrl: 'app/components/overview/overview.html',
		        controller:  'overviewController' 
		      }
		    }
	  })
	  
	   //States for the network page
	  //______________________________________________
	  .state('app.network', {
	    url: '/network',
	    views: {
		      'mainContent': {
		        templateUrl: 'app/components/network/network.html',
		        controller:  'networkController' 
		      }
		    }
	  })
	 
	  /*
	   //States for the start page
	  //______________________________________________
	  .state('app.api-services', {
	    url: '/api-services',
	    abstract: true,
	  })
	  
	   .state('app.api-services', {
	    url: '/api-services',
	    views: {
		      'mainContent': {
		        templateUrl: 'app/components/api-services/firstBasicTests.html',
		        controller:  'firstBasicTestsApiServiceCtrl' 
		      }
		    }
	   })*/
	  ;

}]);



	    
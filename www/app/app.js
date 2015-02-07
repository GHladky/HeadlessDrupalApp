// angular.module is a global place for creating, registering and retrieving Angular modules
// 'headlessDrupalApp' is the name of this angular module example (also set in a <body> attribute in index.html)
var headlessDrupalApp = angular.module('headlessDrupalApp', [ 'ionic',
                                                          //main controller
                                                          'app.controllers', 
                                                          //global modules
														  'calendar.controllers', 
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
	  $urlRouterProvider.otherwise('/app/calendar');
	
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
	  
	   //States for the start page
	  //______________________________________________
	  .state('app.calendar', {
	    url: '/calendar',
	    views: {
	      'mainContent': {
	        templateUrl: 'app/components/calendar/calendar.html',
	        controller:  'calendarCtrl' 
	      }
	    }
	  });

}]);



	    
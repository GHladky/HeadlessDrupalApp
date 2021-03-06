// angular.module is a global place for creating, registering and retrieving Angular modules
// 'headlessDrupalApp' is the name of this angular module example (also set in a <body> attribute in index.html)
var headlessDrupalApp = angular.module('headlessDrupalApp', [ 'ionic',
                                                          //root controllers
                                                          'appControllers', 
                                                          //global modules
                                                         'ngMessages',
														  //components
														  'overviewControllers', 'networkControllers',  'formControllers', 
														  
														  'nodeResourceControllers',
														  'systemResourceControllers',
														  'userResourceControllers',
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
	 
	  
	  
	  //Abstract states for the form pages
	  //______________________________________________
	  .state('app.form', {
	    url: '/form',
	    abstract: true,
	    views: {
		      'mainContent': {
		    	template : '<ion-nav-view name="formContent"></ion-nav-view>',
		      }
		    }
	  })
	  //States for the login tests page
	  //______________________________________________
	  .state('app.form.login', {
	    url: '/login',
	    views: {
		      'formContent': {
		    	  templateUrl: 'app/components/forms/login.html',
		  		controller:  'loginCtrl' 
		      }
		    }
	   })
	  //States for the register tests page
	  //______________________________________________
	   .state('app.form.register', {
	    url: '/register',
	    views: {
		      'fromContent': {
		    	templateUrl: 'app/components/forms/register.html',
		  		controller:  'registerCtrl' 
		      }
		    }
		
	   })
	   //States for the forgot password module tests page
	  //______________________________________________
	   .state('app.form.forgotpassword', {
	    url: '/forgotpassword',
	    views: {
		      'formContent': {
		    	templateUrl: 'app/components/forms/forgotPassword.html',
		  		controller:  'forgotpasswordCtrl' 
		      }
		    }
		
	   })
	  
	  //Abstract states for the api pages
	  //______________________________________________
	  .state('app.api', {
	    url: '/api',
	    abstract: true,
	    views: {
		      'mainContent': {
		    	templateUrl: 'app/components/api-services/tabs.html',
		      }
		    }
	  })
	 
	  //Node Resource
	  //______________________________________________
	   .state('app.api.nodeRecource', {
	    url: '/nodeRecource',
	    views: {
		      'node-resource': {
		    	templateUrl: 'app/components/api-services/node-resource/nodeResource.html',
		  		controller:  'nodeResourceController' 
		      }
		    }
	   })
	   
	  //System Resource
	  //______________________________________________
	   .state('app.api.systemRecource', {
	    url: '/systemRecource',
	    views: {
		      'system-resource': {
		    	templateUrl: 'app/components/api-services/system-resource/systemResource.html',
		  		controller:  'systemResourceController' 
		      }
		    }
	   })
	   
	   //User Resource
	   //______________________________________________
	   .state('app.api.userRecource', {
	    url: '/userRecource',
	    views: {
		      'user-resource': {
		    	templateUrl: 'app/components/api-services/user-resource/userResource.html',
		  		controller:  'userResourceController' 
		      }
		    }
	   });

}]);



	    
var appControllers = angular.module('app.controllers', [ 'ngCordova']);

/* 
 * 
 * App Controllers 
 * This controller holds general logic for all app.* controlers
 * 
 * Docs:
 * http://ionicframework.com/docs/api/service/$ionicPlatform/
 * http://ionicframework.com/docs/api/service/$ionicPopup/#alert
 * https://cordova.apache.org/docs/en/edge/cordova_events_events.md.html#Events
 * http://jonathancreamer.com/adding-clarity-to-scope-inheritance-in-angular/
 * */

appControllers
.controller('AppCtrl', 
							['$rootScope', '$scope', '$ionicPopup', '$cordovaNetwork',   
                     function($rootScope,   $scope,   $ionicPopup,   $cordovaNetwork) {

	console.log('in AppCtrl'); 
	
	var inetAlreadyNotified = false;
		
	$scope.alertEnsureInetConnection = function() {
		console.log('alertEnsureInetConnection'); 
	
	
		    var noInetAlert =	$ionicPopup.alert({
					   title	: 'No internet',
					   template	: 'Pleas turn on your internet connection and try again!',
					   okType	: 'button-energized'
		    });
		  
		    //actions after press okButton
			noInetAlert.then( function(result) {
				console.log('then'); 
								noInetAlert.close();
								//optional
								//ionic.Platform.exitApp();
			});
		   
	};
	
	//on inet online
	//NOTICE this event fires only on "resume online" so we have to init server loop manually in inti()
	$rootScope.$on('$cordovaNetwork:online', function(event, networkState){
		console.log('APPTEST: on online');
	});
	
	//on inet offline
	$rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
		console.log('APPTEST: on offline');
		if(inetAlreadyNotified === false) {
			inetAlreadyNotified = true;
			$scope.alertEnsureInetConnection();
		}
	});

	
}]);














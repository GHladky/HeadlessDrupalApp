/* Controllers of network component */
//______________________________________________

var networkControllers = angular.module('networkControllers', []);

/* Main network Controllers */
networkControllers.controller('networkController', 
				['$rootScope', '$scope', '$ionicPopup', '$cordovaNetwork',   
         function($rootScope,   $scope,   $ionicPopup,   $cordovaNetwork) {	
		
		
		
		var inetAlreadyNotified = false;
		
		var addToFriedEventList = function(eventName) {
			
			var newEvent = {};
				newEvent.name = eventName;
				newEvent.date = Date.now();
				
			$scope.firedNetworkEventList.push(newEvent); 
		};
		
		$scope.firedNetworkEventList = [];
		
		$scope.alertEnsureInetConnection = function() {	
			
			var noInetAlert =	$ionicPopup.alert({
			   title	: 'No internet',
			   template	: 'Pleas turn on your internet connection and try again!',
			   okType	: 'button-energized'
			});
			
			//actions after press okButton
			noInetAlert.then( function(result) {
				noInetAlert.close();
				//optional close app via ionic.Platform.exitApp();
			});
		};
		
		//isOnline check
		$scope.isOnline = function() {	
			var isOnlineAlert =	$ionicPopup.alert({
			   title	: "isOnline returns: "+ $cordovaNetwork.isOnline(),
			   template	: 'You can try again!',
			   okType	: 'button-energized'
			});
			
			//actions after press okButton
			isOnlineAlert.then( function(result) {
				isOnlineAlert.close();
			});
		};
		
		//isOffline check
		$scope.isOffline = function() {	
			
			var isOfflineAlert =	$ionicPopup.alert({
			   title	: "isOffline returns: "+ $cordovaNetwork.isOffline(),
			   template	: 'You can try again!',
			   okType	: 'button-energized'
			});
			//actions after press okButton
			isOfflineAlert.then( function(result) {
				isOfflineAlert.close();
			});
		};

		//on inet online
		//NOTICE this event fires only on "resume online"
		$rootScope.$on('$cordovaNetwork:online', function(event, networkState){
			addToFriedEventList("$cordovaNetwork:online");
		});
		
		//on inet offline
		$rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
			addToFriedEventList("$cordovaNetwork:offline");
			
			if(inetAlreadyNotified === false) {
				inetAlreadyNotified = true;
				$scope.alertEnsureInetConnection();
			}
		});
		
}]);

angular
    .module("rozgaar")
    .controller('mainCtrl', ['$scope', '$timeout', function($scope, $timeout){
        console.log("mainctrl");
        var Redirect = function() {  
			window.location="login.html"; 
		}
        $timeout(Redirect,3000);
    }]);
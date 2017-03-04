angular
    .module('rozgaar')
    .controller('loginCtrl', ['$scope', function($scope){
        console.log("loginCtrl");
	$scope.submitDet = function(){
		check($scope.jobID);
	}
	function check(data){
		if($scope.jobID === "admin"){
			alert("Welcome to Rozgaar");
			window.location.href = 'postlogin.html';
		}
	}
}]);
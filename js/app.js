var rozgaar = angular.module('rozgaar',[]);

rozgaar.controller('validUser', function($scope){
	$scope.submitDet = function(){
		check($scope.jobID);
	}
	function check(data){
		if($scope.jobID === "admin"){
			alert("Welcome to Rozgaar");
			window.location.href = 'postlogin.html';
		}
	}
});

rozgaar.directive("shreyas",function(){
	console.log("Entered Directive");
	return{
		template: "<h1>SHREYAS!!</h1>"
	}
})
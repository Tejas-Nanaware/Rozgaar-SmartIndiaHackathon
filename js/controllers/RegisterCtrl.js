angular
.module('Rozgaar')
.controller('RegisterCtrl', ["$scope", "$compile", function($scope, $compile) {
    console.log('inside register controller');
    $scope.RegisterCtrlObject = [];
    $scope.RegisterCtrlObject.title = "Register Here";
    console.log($scope.RegisterCtrlObject.title);
}]);
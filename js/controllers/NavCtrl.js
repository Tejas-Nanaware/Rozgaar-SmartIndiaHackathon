angular
.module('Rozgaar')
.controller('NavCtrl', 
['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        //console.log(currentRoute);
        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
            return page === currentRoute ? 'active' : '';
        });
    };
    
    $scope.loadHome = function () {
        $location.url('/Home');
    };
    
    $scope.loadMNREGA = function () {
        $location.url('/MNREGA');
    };
    
    $scope.loadContact = function () {
        $location.url('/Contact');
    };

    $scope.loadRegister = function () {
        $location.url('/Register');
    };
}]);
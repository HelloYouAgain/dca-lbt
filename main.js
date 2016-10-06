//main.js

//  --- Angular Config ---

angular.module('MyLBT', ['ngRoute']).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/newError', {
        templateUrl: 'newError.html',
        controller: 'MainController'
      }).
      otherwise({
        redirectTo: '/newError'
      });
  }]);


//  --- Main Controller ---

angular.module('MyLBT').controller('MainController', ['$scope','$window','$http', '$rootScope', function ($scope, $window, $http, $rootScope) {    
    
	$scope.saludo="Hola";   

}]);


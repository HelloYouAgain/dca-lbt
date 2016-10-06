//main.js

//  --- Angular Config ---

angular.module('MyLBT', ['ngRoute']).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    	when('/', {
        templateUrl: 'listErrors.html',
        controller: 'MainController'
      }).
      when('/newError', {
        templateUrl: 'newError.html',
        controller: 'MainController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


//  --- Main Controller ---

angular.module('MyLBT').controller('MainController', ['$scope','$window','$http', '$rootScope', function ($scope, $window, $http, $rootScope) {    
    
	$scope.saludo="Hola";   
	$scope.errors=[
			{
					id: 1,
					gravity: 'serious',
					type: 'minor',
					creator: 'gonzalez',
					devsInvolved: ['dev1', 'dev2', 'dev4'],
					shortDescription: 'dskjaslkdj dklsajdlka slkdjalksdj dlksajdlk lksdjalksj slkdjaklj',
					status: 'pending',
					closed: false
			},
			{
					id: 2,
					gravity: 'serious',
					type: 'minor',
					creator: 'gonzalez',
					devsInvolved: ['dev1', 'dev2', 'dev3'],
					shortDescription: 'dskjaslkdj dklsajdlka slkdjalksdj dlksajdlk lksdjalksj slkdjaklj',
					status: 'resolved',
					closed: false
			},
			{
					id: 3,
					gravity: 'serious',
					type: 'minor',
					creator: 'gonzalez',
					devsInvolved: ['dev1', 'dev4'],
					shortDescription: 'dskjaslkdj dklsajdlka slkdjalksdj dlksajdlk lksdjalksj slkdjaklj',
					status: 'not an error',
					closed: true
			}
	]

}]);


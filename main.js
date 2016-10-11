//main.js

//  --- Angular Config ---

angular.module('MyLBT', ['ngRoute']).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    	when('/', {
        templateUrl: 'listErrors.html',
        controller: 'listErrorsController'
      }).
      when('/newError', {
        templateUrl: 'newError.html',
        controller: 'newErrorController'
      }).
			when('/error/:id', {
        templateUrl: 'errorDetails.html',
        controller: 'errorDetailsController'
      }).
			when('/error/:id/edit', {
        templateUrl: 'editError.html',
        controller: 'editErrorController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);







//  --- Main Controller ---

angular.module('MyLBT').controller('listErrorsController', ['$scope','$window','$http', '$rootScope', function ($scope, $window, $http, $rootScope) {      
	$scope.errors=[];  
    
	$http.get('/getErrorsArray').success(function(res){
			$scope.errors=res.data;
	}).error(function(){
			console.log("error");
	});

}]);




angular.module('MyLBT').controller('newErrorController', ['$scope','$window','$http', '$rootScope', function ($scope, $window, $http, $rootScope) {    
	$scope.error = {
		id: 0,
		gravity: '',
		type: '',
		creator: {
			email: '',
			name:''
		},
		devsInvolved: {dev1: false, dev2: false, dev3: false, dev4: false},
		shortDescription: '',
		largeDescription: '',
		status: 'pendiente',
			comments:[]
	}
	
	$scope.saveError = function(){
		//Enviar nuevo error a node y alli almacenarlo (y ponerle el id que le corresponda)
		var obj = {data: $scope.error};
    $http.post('/postNewError',obj).success(function(data) {
				$window.location.href="#/";
    }).error(function(data) {
        console.log("error in posting");
    });
	}
	
}]);





angular.module('MyLBT').controller('errorDetailsController', ['$scope','$window','$http', '$rootScope', '$routeParams', function ($scope, $window, $http, $rootScope, $routeParams) {   //Obtener error 
	$scope.error;
	
	$http.get('/getError/'+$routeParams.id).success(function(res){
			$scope.error=res.data;
	}).error(function(){
			console.log("error");
	});
	
	$scope.newComment = {
		author: {
			name: '',
			email: ''
		},
		message: ''
	}
	
	$scope.saveComment = function(){
		var nnewComment = {
			author: {
				name: $scope.newComment.author.name,
				email: $scope.newComment.author.email
			},
			message: $scope.newComment.message
		}
		$scope.error.comments.push(nnewComment);
		var obj = {data: $scope.error};
    $http.post('/postChangesError/'+$routeParams.id,obj).success(function(data) {
    }).error(function(data) {
        console.log("error in posting");
    });
	}
}]);





angular.module('MyLBT').controller('editErrorController', ['$scope','$window','$http', '$rootScope', '$routeParams', function ($scope, $window, $http, $rootScope, $routeParams) {   
	$scope.error;
	$http.get('/getError/'+$routeParams.id).success(function(res){
			$scope.error=res.data;
	}).error(function(){
			console.log("error");
	});
	
	
		$scope.saveErrorChanges = function(){
		var obj = {data: $scope.error};
    $http.post('/postChangesError/'+$routeParams.id,obj).success(function(data) {
				$window.location.href="#/error/"+$routeParams.id;
    }).error(function(data) {
        console.log("error in posting");
    });
	}
}]);



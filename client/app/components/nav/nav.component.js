const navController = function($scope, $stateParams, databaseService, $location, $rootScope) {
    
				/*localStorage.setItem("username", data.first_name);
                localStorage.setItem("id", data._id);
                localStorage.setItem("login",data.isLoggedin);
                $rootScope.login = true;
                $rootScope.username = data.first_name;*/
                if(localStorage.getItem("username") && localStorage.getItem("login")){
                	$scope.thu = localStorage.getItem("username");
                	
                	$rootScope.login = true;
                	$rootScope.username = localStorage.getItem("username");
                	$rootScope.userid = localStorage.getItem("id");
                }

};

angular.module('myApp')
    .component('myNavigation', {
    	controller: navController,
        templateUrl: 'app/components/nav/nav.html'
    });

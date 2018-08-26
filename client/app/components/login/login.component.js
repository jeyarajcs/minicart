const loginController = function($scope, $stateParams, databaseService, $location, $rootScope) {
    $scope.guid = databaseService.guidHandler('load');
    $scope.cart = [];

    getCartContents();

    function getCartContents() {
        databaseService.getFromDatabase(`/api/cart/${$scope.guid}`)
            .then((data) => {
                $scope.cart = data;
            });
    }
    $scope.formSubmit = function() {
        databaseService.postToDatabase(`/api/login/${$scope.username}/${$scope.password}`)
            .then((data) => {
                localStorage.setItem("username", data.first_name);
                localStorage.setItem("id", data._id);
                localStorage.setItem("login",data.isLoggedin);
                $rootScope.login = true;
                $rootScope.username = data.first_name;
                $location.path('/');
            }).catch((err) => {
                console.log(err)
            })
    }

};

angular.module('myApp')
    .component('myLogin', {
        controller: loginController,
        templateUrl: 'app/components/login/login.html'
    })
    .config(function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                component: 'myLogin'
            });
    });

/**
 * Created by Liam on 2/7/2017.
 */
var app = angular.module('wehaul-app', ['ngRoute', 'ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', '$httpProvider',
    function($urlRouterProvider, $stateProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('base', {
            abstract: true,
            template: '<ui-view/>'
        });
/*
        $stateProvider.state('base.home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            url: '/home'
        });

        $stateProvider.state('base.calendar', {
            templateUrl: 'views/calendar.html',
            controller: 'ScheduleController',
            url: '/schedule'
        });
*/
}]);

app.controller('NavController',
    ['$scope',
        function($scope) {
            $scope.toggleText = "☰";
            $scope.showNav = "show-nav";

            $scope.toggleNav = function() {
                if($scope.toggleText == "☰") {
                    $scope.toggleText = "✕";
                    $scope.showNav = "hide-nav";
                } else if($scope.toggleText == "✕") {
                    $scope.toggleText = "☰";
                    $scope.showNav = "show-nav";
                }
            };


        }
    ]
);
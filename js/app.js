'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html', 
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/startup', {
        templateUrl: 'partials/startUpPage.html', 
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/startup/2/', {
        templateUrl: 'partials/startUpPage_2.html', 
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/project_a', {
        templateUrl: 'partials/startup-board/project_a.html', 
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/project_b', {
        templateUrl: 'partials/startup-board/project_b.html', 
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/project_c', {
        templateUrl: 'partials/startup-board/project_c.html',
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/project_d', {
        templateUrl: 'partials/startup-board/project_d.html',
        controller: GenericViewCtrl
    });
    
    $routeProvider.when('/project_e', {
        templateUrl: 'partials/startup-board/project_e.html',
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/project_f', {
        templateUrl: 'partials/startup-board/project_f.html',
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/troubleshooting', {
        templateUrl: 'partials/troubleShooting.html', 
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/trouble_a', {
        templateUrl: 'partials/trouble-board/trouble_a.html', 
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/trouble_b', {
        templateUrl: 'partials/trouble-board/trouble_b.html', 
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/imprint', {
        templateUrl: 'partials/imprint.html', 
        controller: GenericViewCtrl
    });
      
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

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
    
    $routeProvider.when('/startup/3/', {
        templateUrl: 'partials/startUpPage_3.html', 
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
      
    $routeProvider.when('/project_g', {
        templateUrl: 'partials/startup-board/project_g.html',
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/project_h', {
        templateUrl: 'partials/startup-board/project_h.html',
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/project_i', {
        templateUrl: 'partials/startup-board/project_i.html',
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/project_j', {
        templateUrl: 'partials/startup-board/project_j.html',
        controller: GenericViewCtrl
    });
      
          
    $routeProvider.when('/project_k', {
        templateUrl: 'partials/startup-board/project_k.html',
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/project_l', {
        templateUrl: 'partials/startup-board/project_l.html',
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/project_m', {
        templateUrl: 'partials/startup-board/project_m.html',
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/project_o', {
        templateUrl: 'partials/startup-board/project_o.html',
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
      
    $routeProvider.when('/trouble_c', {
        templateUrl: 'partials/trouble-board/trouble_c.html', 
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/trouble_d', {
        templateUrl: 'partials/trouble-board/trouble_d.html', 
        controller: GenericViewCtrl
    });
      
    $routeProvider.when('/imprint', {
        templateUrl: 'partials/imprint.html', 
        controller: GenericViewCtrl
    });
      
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

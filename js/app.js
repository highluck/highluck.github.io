'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html',
        controller: GenericViewCtrl
    });
    $routeProvider.when('/datastory', {
        templateUrl: 'partials/storagePage.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/devstory', {
        templateUrl: 'partials/startUpPage.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/devstory/2/', {
        templateUrl: 'partials/startUpPage_2.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/devstory/3/', {
        templateUrl: 'partials/startUpPage_3.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/data_a', {
        templateUrl: 'partials/data-board/project_a.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/data_b', {
        templateUrl: 'partials/data-board/project_b.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/data_c', {
        templateUrl: 'partials/data-board/project_c.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_s', {
        templateUrl: 'partials/dev-diary-board/project_s.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_r', {
        templateUrl: 'partials/dev-diary-board/project_r.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_a', {
        templateUrl: 'partials/dev-diary-board/project_a.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_b', {
        templateUrl: 'partials/dev-diary-board/project_b.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_c', {
        templateUrl: 'partials/dev-diary-board/project_c.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_d', {
        templateUrl: 'partials/dev-diary-board/project_d.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_e', {
        templateUrl: 'partials/dev-diary-board/project_e.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_f', {
        templateUrl: 'partials/dev-diary-board/project_f.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_g', {
        templateUrl: 'partials/dev-diary-board/project_g.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_h', {
        templateUrl: 'partials/dev-diary-board/project_h.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_i', {
        templateUrl: 'partials/dev-diary-board/project_i.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_j', {
        templateUrl: 'partials/dev-diary-board/project_j.html',
        controller: GenericViewCtrl
    });


    $routeProvider.when('/project_k', {
        templateUrl: 'partials/dev-diary-board/project_k.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_l', {
        templateUrl: 'partials/dev-diary-board/project_l.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_m', {
        templateUrl: 'partials/dev-diary-board/project_m.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_o', {
        templateUrl: 'partials/dev-diary-board/project_o.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_p', {
        templateUrl: 'partials/dev-diary-board/project_p.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_q', {
        templateUrl: 'partials/dev-diary-board/project_q.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_n', {
        templateUrl: 'partials/dev-diary-board/project_n.html',
        controller: GenericViewCtrl
    });

    $routeProvider.when('/project_t', {
        templateUrl: 'partials/dev-diary-board/project_t.html',
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

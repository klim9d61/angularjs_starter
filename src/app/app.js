'use strict';

angular
    .module('app', [
        'ui.router'
    ])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                controller: 'main',
                templateUrl: './app/main.html'
            })

    });



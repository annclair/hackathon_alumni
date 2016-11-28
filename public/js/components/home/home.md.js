((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.home', {
            url:'/',
            // templateUrl: 'js/components/home/home.html'
            template: '<home></home>'
        })
    }])
})(angular.module('app.home', ['ui.router']))

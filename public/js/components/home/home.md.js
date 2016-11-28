((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.home', {
            url:'/home',
            // templateUrl: 'js/components/home/home.html'
            template: '<home></home>'
        })
    }])
})(angular.module('app.home', []))

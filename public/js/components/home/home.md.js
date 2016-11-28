((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.home', {
            url:'/home',
            template: '<home></home>'
        })
    }])
})(angular.module('app.home', []))

((app) =>{
  'use strict'
  app.config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state('app.projects', {
          url:'/projects',
          template: '<projects></projects>'
      })
  }])

})(angular.module('app.projects', []))

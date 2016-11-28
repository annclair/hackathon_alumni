((app) =>{
  'use strict'
  app.config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state('app.projects', {
          url:'/projects',
          // templateUrl: 'js/components/projectsPage/projectsPage.html'
          template: '<projects></projects>'
      })
  }])

})(angular.module('app.projects', []))

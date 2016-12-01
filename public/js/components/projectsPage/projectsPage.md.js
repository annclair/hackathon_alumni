((app) =>{
  'use strict'
  app.config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state('app.projects', {
          url:'/projects',
          // templateUrl: 'js/components/projectsPage/projectsPage.html'
          template: '<projects-page></projects-page>'
      })
  }])

})(angular.module('app.projects', ['ui.router']))

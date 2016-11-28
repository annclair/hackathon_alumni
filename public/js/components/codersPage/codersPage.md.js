((app) =>{
  'use strict'
  app.config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state('app.coders', {
          url:'/coders',
          // templateUrl: 'js/components/codersPage/codersPage.html'
          template:'<coders></coders>'
      })
  }])

})(angular.module('app.coders', []))

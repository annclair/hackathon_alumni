((app) =>{
  'use strict'
  app.config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state('app.coders', {
          url:'/coders',
          template:'<coders></coders>'
      })
  }])

})(angular.module('app.coders', []))

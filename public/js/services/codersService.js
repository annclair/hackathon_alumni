((app) => {

  'use strict'
  app.service('codersService', function($http) {
      return {
        get() {
            return $http.get('/api/coders')
        },
        add(coder) {
            return $http.post('/api/coders', coder)
        },
        edit(coder) {
            return $http.put('/api/coders/' + coder._id, coder)
        },
        delete(coder) {
            return $http.delete('/api/coders/' + coder._id)
        }
      }
  })

})(angular.module('app.services'))

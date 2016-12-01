((app) => {

  'use strict'
  app.service('projectsService', function($http) {
      return {
        get() {
            return $http.get('/api/projects')
        },
        add(project) {
            return $http.post('/api/projects', project)
        },
        edit(project) {
            return $http.put('/api/projects/' + project._id, project)
        },
        delete(project) {
            return $http.delete('/api/projects/' + project._id)
        }
      }
  })

})(angular.module('app.services'))

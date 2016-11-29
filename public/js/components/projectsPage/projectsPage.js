((app) => {
    'use strict'

    app.component('projectsPage', {
        templateUrl: 'js/components/projectsPage/projectsPage.html',

        controller: ['projectsService', function(projectsService) {

            let _previous = {}
            this.startIndex = 0

            projectsService.get().then((res) => {
                this.projects = res.data
            })

            this.selected = (project, index) => {
                this.selectedProject = project
                this.selectedProject.position = index
            }

            //on ajoute des projects
            this.add = () => {
              this.newProject.visuel = this.visuel.base64
                projectsService.add(this.newProject).then((res) => {
                    this.projects.push(res.data)
                    this.newProject = {}
                    this.newProject = null
                })
            }

            // on supprime les projects

            this.delete = () => {

                projectsService.delete(this.selectedProject).then((res) => {
                    this.projects.splice(this.selectedProject.position, 1);
                    this.selectedProject = null
                })
            }

            // on modifie les projects
            this.edit = () => {
                _previous[this.selectedProject.position] = angular.copy(this.selectedProject)
            }

            this.save = () => {
              this.selectedProject.visuel = this.visuel.base64 ;
              projectsService.edit(this.selectedProject).then((res) => {
                  this.projects.push(res.data)
              })

            }

            //on annule une modification en cours
            this.cancel = () => {
                this.projects[this.selectedProject.position] = _previous[this.selectedProject.position]
                this.selectedProject = null
            }

            // mise en place du filtre
            this.orderByMe = (x) => {
              this.myOrderBy = x;
            }


        }]
    })

})(angular.module('app.projects'))

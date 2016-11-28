((app) => {
    'use strict'

    app.component('projectsBlog', {
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
              projectsService.edit(this.selectedProject).then((res) => {
                  this.projects.push(res.data)
              })

            }

            //on annule une modification en cours
            this.cancel = () => {
                this.projects[this.selectedProject.position] = _previous[this.selectedProject.position]
                this.selectedProject = null
            }

            // gestion des fleches précedent & suivant
            this.next = function(projects) {
                this.startIndex += 1;
            };

            this.back = function(projects) {
                this.startIndex -= 1;
            };
        }]
    })

})(angular.module('app.projects'))

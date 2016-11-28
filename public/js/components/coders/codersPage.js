((app) => {
    'use strict'

    app.component('projectsBlog', {
        templateUrl: 'js/components/coders/codersPage.html',

        controller: ['codersService', function(codersService) {

            let _previous = {}
            this.startIndex = 0

            codersService.get().then((res) => {
                this.projects = res.data
            })

            this.selected = (coder, index) => {
                this.selectedCoder = coder
                this.selectedCoder.position = index
            }

            //on ajoute des codeurs
            this.add = () => {
                codersService.add(this.newCoder).then((res) => {
                    this.coders.push(res.data)
                    this.newCoder = {}
                    this.newCoder = null
                })
            }

            // on supprime les codeurs

            this.delete = () => {
                codersService.delete(this.selectedCoder).then((res) => {
                    this.coders.splice(this.selectedCoder.position, 1);
                    this.selectedCoder = null
                })
            }

            // on modifie les codeurs
            this.edit = () => {
                _previous[this.selectedCoder.position] = angular.copy(this.selectedCoder)
            }

            this.save = () => {
              codersService.edit(this.selectedCoder).then((res) => {
                  this.coders.push(res.data)
              })

            }

            //on annule une modification en cours
            this.cancel = () => {
                this.coders[this.selectedCoder.position] = _previous[this.selectedCoder.position]
                this.selectedCoder = null
            }

            // gestion des fleches précedent & suivant
            this.next = function(coders) {
                this.startIndex += 1;
            };

            this.back = function(coders) {
                this.startIndex -= 1;
            };
        }]
    })

})(angular.module('app.codersPage'))

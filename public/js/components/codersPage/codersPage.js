((app) => {
    'use strict'

    app.component('codersPage', {
        templateUrl: 'js/components/codersPage/codersPage.html',

        controller: ['codersService', function(codersService) {

            let _previous = {}
            this.startIndex = 0
this.coders=[{title:"coucouc"}]
            codersService.get().then((res) => {
                this.coders = res.data
            })

            this.selected = (coder, index) => {
                this.selectedCoder = coder
                this.selectedCoder.position = index
            }

            //on ajoute des coders
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

        }]
    })

})(angular.module('app.coders'))

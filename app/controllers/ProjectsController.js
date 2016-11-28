'use strict'
let Controller = require('./Controller')
const PROJECT = require('../models/project')  // on ne peut pas modifier le model

class ProjectsController extends Controller {

    constructor(){
        super(PROJECT) //fait appel au constructeur de la classe parente
    }
}

module.exports = ProjectsController

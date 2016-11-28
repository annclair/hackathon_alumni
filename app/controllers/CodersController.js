'use strict'
let Controller = require('./Controller')
const CODER = require('../models/coder')  // on ne peut pas modifier le model

class CodersController extends Controller {

    constructor(){
        super(CODER) //fait appel au constructeur de la classe parente
    }
}

module.exports = CodersController

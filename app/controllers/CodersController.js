'use strict'
let Controller = require('./Controller')
const CODER = require('../models/coder')

class CodersController extends Controller {

    constructor(){
        super(CODER) 
    }

    find(req, res, next){
      this.model.find(req.query)
      .populate({
        path:'projects'

    }).exec((err, document) => {
          if (err)
              next(err)
          else
              res.json(document)
      })
    }
}

module.exports = CodersController

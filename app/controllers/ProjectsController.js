'use strict'
let Controller = require('./Controller')
const PROJECT = require('../models/project')  

class ProjectsController extends Controller {

    constructor(){
        super(PROJECT)
    }

    find(req, res, next){
      this.model.find(req.query)
      .populate({
        path:'coders'

    }).exec((err, document) => {
          if (err)
              next(err)
          else
              res.json(document)
      })
    }
}

module.exports = ProjectsController

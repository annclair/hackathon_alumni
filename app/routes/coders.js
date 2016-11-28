'use strict'
let CodersController = require('../controllers/CodersController')

module.exports = (app)=> {

let ctrl = new CodersController()

app.get('/Coders', (req, res, next) => {
    return ctrl.find(req,res,next)
})

app.get('/Coders/:id', (req, res, next) => {
    return ctrl.findById(req,res,next)
})

app.post('/Coders', (req, res, next) => {
    return ctrl.create(req,res,next)
})

app.put('/Coders/:id', (req, res, next) => {
    return ctrl.update(req,res,next)
})

app.delete('/Coders/:id', (req, res, next) => {
    return ctrl.delete(req,res,next)
})
}

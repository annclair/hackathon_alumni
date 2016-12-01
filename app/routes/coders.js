'use strict'
let CodersController = require('../controllers/CodersController')

module.exports = (app)=> {

let ctrl = new CodersController()

app.get('/coders', (req, res, next) => {
    return ctrl.find(req,res,next)
})

app.get('/coders/:id', (req, res, next) => {
    return ctrl.findById(req,res,next)
})

app.post('/coders', (req, res, next) => {
    return ctrl.create(req,res,next)
})

app.put('/coders/:id', (req, res, next) => {
    return ctrl.update(req,res,next)
})

app.delete('/coders/:id', (req, res, next) => {
    return ctrl.delete(req,res,next)
})
}

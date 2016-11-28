'use strict'

let mongoose = require('mongoose')

// Create du schéma Project
let Schema = mongoose.Schema
let projectModel = mongoose.model('Project', new mongoose.Schema({
    title : {
        type: String,
        unique : true,
        required: true
    },
    visuel : {
        type: String
        // ,
        // required: true
    },
    resume : {
        type: String
        // ,
        // required: true
    },
    language : {
        type: String
        // ,
        // required: true
    },
    school : {
        type : String
    },
    github : {
        type : String
    },
    projectUrl : {
        type : String
    }
    // ,
    //
    // coders : [{
    //     type : Schema.Types.ObjectId,
    //     ref : 'Coder'
    // }]

}, {
    timestamps: true
}))

module.exports = projectModel

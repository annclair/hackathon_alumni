'use strict'

let mongoose = require('mongoose')

// Create du schéma Project
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
    projectUrl : {
        type : String
    },
    language : {
        type: String
        // ,
        // required: true
    },
    techno : {
        type: String
    },
    type : {
        type: String
    },
    school : {
        type : String
    },
    github : {
        type : String
    },
    customerName : {
        type : String
    },
    customerAddress : {
        type : String
    },
    customerEmail : {
        type : String
    },
    customerPhoneNumber : {
        type : Number
    },

    coders : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Coder'
    }]

}, {
    timestamps: true
}))

module.exports = projectModel

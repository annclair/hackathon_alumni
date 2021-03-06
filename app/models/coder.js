'use strict'

let mongoose = require('mongoose')

// Create du schéma Project
let coderModel = mongoose.model('Coder', new mongoose.Schema({
    firstname : {
      type: String
      // ,
      // required: true
    },
    lastname : {
      type: String
      // ,
      // required: true
    },
    email : {
      type: String,
      unique : true
      // ,
      // required: true
    },
    photo : {
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
    linkedin : {
        type : String
    },
    twitter : {
        type : String
    },
    facebook : {
        type : String
    },
    google : {
        type : String
    },
    youtube : {
        type : String
    },
    coderUrl : {
        type : String
    },

    projects : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Project'
    }]

}, {
    timestamps: true
}))

module.exports = coderModel

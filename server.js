'use strict'
// Set up ======================================================================

let http = require('http')
let express = require('express')
let app = exports.app = express()
let bodyParser = require('body-parser')
let methodOverride = require('method-override')
let morgan = require('morgan')
let cors = require('cors')
let routes = require('./app/routes')
const ENV = require('./config/env')
const port = process.env.PORT || 8001

// Indication du dossier de notre application Angular
app.use(express.static(__dirname + '/public'))
    // Configuration des logs
app.use(morgan('combined'))
    // Configuration du parser pour récupérer les infos des requêtes -- Config par defaut
app.use(bodyParser.urlencoded({
    'limit': '100mb',
    'extended': 'true'
}))
app.use(bodyParser.json({
  limit:'100mb'
}))
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))
app.use(methodOverride('X-HTTP-Method-Override'))

//CORS cross origin request
app.use(cors())

//charger toutes les routes
app.use('/api', routes())

// Création du serveur
let server = http.Server(app) // creer server http avec notre aplli app en parametre
    // Mise en écoute
server.listen(port)
console.log(`server listening on port ${port}`)

//Méthode pour quitter "proprement" l'application -- intersepte le ctrlC pour bien couper le server (& les taches de fond)
process.on('SIGINT', function() {
    console.log("\nStopping...")
    process.exit()
});

// Connexion à mongodb via mongoose
let mongoose = require('mongoose')
mongoose.connect(ENV.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Création d'un middleware pour logger les erreurs - se refere aux next (err) plus haut en cas d'erreur, elles vont venir catégoriser les erreurs.
app.use((error, request, response, next) => {
    // Middleware to catch all errors
    console.error(error.stack)
    response.status(500).send(error.message)
})

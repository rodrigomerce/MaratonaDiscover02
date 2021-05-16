const express = require('express'); //bibliote para criar o servidor
const routes = express.Router() //criar asotas

const views = __dirname + "/views/"

const profile = {
    name: "Rodrigo",
    avatar: "https://avatars.githubusercontent.com/u/35880673?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,

}

//Usado par renderizar as paginas antes de entregar
routes.get('/', (req, res) => res.render(views + 'index'))
routes.get('/job', (req, res) => res.render(views + 'job'))
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'))
routes.get('/profile', (req, res) => res.render(views + 'profile', { profile }))

module.exports = routes;
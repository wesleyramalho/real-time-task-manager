'use strict'
const express = require('express')

const init = (app, io) => {
    //socket logic
    io.on('connection', (socket) =>     {
        //move applicant to another list/index
        socket.on('move-applicant', (payload) => {
            socket.broadcast.emit('move-applicant', payload)
        })
    })

    //don't know if I will keep on doing it
    //dont know if its gonna work without using webpack config file
    //serve static files
    //app.use(express.static('client'))
}

//dont know if its gonna work without using webpack config file
module.exports = init

'use strict'
const express = require('express')

const init = (app, io) => {
    //socket logic
    io.on('connection', (socket) => {
        console.log('New client connected')

        //move applicant to another list/index
        socket.on('move-applicant', (payload) => {
        console.log('move event')
            socket.broadcast.emit('move-applicant', payload)
        })
    })
}

module.exports = init

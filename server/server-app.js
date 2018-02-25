'use strict'
const express = require('express');
const init = require('./init');
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

init(app, io)
server.listen(4001, () => {
    console.log('Listening on http://localhost:4001')
})

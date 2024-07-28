// Servidor de EXpress
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const { Socket } = require('dgram');
const Sockets = require('./sockets');
const cors = require('cors');


class Server {
    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer(this.app);
        // Configuration the socket server
        this.io = socketio(this.server, {});
    }

    execute() {
        this.middlewares();
        this.configurarSockets();
        this.server.listen(this.port, () => {
            console.log('Server run in port:', this.port);
        });
    }

    middlewares() {

        // deploy
        this.app.use(express.static(path.resolve(__dirname , '../public')));
        this.app.use(cors());
    }

    configurarSockets() {
        new Sockets(this.io);
    }
}
module.exports = Server;
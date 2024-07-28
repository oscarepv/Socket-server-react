class Sockets {

    constructor( io) {
        this.io = io;
        this.socketsEvents();
    }

    socketsEvents () {

        this.io.on('connection', (socket) => {
            socket.on('messagetoserver', (data) => {
               console.log(data);
               this.io.emit('messagefromserver',data); 
            });
        });
    }

}

module.exports = Sockets;
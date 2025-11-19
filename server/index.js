import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

console.log(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

// in this listener we will send the message to everyone but the sender you can comment it out if you want to testit out
// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         socket.broadcast.emit('chat message', msg);
//     });
// });

// in this listener everyone will have the message dispayed even the sender
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
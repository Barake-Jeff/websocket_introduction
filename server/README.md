<div>
    <h1><b>Websocket_introduction</b></h1>
</div>

# Basic WebSocket Demo using Socket.IO

This is a small learning project demonstrating how to set up a real-time
communication server using **Node.js**, **Express**, and **Socket.IO**.

The goal of this project is to understand the basics of WebSockets, how
Socket.IO works under the hood, and how a client can communicate with a server
in real time.

---

## 🚀 Features
- Express server with Socket.IO integration  
- Real-time message broadcasting  
- Handling connection and disconnection events  
- Simple frontend client that connects to the server  

---

## 🧰 Tech Stack
- Node.js
- Express
- Socket.IO
- HTML / JavaScript (client)

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Barake-Jeff/websocket_introduction.git
cd websocket_introduction
```

install dependencies:
```bash
npm install
```

## ▶️ Runing the server
```bash
npm start
```

By default, the server runs on:

```bash
http://localhost:3000
```

## How it works

The server is created manually using the Node http module so that the Socket.IO can attach to it:

```bash
const app = express();
const server = createServer(app);
const io = new Server(server);
```

This allows Websocket upgrade requests to be handled properly.
On the client, the browser connects using:

```bash 
const socket = io();
```

## 📁 Project structure
.
|── server/
|   └── index.html
|   └── index.js
|   └── README.md

## 📝 Future improvements
- Add rooms/channels
- Add authentication
- ass typing indicators
- Build a simple chat UI 

## 📚 Learning purpose
This project is meant purely for educational purposes while learning Websockets and real-time applications  with Socket.IO. Anyone is free to explore, fork and experiment with it.

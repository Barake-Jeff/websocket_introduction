import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const app = express();
const server = createServer(app);

console.log(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.send(join(__dirname, 'index.html'));
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
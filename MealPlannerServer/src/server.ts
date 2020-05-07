import http from 'http';
import app from './app';
import "dotenv/config";

const port = process.env.PORT || 3000;
console.log("PORT:", process.env.PORT)

const server = http.createServer(app);

server.listen(port)

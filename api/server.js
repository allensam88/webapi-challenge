const express = require('express');
const server = express();
const cors = require('cors')
server.use(express.json());
server.use(cors());

const projectRouter = require('../routers/projectRouter.js');
const actionRouter = require('../routers/actionRouter.js'); 
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to your projects & actions!</h2>`);
});

module.exports = server;
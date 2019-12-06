const express = require('express');
const server = express();
server.use(express.json());

const projectRouter = require('../routers/projectRouter.js');
const actionRouter = require('../routers/actionRouter.js'); 
server.use('/api/projects', projectRouter);
server.use('/api/actions', projectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Welcom to your projects & actions!</h2>`);
});

module.exports = server;
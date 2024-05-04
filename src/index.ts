require('reflect-metadata');
const express = require('express');
const { router } = require('./routes');
const cors = require('cors');

const server = express();

server.use(cors());

server.use(express.json());
server.use(router);

server.listen(5000, () => {
    console.log('Online');
});

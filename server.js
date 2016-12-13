import config from './config';

import express from 'express';
const server = express();

server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);

})
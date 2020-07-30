import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {

    response.json([
        'Carlos',
        'Rogerio',
        'Bittencourt'
    ])
})

export default routes;
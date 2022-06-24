const express = require('express');
const bodyParser = require('bodyṕarser');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.post('/user', middlewares.createUser);

app.use(middlewares.error);

const PORT = 3000;

app.listen(PORT, () => { console.log(`Ouvindo na ${PORT}`)});

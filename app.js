const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = app;

// Add middleware for handling CORS requests from index.html
app.use(cors());

// Add middleware for parsing request bodies here:
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('.'));

// Mount existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);



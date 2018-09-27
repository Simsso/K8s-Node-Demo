const express = require('express');
const uuidv4 = require('uuid/v4');

const startUUID = uuidv4();
let accessCounter = 0;

const app = express();

app.get('/', (req, res) => {
    res.json({
        uuid: startUUID,
        counter: ++accessCounter,
        version: 'v0.2.0'
    });
});

const port = 80;
app.listen(port);

console.log(`Listening on port ${port}`);
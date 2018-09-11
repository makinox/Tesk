const express = require('express');
const app = express();

app.use(express.static(__dirname + '/pubic'));

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/index.html')
});

app.get('/*', (re, res) => {
    return res.redirect('/')
});

module.exports = app;
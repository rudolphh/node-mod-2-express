const express = require('express');
const data = require('./data/db.json');
const app = express();

const port = 3000;
app.listen(port, (err) => {
    if(err) throw err;
    console.log(`server running on port ${port}`);
});

app.get('/', function(req, res) {
    res.send('hey yo, cool api here');
});

app.get('/movies', function(request, response) {
    response.header('Content-Type', 'application/json');
    response.send(JSON.stringify(data));
});

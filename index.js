const express = require('express');
const data = require('./data/db.json');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.post('/login', (req, res) => {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.json({ "user" : user_name, "password": password});
});

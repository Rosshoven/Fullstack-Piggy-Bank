const express = require('express');
const app = express();
// var cors = require('cors');
const port = 3000;
const path = require('path');



// Serving the static files from my CRA
app.use(express.static(path.join(__dirname, 'build')));
// Home Static files
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// app.use(cors());

// Home
// app.get('/', (req, res) => {
//     res.send('HOME! Where my fridge has pickles, HOME!');
// });

// Create Account
app.get('/account/create/:name/:email/:password', (req, res) => {
    res.send({
        name: req.params.name,
        email: req.params.email,
        password: req.params.password
    });
});

// Login
app.get('/account/login/:email/:password', (req, res) => {
    res.send({
        email: req.params.email,
        password: req.params.password
    });
});

// Deposit
app.get('/deposit', (req, res) => {
    res.send('Deposit');
});

// Withdraw
app.get('/withdraw', (req, res) => {
    res.send('Withdraw');
});

// Balance
app.get('/balance', (req, res) => {
    res.send('Balance');
});

app.get('/all-data', (req, res) => {
    res.send('All Data');
})


// connecting port 
app.listen(port, () => {
console.log(`Porto Porto Porto ${port}`)
  });

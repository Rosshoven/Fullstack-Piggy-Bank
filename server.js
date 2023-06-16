var express = require('express');
var app = express();
const port = 3000;

// const Home = require('./client/src/routes/home');





app.use(express.static('client'));


// Home
app.get('/', (req, res) => {
    res.send('HOME! Where my fridge has pickles, HOME!');
});

// Create Account
app.get('/create-account', (req, res) => {
    res.send('Create Account Form');
});

// Login
app.get('/login', (req, res) => {
    res.send('Login Form');
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

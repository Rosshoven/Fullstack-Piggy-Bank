require("dotenv").config();

// import entire mongoose library - Mongoose is great way to interact with MongoDB
const mongoose = require("mongoose");
const User = require('./models/User.js')

var dal = require('./dal.js')

const express = require('express');
const app = express();
// var cors = require('cors');
const port = 3000;
const path = require('path');

// connect to my localhost mondgodb instance upon starting up the server
mongoose.connect("mongodb://localhost/mybandbankproject", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set('debug', true);



// Serving the static files from my CRA
app.use(express.static(path.join(__dirname, 'client', 'build')));
// Home Static files

// app.use(cors());


// route to create new users - this is an API endpoint.
// Meant for data not for presentation to the user. 
app.get('/account/create/:userName/:email/:password', function (req, res) {
    // create user - should i use the User model here? 
    dal.create(req.params.userName, req.params.email, req.params.password)
    .then((user) => {
        console.log(user);
        res.send(user);
    });
});

// Login route - API endpoint
app.get('/account/login/:email/:password', (req, res) => {
        dal.login(req.params.email, req.params.password)
        .then((user) => {
          if (!user) {
            // Send user the error status
            return res.sendStatus(400);
          }  
          console.log(user);
          res.send(user);
        })
    });



// Post to mongo    
app.post('')


// Deposit
// app.get('/deposit', (req, res) => {
//     res.send('Deposit');
// });

// // Withdraw
// app.get('/withdraw', (req, res) => {
//     res.send('Withdraw');
// });

// // Balance
// app.get('/balance', (req, res) => {
//     res.send('Balance');
// });

// app.get('/all-data', (req, res) => {
//     res.send('All Data');
// })

// catch all-handle all requests if no one else handled it.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// connecting port 
app.listen(port, () => {
console.log(`Port Portt Porttt ${port}`)
  });


// Home
// app.get('/', (req, res) => {
//     res.send('HOME! Where my fridge has pickles, HOME!');
// });

// Create Account
// app.get('/account/create/:name/:email/:password', (req, res) => {
//     res.send({
//         name: req.params.name,
//         email: req.params.email,
//         password: req.params.password
//     });
// });
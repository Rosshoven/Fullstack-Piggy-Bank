require("dotenv").config();

// import entire mongoose library - Mongoose is great way to interact with MongoDB
// const mongoose = require("mongoose");
// const User = require('./models/User.js')

var dal = require('./dal.js')

const express = require('express');
const app = express();
// var cors = require('cors');
const port = process.env.PORT || 3003;
const path = require('path');

// MongoDB Compass connectionstring  from Anthony office hour
// const mongodbConnectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@webdev`

// connect to my localhost mondgodb instance upon starting up the server...redundant solution, happening inside DAL
// mongoose.connect("mongodb://localhost/mybandbankproject", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// mongoose.set('debug', true);



// Serving the static files from my CRA -- 3/20/24 Added 'index.html' to see if that would help deployment on Render, didn't work
app.use(express.static(path.join(__dirname, 'client/build' )));
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
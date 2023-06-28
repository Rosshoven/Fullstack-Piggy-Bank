// dal = data abstraction layer
// Import Mongodb
const MongoClient = require('mongodb').MongoClient;

// const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017';

// I'm getting a db at some point
let db = null;

// const User = require('./models/User')

// connect to Mongo
MongoClient.connect(uri, {useUnifiedTopology: true})
    .then((client) => {
        db = client.db('mybandbankproject');
        console.log('HEY DB HEY DB HEY');
    })
    .catch((err) => { 
        console.log(err);
    })

// create user Account, takes 3 paramteres
function create (userName, email, password) {
    return new Promise((resolve, reject) => {
         // connect to my project database.
        const collection = db.collection("users");
        // create random number for Account number property, or key-value
        let AccountNum  = `${Math.floor(Math.random()*10000)}-${Math.floor(Math.random()*100)}`
        const doc = {userName, email, password, balance: 100, AccountNum };
        collection.insertOne(doc, {writeConcern:1})
        .then(resolve)
    })
}

// Login a user
function login (email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection("users");
        // findOne() is a promise
        collection.findOne({"email": email, "password": password})
        .then(resolve)
        // if (user === null) {
        //     alert('Please Enter A Valid User');
        //     return
        // } else {
        //     resolve
        // }
        // const lgn = {email, password};
        // collection.auth(lgn)
        // .catch(alert('Please Enter A Valid User'));
    })
    
}

// all users
// function all() {
//     return new Promise((resolve, reject) => {
//         const customers = db.collection('users').find({}).toArray(function (err, docs) {
//             err ? reject(err) : resolve(docs);
//         });
//     })
// }

module.exports = {create, login};
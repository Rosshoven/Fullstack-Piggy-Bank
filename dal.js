// dal = data abstraction layer
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
        console.log('HEY DB HEY DB');
    })
    .catch((err) => { 
        console.log(err);
    })

// create user Account, takes 3 paramteres
function create (userName, email, password) {
    return new Promise((resolve, reject) => {
         // connect to my project database.
        const collection = db.collection("users");
        const doc = {userName, email, password, balance: 0};
        // const doc = new User({userName, email, password, balance: 0});
        // doc.save()
        collection.insertOne(doc, {writeConcern:1})
        .then(resolve)
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

module.exports = {create};
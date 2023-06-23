// dal = data abstraction layer
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
// I'm getting a db at some point
let db = null;

// connect to Mongo
// MongoClient.connect(uri, {useUnifiedTopology: true}, function (err, client) {
//     if (err) {
//         console.log(`Not happeninnnn`);
//         } else {
//     console.log('Connected successfully to db server');
//         }
    
//     // connect to my project database
//     // reassign the db to the connection to the db
//     // making the connection and storing the connection
//     db = client.db('mybandbankproject');
//     return

// });
MongoClient.connect(uri, {useUnifiedTopology: true})
    .then((client) => {
        db = client.db('mybandbankproject');
    })
    .catch((err) => { 
        console.log(err);
    })

// create user Account
function create (userName, email, password) {
    return new Promise((resolve, reject) => {
        // db = client.db('mybandbankproject');
         // connect to my project database
        
        const collection = db.collection("users");
        const doc = {userName, email, password, balance: 0};
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
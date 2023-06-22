// const MongoClient = require('mongodb').MongoClient;

// const uri = 'mongodb://localhost:27017';

// MongoClient.connect(uri, {useUnifiedTopology: true}, function (err, client) {
//     if(err) {
//         console.error('Failed to connect to Mongodb', err);
//         return;    
//     }

//     const dbName = `mybandbankproject`;
//     const db = client.db(dbName);
//     console.log('Connected to MongoDB ya stinker');

//     // client.close();
// });

console.log('hi');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log("Hi #2");
     // defining database name
     const dbName = `mybandbankproject`;
     const db = client.db(dbName);

     // insert into customer table
    let collection = db.collection('customers');
    const userName = "Michael";
    const email = "Michael@json.com";
    let doc = {userName, email};
    collection.insertOne(doc, {writeConcern:1}, function (err, result) {
        console.log('Document insert');
    });

    if (err) {
        console.error('Error connecting to MongoDB:');
    } else {
        console.log('Connected to MongoDBBB');
        // client.close();
    }
});



// FROM MOD 27--
// const MongoClient = require('mongodb').MongoClient;

// const uri = 'mongodb://localhost:27017';

// MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client) {
//     console.log('Connected')

    // // defining database name
    // const dbName = `mybandbankproject`;
    // const db = client.db(dbName);

    // // new user
    // let name  = `User${Math.floor(Math.random()*10000)}`;
    // let email = `${name}@mikey.edu`;


    // // insert into customer table
    // let collection = db.collection('customers');
    // let doc = {name, email};
    // collection.insertOne(doc, {writeConcern:1}, function (err, result) {
    //     console.log('Document insert');
    // });

    // // insert user into customer table
    // let customers = db.collection('customers').find().toArray(function(err, docs) {
    //     console.log('Collection:', docs);

    //     // clean up 
    //     client.close();
    // });
//     client.close();
// });
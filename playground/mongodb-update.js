const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
//const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    "use strict";
    if(error){
        return console.log('Unable to connect to mongodb server.')
    }
    console.log('Connected to mongodb server.');

    db.collection('Todos')
        .findOneAndUpdate({
            _id: new ObjectID("582cf1e90160373a57ce0ae1")
        }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((res) => {
        console.log(res);
    });

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID("582cf3ed0160373a57ce0ae3")
        }, {
            $set: {
                name: 'John'
            },
            $inc: {
                age: 1
            }

        }, {
            returnOriginal: false
        }).then((res) => {
        console.log(res);
    });
    //db.close();
});
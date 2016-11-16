const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
//const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    "use strict";
    if(error){
        return console.log('Unable to connect to mongodb server.')
    }
    console.log('Connected to mongodb server.');

    db.collection('Todos').insertOne({
    text: 'Some Text',
        completed: false
    }, (error, result) => {
        if(error){
            return console.log('Unable to insert todo.', error);
        }
        console.log(JSON.stringify(result.ops, undefined, 4));
    });

    //insert new doc into Users (name, age, location) use insertOne
    db.collection('Users').insertOne({
        name: 'John',
        age: 37,
        location: 'Toledo'
    }, (error, result) => {
        if(error){
            return console.log('Unable to insert user.', error);
        }
        console.log(JSON.stringify(result.ops, undefined, 4));
    });
    db.close();
});
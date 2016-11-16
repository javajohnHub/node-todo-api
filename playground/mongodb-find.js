const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
//const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    "use strict";
    if(error){
        return console.log('Unable to connect to mongodb server.')
    }
    console.log('Connected to mongodb server.');

    /*db.collection('Todos').find({
        _id : new ObjectID("582baa44815e816f7172f66d")
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });*/

    /*db.collection('Todos').find().count().then((count) => {
        console.log('Todos');
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });*/
    db.collection('Users').find({
     name: 'John'
     }).toArray().then((docs) => {
     console.log('Todos');
     console.log(JSON.stringify(docs, undefined, 4));
     }, (err) => {
     console.log('Unable to fetch todos', err);
     });

    //db.close();
});
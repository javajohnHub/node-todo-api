const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
//const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    "use strict";
    if(error){
        return console.log('Unable to connect to mongodb server.')
    }
    console.log('Connected to mongodb server.');

    /*db.collection('Todos').deleteMany({text: 'Some Text' }).then((result) => {
        console.log(result);
    });*/

    /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });*/

    /*db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });*/

    /*db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });*/

    //deletemany with name 'John'
    /*db.collection('Users').deleteMany({name: 'John' }).then((result) => {
        console.log(result);
    });*/

    //deleteOne by ObjectId
    /*db.collection('Users').deleteOne({_id : new ObjectID("582baa118d9c1f6f6ec41372")}).then((result) => {
        console.log(result);
    });*/
    //db.close();
});
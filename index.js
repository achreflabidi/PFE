var express=require('express');
var bodyParser=require('body-parser');
const path = require('path');
var app=express();
var cors =require('cors');
var mongoose =require('mongoose');
var db=require('./db/db');
bcrypt=require('bcrypt');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());
const cnx =(closure)=>{
    return mongodb.connect('mongodb://localhost:27017/projet',(err,client)=>{
        if(err){
            return console.log(err);
        }
        let db =client.db('pfe');
        closure(db);
    });
}
console.log("localhost 5100")
app.listen(5100);
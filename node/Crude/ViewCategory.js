var express=require('express')
var app=express()
var uuid = require("uuid");
var bodyparser=require('body-parser')
var datetime=require('node-datetime')
var connection=require('../Connection/Connection')

app.get('/ViewCategory',(req,res)=>{
    connection.select('*').from('category_table').then(function(result){
        res.json(result)
    })
})
module.exports=app
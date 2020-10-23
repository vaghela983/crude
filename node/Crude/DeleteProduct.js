var express=require('express')
var app=express()
var connection=require('../Connection/Connection')

app.get('/DeleteProduct',(req,res)=>{
    const {id}=req.query
    connection('product_table').where('P_id',id).del().then(function(result){
        res.json('Delete Product sucsess')
    })
 })
 module.exports=app
var express=require('express')
var app=express()
var uuid = require("uuid");
var bodyparser=require('body-parser')
var datetime=require('node-datetime')
var connection=require('../Connection/Connection')

app.get('/ViewProduct',(req,res)=>{
    connection.select('product_table.P_id','product_table.P_name','product_table.P_Qty','product_table.P_Total','product_table.P_Price','product_table.P_Discount','product_table.P_Image','product_table.Add_on','product_table.Modified_on','category_table.Category_name').from('product_table').innerJoin('category_table','product_table.Category_id','category_table.Category_id').then(function(result){
        res.json(result)
    })
    
})
module.exports=app

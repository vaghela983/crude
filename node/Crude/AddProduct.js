var express=require('express')
var app=express()
var uuid = require("uuid");
var bodyparser=require('body-parser')
var datetime=require('node-datetime')
var connection=require('../Connection/Connection')
var dt=datetime.create();
var formate=dt.format('Y-m-d H:M:S');
const cors = require("cors");
const multer = require("multer");
app.use(cors())

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  
    cb(null, './public/Images');
  },
  filename: (req, file, cb) => {
    var filetype = '';
    if(file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if(file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if(file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, 'image-' + Date.now() + '.' + filetype);
  } 
})
  var upload = multer({storage: storage})
  app.use(upload.single('file'))



app.post('/AddProduct',(req,res)=>{
  console.log(formate)
    if(req.file)
    {
      total1=((req.body.Price*req.body.Discount)/100);
      total2=req.body.Price-total1;
     
      connection("category_table").where("Category_name",req.body.Category).select('Category_id').then(function(result){
    
            connection('product_table').insert({P_name:req.body.name,P_Qty:req.body.Qty,Category_id:result[0].Category_id,P_Price:req.body.Price,P_Discount:req.body.Discount+'%',P_Image:'http://localhost:5000/Images/'+req.file.filename,P_Total:total2,Add_on:formate}).then(function(result){
              res.json("Sucessfully Insert")
            })
          })
    }
    else
    {
      total1=((req.body.Price*req.body.Discount)/100);
      total2=req.body.Price-total1;
     
      connection("category_table").where("Category_name",req.body.Category).select('Category_id').then(function(result){
    
            connection('product_table').insert({P_name:req.body.name,P_Qty:req.body.Qty,Category_id:result[0].Category_id,P_Price:req.body.Price,P_Discount:req.body.Discount+'%',P_Total:total2,Add_on:formate}).then(function(result){
              res.json("Sucessfully Insert")
            })
          })
    }

     
   
})

module.exports=app
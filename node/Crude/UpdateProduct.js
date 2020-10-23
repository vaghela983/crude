var express=require('express')
var app=express()
var connection=require('../Connection/Connection')
var datetime=require('node-datetime')
var dt=datetime.create();
var formate=dt.format('Y-m-d H:M:S');
const multer = require("multer");
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

app.post('/UpdateProduct',(req,res)=>{
         
  if(req.file)
  {
      
     total1=((req.body.price*req.body.Discount)/100);
      total2=req.body.price-total1;


        connection('product_table').where('P_id',req.body.id).update({P_name:req.body.name,P_Qty:req.body.Qty,P_Price:req.body.price,P_Discount:req.body.Discount,P_Image:'http://localhost:5000/Images/'+req.file.filename,P_Total:total2,Modified_on:formate}).then(function(result){
            res.json('Update Sucess')
        })
      }
      else
      {
        total1=((req.body.price*req.body.Discount)/100);
      total2=req.body.price-total1;


        connection('product_table').where('P_id',req.body.id).update({P_name:req.body.name,P_Qty:req.body.Qty,P_Price:req.body.price,P_Discount:req.body.Discount,P_Total:total2,Modified_on:formate}).then(function(result){
            res.json('Update Sucess')
        })
      }
    
   
})
module.exports=app
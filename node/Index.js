const cors=require("cors")
var express=require('express')
var app=express()
var server = require('http').Server(app);
var connection=require('./Connection/Connection')
var AddProduct=require('./Crude/AddProduct')
var UpdateProduct=require('./Crude/UpdateProduct')
var ViewProduct=require('./Crude/ViewProduct')
var DeleteProduct=require('./Crude/DeleteProduct')
var ViewCategory=require('./Crude/ViewCategory')
var bodyparser=require('body-parser')

app.use(cors())
app.use(express.static(__dirname+'/public'));


app.post('/AddProduct',AddProduct)
app.post('/UpdateProduct',UpdateProduct)
app.get('/DeleteProduct',DeleteProduct)
app.get('/ViewProduct',ViewProduct)
app.get('/ViewCategory',ViewCategory)


//Check For the Mysql connection with knex js and database
connection.raw("SELECT VERSION()").then(
    (version) => console.log((version[0][0]))
)

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));
module.exports=app;
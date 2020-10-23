var mysql=require('mysql');
const { Model } = require('objection');
const Knex = require('knex');

var connection = Knex({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'dummydatabase'
    },

  })
  
  
module.exports=connection

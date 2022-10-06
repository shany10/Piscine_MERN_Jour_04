const express = require('express');
const app = express();
const config = require('../config.js');
const fs = require('fs');
var sha1 = require('sha1');
var bodyParser = require('body-parser');
app.use(express.json());   
app.use(express.urlencoded());
const { MongoClient } = require("mongodb");


const uri = "mongodb+srv://shany:shany@cluster0.1xqbrsv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function add_user_to_db(login , email , password) {
    try {
      const database = client.db('mern-pool');
      const user = database.collection('users');
      const arr_value = await user.find().limit(1).sort({$natural:-1}).toArray();
      id = 1;
      arr_value.forEach(function(value) {
        id = value._id + 1;
      })
      const query = {_id: id , login: login , email: email , password: sha1(password) , type: false }
      await user.insertOne(query);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

app.set('view engine', 'ejs');

app.route('/register')
  .get((req, res) => {
    res.render('register')
  })
  .post((req, res) => {
    const body = req.body;
    if(body.pwd == body.confirm_pwd) {
        add_user_to_db(body.login , body.email , body.pwd);
        res.render('home', {login: body.login} )
    }
    else {
      res.render('register')
    }
  })

app.get('/login', (req, res) => {
    res.render('login');
})

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.listen(config.port, () => {
    
});
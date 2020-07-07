
Drinks = require('./classes/Drinks');
Ingredient = require('./classes/Ingredient');
Burger = require('./classes/Burger');
Bucket = require('./classes/Bucket');
ClassUser = require('./classes/ClassUser');
drink = new Array();
ingredient = new Array();
burger = new Array();
bucket = new Array();
user = new Array();
foundUser = new Array();


var express = require('express');
var bodyParser = require('body-parser');


var app  = express();
var server = require('http').createServer(app);


var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


app.get('/', function(req, res){
  res.render('Index');
});


app.get('/About', function(req, res){
  res.render('About');
});


app.post('/About',urlencodedParser, function(req, res){
  if(!req.body) return res.sendStatus(400);
  console.log(req.body);
  const mysql = require("mysql");

  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "my_db",
    password: ""
  });


  connection.connect(function (err){
    if(err){
      console.log(err);
      return err;
    }else{
      console.log('Database ------> OK!!!!!!');
    }
  });

  let query = "SELECT * FROM users";

  connection.query(query, (err, result, field) => {
    console.log(err);
    console.log(result);
    for(let i = 0; i < result.length; i++){
        user[i] = new ClassUser(result[i].Name,result[i].Secondname ,result[i].Password,result[i].Email,result[i].Phone);
        console.log(user[i].getName());
        if(user[i].getEmail() == req.body.email && user[i].getPassword() == req.body.pass){
          console.log('Naishow/n/n/n/n');
          foundUser = user[i];
          res.render('About-success', {user: user[i]});
          break;
        }else console.log('promah');
    }

  });

});


//app.get('/Drinks/:indexDrinks', function(req, res){
  //drink[req.params.indexDrinks] = new Drinks('Coca-cola',req.params.indexDrinks,req.params.indexDrinks);
  //res.render('Drinks', {drink: drink[req.params.indexDrinks],
    //});
//});
app.get('/:Categor', function(req, res){
switch(req.params.Categor){
    case "Drinks": {res.render('CategDrinks', {drink: drink});
    break;
    }
    case "Burger":{res.render('Burger',{burger: burger});
    break;
    }
    case "Ingredient": {res.render('Ingredient', {ingredient: ingredient});
    break;
    }
    case "Profile": {res.render('Profile', {user: foundUser});
    break;
    }
    case "Bucket": {res.render('Bucket', {bucket: bucket});
    break;
    }
    default: {
      res.sendFile(__dirname + "/404.html");
    }
  }
});

server.listen(3305);

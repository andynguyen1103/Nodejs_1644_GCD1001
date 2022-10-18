var express = require('express');
var router = express.Router();
var authen = require('../models/authenticator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//POST process
router.post('/',function(req, res, next){
  res.render('login', {title: "ATN SHOP"})
});

router.post('/login',function(req, res, next){
  let username = req.body.username;
  let password = req.body.password;
  let authenticated = authen(username,password)
  if(authenticated==true)
  {
    res.render('users', {title: "logged in"});
  }
  else{
    res.render('login', {title: "ATN SHOP"});
  }
  
});

module.exports = router;

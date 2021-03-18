const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;
var db = require('../services/db.js');
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
app.set('views', path.join(__dirname, 'views'));
app.use(cors());


app.post('/auth/register', (req,res,next) => {
  const { body : { name, password }}  = req;
  db.query('insert into user  set ?', {'name': name,'password':password},(err, rows)=> {
    if (err) throw err;
  });
  res.send(req.body);
});

app.get('/auth/login', (req,res,next) => {
  const { body : { name, password }}  = req;
  db.query('select * from  user where name = ? and password = ?', [name,password], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post('/write/articles', (req,res,next) => {
  const { body: { title,
    content: description,
    imageUrl: imageUrl,
    timestamp: timestamp } }  = req;
  db.query('insert into articles  set ?', {'title': title,'description':description, 'imageUrl':imageUrl, 'timestamp':timestamp},(err, rows)=> {
    if (err) throw err;
    res.send(req.body);
  });
});

app.get('/articles', (req,res,next) => {
  db.query('select * from  articles', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
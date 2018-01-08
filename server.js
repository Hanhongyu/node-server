const  uesrApi =require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With,yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'GET', 'DELETE', 'OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
})

app.use('/api/user',uesrApi);

app.listen(3000);
console.log('success listen at port:3000 ......')
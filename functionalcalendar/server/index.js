var con = require('mysql');
var cors = require('cors');
var express = require('express');
var app = express();
var con = require('./conn')
var bodyParser = require('body-parser');
const { query } = require('express');
const { redirect } = require('express/lib/response');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get('/', function(req, res){
    res.send('Hello, world!');
})

app.post('/', function(req, res){
    console.log(req.body.name, req.body.password);
    const sql = `INSERT INTO users (username, password) VALUES ('${req.body.name}', '${req.body.password}')`;
    con.query(sql, (err,result) => {
        if(err)
        {
            console.log(err);
        }

        else{
            console.log('${req.body.name}');
            console.log(result);
            res.send(result);
        }
    })    
})
app.post('/login', (req, res) => {

    const query = `SELECT * FROM users  WHERE username='${req.body.name}'  AND password='${req.body.password}'`;
    con.query(query, (err, result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(`login successful`);
            console.log(result);
            res.send(result);
        }
    })

})


app.post('/addappointment',(req,res)=>{
    let description = req.body.description;
    let date = req.body.date;
    let time = req.body.time;
    let user = req.body.user;
    
    let data = [date,time,description,user]
    let query = `INSERT INTO appointment(date,time,description,user) VALUES ("${req.body.date}","${req.body.time}","${req.body.description}","${req.body.user}")`;
    con.query(query, (err, result) => {
        if(err){
            console.log(err);
            console.log("failed to book the appointment");
        }
        else
        {
            res.send(result)
            console.log("appointment booked successfully");
        }
    })


})


app.post('/showappointment',(req,res)=>{
    let query = `SELECT * FROM appointment WHERE user="${req.body.user}"`;

    con.query(query,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result)
        }
    })
})

app.listen(3002)
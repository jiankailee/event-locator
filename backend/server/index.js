const express=require('express');
const cors= require('cors');
const mysql=require('mysql');

const app=express();

const selectAll ='SELECT * FROM usersInfo;';
const allevents ='SELECT * FROM event';

var server = require('http').createServer(express);
var io = require('socket.io')(server);
server.listen(3000);

const connection=mysql.createConnection({
    host:'proj309-tg-07.misc.iastate.edu',  //change to localhost in server
    user:'team1',
    password:'1234Qwe!',
    database:'309project'

});
connection.connect(err=>{
    if(err){
        return err;
    }
});

console.log(connection);
app.use(cors());

app.get('/',(req,res)=>{
    res.send('go to/usersInfo to see user');
});
app.get('/usersInfo/add',(req,res)=>{
    const {username,password,email,address}=req.query;
    const insertUser=`insert into usersInfo(username,password,email,address) values('${username}' ,'${password}','${email}','${address}')`;
    connection.query(insertUser,(err,results)=>{
        if(err){
            return res.send(err);
        }else{
            res.send('sucessfully added products');
        }
    });
    //console.log(user,password,email,address);
    //res.send('adding products')
});
app.get('/usersInfo',(req,res)=>{
     //res.send("in usersInfo");
    connection.query(selectAll,(err,results)=>{
        if(err){
            return res.send(err);
        }else{
            return res.json({
                data:results
            })
        }
     });
});
app.get('/events',(req,res)=>{
     //res.send("in usersInfo");
    connection.query(allevents,(err,results)=>{
        if(err){
            return res.send(err);
        }else{
            return res.json({
                data:results
            })
        }
     });
});
let username="";
app.get('/user/find',(req,res)=>{
    console.log(req.query)
    // res.send("in user");
    const {name}=req.query
    console.log(name)
    username=name
    // res.send(name)
    const query= `SELECT * FROM usersInfo WHERE username='${name}'`;
    connection.query(query,(err,results)=>{
        if(err){
            return res.send(err);
        }else{
            return res.json({
                data:results
            })
        }
    })
});
app.get('/user',(req,res)=>{
    const query= `SELECT * FROM usersInfo WHERE username='${username}'`;
   connection.query(query,(err,results)=>{
       if(err){
           return res.send(err);
       }else{
           return res.json({
               data:results
           })
       }
    });
});

app.listen(8080, '0.0.0.0',()=>{
  console.log('Server Listening on 8080');
})

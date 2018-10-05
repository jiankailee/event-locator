const express=require('express');
const cors= require('cors');
const mysql=require('mysql');

const app=express();

const selectAll ='select * from 309project.usersInfo;';

const connection=mysql.createConnection({
    host:'http://proj309-tg-07.misc.iastate.edu',
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
app.listen(5000,()=>{
  console.log('Products server listening on port 4000');
})

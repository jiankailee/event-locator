const express=require('express');
const cors= require('cors');
const mysql=require('mysql');
const socketIO = require('socket.io')
const app=express();
const port = 8080;
const http=require('http')
const selectAll ='SELECT * FROM usersInfo;';
const allevents ='SELECT * FROM event';

const server=http.createServer(app)
const io=socketIO(server)

const connection=mysql.createConnection({
    host:'proj309-tg-07.misc.iastate.edu',  //change to localhost in server //
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
            res.send('sucessfully added user');
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
app.get('/events/add',(req,res)=>{
    
    // console.log(req.query)
    const {eventname,latitude,longitude,address,description,endtime,starttime}=req.query;
    const insertEvent=`insert into event(eventName,longitude,latitude,address,description,starttime,endtime) values('${eventname}' ,'${longitude}','${latitude}','${address}','${description}','${starttime}','${endtime}')`;
    connection.query(insertEvent,(err,results)=>{
        if(err){
            return res.send(err);
        }else{
            res.send('sucessfully added event');
        }
    });
    // console.log(eventname,latitude,longitude,address,description,endtime,starttime);
    //res.send('adding products')
});
app.get('/privateevents',(req,res)=>{
    //res.send("in usersInfo");
   connection.query('SELECT * FROM privateEvent',(err,results)=>{
       if(err){
           return res.send(err);
       }else{
           return res.json({
               data:results
           })
       }
    });
});
app.get('/privateevents/add',(req,res)=>{
    
    // console.log(req.query)
    const {eventname,latitude,longitude,address,description,endtime,starttime}=req.query;
    const insertEvent=`insert into privateEvent(eventName,longitude,latitude,address,description,starttime,endtime) values('${eventname}' ,'${longitude}','${latitude}','${address}','${description}','${starttime}','${endtime}')`;
    connection.query(insertEvent,(err,results)=>{
        if(err){
            return res.send(err);
        }else{
            res.send('sucessfully added privateEvent');
        }
    });
    // console.log(eventname,latitude,longitude,address,description,endtime,starttime);
    //res.send('adding products')
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
io.on('connection',socket=>{
    socket.on('message',(body,name)=>{
        socket.broadcast.emit('message',{
            body,
            from:name
            
        })
        console.log(name)
        console.log("body: "+body)
    })
    console.log('a user connected')
})
server.listen(8080, '0.0.0.0',()=>{
  console.log('Server Listening on 8080');
})

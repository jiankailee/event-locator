const express=require('express')
const http=require('http')
const bodyParser=require('body-parser')
const socketIo=require('socket.io')
const cors= require('cors')

const app=express()
const server=http.createServer(app)
const io=socketIo(server)
app.get('/',(req,res)=>{
    res.send('go to/usersInfo to see user');
});

server.listen(3000,()=>{
    console.log(3000)
})



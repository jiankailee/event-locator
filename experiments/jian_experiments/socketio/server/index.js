const express=require('express')
const http=require('http')
const bodyParser=require('body-parser')
const socketIo=require('socket.io')
const cors= require('cors')

const app=express()
const server=http.createServer(app)
const io=socketIo(server)
app.get('/',(req,res)=>{
    res.send('hello');
});
// app.use(express.static(__dirname+'/public'))
io.on('connection',socket=>{
    socket.on('message',body=>{
        socket.broadcast.emit('message',{
            body,
            from:socket.id.slice(5)
        })
       
        console.log("body: "+body)
    })
    console.log('a user connected')
})
server.listen(8080,()=>{
    console.log(8080)
})



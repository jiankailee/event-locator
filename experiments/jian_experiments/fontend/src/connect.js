const express=require('express');
const cors= require('cors');
const mysql=require('mysql');

const app=express();

const selectAll ='select * from event.product;';

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'06121996jk',
    database:'event'

});
connection.connect(err=>{
    if(err){
        return err;
    }
});

console.log(connection);
app.use(cors());

app.get('/',(req,res)=>{
    res.send('go to/product to see products');
});
app.get('/product/add',(req,res)=>{
    const {user,password}=req.query;
    const insertProduct=`insert into product(user,password) values('${user}' ,'${password}')`;
    connection.query(insertProduct,(err,results)=>{
        if(err){
            return res.send(err);
        }else{
            res.send('sucessfully added products');
        }
    });
    // console.log(user,password);
    //res.send('adding products')
});
app.get('/product',(req,res)=>{
    // res.send("in product");
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
app.listen(4000,()=>{
  console.log('Products server listening on port 4000');
})
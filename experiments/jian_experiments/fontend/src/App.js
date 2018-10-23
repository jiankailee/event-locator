// import React, { Component } from 'react';
// import './App.css';
// import Login from './login';
// import AppBar from './AppBar';
// import Map from './Map';

// var mysql=require('mysql');

// var connection=mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'06121996jk',
//   database:'event'
// });
// connection.connect();

//var express= require('express');


class App extends Component {
  state={
    products:[],
    product:{
      user:'sample',
      password:'qaz'
    }
  }
  componentDidMount(){
    this.getProducts();
  }
  getProducts=_=>{
    fetch('http://localhost:4000/product')
    .then(response=>response.json())
    .then(response=>this.setState({products: response.data}))
    // .then(({data})=>{
    //   console.log(data)
    // })
    // .then({data})=>{
    //   console.log(data)
    // })
    .catch(err=>console.log(err))
  }
  addProduct=_=>{
    const {product}=this.state;
    fetch(`http://localhost:4000/product/add?user=${product.user}&password=${product.password}`)
    // .then(response=>response.json())
    .then(this.getProducts)
    .catch(err=>console.log(err))
  }

  renderProduct= ({product_id,user})=><div key={product_id}>{user}</div>
  render() {
    const {products,product}=this.state;
    return (
      <div className="App">
        <AppBar/>
        <h1>Event Locator</h1>
        <Login/>
        {/* {products.map(this.renderProduct)} */}
        {/* <Map/> */}
        {/* <div>
          <input value={product.user} 
          onChange={e=>this.setState({product:{...product,user:e.target.value}})}/>
          <input value={product.password}
          onChange={e=>this.setState({product:{...product,password:e.target.value}})}/>
          <button onClick={this.addProduct}>Add product</button>
        </div> */}
      </div>
      
    );

  }

}

export default App;

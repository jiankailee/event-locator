import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import login from './login';

// const express=require('express');
// const cors= require('cors');
// const app=express();
// app.use(cors());

// app.listen(3000,()=>{
//   console.log('Products server listening on port 3000');
// })

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

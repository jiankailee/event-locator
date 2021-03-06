import React, { Component } from 'react';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';


class Chat extends Component {
  constructor(props){
    super(props)
    this.state={
      messages:[]
    }
  }
  componentDidMount(){
    this.socket=io('http://proj309-tg-07.misc.iastate.edu:8080')
    this.socket.on('message',message=>{
      this.setState({messages:[message,...this.state.messages]})
    })
  }
  handleSubmit=event=>{
    const body=event.target.value
    if(event.keyCode===13&&body){
      const message={
        body,
        from:this.props.name
      }
      this.setState({messages:[message,...this.state.messages]})
      this.socket.emit('message',body,this.props.name)
      event.target.value=""
    }
  }
  render() {
    const messages=this.state.messages.map((message,index)=>{
      return <div key={index}>{message.from}: <b>{message.body}</b></div>
    })
    console.log(this.props.name)
    return (
      <div>
       <h1>Chat Room</h1>
       <TextField
          id="standard-dense"
          label="Enter a message"
          // className={classNames(classes.textField, classes.dense)}
          margin="dense"
          onKeyUp={this.handleSubmit}
        />
       {/* <input type='text' placeholder='Enter a message' onKeyUp={this.handleSubmit}/> */}
      {messages}
      </div>
    );
  }
}

export default Chat;

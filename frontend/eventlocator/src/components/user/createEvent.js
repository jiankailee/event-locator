import React, { Component } from 'react';

// console.log(window.location.href);


class  CreateEvent extends Component {
  
  
  render() {
    
    return (
      <div>
          <form>
            <label>
                Event Name:
                <input type="text" name="name" />
            </label>
            <label>
                Address:
                <input type="text" name="name" />
            </label>
            <label>
               time:
                <input type="text" name="name" />
            </label>
            <button>create</button>
            </form>
      </div>
     
    );
  }
}

export default CreateEvent;
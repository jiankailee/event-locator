import React from "react";
import { slide as Menu } from 'react-burger-menu'

class Example extends React.Component {
  constructor(props) {
    super(props);
  }
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    let sidebar_item_one,
    sidebar_item_two;
    if (this.props.logged_in) {
      sidebar_item_one = <a id="home" className="menu-item" href="/">My Account</a>
      sidebar_item_two = <a id="about" className="menu-item" href="/about">Create Event</a>
      //<a id="contact" className="menu-item" href="/contact">Contact</a><a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
    }
    else{
      sidebar_item_one = null;
      sidebar_item_two = null;
    }
    return (
      <Menu {...this.props} customBurgerIcon={false} customCrossIcon={false}>
        {sidebar_item_one}
        {sidebar_item_two}
      </Menu>
    );
  }
}

export default Example;
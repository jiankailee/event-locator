import React from "react";
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

class Example extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    page_num_val: 0
  }
  showSettings(event) {
    event.preventDefault();
  }
  closeMenu = () => {
    console.log(this.props)
    this.props.callbackFromParent();
  }
  render() {
    let sidebar_item_one,
    sidebar_item_two,
    sidebar_item_three;
    if (this.props.logged_in) {
      var user_page_string = '/user/' + this.props.username;
      sidebar_item_one = <Link id="account" className="menu-item" onClick={this.closeMenu} to={{pathname: user_page_string, state: {selectedIndex: 1, updatePage: 1}}}>My Account</Link>
      sidebar_item_two = <Link id="account" className="menu-item" onClick={this.closeMenu} to={{pathname: user_page_string, state: {selectedIndex: 2, updatePage: 1}}}>Create Event</Link>
      sidebar_item_three = <Link id="events" className="menu-item" onClick={this.closeMenu} to={{pathname: user_page_string, state: {selectedIndex: 3, updatePage: 1}}}> Events </Link>
      //<button  onClick={this.redirect_page(user_page_string)}>My Events</button>
      //<a id="contact" className="menu-item" href="/contact">Contact</a><a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
    }
    else{
      sidebar_item_one = null;
      sidebar_item_two = null;
      sidebar_item_three = null;
    }
    return (
      <Menu {...this.props} customBurgerIcon={false} customCrossIcon={false}>
        {sidebar_item_one}
        {sidebar_item_two}
        {sidebar_item_three}
      </Menu>
    );
  }
}

export default Example;
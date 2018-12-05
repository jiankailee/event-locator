import React from "react";
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

class Example extends React.Component {
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
    console.log("sidebar: "+this.props.logged_in)
    let sidebar_item_one,
    sidebar_item_two,
    sidebar_item_three,sidebar_item_four,sidebar_item_five,sidebar_item_six,sidebar_item_seven;
    if (this.props.logged_in) {
      var user_page_string = '/user/' + this.props.username;
      sidebar_item_one = <Link id="account" className="menu-item" onClick={this.closeMenu} to={{pathname: user_page_string, state: {selectedIndex: 1, updatePage: 1}}}>My Account</Link>
      sidebar_item_two = <Link id="account" className="menu-item" onClick={this.closeMenu} to={{pathname: user_page_string, state: {selectedIndex: 2, updatePage: 1}}}>Create Public Event</Link>
      sidebar_item_three = <Link id="events" className="menu-item" onClick={this.closeMenu} to={{pathname: user_page_string, state: {selectedIndex: 3, updatePage: 1}}}> Public Events </Link>
      sidebar_item_four = <Link id="chat" className="menu-item" onClick={this.closeMenu} to={{pathname: user_page_string, state: {selectedIndex: 4, updatePage: 1}}}> Chats </Link>
      sidebar_item_five = <Link id="map" className="menu-item" onClick={this.closeMenu} to={{pathname: user_page_string, state: {selectedIndex: 5, updatePage: 1}}}> Maps </Link>
      sidebar_item_six = <Link id="events" className="menu-item" onClick={this.closeMenu} to={{pathname: user_page_string, state: {selectedIndex: 6, updatePage: 1}}}> Create Private Events </Link>
      sidebar_item_seven = <Link id="events" className="menu-item" onClick={this.closeMenu} to={{pathname: user_page_string, state: {selectedIndex: 7, updatePage: 1}}}> Private Events list</Link>
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
        {sidebar_item_four}
        {sidebar_item_five}
        {sidebar_item_six}
        {sidebar_item_seven}
      </Menu>
    );
  }
}

export default Example;
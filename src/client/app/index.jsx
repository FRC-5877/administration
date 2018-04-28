import React from 'react';
import {render} from 'react-dom';
import {MDCRipple} from '@material/ripple';
import MenuComponent from './MenuComponent.jsx';
import DashboardComponent from './DashboardComponent.jsx';
import MailComponent from './MailComponent.jsx';
import LoginComponent from './LoginComponent.jsx';
import {menu} from './js/menu.js';
import {animation} from '@material/animation';
import $ from 'jquery';
import {getUserInfo} from '../api';

const menuItems = [
  {
    name: 'dashboard',
    icon: 'dashboard'
  },
  {
    name: 'mail system',
    icon: 'mail'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    var id = document.cookie.split("=")[1];

    this.state = {
      active: "dashboard",
      userInfo: {date: "", email: "", name: {familyName: "", givenName: ""}, role: 1, _id: 0}
    }

    getUserInfo(id, (err, userInfo) => this.setState({
      userInfo
    }));

    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(button) {
    this.setState({
      active: button
    });
  }

  render () {
    var id = document.cookie.split("=")[1];
    if(id)
      return (
        <div className="content">
          <MenuComponent menuItems={menuItems} page={this.state.active} onPageChange={this.onPageChange}/>
          {this.state.active === "dashboard" ? <DashboardComponent /> : null}
          {this.state.active === "mail system" ? <MailComponent /> : null}
        </div>
      );
    else
      return (
        <LoginComponent />
      );
  }

}

render(<App/>, document.getElementById('app'));
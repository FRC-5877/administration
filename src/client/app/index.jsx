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
import Cookies from 'universal-cookie';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const cookies = new Cookies();

const menuItems = [
  [{
    type: 'page',
    name: 'dashboard',
    icon: 'dashboard',
    url: '/dashboard'
  },
  {
    type: 'page',
    name: 'mail system',
    icon: 'mail',
    url: '/mail'
  }],
  [{
    type: 'action',
    name: 'logout',
    icon: 'power_settings_new'
  }]
];

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      active: "dashboard",
      // userInfo: {date: "", email: "", name: {familyName: "", givenName: ""}, role: 9, _id: 0}
    }

    // getUserInfo(cookies.get('user'), (err, userInfo) => this.setState({
    //   userInfo
    // }));

    this.onPageChange = this.onPageChange.bind(this);
    this.onAction = this.onAction.bind(this);
  }

  onPageChange(page) {
    this.setState({
      active: page
    });
  }

  onAction(action) {
    switch (action) {
      case 'logout':
        cookies.remove('user');
        this.setState({loggedIn: false, userInfo: {}});
        break;
    
      default:
        break;
    }
  }

  render () {
    return (
      <div className="content">
        <MenuComponent menuItems={menuItems} page={this.state.active} onPageChange={this.onPageChange} onAction={this.onAction}/>
        <Route exact path="/" component={DashboardComponent} />
        <Route path="/dashboard" component={DashboardComponent} />
        <Route path="/mail" component={MailComponent} />
      </div>
    );
  }

}

render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));
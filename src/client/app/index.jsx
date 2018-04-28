import React from 'react';
import {render} from 'react-dom';
import {MDCRipple} from '@material/ripple';
import MenuComponent from './MenuComponent.jsx';
import MainComponent from './MainComponent.jsx';
import LoginComponent from './LoginComponent.jsx';
import {menu} from './js/menu.js';
import {animation} from '@material/animation';
import $ from 'jquery';

class App extends React.Component {

  render () {
    if(localStorage.getItem('user'))
      return (
        <div className="content mdc-toolbar-fixed-adjust">
          <MenuComponent />
          <MainComponent />
        </div>
      );
    else
      return (
        <LoginComponent />
      );
  }
}

render(<App/>, document.getElementById('app'));
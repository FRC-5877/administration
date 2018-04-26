import React from 'react';
import {render} from 'react-dom';
import {MDCRipple} from '@material/ripple';
import MenuComponent from './MenuComponent.jsx';
import {menu} from './js/menu.js';
import {animation} from '@material/animation';
import $ from 'jquery';

class App extends React.Component {
  render () {
    return (
      <MenuComponent />
    );
  }
}

render(<App/>, document.getElementById('app'));
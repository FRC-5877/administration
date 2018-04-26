import React from 'react';
import {render} from 'react-dom';
import {MDCRipple} from '@material/ripple';
import MenuComponent from './MenuComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <MenuComponent />
    );
  }
}

render(<App/>, document.getElementById('app'));
import React from 'react';

class MenuComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="mdc-drawer mdc-drawer--permanent">
        <div className="mdc-layout-grid">
          <div className="mcd-layout-grid__inner">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-text">
              <img src="images/logos/shark.svg" alt="Mechalodons" width="100%"/>
            </div>
          </div>
        </div>
        <div className="mdc-list-group">
          <nav className="mdc-list">
            <a className="mdc-list-item demo-drawer-list-item mdc-list-item--selected" href="#">
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">dashboard</i>Dashboard
            </a>
            <a className="mdc-list-item demo-drawer-list-item" href="#">
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">mail</i>Email System
            </a>
          </nav>
          
          {/* <hr className="mdc-list-divider" />

          <nav className="mdc-list">
            <a className="mdc-list-item demo-drawer-list-item" href="#">
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">email</i>All Mail
            </a>
            <a className="mdc-list-item demo-drawer-list-item" href="#">
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">delete</i>Trash
            </a>
            <a className="mdc-list-item demo-drawer-list-item" href="#">
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">report</i>Spam
            </a>
          </nav> */}
        </div>
      </nav>
    );
  }

}

export default MenuComponent;
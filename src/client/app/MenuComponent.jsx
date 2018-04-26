import React from 'react';

class MenuComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <app-menu>
        <header id="topAppBar" className="mdc-top-app-bar">
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <a href="#" className="material-icons mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded">menu</a>
              <span className="mdc-top-app-bar__title">San Francisco, CA</span>
            </section>
            <section id="iconSection" className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
              <a href="#" id="right-item" className="material-icons mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Download" alt="Download">file_download</a>
            </section>
          </div>
        </header>
        <aside className="mdc-drawer mdc-drawer--temporary">
          <nav className="mdc-drawer__drawer">
            <header className="mdc-drawer__header">
              <div className="mdc-drawer__header-content mdc-theme--on-primary mdc-theme--primary-bg">
                Header here
              </div>
            </header>
            <nav className="mdc-drawer__content mdc-list-group">
              <div className="mdc-list">
                <a href="/" className="mdc-list-item " data-mdc-tabindex-handled="true" tabIndex="-1">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true"></i>Back
                </a>
                <a className="mdc-list-item" href="#" data-mdc-tabindex-handled="true" tabIndex="-1">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>Star
                </a>
                <a className="mdc-list-item" href="#" data-mdc-tabindex-handled="true" tabIndex="-1">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>Sent Mail
                </a>
                <a className="mdc-list-item" href="#" data-mdc-tabindex-handled="true" tabIndex="-1">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>Drafts
                </a>
              </div>

              <hr className="mdc-list-divider" />

              <div className="mdc-list">
                <a className="mdc-list-item" href="#" data-mdc-tabindex-handled="true" tabIndex="-1">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">email</i>All Mail
                </a>
                <a className="mdc-list-item" href="#" data-mdc-tabindex-handled="true" tabIndex="-1">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">delete</i>Trash
                </a>
                <a className="mdc-list-item" href="#" data-mdc-tabindex-handled="true" tabIndex="-1">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">report</i>Spam
                </a>
              </div>
            </nav>
          </nav>
        </aside>
      </app-menu>
    );
  }

}

export default MenuComponent;
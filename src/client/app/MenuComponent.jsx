import React from 'react';

class MenuComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="mdc-top-app-bar">
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a href="#" className="material-icons mdc-top-app-bar__navigation-icon">menu</a>
            <span className="mdc-top-app-bar__title">Title</span>
          </section>
        </div>
      </header>
    );
  }

}

export default MenuComponent;
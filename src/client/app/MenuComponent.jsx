import React from 'react';
import {getRandomWholeNumber} from './Helpers';
import { Link } from 'react-router-dom';

class MenuComponent extends React.Component {

  constructor(...props) {
    super(...props);

    this.pageClick = this.pageClick.bind(this);
    this.actionClick = this.actionClick.bind(this);
  }

  pageClick(itemName) {
    this.props.onPageChange(itemName);
  }

  actionClick(itemName) {
    this.props.onAction(itemName);
  }

  render() {
    return (
      <nav className="mdc-drawer mdc-drawer--permanent menu">
        <div className="mdc-layout-grid">
          <div className="mcd-layout-grid__inner">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-text">
              <img src="images/logos/shark.svg" alt="Mechalodons" width="100%"/>
            </div>
          </div>
        </div>
        <div className="mdc-list-group">
          {this.props.menuItems.map((menuSet, index) => 
            {
              var r = [];

              r.push(
                <nav key={getRandomWholeNumber()} className="mdc-list">
                  {menuSet.map((menuItem, index)=> {
                    // if(menuItem.type === "page")
                    //   return <a key={getRandomWholeNumber()} onClick={() => this.pageClick(menuItem.name)} className={this.props.page === menuItem.name ? 'mdc-list-item caps mdc-list-item--selected' : 'mdc-list-item caps'} href="#" >
                    //     <i className="material-icons mdc-list-item__graphic" aria-hidden="true">{menuItem.icon}</i>{menuItem.name}
                    //   </a>
                    // else if(menuItem.type == 'action')
                    //   return <a key={getRandomWholeNumber()} onClick={() => this.actionClick(menuItem.name)} className={this.props.page === menuItem.name ? 'mdc-list-item caps mdc-list-item--selected' : 'mdc-list-item caps'} href="#" >
                    //     <i className="material-icons mdc-list-item__graphic" aria-hidden="true">{menuItem.icon}</i>{menuItem.name}
                    //   </a>
                    if(menuItem.type === "page")
                      return <div key={getRandomWholeNumber()} className={this.props.page === menuItem.name ? 'mdc-list-item caps mdc-list-item--selected' : 'mdc-list-item caps'} >
                        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">{menuItem.icon}</i><Link to={menuItem.url}>{menuItem.name}</Link>
                      </div>
                      // return <li key={getRandomWholeNumber()}><Link to={menuItem.url}>{menuItem.name}</Link></li>
                    else if(menuItem.type == 'action')
                      return <a key={getRandomWholeNumber()} onClick={() => this.actionClick(menuItem.name)} className={this.props.page === menuItem.name ? 'mdc-list-item caps mdc-list-item--selected' : 'mdc-list-item caps'} >
                        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">{menuItem.icon}</i>{menuItem.name}
                      </a>

                  })}
                </nav>
              );
                
              if(this.props.menuItems.length-1 > index)
                r.push(<hr key={getRandomWholeNumber()} className="mdc-list-divider" />);
              
              return r;
            }
          )}
        </div>
      </nav>
    );
  }

}

export default MenuComponent;
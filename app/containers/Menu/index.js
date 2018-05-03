/**
 *
 * Menu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Logo from 'images/logo/shark-240.png';
import makeSelectMenu from './selectors';
import reducer from './reducer';
import saga from './saga';
import { makeSelectLocation } from '../App/selectors';


export class Menu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    console.info('Menu Did Mount');
    console.log(this.props);
  }

  render() {
    return (
      <nav className="mdc-drawer mdc-drawer--permanent">
        <div className="mdc-layout-grid">
          <div className="mcd-layout-grid__inner">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-text">
              <img src={Logo} alt="Mechalodons" width="100%" />
            </div>
          </div>
        </div>
        <div className="mdc-list-group">
          <nav className="mdc-list">
            {
              this.props.menuItems.map((menuItem) => (
                <a key={menuItem.id} to={menuItem.link} className={this.props.location.pathname === menuItem.link ? 'mdc-list-item caps mdc-list-item--selected' : 'mdc-list-item caps'} href={menuItem.link ? menuItem.link : ''} >
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">{menuItem.icon}</i>{menuItem.name}
                </a>
              ))
            }
          </nav>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  menu: makeSelectMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'menu', reducer });
const withSaga = injectSaga({ key: 'menu', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Menu);

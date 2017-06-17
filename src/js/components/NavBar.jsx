import React from 'react';
import css from '../../../public/css/main.scss';

/**
 * @function
 * @param
 */
export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="brown">
          <div className="nav-wrapper">
            <a href="index.html" className="brand-logo">News App</a>
            <a href="index.html" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a className="waves-effect waves-light btn teal" href="#modal1">Logout</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a className="waves-effect waves-light btn teal" href="#modal1">Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

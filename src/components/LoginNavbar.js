import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
//import logo from '../../img/logo.png'

class Navbar extends Component {
  onLogoutClick(evt) {
    evt.preventDefault();
    
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="/" onClick={ this.onLogoutClick.bind(this) }>
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/registerWorker">
            Register Worker
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/registerManager">
            Register Manager
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/loginWorker">
            Login Worker
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/loginManager">
            Login Manager
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://previews.123rf.com/images/tilo/tilo1212/tilo121200004/16829339-transparent-blue-soap-bubbles-over-white-background.jpg"
              style={{ width: '200px', margin: 'auto', display: 'block' }}
              alt="Loading..."
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? authLinks : ""}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {logout})(withRouter(Navbar));

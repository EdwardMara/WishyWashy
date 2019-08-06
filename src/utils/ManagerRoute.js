import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ManagerRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (auth.isAuthenticated === true && auth.isManager === true) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/loginManager" />
      )
    }
  />
);

ManagerRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ManagerRoute);

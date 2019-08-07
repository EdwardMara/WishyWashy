import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const WorkereRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (auth.isAuthenticated === true && auth.isWorker === true) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/loginWorker" />
      )
    }
  />
);

WorkereRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(WorkereRoute);
